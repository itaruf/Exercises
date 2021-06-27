import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;

import org.opencv.core.*;
import org.opencv.highgui.HighGui;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.imgproc.Imgproc;

@SuppressWarnings("unused")
class Processing {
    @SuppressWarnings("unused")
    
    public static double rapport;
    
	public static ImageIcon run(String numero) {
    	
    	nu.pattern.OpenCV.loadLocally();
    	
    	String filename = "Base/" + numero + ".jpg";

        Mat src = Imgcodecs.imread(filename, Imgcodecs.IMREAD_GRAYSCALE);

        Mat matriceOriginaleAvecTrait = Imgcodecs.imread(filename, Imgcodecs.CV_LOAD_IMAGE_COLOR);
        if (src.empty()) {
            System.out.println("Error opening image!");
            System.out.println("Program Arguments: [image_name -- default "+ filename +"] \n");
            System.exit(-1);
        }
        

        Mat dst = new Mat();
        
    	Imgcodecs imageCodecs = new Imgcodecs();
    	
		File path = new File(filename);
		BufferedImage img = loadImage(path);
        
		filename = contrast(filename); // filtre de contraste
		
		filename = sharpen(filename); // filtre d'affatuage
		
        filename = sobel(filename); // filtre de Sobel
		
		filename = median(filename); //filtre median
		
        filename = binary(filename);	//Binarisation de l'image	
		
		filename = erosion(filename);	//Erosion de l'image	
		
        src = Imgcodecs.imread(filename, Imgcodecs.IMREAD_GRAYSCALE);
        dst = new Mat();
        
		filename = hough(dst, src, filename);
		
        src = Imgcodecs.imread(filename, Imgcodecs.IMREAD_GRAYSCALE);
        
		
        //ArrayList qui représente toutes les lignes qui ne détiennent que du blanc après la transformation de HOUGH
		//Si la ligne est reconnu par Hough (donc mise en blanche) alors elle est mise à 1 dans l'ArrayList sinon elle est à 0 dans l'ArrayList, l'index 
		List<Integer> ligneComplete = new ArrayList<Integer>();
		ligneComplete = reconnaissanceLigneBlanche(src);
		
		
		//ArrayList qui stocke la ligne du haut du verre, le niveau de l'eau  et le bas du verre
		List<Integer> listeLigneMilieuBloc = new ArrayList<Integer>();
		listeLigneMilieuBloc = reconnaissanceZones(ligneComplete, src);
		
		//On récupère le le pourcentage de remplissage du niveau de l'eau
		rapport = calculRapport(listeLigneMilieuBloc);
		
		//Matrice de l'image originale avec les traits sur les différentes zones qui sont le haut du verre, le niveau de l'eau et le bas du verre
		matriceOriginaleAvecTrait = originaleTrace(listeLigneMilieuBloc, matriceOriginaleAvecTrait).clone();
		
		String OriginalAvecTrait = "images/ImageOriginaleAvecNiveauxTraces.jpg";
		Imgcodecs.imwrite(OriginalAvecTrait,matriceOriginaleAvecTrait);

        
        return converti(matriceOriginaleAvecTrait);
        
    }
	
	
	/*
	 *Fonction qui retourne une ArrayList où chaque indice est une ligne de l'image.
	 *La valeur qui lui correspond est 1 si la ligne est blanche ou 0 si la ligne noire.
	 */
	public static List<Integer> reconnaissanceLigneBlanche(Mat src){
		List<Integer> ligneComplete = new ArrayList<Integer>();
		for (int i =  0; i < src.size().height; i++) {	//On check chaque ligne
			int nbPixelBlanc = 0;
			boolean ligneRemplie = true;	//Boolean qui valide si oui ou non la ligne est remplie
	        for(int j = 0; j< src.size().width/4;j++) {	//Check le quart de la ligne
	        	if(src.get(i, j)[0]<240) {     		
	        		ligneRemplie = false;
	        	}
	        }
        	if(ligneRemplie == true) {	//Si la ligne est remplie alors on met la valeur du tableau à l'indice i à 1.
    		nbPixelBlanc=1;	
        	}
	        ligneComplete.add(nbPixelBlanc);	//On met à 1 les lignes qui ont des pixels blancs sur le quart de la ligne
		}	
		return ligneComplete;	
	}
	
	
	/*
	 * Fonction de reconnaisances des trois zones qui sont le haut du verre, le niveau de l'eau et le bas du verre
	 * Retourne une ArrayList qui a pour une première valeur le haut verre, deuxième valeur le niveau de l'eau et troisième valeur le bas du verre
	 */
	public static List<Integer> reconnaissanceZones(List<Integer> ligneComplete, Mat src) {
		
		//Dans un premier temps on réduit les bloc de lignes blanches en ne conservant que les lignes du mileu de chaque bloc
		
		int NbDeLigneMilieuBLoc = 0;	//Le nombre de ligne après que l'on n'est réduit chaque bloc à une ligne, ca correspond donc aussi au nombre de bloc 
		List<Integer> listeLigneMilieuBloc = new ArrayList<Integer>();	//ArrayList qui ne garde que les lignes au milieur de chaque bloc blanc puis qui va garder  
																		//seulement 3 lignes dans la deuxième partie de la méthode
		for (int i =  0; i < src.size().height; i++) {	//On check chaque ligne
			if(ligneComplete.get(i)==1) {	//Si une ligne est blanche
				int premierLigneBloc = i;	//Premier ligne blanche du bloc actuel blanc
				int dernierLigneBloc = i;	//Dernière ligne blanche du bloc actuel blanc
				
				for(;ligneComplete.get(i)==1;i++) {	//On check si les suivantes sont blanches		
					dernierLigneBloc = i;	///Dernière ligne blanche du bloc actuel blanc prend la nouvelle valeur de i 
				}
				
				//Calcul de la ligne moyenne du bloc
				int ligneMilieuBloc = (premierLigneBloc + dernierLigneBloc)/2;
				listeLigneMilieuBloc.add(ligneMilieuBloc);
				
				for(int j = premierLigneBloc; j<=dernierLigneBloc; j++) {	//On garde seulement la ligne au milieu du bloc et on met les autres à 0.
					if(j != ligneMilieuBloc) {	//On met toutes les lignes à 0 sauf celle qui au milieu du bloc
						ligneComplete.set(j, 0);
					}
				}
			}
		}
		
		
		//Réduction du nombre de ligne à 3.
		//Si deux lignes sont plus proches entre elles qu'entres les autres alors elles font parti de la même zone
		//Les zones sont 
		//	-le haut du verre
		//	-le niveau de l'eau
		//	-Le bas du verre
		//Entre les lignes les plus proches on prend la ligne la plus basse car ca correspond à la partie de face de l'image
		
		int plusPetiteDistance;	//La plus distance est initialisée avec la ligne blanche la plas basse de l'image (avec la valeur la plus grande)
		int ligneAEnlever = 0;	//La ligne qui va être enlevee dans ligneComplete
		int ligneAEnlever2 = 0;	//La ligne qui va être enlevee dans listeLigneMilieuBloc
		
		if(listeLigneMilieuBloc.size()<3) {
			listeLigneMilieuBloc.clear();
			listeLigneMilieuBloc.add(1);
			listeLigneMilieuBloc.add(1);
			listeLigneMilieuBloc.add(1);
		}
		else {
			while(listeLigneMilieuBloc.size() > 3) {
				plusPetiteDistance = listeLigneMilieuBloc.get(listeLigneMilieuBloc.size()-1);	//On initialise la plus petite distance avec la ligne blanche la plus basse de l'image)
				for(int i = 0 ; i<listeLigneMilieuBloc.size()-1 ; i++) {	//On regarde quelle est la plus distance entre toutes les lignes blanches (sans regarder la dernière)
					if(plusPetiteDistance >= (listeLigneMilieuBloc.get(i+1)-listeLigneMilieuBloc.get(i))) {
						plusPetiteDistance = (listeLigneMilieuBloc.get(i+1)-listeLigneMilieuBloc.get(i));
						ligneAEnlever = listeLigneMilieuBloc.get(i);	//On stocke la ligne à enlever
						ligneAEnlever2 = i;	//On stocke la ligne à enlever
					}
				}	
				ligneComplete.remove(ligneAEnlever);
				listeLigneMilieuBloc.remove(ligneAEnlever2);
			}
		}
		return listeLigneMilieuBloc;
	}
	
    
	
	/*
	 * Fonction qui calcul le le pourcentage de remplissage du niveau de l'eau
	 */
    public static double calculRapport(List<Integer> listeLigneMilieuBloc) {
		//Affichage des lignes de milieu de bloc
		System.out.println("Emplacement des lignes des différentes zones (en partant du haut de l'image) : ");
		System.out.println("Haut du verre : "+ listeLigneMilieuBloc.get(0));
		System.out.println("Niveau d'eau : "+listeLigneMilieuBloc.get(1));
		System.out.println("Bas du verre : "+listeLigneMilieuBloc.get(2));
    	
    	//Récupération des différentes zones et mise en place du pourcentage.
		//La première valeur du tableau est le haut du verre
		//La seconde valeur est le niveau de l'eau 
		//La troisième est le bas du verre
    	int hauteurVerre = listeLigneMilieuBloc.get(2) - listeLigneMilieuBloc.get(0);
		int hauteurEau = listeLigneMilieuBloc.get(2) - listeLigneMilieuBloc.get(1);
		if(hauteurVerre==0) {
			rapport = 0;
		}
		else {
			rapport = (hauteurEau * 100 )/hauteurVerre;	
		}

		System.out.println("Le pourcentage de remplissage d'eau est le suivant : "+rapport+"%" );
		System.out.println();
		
		return rapport;
		
    }
    
    
    /*
     * Fonction qui retourne la matrice de l'image originale avec les traits sur les différentes zones qui sont le haut du verre, le niveau de l'eau et le bas du verre
     */
    public static Mat originaleTrace(List<Integer> listeLigneMilieuBloc, Mat srcSecond) {
    	//Tracage des différents zones sur l'image image

		int ligne = srcSecond.rows(); //Le nombre de lignes
		int colonne = srcSecond.cols(); //Le nombre de colonnes
		int ch = srcSecond.channels(); //Le nombre de channels (Grayscale: 1, RGB: 3, etc.)

		for (int i=0; i<ligne; i++)
		{
			if(i==listeLigneMilieuBloc.get(0)||i==listeLigneMilieuBloc.get(1)||i==listeLigneMilieuBloc.get(2)) {	//Si i est une ligne blanche alors on colorie toute la ligne
        		for (int j=0; j<colonne; j++){
			        double[] data = srcSecond.get(i, j); //Recupere la veleur du pixel dans un tableau
			        for (int k = 0; k < ch; k++) //Pour chaque channels (si c'est gris = 1 ou en RGB = 3)
			        {
			        	data[k] = 0; //On modifie la valeur du pixel on le met en blanc					
			        }
			        srcSecond.put(i, j, data); //On met la nouvelle valeur de chaque pixel dans la matrice
			    }
        	}   
		}
    	return srcSecond;
    }
    
    
    public static ImageIcon converti(Mat m) { 
		
		BufferedImage image = null;
		MatOfByte matOfByte = new MatOfByte();
		
		Imgcodecs.imencode(".jpg", m, matOfByte); 
		byte[] byteArray = matOfByte.toArray();
		InputStream in = new ByteArrayInputStream(byteArray);
		
		try {
			image = ImageIO.read(in);
		} catch (IOException e) {
			e.printStackTrace();
		}
	    
		ImageIcon icon = new ImageIcon(image);
		
		return icon;
	    
	
	}    
    
    public static String median(String filename) {
    	
    	Mat src = Imgcodecs.imread(filename, Imgcodecs.CV_LOAD_IMAGE_COLOR);
    	Mat dst = new Mat(src.rows(), src.cols(), src.type());
    	
        Imgproc.medianBlur(src, dst, 3);

    	String file = "images/median.jpg";
    	Imgcodecs.imwrite(file, dst);
 	    //HighGui.imshow("Filtre mÃ©dian", dst);
 	    
    	return(file);
    }
    
    public static String binary(String filename) {
    	
    	 Mat src = Imgcodecs.imread(filename, Imgcodecs.IMREAD_GRAYSCALE);
         Mat destination = new Mat();
         
         Imgproc.threshold(src, destination, 0, 255, Imgproc.THRESH_BINARY | Imgproc.THRESH_OTSU); // Grayscale image binarization
         
         String file = "images/binary.jpg";
         Imgcodecs.imwrite(file, destination);
         //HighGui.imshow("Image binarisÃ©e", destination);
         
		return (file);  
    }
    
    public static String contrast(String filename) {
    	
	    Mat source = Imgcodecs.imread(filename, Imgcodecs.CV_LOAD_IMAGE_COLOR);
        Mat destination = new Mat(source.rows(),source.cols(),source.type());
	    
        source.convertTo(destination, -1, 1, -50);
        
        String file = "images/contrast.jpg";
	    Imgcodecs.imwrite(file, destination);
	    //HighGui.imshow("Image contrastÃ©e", destination);
	    
        return(file);
    }
    
    public static String erosion(String filename) {
    	
        int erosion_size = 1;
    	
        Mat source = Imgcodecs.imread(filename, Imgcodecs.CV_LOAD_IMAGE_COLOR);
        Mat destination = new Mat(source.rows(),source.cols(),source.type());      
	    Mat element1 = Imgproc.getStructuringElement(Imgproc.MORPH_RECT, new Size(2*erosion_size+1 , 2*erosion_size+1));
	    
	    Imgproc.erode(source, destination, element1);
        String file = "images/erosion.jpg";
	    Imgcodecs.imwrite(file, destination);
	    //HighGui.imshow("Image Ã©rodÃ©e",destination);
	    
    	return(file);
    }
    
    public static String dilate(String filename) {
    	
	    int dilation_size = 5;

	    Mat source = Imgcodecs.imread(filename, Imgcodecs.CV_LOAD_IMAGE_COLOR);
        Mat destination = new Mat(source.rows(),source.cols(),source.type());      
	    Mat element1 = Imgproc.getStructuringElement(Imgproc.MORPH_RECT, new Size(2*dilation_size + 1, 2*dilation_size+1));
	    
	    Imgproc.dilate(source, destination, element1);
        String file = "images/dilate.jpg";
	    Imgcodecs.imwrite(file, destination);
	    //HighGui.imshow("Image dilatÃ©e",destination);
	   
	    return(file);
	}
    
    public static String hough(Mat dst, Mat src, String filename) {
    	
    	Mat cdst = new Mat();
    	Mat cdstP = new Mat();
        Mat lines = new Mat(); 

      	Imgproc.Canny(src, dst, 200, 200);
        Imgproc.cvtColor(dst, cdst, Imgproc.COLOR_GRAY2BGR);
        Imgproc.HoughLines(dst, lines, Math.PI/2, Math.PI/2, 90); // ! ! 

        cdstP = cdst.clone();
        
        for (int x = 0; x < lines.rows(); x++) {    
        	
            double rho = lines.get(x, 0)[0];
            double theta = lines.get(x, 0)[1];
            double a = Math.cos(theta), b = Math.sin(theta);
            double x0 = a*rho, y0 = b*rho;
            
            Point pt1 = new Point(Math.round(x0 + 10000*(-b)), Math.round(y0 + 10000*(a)));
            Point pt2 = new Point(Math.round(x0 - 10000*(-b)), Math.round(y0 - 10000*(a)));
            
            Imgproc.line(cdst, pt1, pt2, new Scalar(255, 255, 255), 10, Imgproc.LINE_AA, 0); // "10" Ã  changer
        }
        
        Mat linesP = new Mat();

        Imgproc.HoughLinesP(dst, linesP, 0.5, Math.PI/360, 50, 180, 50 ); // !
        
        for (int x = 0; x < linesP.rows(); x++) {
            double[] l = linesP.get(x, 0);
            Imgproc.line(cdstP, new Point(l[0], l[1]), new Point(l[2], l[3]), new Scalar(0, 0, 255), 1, Imgproc.LINE_AA, 0);
        }

        String file = "images/hough.jpg";
        Imgcodecs.imwrite(file, cdst);   
        //HighGui.imshow("Detected Lines (in red) - Standard Hough Line Transform", cdst);

    	return(file);
    }
    
    public static String sharpen(String filename) {    	
    	
    	Mat source = Imgcodecs.imread(filename, Imgcodecs.CV_LOAD_IMAGE_GRAYSCALE);
        Mat destination = new Mat(source.rows(), source.cols(), source.type());
        
        Imgproc.GaussianBlur(source, destination, new Size(0, 0), 50);
        
        Core.addWeighted(source, 0.5, destination, -0.5, 1, destination);
        
        String file = "images/sharpen.jpg";
        Imgcodecs.imwrite(file, destination);       
        //HighGui.imshow("Sharpen", destination);
        
        return(file);
    }
    
    public static String sobel(String filename) {
    			
		Mat src = Imgcodecs.imread(filename, Imgcodecs.CV_LOAD_IMAGE_COLOR);
		Mat grayMat = new Mat();
		Mat src_gray = new Mat();
		Mat imageSobel = new Mat();
		Mat grad_x = new Mat();
		Mat abs_grad_x = new Mat();
		Mat grad_y = new Mat();
		Mat abs_grad_y = new Mat();
        int ddepth = CvType.CV_16S;
        int scale = 1;
        int delta = 0;
		// Remove noise by blurring with a Gaussian filter ( kernel size = 3 )
        Imgproc.GaussianBlur( src, src, new Size(5, 5), 0, 0, Core.BORDER_DEFAULT );
		
		Imgproc.cvtColor(src, grayMat, Imgproc.COLOR_BGR2GRAY);
		Imgproc.cvtColor( src, src_gray, Imgproc.COLOR_RGB2GRAY );
		
		//Imgproc.Scharr( src_gray, grad_x, ddepth, 1, 0, scale, delta);
        //Imgproc.Sobel( src_gray, grad_x, ddepth, 1, 0, 3, scale, delta);
        Imgproc.Scharr( src_gray, grad_y, ddepth, 0, 1, scale, delta);
        Imgproc.Sobel( src_gray, grad_y, ddepth, 0, 1, 3, scale, delta);

		
		//Core.convertScaleAbs(grad_x, abs_grad_x);
		Core.convertScaleAbs(grad_y, abs_grad_y);
		Core.addWeighted(abs_grad_y, 0.5, abs_grad_y, 2, 1, imageSobel);
		
		String file = "images/sobel.jpg";
		Imgcodecs.imwrite(file, imageSobel);
	    //HighGui.imshow("Image SobÃ©lisÃ©e", imageSobel);
		
		return(file);
    }
    
    private static BufferedImage loadImage(File path) {
    	
		BufferedImage img = null;
		
		try {
			img = ImageIO.read(path);
			} catch (IOException e) {
				e.printStackTrace();
			}
		
		return (img);
	}
}
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import org.opencv.core.Mat;
import org.opencv.core.Size;
import org.opencv.highgui.HighGui;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.imgproc.Imgproc;

public class Resize {

	@SuppressWarnings("unused")
	public void run(String[] args) {
		
		 Mat dst = new Mat(), cdst = new Mat(), cdstP;
		 Imgcodecs imageCodecs = new Imgcodecs();
		  	
		 String default_file = "Base/9.jpg"; // Chemin du fichier à redimensionner
		 String filename = (default_file);
		 
		 Mat src = Imgcodecs.imread(filename);
		      
		 if (src.empty()) {
		       System.out.println("Error opening image!");
		       System.out.println("Program Arguments: [image_name -- default "+ default_file +"] \n");
		       System.exit(-1);
		   }
      
      	File path = new File(filename);
		BufferedImage img = loadImage(path);
		
		Mat matOriginal = Imgcodecs.imread(filename, Imgcodecs.CV_LOAD_IMAGE_COLOR);
		
		Imgproc.resize(matOriginal, dst, new Size(0, 0), 0.6, 0.6, Imgproc.INTER_AREA); // On change la valeur du redimmensionnement
		Imgcodecs.imwrite(filename, dst); 
		matOriginal = Imgcodecs.imread(filename, Imgcodecs.CV_LOAD_IMAGE_COLOR);
		HighGui.imshow("Nouvelle image redimensionnée", matOriginal);
		HighGui.waitKey();
	}
		
	private static BufferedImage loadImage(File path) {
	    	
		BufferedImage img = null;
		try {
			img = ImageIO.read(path);
		} catch (IOException e) {
				e.printStackTrace();
		}
			return img;
	}
		
	 public static void main(String[] args) {
		 	nu.pattern.OpenCV.loadLocally();
		 	new Resize().run(args);
	}
}
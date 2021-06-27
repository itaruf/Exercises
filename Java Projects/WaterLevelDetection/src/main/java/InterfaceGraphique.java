import java.awt.BorderLayout;
import java.awt.Font;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JComboBox;
import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

@SuppressWarnings("serial")
public class InterfaceGraphique extends JPanel
                          implements ActionListener {
    JLabel image1;
    JLabel image2;
    JLabel rapport;

    @SuppressWarnings({ "unchecked", "rawtypes" })
	public InterfaceGraphique() {
        super(new BorderLayout());
        
        String[] numeroImage = new String[83];
        
        for(int i = 0; i < 75; i++) {
        	numeroImage[i] = Integer.toString(i);	        	
        }

        //Creation de la box, la 1ere image afficher sera l'image à l'indice 0

        JComboBox ListeImage = new JComboBox(numeroImage);
        ListeImage.setSelectedIndex(0);
        ListeImage.addActionListener(this);

        //Parametrage de la disposition des images
        image1 = new JLabel();
        image1.setHorizontalAlignment(JLabel.LEFT);
        afficheImage1(numeroImage[ListeImage.getSelectedIndex()]);

        image2 = new JLabel();
        image2.setHorizontalAlignment(JLabel.RIGHT);
        afficheImage2(numeroImage[ListeImage.getSelectedIndex()]);
        
        rapport = new JLabel();
        rapport.setHorizontalAlignment(JLabel.CENTER);
        afficheRapport();
        
        
        //Mise en page de l'interface
        add(ListeImage, BorderLayout.PAGE_START);
        add(image1, BorderLayout.WEST);
        add(image2, BorderLayout.EAST);
        add(rapport, BorderLayout.CENTER);
        setBorder(BorderFactory.createEmptyBorder(20,20,20,20));
    }

    //Permet d'effectuer une action lors de l'utilisation de l'interface dans ce cas de recharger les images
    @SuppressWarnings("rawtypes")
	public void actionPerformed(ActionEvent e) {
        JComboBox cb = (JComboBox)e.getSource();
        String numeroImage = (String)cb.getSelectedItem();
        afficheImage1(numeroImage);
        afficheImage2(numeroImage);
        afficheRapport();
    }

    //Permet de charger l'image de gauche (celle d'origine)
    @SuppressWarnings("unused")
	protected void afficheImage1(String numero) {
    	ImageIcon image = new ImageIcon("Base/"+numero+".jpg");
    	Image imageResize = image.getImage();
    	Image imageRe = imageResize.getScaledInstance(500,1000,java.awt.Image.SCALE_SMOOTH);
    	image = new ImageIcon(imageRe);
        image1.setIcon(image);
        if (image != null) {
            image1.setText(null);
        } else {
            image1.setText("Pas d'image");
        }
    }
    
    //permet de charger l'image de droite (celle modifier)
    @SuppressWarnings("unused")
	protected void afficheImage2(String numero) {
        ImageIcon icon2 = Processing.run(numero);
        Image imageResize = icon2.getImage();
    	Image imageRe = imageResize.getScaledInstance(500,1000,java.awt.Image.SCALE_SMOOTH);
    	icon2 = new ImageIcon(imageRe);
        image2.setIcon(icon2);
        if (icon2 != null) {
            image2.setText(null);
        } else {
            image2.setText("Pas d'image");
        }
    }
    
    protected void afficheRapport() {
    	double t = Processing.rapport;
    	if(t==0) {
    		rapport.setText("l'image n'est pas exploitable");
    	}
    	else {
    		rapport.setText("Le niveau de l'eau est à "+t+"%.");
    	}
    	rapport.setFont(new Font("Monaco",Font.PLAIN,20));
    }

    
    // Creer et affiche l'interface graphique
    private static void GUI() {
        //Create and set up the window.
        JFrame frame = new JFrame("Niveau de l'eau");

        //Create and set up the content pane.
        JComponent newContentPane = new InterfaceGraphique();
        newContentPane.setOpaque(true); //content panes must be opaque
        frame.setContentPane(newContentPane);

        //Display the window.
        frame.pack();
        frame.setExtendedState(JFrame.MAXIMIZED_BOTH);
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    
    public static void main(String[] args) {
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
        	
            public void run() {
                GUI();
            }
        });
    }
}

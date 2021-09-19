#include "Texture.h"
#include "Font.h"
#include "Surface.h"
#include "Renderer.h"
#include "SDL_Manager.h"
#include "Window.h"

#include "Sprite.cpp"
#include "Sprite_Manager.cpp"

#ifdef _WIN32
#define WINPAUSE system("pause")
#endif

//#include "Gashamon.h"
//#include "SpriteManager.h"

int main()
{
	// Init
	SDL_Manager my_manager{ SDL_INIT_VIDEO };
	my_manager.SDL_In();
	my_manager.TTF_In();

	// Font
	auto* tmp_font(TTF_OpenFont("resources/coolvetica.ttf", 25));
	Font font(std::move(tmp_font)); // Constructor Test
	font.check_TTF_Font();
	std::cout << tmp_font << std::endl << font.get_ptr() << std::endl; 
	Font font_test(font); // Copy Constructor Test
	std::cout << font.get_ptr() << std::endl << font_test.get_ptr() << std::endl; 
	font_test.get_ptr() = nullptr;
	std::cout << font_test.get_ptr() << std::endl;
	font_test = font; // Copy Assignement Test
	std::cout << font.get_ptr() << std::endl << font_test.get_ptr() << std::endl; 
	//font_test = std::move(font); // Move Assignement Test
	//std::cout << font.get_ptr() << std::endl << font_test.get_ptr() << std::endl;

	//// Surface
	//auto* tmp_surface(IMG_Load("resources/gashamons.png"));
	//Surface gashamonSurface(std::move(tmp_surface));
	//gashamonSurface.check_SDL_Surface();
	//std::cout << tmp_surface << std::endl << gashamonSurface.get_ptr() << std::endl; // Move Constructor Test

	//// Window
	//auto* tmp_window(SDL_CreateWindow("Ma super fenêtre", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, 1280, 720, 0));
	//Window window(std::move(tmp_window));
	//window.check_SDL_Window();
	//std::cout << tmp_window << std::endl << window.get_ptr() << std::endl; // Move Constructor Test

	//// Renderer
	//auto* tmp_renderer(SDL_CreateRenderer(window.get_ptr(), -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC));
	//Renderer renderer(std::move(tmp_renderer));
	//renderer.check_SDL_Renderer();
	//std::cout << tmp_renderer << std::endl << renderer.get_ptr() << std::endl; // Move Constructor Test

	//// Color
	//SDL_Color color = { 255, 255, 255 }; // On laisse dans le main

	//// Surface
	//tmp_surface = TTF_RenderUTF8_Blended(font.get_ptr(), "Bonjour !", color);
	//Surface textSurface(std::move(tmp_surface));
	//textSurface.check_SDL_Surface();
	//std::cout << tmp_surface << std::endl << textSurface.get_ptr() << std::endl; // Move Constructor Test

	//// Texture
	//auto* tmp_text_texture(SDL_CreateTextureFromSurface(renderer.get_ptr(), textSurface.get_ptr()));
	//Texture textTexture(std::move(tmp_text_texture));
	//textTexture.check_SDL_Texture();
	//std::cout << tmp_text_texture << std::endl << textTexture.get_ptr() << std::endl; // Move Constructor Test
	//textSurface.reset_ptr(); // Nous n'avons plus besoin de la surface du texte à partir d'ici, nous la libérons

	//// Pour faire le rendu de notre texte sans distorsion, nous récupérons sa taille
	//int width = 0, height = 0;

	//// La fonction SDL_QueryTexture permet de récupérer certaines informations sur une texture, ici nous récupérons sa taille.
	//my_manager.QueryTexture(textTexture.get_ptr(), nullptr, nullptr, &width, &height);
	//SDL_Rect textRect = { 0, 0, width, height };

	//// Texture // Nous faisons de même avec la gashamonSurface de l'image que nous avons chargé
	//tmp_text_texture = SDL_CreateTextureFromSurface(renderer.get_ptr(), gashamonSurface.get_ptr());
	//Texture gashamonTexture(std::move(tmp_text_texture));
	//gashamonTexture.check_SDL_Texture();
	//std::cout << tmp_text_texture << std::endl << gashamonTexture.get_ptr() << std::endl; // Move Constructor Test
	//gashamonSurface.reset_ptr(); // Nous n'avons plus besoin de la surface du texte à partir d'ici, nous la libérons

	//// La fonction SDL_QueryTexture permet de récupérer certaines informations sur une texture, ici nous récupérons sa taille.
	//my_manager.QueryTexture(gashamonTexture.get_ptr(), nullptr, nullptr, &width, &height);
	//SDL_Rect gashamonRect = { 0, 0, width / 5, height / 5 }; // Comme l'image des gashamon est très grande on va la réduire un peu

	//// Nous entrons ensuite dans la boucle principale, celle dans laquelle notre application va passer le plus clair de son temps
	//bool running = true;
	//while (running)
	//{
	//	SDL_Event event;
	//	while (my_manager.PollEvent(&event))
	//	{
	//		switch (event.type) // On inspecte le type d'événement pour savoir à quoi nous avons affaire
	//		{
	//			case SDL_QUIT:
	//				running = false;
	//				break;
	//			default:
	//				break;
	//		}
	//	}
	//	// Après avoir traité les événements, nous passons au rendu Nous configurons la couleur de la prochaine opération de dessin pour le clear
	//	my_manager.SetRenderDrawColor(renderer.get_ptr(), 0, 50, 0, SDL_ALPHA_OPAQUE);
	//	// Nous vidons l'écran (en le remplissant de la couleur précédemment choisie)
	//	my_manager.RenderClear(renderer.get_ptr());
	//	// On copie nos texture sur la fenêtre (blit) Les deux derniers paramètres indiquent le rectangle source et le rectangle de destination (nullptr indique tout la zone)
	//	my_manager.RenderCopy(renderer.get_ptr(), textTexture.get_ptr(), nullptr, &textRect);
	//	my_manager.RenderCopy(renderer.get_ptr(), gashamonTexture.get_ptr(), nullptr, &gashamonRect);
	//	// On présente le rendu (affichage du rendu vers la fenêtre)
	//	my_manager.RenderPresent(renderer.get_ptr());
	//}	

	//std::cout << std::endl;
	////Sprite sprite(&gashamonRect);
	///*std::cout << sprite.get_ptr() << std::endl;
	//std::cout << &gashamonRect << std::endl;
	//std::cout << gashamonRect.h << std::endl;
	//std::cout << sprite.get_ptr()->h << std::endl;*/

	//Sprite_Manager sprite_manager(std::move("Pikachu"), &gashamonRect);
	//sprite_manager.register_sprite(std::move("Magicarpe"), &gashamonRect);
	////sprite_manager.register_sprite(std::move("Magicarpe"), &gashamonRect);

	//Sprite sprite;
	//sprite_manager.get_sprite("Pikachu", &sprite);
	//std::cout << &gashamonRect << std::endl;
	//std::cout  << sprite.get_ptr() << std::endl;

	////sprite_manager.display_map();
	////sprite_manager.purge();

	//my_manager.SDL_Q();
	//my_manager.TTF_Q();
	
	WINPAUSE;
	return 0;
}
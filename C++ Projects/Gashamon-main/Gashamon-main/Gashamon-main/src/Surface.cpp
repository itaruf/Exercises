#include "Surface.h"

Surface::Surface(SDL_Surface*&& surface) : my_surface(surface) {
	std::cout << "Surface Constructor Called" << std::endl;
	surface = nullptr;
}

Surface::Surface(Surface& surface) : my_surface(surface.my_surface) {
	std::cout << "Surface Copy Constructor Called" << std::endl;
}

Surface::Surface(Surface&& surface) : my_surface(surface.my_surface) {
	std::cout << "Surface Move Constructor Called" << std::endl;
	surface.my_surface = nullptr;
}

Surface& Surface::operator=(const Surface& surface)
{
	std::cout << "Surface Copy Assignement Called" << std::endl;
	if (this == &surface) {
		return(*this);
	}
	my_surface = nullptr;
	my_surface = surface.my_surface;
	return(*this);
}

Surface& Surface::operator=(Surface&& surface)
{
	std::cout << "Surface Move Assignement Called" << std::endl;
	if (this == &surface) {
		std::cout << "test" << std::endl;
		return(*this);
	}
	else {
		my_surface = surface.my_surface;
		surface.my_surface = nullptr;
		return(*this);
	}
}

void Surface::check_SDL_Surface() {
	if (!my_surface)
	{
		std::cerr << "failed to initialize SDL_Surface" << IMG_GetError() << std::endl;
		return;
	}
	else {
		std::cout << "succeed to initialize SDL_Surface" << std::endl;
	}
}
SDL_Surface*& Surface::get_ptr() {
	return(my_surface);
}
void Surface::reset_ptr() {
	my_surface = nullptr;
}

Surface::~Surface() {
	if (my_surface) {
		std::cout << "SDL_Surface Destructor Called:" << std::endl;
		SDL_FreeSurface(my_surface);
		my_surface = nullptr;
	}
}
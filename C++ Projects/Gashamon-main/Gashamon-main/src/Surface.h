#ifndef __SURFACE_H__
#define __SURFACE_H__

#include <cstdlib>
#include <iostream>
#include <string>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_ttf.h>
#include <memory>

class Surface {
private:
	SDL_Surface* my_surface;
public:
	Surface(const SDL_Surface&) = delete;
	Surface(SDL_Surface&&) = delete;
	Surface& operator=(const SDL_Surface&) = delete;
	Surface& operator=(SDL_Surface&&) = delete;

	Surface(SDL_Surface*&& surface) : my_surface(std::move(surface)) {
		std::cout << "SDL_Surface Move Constructor Called: " << surface << std::endl;
		surface = nullptr;
	}
	void check_SDL_Surface() {
		if (!my_surface)
		{
			std::cerr << "failed to initialize SDL_Surface" << IMG_GetError() << std::endl;
			return;
		}
		else {
			std::cout << "succeed to initialize SDL_Surface" << std::endl;
		}
	}
	SDL_Surface*& get_ptr() {
		return(my_surface);
	}
	void reset_ptr() {
		my_surface = nullptr;
	}
	~Surface() {
		if (my_surface) {
			std::cout << "SDL_Surface Destructor Called:" << std::endl;
			SDL_FreeSurface(my_surface);
			my_surface = nullptr;
		}
	}
};

#endif __SURFACE_H__
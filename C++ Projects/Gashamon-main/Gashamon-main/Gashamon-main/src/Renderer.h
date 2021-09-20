#ifndef __RENDERER_H__
#define __RENDERER_H__

#include <cstdlib>
#include <iostream>
#include <string>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_ttf.h>
#include <memory>

class Renderer {
private:
	SDL_Renderer* my_renderer;
public:
	Renderer(SDL_Renderer*&& renderer) : my_renderer(renderer) {
		std::cout << "Renderer Constructor Called" << std::endl;
		renderer = nullptr;
	}
	// Copy Constructor
	Renderer(Renderer& renderer) : my_renderer(renderer.my_renderer) {
		std::cout << "Renderer Copy Constructor Called" << std::endl;
	}
	// Move Constructor
	Renderer(Renderer&& renderer) : my_renderer(renderer.my_renderer) {
		std::cout << "Renderer Move Constructor Called" << std::endl;
		renderer.my_renderer = nullptr;
	}
	// Copy Assignment
	Renderer& operator=(const Renderer& renderer) {
		std::cout << "Renderer Copy Assignement Called" << std::endl;
		if (this == &renderer) {
			return(*this);
		}
		my_renderer = nullptr;
		my_renderer = renderer.my_renderer;
		return(*this);
	}
	// Move Assignement
	Renderer& operator=(Renderer&& renderer) {
		std::cout << "Renderer Move Assignement Called" << std::endl;
		if (this == &renderer) {
			std::cout << "test" << std::endl;
			return(*this);
		}
		else {
			my_renderer = renderer.my_renderer;
			renderer.my_renderer = nullptr;
			return(*this);
		}
	}
	void check_SDL_Renderer() {
		if (!my_renderer)
		{
			std::cerr << "failed to initialize SDL_Renderer" << SDL_GetError() << std::endl;
			return;
		}
		else {
			std::cout << "succeed to initialize SDL_Renderer" << std::endl;
		}
	}
	SDL_Renderer*& get_ptr() {
		return(my_renderer);
	}
	void reset_ptr() {
		my_renderer = nullptr;
	}
	~Renderer() {
		if (my_renderer) {
			std::cout << "SDL_Renderer Destructor Called:" << std::endl;
			SDL_DestroyRenderer(my_renderer);
			my_renderer = nullptr;
		}
	}
};

#endif __RENDERER_H__
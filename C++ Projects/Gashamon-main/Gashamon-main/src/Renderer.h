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
	Renderer(const SDL_Renderer&) = delete;
	Renderer(SDL_Renderer&&) = delete;
	Renderer& operator=(const SDL_Renderer&) = delete;
	Renderer& operator=(SDL_Renderer&&) = delete;

	Renderer(SDL_Renderer*&& renderer) : my_renderer(std::move(renderer)) {
		std::cout << "SDL_Renderer Move Constructor Called: " << renderer << std::endl;
		renderer = nullptr;
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
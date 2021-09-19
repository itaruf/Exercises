#ifndef __WINDOW_H__
#define __WINDOW_H__

#include <cstdlib>
#include <iostream>
#include <string>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_ttf.h>
#include <memory>

class Window {
private:
	SDL_Window* my_window;
public:
	Window(const SDL_Window&) = delete;
	Window(SDL_Window&&) = delete;
	Window& operator=(const SDL_Window&) = delete;
	Window& operator=(SDL_Window&&) = delete;

	Window(SDL_Window*&& window) : my_window(std::move(window)) {
		std::cout << "SDL_Window Move Constructor Called: " << window << std::endl;
		window = nullptr;
	}
	void check_SDL_Window() {
		if (!my_window)
		{
			std::cerr << "failed to initialize SDL_Window" << SDL_GetError() << std::endl;
			return;
		}
		else {
			std::cout << "succeed to initialize SDL_Window" << std::endl;
		}
	}
	SDL_Window*& get_ptr() {
		return(my_window);
	}
	void reset_ptr() {
		my_window = nullptr;
	}
	~Window() {
		if (my_window) {
			std::cout << "SDL_Window Destructor Called:" << std::endl;
			SDL_DestroyWindow(my_window);
			my_window = nullptr;
		}
	}
};

#endif __WINDOW_H__
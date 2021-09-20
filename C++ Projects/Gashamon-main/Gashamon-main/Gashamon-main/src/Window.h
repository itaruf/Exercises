#ifndef __WINDOW_H__
#define __WINDOW_H__

#include <cstdlib>
#include <iostream>
#include <string>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_ttf.h>

class Window {
private:
	SDL_Window* my_window;
public:
	Window(SDL_Window*&& window);
	// Copy Constructor
	Window(Window& window);
	// Move Constructor
	Window(Window&& window);
	// Copy Assignment
	Window& operator=(const Window& window);
	// Move Assignement
	Window& operator=(Window&& window);
	void check_SDL_Window();
	SDL_Window*& get_ptr();
	void reset_ptr();
	~Window();
};

#endif __WINDOW_H__
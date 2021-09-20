#ifndef __SURFACE_H__
#define __SURFACE_H__

#include <cstdlib>
#include <iostream>
#include <string>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_ttf.h>

class Surface {
private:
	SDL_Surface* my_surface;
public:
	Surface(SDL_Surface*&& surface);
	// Copy Constructor
	Surface(Surface& surface);
	// Move Constructor
	Surface(Surface&& surface);
	// Copy Assignment
	Surface& operator=(const Surface& surface);
	// Move Assignement
	Surface& operator=(Surface&& surface);
	// Member Methods
	void check_SDL_Surface();
	SDL_Surface*& get_ptr();
	void reset_ptr();
	// Destructor
	~Surface();
};

#endif __SURFACE_H__
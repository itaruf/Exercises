#ifndef __SPRITE_H__
#define __SPRITE_H__

#include <stdlib.h>
#include <cstdlib>
#include <iostream>
#include <string>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_ttf.h>
#include <memory>

class Sprite {
private:
	std::shared_ptr<SDL_Rect> my_rect;
public:
	Sprite() = default;
	Sprite(SDL_Rect* rect);
	std::shared_ptr<SDL_Rect>& get_ptr();
	~Sprite();
};

#endif __SPRITE_H__
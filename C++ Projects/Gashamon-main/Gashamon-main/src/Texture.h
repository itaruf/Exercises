#ifndef __TEXTURE_H__
#define __TEXTURE_H__

#include <cstdlib>
#include <iostream>
#include <string>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_ttf.h>
#include <memory>

class Texture {
private:
	SDL_Texture* my_texture;
public:
	Texture(const SDL_Texture&) = delete;
	Texture(SDL_Texture&&) = delete;
	Texture& operator=(const SDL_Texture&) = delete;
	Texture& operator=(SDL_Texture&&) = delete;

	Texture(SDL_Texture*&& texture) : my_texture(std::move(texture)) {
		std::cout << "SDL_Texture Move Constructor Called: " << texture << std::endl;
		texture = nullptr;
	}
	void check_SDL_Texture() {
		if (!my_texture)
		{
			std::cerr << "failed to initialize SDL_Texture" << SDL_GetError() << std::endl;
			return;
		}
		else {
			std::cout << "succeed to initialize SDL_Texture" << std::endl;
		}
	}
	SDL_Texture*& get_ptr() {
		return(my_texture);
	}
	void reset_ptr() {
		my_texture = nullptr;
	}
	~Texture() {
		if (my_texture) {
			std::cout << "SDL_Texture Destructor Called:" << std::endl;
			SDL_DestroyTexture(my_texture);
			my_texture = nullptr;
		}
	}
};

#endif __TEXTURE_H__
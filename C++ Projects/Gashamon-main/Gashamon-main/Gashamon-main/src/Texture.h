#ifndef __TEXTURE_H__
#define __TEXTURE_H__

#include <cstdlib>
#include <iostream>
#include <string>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_ttf.h>

class Texture {
private:
	SDL_Texture* my_texture;
public:
	Texture(SDL_Texture*&& texture) : my_texture(texture) {
		std::cout << "Texture Constructor Called" << std::endl;
		texture = nullptr;
	}
	// Copy Constructor
	Texture(Texture& texture) : my_texture(texture.my_texture) {
		std::cout << "Texture Copy Constructor Called" << std::endl;
	}
	// Move Constructor
	Texture(Texture&& texture) : my_texture(texture.my_texture) {
		std::cout << "Texture Move Constructor Called" << std::endl;
		texture.my_texture = nullptr;
	}
	// Copy Assignment
	Texture& operator=(const Texture& texture) {
		std::cout << "Texture Copy Assignement Called" << std::endl;
		if (this == &texture) {
			return(*this);
		}
		my_texture = nullptr;
		my_texture = texture.my_texture;
		return(*this);
	}
	// Move Assignement
	Texture& operator=(Texture&& texture) {
		std::cout << "Texture Move Assignement Called" << std::endl;
		if (this == &texture) {
			std::cout << "test" << std::endl;
			return(*this);
		}
		else {
			my_texture = texture.my_texture;
			texture.my_texture = nullptr;
			return(*this);
		}
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
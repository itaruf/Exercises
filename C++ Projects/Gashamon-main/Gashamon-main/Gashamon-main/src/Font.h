#ifndef __FONT_H__
#define __FONT_H__

#include <cstdlib>
#include <iostream>
#include <string>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_ttf.h>

class Font {
private:
	TTF_Font* my_font;
public:
	Font(TTF_Font*&& font) : my_font(font) {
		std::cout << "Font Constructor Called" << std::endl;
		font = nullptr;
	}
	// Copy Constructor
	Font(Font& font) : my_font(font.my_font) {
		std::cout << "Font Copy Constructor Called" << std::endl;
	}
	// Move Constructor
	Font(Font&& font) : my_font(font.my_font) {
		std::cout << "Font Move Constructor Called" << std::endl;
		font.my_font = nullptr;
	}
	// Copy Assignment
	Font& operator=(const Font& font) {
		std::cout << "Font Copy Assignement Called" << std::endl;
		if (this == &font) {
			return(*this);
		}
		my_font = nullptr;
		my_font = font.my_font;
		return(*this);
	}
	// Move Assignement
	Font& operator=(Font&& font) {
		std::cout << "Font Move Assignement Called" << std::endl;
		if (this == &font) {
			std::cout << "test" << std::endl;
			return(*this);
		}
		else {
			my_font = font.my_font;
			font.my_font = nullptr;
			return(*this);
		}
	}

	void check_TTF_Font() {
		if (!my_font)
		{
			std::cerr << "Failed To Open TTT_Font" << TTF_GetError() << std::endl;
			return;
		}
		else {
			std::cout << "Succeed To Initialize TTF_Font" << std::endl;
		}
	}
	TTF_Font*& get_ptr() {
		return(my_font);
	}
	void reset_ptr() {
		my_font = nullptr;
	}
	~Font() {
		if (my_font) {
			std::cout << "Font Destructor Called" << std::endl;
			//TTF_CloseFont(my_font);
			my_font = nullptr;
		}
	}
};

#endif __FONT_H__
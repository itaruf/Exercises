#include "Sprite.h"

Sprite::Sprite(SDL_Rect* rect) : my_rect(rect)
{
	std::cout << "Sprite Constructor Called" << std::endl;
	std::cout << my_rect.use_count() << std::endl;
}

Sprite::~Sprite()
{ 
	if (my_rect) {
		my_rect = nullptr;
		std::cout << my_rect.use_count() << std::endl;
		std::cout << "Sprite Destructor Called" << std::endl;
	}
}

std::shared_ptr<SDL_Rect>& Sprite::get_ptr() {
	return(my_rect);
}
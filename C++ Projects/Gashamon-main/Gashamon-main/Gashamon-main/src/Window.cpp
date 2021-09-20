#include "Window.h"

Window::Window(SDL_Window*&& window) : my_window(window) {
	std::cout << "Window Constructor Called" << std::endl;
	window = nullptr;
}

Window::Window(Window& window) : my_window(window.my_window) {
	std::cout << "Window Copy Constructor Called" << std::endl;
}

Window::Window(Window&& window) : my_window(window.my_window) {
	std::cout << "Window Move Constructor Called" << std::endl;
	window.my_window = nullptr;
}

Window& Window::operator=(const Window& window) {
	std::cout << "Window Copy Assignement Called" << std::endl;
	if (this == &window) {
		return(*this);
	}
	my_window = nullptr;
	my_window = window.my_window;
	return(*this);
}

Window& Window::operator=(Window&& window) {
	std::cout << "Window Move Assignement Called" << std::endl;
	if (this == &window) {
		std::cout << "test" << std::endl;
		return(*this);
	}
	else {
		my_window = window.my_window;
		window.my_window = nullptr;
		return(*this);
	}
}

void Window::check_SDL_Window() {
	if (!my_window)
	{
		std::cerr << "failed to initialize SDL_Window" << SDL_GetError() << std::endl;
		return;
	}
	else {
		std::cout << "succeed to initialize SDL_Window" << std::endl;
	}
}

SDL_Window*& Window::get_ptr() {
	return(my_window);
}

void Window::reset_ptr() {
	my_window = nullptr;
}

Window::~Window() {
	if (my_window) {
		std::cout << "SDL_Window Destructor Called:" << std::endl;
		SDL_DestroyWindow(my_window);
		my_window = nullptr;
	}
}
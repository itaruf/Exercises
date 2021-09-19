#ifndef __SDL_MANAGER_H__
#define __SDL_MANAGER_H__

#include <cstdlib>
#include <iostream>
#include <string>
#include <SDL.h>
#include <SDL_image.h>
#include <SDL_ttf.h>
#include <memory>

class SDL_Manager {
private:
	Uint32 flags;
public:
	SDL_Manager(const Uint32& flags) : flags{ flags } {}
	~SDL_Manager() = default;
	void SDL_In() {
		if (SDL_Init(flags) < 0)
		{
			std::cerr << "failed to initialize SDL" << SDL_GetError() << std::endl;
			return;
		}
	}
	void TTF_In() {
		if (TTF_Init() < 0)
		{
			std::cerr << "failed to initialize SDL_ttf" << TTF_GetError() << std::endl;
			return;
		}
	}
	void TTF_Q() {
		TTF_Quit();
	}
	void SDL_Q() {
		SDL_Quit();
	}
	void QueryTexture(SDL_Texture* obj, Uint32* format, int* access, int* w, int* h) {
		SDL_QueryTexture(obj, format, access, w, h);
	}
	int PollEvent(SDL_Event* event) {
		return(SDL_PollEvent(event));
	}
	void SetRenderDrawColor(SDL_Renderer* renderer, const Uint8& r, const Uint8& g, const Uint8& b, const Uint8& a) {
		SDL_SetRenderDrawColor(renderer, r, g, b, a);
	};
	void RenderClear(SDL_Renderer* renderer) {
		SDL_RenderClear(renderer);
	}
	void RenderCopy(SDL_Renderer* renderer, SDL_Texture* texture, const SDL_Rect* srcrect, const SDL_Rect* dstrect) {
		SDL_RenderCopy(renderer, texture, srcrect, dstrect);
	}
	void RenderPresent(SDL_Renderer* renderer) {
		SDL_RenderPresent(renderer);
	}
	void CloseFont(TTF_Font* font) {
		TTF_CloseFont(font);
	}
};

#endif __SDL_MANAGER_H__
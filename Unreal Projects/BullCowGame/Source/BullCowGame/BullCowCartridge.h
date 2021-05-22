// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Console/Cartridge.h"
#include "BullCowCartridge.generated.h"

struct FBullCowCount
{
	int32 Bulls = 0; // initialization isnt mandatory
	int32 Cows = 0;
};

UCLASS(ClassGroup = (Custom), meta = (BlueprintSpawnableComponent))
class BULLCOWGAME_API UBullCowCartridge : public UCartridge
{
	GENERATED_BODY()

public:
	virtual void BeginPlay() override;
	virtual void OnInput(const FString &Input) override;
	void InitGame();
	void EndGame();
	void ProcessGuess(const FString &Guess);
	bool IsIsogram(const FString &Guess) const;
	TArray<FString> GetValidWords(const TArray<FString> &Words);
	FBullCowCount GetBullsCows(const FString &Guess) const;

private:
	// Your declarations go below! // Member variables
	FString HiddenWord; // Utilisable dans toutes les fonctions
	int32 Lives;
	bool bGameOver;
	TArray<FString> Words;
	FBullCowCount Count;
};

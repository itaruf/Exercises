// Fill out your copyright notice in the Description page of Project Settings.

#include "WorldPosition.h"
#include "GameFramework/Actor.h"

// Sets default values for this component's properties
UWorldPosition::UWorldPosition()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = true;

	// ...
}

// Called when the game starts
void UWorldPosition::BeginPlay()
{
	Super::BeginPlay();

	/* 	
	UE_LOG(LogTemp, Error, TEXT("ERROR"));
	UE_LOG(LogTemp, Warning, TEXT("%s"), *Log);
	UE_LOG(LogTemp, Display, TEXT("Normal Display"));
 	*/
	FString Log = TEXT("Hello!");

	//Creating pointers
	FString *PtLog = &Log;

	Log.Len();
	(*PtLog).Len(); // Les parenthèses servent à déférencer
	PtLog->Len();	// écriture à privilégier

	/* 	
	UE_LOG(LogTemp, Display, TEXT("%d, %d, %d"), Log.Len(), (*PtLog).Len(), PtLog->Len());
	UE_LOG(LogTemp, Display, TEXT("%s"), PtLog);   // Renvoit l'adresse mémoire de PtLog
	UE_LOG(LogTemp, Display, TEXT("%s"), **PtLog); // Renvoit le string contenu dans la variable pointée 
	*/

	FString ObjectName = GetOwner()->GetName();
	FString *PtON = &ObjectName;

	/* 
	UE_LOG(LogTemp, Display, TEXT("%s"), *ObjectName); // Renvoit le string contenu dans la variable pointée
	UE_LOG(LogTemp, Display, TEXT("%s"), *GetOwner()->GetName());
	UE_LOG(LogTemp, Display, TEXT("%s"), (**PtON)); 
	*/

	FString ObjectPosition = (GetOwner()->GetActorLocation()).ToString();		 // Get the location of an actor on scene
	//ObjectPosition = (GetOwner()->GetActorTransform().GetLocation()).ToString(); // Other manner
	UE_LOG(LogTemp, Display, TEXT("%s, %s"), *ObjectName, *ObjectPosition);
}

// Called every frame
void UWorldPosition::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction *ThisTickFunction)
{
	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

	// ...
}

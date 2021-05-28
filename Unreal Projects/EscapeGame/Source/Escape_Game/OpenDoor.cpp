// Copyright Imane TARUF 2021

#include "OpenDoor.h"
#include "GameFramework/Actor.h"
#include "Math/UnrealMathUtility.h"
#include "Engine/World.h"
#include "Components/PrimitiveComponent.h"
#include "Components/AudioComponent.h"
#include "GameFramework/PlayerController.h"

// Sets default values for this component's properties
UOpenDoor::UOpenDoor()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = true;
}

// Called when the game starts
void UOpenDoor::BeginPlay()
{
	Super::BeginPlay();

	//FRotator CurrentRotation = GetOwner()->GetActorRotation();
	//CurrentRotation.Yaw = TargetYaw;
	//FRotator OpenDoor = {0.f, TargetYaw, 0.f};
	//GetOwner()->SetActorRotation(OpenDoor);
	//GetOwner()->SetActorRotation(CurrentRotation);

	//UE_LOG(LogTemp, Warning, TEXT("%s"), *GetOwner()->GetActorRotation().ToString());
	//UE_LOG(LogTemp, Warning, TEXT("%f"), GetOwner()->GetActorRotation().Yaw);

	InitialYaw = GetOwner()->GetActorRotation().Yaw; // On récupère l'axe Y actuel de l'acteur
	CurrentYaw = InitialYaw;						 // Initialisation de l'axe Y courant avec l'axe Y actuel de l'acteur
	TargetYaw += InitialYaw;						 // L'axe Y visé est une rotation de 90°

	CheckPressurePlate();
}

// Called every frame
void UOpenDoor::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction *ThisTickFunction)
{
	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

	//if (PressurePlate && PressurePlate->IsOverlappingActor(ActorThatOpens)) // La 1ère condition est une protection contre les pointeurs nuls

	if (TotalMassOfActors() > MassToOpenDoor)
	{
		OpenDoor(DeltaTime);
		DoorLastOpen = GetWorld()->GetTimeSeconds();
	}
	else
	{
		if (GetWorld()->GetTimeSeconds() - DoorLastOpen > DoorCloseDelay)
			CloseDoor(DeltaTime);
	}
}

void UOpenDoor::OpenDoor(float DeltaTime)
{
	//Get Actor Rotation
	FRotator DoorRotation = GetOwner()->GetActorRotation();

	//À chaque frame, on met à jour l'axe Y actuel de l'acteur
	CurrentYaw = FMath::FInterpTo(CurrentYaw, TargetYaw, DeltaTime, DoorOpenSpeed);
	DoorRotation.Yaw = CurrentYaw;

	//Set Actor Rotation
	GetOwner()->SetActorRotation(DoorRotation);

	CloseDoorSound = false;
	if (!AudioComponent)
	{
		return;
	}
	if (!OpenDoorSound)
	{
		OpenDoorSound = true;
		AudioComponent->Play();
	}
}

void UOpenDoor::CloseDoor(float DeltaTime)
{
	//Get Actor Rotation
	FRotator DoorRotation = GetOwner()->GetActorRotation();

	//À chaque frame, on met à jour l'axe Y actuel de l'acteur
	CurrentYaw = FMath::FInterpTo(CurrentYaw, InitialYaw, DeltaTime, DoorCloseSpeed);
	DoorRotation.Yaw = CurrentYaw;

	//Set Actor Rotation
	GetOwner()->SetActorRotation(DoorRotation);

	OpenDoorSound = false;
	if (!AudioComponent)
	{
		return;
	}
	if (!CloseDoorSound)
	{
		CloseDoorSound = true;
		AudioComponent->Play();
	}
}

float UOpenDoor::TotalMassOfActors() const
{
	float TotalMass = 0;

	// Find all overlapping actors
	TArray<AActor *> OverlappingActors;

	if (!PressurePlate)
		return (TotalMass);

	PressurePlate->GetOverlappingActors(OUT OverlappingActors);

	// Add up their masses
	for (AActor *Actor : OverlappingActors)
	{
		TotalMass += Actor->FindComponentByClass<UPrimitiveComponent>()->GetMass();
		UE_LOG(LogTemp, Warning, TEXT("%s is on the pressure plate"), *Actor->GetName());
	}
	return (TotalMass);
}

void UOpenDoor::CheckAudioComponent()
{
	AudioComponent = GetOwner()->FindComponentByClass<UAudioComponent>();

	if (!AudioComponent)
	{
		UE_LOG(LogTemp, Warning, TEXT("No Audio component found on %s"), *GetOwner()->GetName());
	}
	else
	{
		UE_LOG(LogTemp, Warning, TEXT("Audio component found on %s"), *GetOwner()->GetName());
	}
}

void UOpenDoor::CheckPressurePlate()
{
	if (!PressurePlate)
	{
		UE_LOG(LogTemp, Warning, TEXT("%s has the open door component on it, but no pressure plate set"), *GetOwner()->GetName());
	}
}
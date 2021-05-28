// Copyright Imane TARUF 2021

#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "Components/AudioComponent.h"
#include "Engine/TriggerVolume.h"
#include "OpenDoor.generated.h"

UCLASS(ClassGroup = (Custom), meta = (BlueprintSpawnableComponent))
class ESCAPE_GAME_API UOpenDoor : public UActorComponent
{
	GENERATED_BODY()

public:
	// Sets default values for this component's properties
	UOpenDoor();

protected:
	// Called when the game starts
	virtual void BeginPlay() override;

public:
	// Called every frame
	virtual void TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction *ThisTickFunction) override;
	void OpenDoor(float DeltaTime);
	void CloseDoor(float DeltaTime);
	float TotalMassOfActors() const;
	void CheckAudioComponent();
	void CheckPressurePlate();

private:					 //variables membres
	UPROPERTY(EditAnywhere); // TargetYaw
	float TargetYaw = 90.f;

	float InitialYaw;
	float CurrentYaw;

	UPROPERTY(EditAnywhere); // DoorLastOpen
	float DoorLastOpen = 0.f;

	UPROPERTY(EditAnywhere); // DoorCloseDelay
	float DoorCloseDelay = 2.f;

	UPROPERTY(EditAnywhere); // PressurePlate
	ATriggerVolume *PressurePlate = nullptr;

	UPROPERTY(EditAnywhere); // DoorCloseDelay
	float DoorOpenSpeed = 1.5;

	UPROPERTY(EditAnywhere); // PressurePlate
	float DoorCloseSpeed = 2;

	UPROPERTY(EditAnywhere);
	float MassToOpenDoor = 50;

	UPROPERTY(EditAnywhere);
	UAudioComponent *AudioComponent = nullptr;

	bool OpenDoorSound = false;
	bool CloseDoorSound = true;
};

// Copyright Imane TARUF 2021

#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "PhysicsEngine/PhysicsHandleComponent.h"
#include "Grab.generated.h"

UCLASS(ClassGroup = (Custom), meta = (BlueprintSpawnableComponent))
class ESCAPE_GAME_API UGrab : public UActorComponent
{
	GENERATED_BODY()

public:
	// Sets default values for this component's properties
	UGrab();
	// Called every frame
	virtual void TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction *ThisTickFunction) override;

protected:
	// Called when the game starts
	virtual void BeginPlay() override;

private:
	float Reach = 100;

	UPROPERTY(EditAnywhere);
	UPhysicsHandleComponent *PhysicsHandle = nullptr;

	UPROPERTY(EditAnywhere);
	UInputComponent *InputComponent = nullptr;

	void Grab();
	void Release();
	void CheckPhysicsHandle();
	void CheckInputComponent();
	FHitResult GetFirstPhysicsBodyInReach() const;
	FVector GetPlayerReach() const;
	FVector GetPlayerWorldPosition() const;
};

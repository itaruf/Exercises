// Copyright Imane TARUF 2021

#include "Grab.h"
#include "GameFramework/PlayerController.h"
#include "Engine/World.h"
#include "Math/Color.h"
#include "DrawDebugHelpers.h"

#define OUT // Pour se souvenir que ce sont des out-parameters

UGrab::UGrab()
{
	PrimaryComponentTick.bCanEverTick = true;
}

void UGrab::BeginPlay()
{
	Super::BeginPlay();

	//UE_LOG(LogTemp, Warning, TEXT("Grab component reporting"));
	CheckPhysicsHandle();
	CheckInputComponent();
}

void UGrab::CheckPhysicsHandle()
{
	PhysicsHandle = GetOwner()->FindComponentByClass<UPhysicsHandleComponent>();
	if (PhysicsHandle == nullptr)
	{
		UE_LOG(LogTemp, Error, TEXT("Physics Handle Component found on %s"), *GetOwner()->GetName());
	}
	else
	{
		UE_LOG(LogTemp, Error, TEXT("No Physics Handle Component found on %s"), *GetOwner()->GetName());
	}
}

void UGrab::CheckInputComponent()
{
	InputComponent = GetOwner()->FindComponentByClass<UInputComponent>();
	if (InputComponent)
	{
		UE_LOG(LogTemp, Warning, TEXT("Input component found on %s"), *GetOwner()->GetName());
		InputComponent->BindAction("Grab", IE_Pressed, this, &UGrab::Grab);
		InputComponent->BindAction("Release", IE_Pressed, this, &UGrab::Release);
	}
	/* 	else
	{
		UE_LOG(LogTemp, Error, TEXT("Input component not found on %s"), *GetOwner()->GetName());
	} */
}

void UGrab::Grab()
{
	UE_LOG(LogTemp, Warning, TEXT("GRAB"));

	GetPlayerWorldPosition();

	FHitResult HitResult = GetFirstPhysicsBodyInReach();
	UPrimitiveComponent *ComponentToGrab = HitResult.GetComponent();
	AActor *ActorHit = HitResult.GetActor();

	// If we hit something then attach the physics handle
	if (ActorHit)
		if (!PhysicsHandle)
			return;
	{
		PhysicsHandle->GrabComponentAtLocation(
			ComponentToGrab,
			NAME_None,
			GetPlayerReach());
	}
}

void UGrab::Release()
{
	UE_LOG(LogTemp, Warning, TEXT("RELEASE"));

	if (!PhysicsHandle)
		return;

	// release the physics handle
	PhysicsHandle->ReleaseComponent();
}

// Called every frame
void UGrab::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction *ThisTickFunction)
{
	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

	if (!PhysicsHandle)
		return;

	if (PhysicsHandle->GrabbedComponent)
	{
		//Move the object we are holding
		PhysicsHandle->SetTargetLocation(GetPlayerReach());
	}
}

FHitResult UGrab::GetFirstPhysicsBodyInReach() const
{
	/* 
	UE_LOG(LogTemp, Warning, TEXT("%s"), *PlayerViewPointLocation.ToString());
	UE_LOG(LogTemp, Warning, TEXT("%s"), *PlayerViewPointRotation.ToString());
	*/

	FHitResult Hit;
	// Ray-casting (Line Tracing) out to a certain distance (Reach)
	FCollisionQueryParams TraceParams(FName(TEXT("")), false, GetOwner());

	GetWorld()->LineTraceSingleByObjectType(
		OUT Hit,
		GetPlayerWorldPosition(),
		GetPlayerReach(),
		FCollisionObjectQueryParams(ECollisionChannel::ECC_PhysicsBody),
		TraceParams);

	/* DrawDebugLine(
		GetWorld(),
		PlayerViewPointLocation,
		LineTraceEnd,
		FColor(230, 230, 250),
		false,
		0,
		0,
		5); */
	// See what it hits
	//AActor *ActorHit = Hit.GetActor();
	// Logging out to test
	//if (ActorHit)
	/*{
		UE_LOG(LogTemp, Warning, TEXT("Line trace has hit %s"), *(ActorHit->GetName()));
	} */

	return (Hit);
}

FVector UGrab::GetPlayerWorldPosition() const
{
	FVector PlayerViewPointLocation;
	FRotator PlayerViewPointRotation;

	GetWorld()->GetFirstPlayerController()->GetPlayerViewPoint(
		OUT PlayerViewPointLocation,
		OUT PlayerViewPointRotation);

	return (PlayerViewPointLocation);
}

FVector UGrab::GetPlayerReach() const
{
	FVector PlayerViewPointLocation;
	FRotator PlayerViewPointRotation;

	GetWorld()->GetFirstPlayerController()->GetPlayerViewPoint(
		OUT PlayerViewPointLocation,
		OUT PlayerViewPointRotation);

	//Draw a line from player showing the reach
	return (PlayerViewPointLocation + PlayerViewPointRotation.Vector() * Reach);
}

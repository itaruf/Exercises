// Fill out your copyright notice in the Description page of Project Settings.

#include "Gun.h"
#include "Components/SkeletalMeshComponent.h"
#include "Kismet/GameplayStatics.h"
#include "DrawDebugHelpers.h"
#include "GameFramework/Controller.h"

#define OUT
// Sets default values
AGun::AGun()
{
	// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;
	Root = CreateDefaultSubobject<USceneComponent>(TEXT("Root"));
	SetRootComponent(Root);

	Mesh = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("Mesh"));
	Mesh->SetupAttachment(Root);
}

// Called when the game starts or when spawned
void AGun::BeginPlay()
{
	Super::BeginPlay();
}

bool AGun::GunTrace(FHitResult &Hit, FVector &ShotDirection) 
{
	AController *OwnerController = GetOwnerController();
	if (OwnerController == nullptr) return (false);

	FVector Location;  // Out parameter
	FRotator Rotation; // Out parameter
	OwnerController->GetPlayerViewPoint(OUT Location, OUT Rotation);

	// Permet de récupérer l'angle à laquelle a été tirée la balle
	ShotDirection = -Rotation.Vector();
	FVector End = Location + Rotation.Vector() * MaxRange;

	/*DrawDebugCamera(GetWorld(), Location, Rotation, 90, 2, FColor::Red, true); // Permet de dessiner des caméras tournées dans la direction de l'Owner du Gun */
	FCollisionQueryParams Params;
	Params.AddIgnoredActor(this); // On ignore l'arme
	Params.AddIgnoredActor(GetOwner()); // On ignore le possesseur de l'arme

	return(GetWorld()->LineTraceSingleByChannel(OUT Hit, OUT Location, OUT End, ECollisionChannel::ECC_GameTraceChannel1, Params));
}

AController* AGun::GetOwnerController() const
{
	APawn *OwnerPawn = Cast<APawn>(GetOwner());
	if (OwnerPawn == nullptr) return (nullptr);
	return (OwnerPawn->GetController());

}

// Called every frame
void AGun::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
}

void AGun::PullTrigger()
{
	//UE_LOG(LogTemp, Warning, TEXT("YOUVE BEEN SHOT ! "));
	UGameplayStatics::SpawnEmitterAttached(MuzzleFlash, Mesh, TEXT("MuzzleFlashSocket"));

	FHitResult Hit;
	FVector ShotDirection;

	bool bSuccess = GunTrace(Hit, ShotDirection);
	if (bSuccess)
	{
		// Permet de dessiner un point à la position de la caméra de l'Owner du Gun
		DrawDebugPoint(GetWorld(), Hit.Location, 20, FColor::Red, true);
		// Permet d'afficher l'animation(explosion) d'une balle tirée atteignant sa destination
		UGameplayStatics::SpawnEmitterAtLocation(GetWorld(), ImpactFlash, Hit.Location, ShotDirection.Rotation());
		AActor *HitActor = Hit.GetActor();
		
		if (HitActor != nullptr) {
			FPointDamageEvent DamageEvent(Damage, Hit, ShotDirection, nullptr);
			AController *OwnerController = GetOwnerController();
			HitActor->TakeDamage(Damage, DamageEvent, OwnerController, this);
			UE_LOG(LogTemp, Warning, TEXT("%s hit %s"), *GetOwner()->GetName(), *HitActor->GetName())
		}
	}
}
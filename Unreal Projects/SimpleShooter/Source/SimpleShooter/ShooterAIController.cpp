// Fill out your copyright notice in the Description page of Project Settings.


#include "ShooterAIController.h"
#include "Kismet/GameplayStatics.h"
#include "BehaviorTree/BlackboardComponent.h"
#include "ShooterCharacter.h"

void AShooterAIController::BeginPlay() 
{
    Super::BeginPlay();

    if (AIBehavior != nullptr) {

        RunBehaviorTree(AIBehavior);
        PlayerPawn = UGameplayStatics::GetPlayerPawn(GetWorld(), 0 );
        //GetBlackboardComponent()->SetValueAsVector(TEXT("PlayerLocation"), PlayerPawn->GetActorLocation());
        FVector StartLocation = GetPawn()->GetActorLocation();
        GetBlackboardComponent()->SetValueAsVector(TEXT("StartLocation"), StartLocation); 
    }
}

void AShooterAIController::Tick(float DeltaSeconds) {

    Super::Tick(DeltaSeconds);

    /* 
    //APawn *PlayerPawn = UGameplayStatics::GetPlayerPawn(GetWorld(), 0 );
    //FVector LastKnowLocation;
    if (PlayerPawn != nullptr) {
        bool bLineOfSight = LineOfSightTo(PlayerPawn);
        if (bLineOfSight) {
            //MoveToActor(PlayerPawn, AcceptanceRadius);
            //SetFocus(PlayerPawn, 0);
            GetBlackboardComponent()->SetValueAsVector(TEXT("PlayerLocation"), PlayerPawn->GetActorLocation());
            GetBlackboardComponent()->SetValueAsVector(TEXT("LastKnownPlayerLocation"), PlayerPawn->GetActorLocation());
        }
        else {
            //ClearFocus(2);
            //StopMovement(); 
            GetBlackboardComponent()->ClearValue(TEXT("PlayerLocation"));
        } 
    } */
}

bool AShooterAIController::IsDead() const
{
    AShooterCharacter *ControlledCharacter = Cast<AShooterCharacter>(GetPawn());
    if (ControlledCharacter!=nullptr) {
        return (ControlledCharacter->IsDead());
    }
    return (true);
}

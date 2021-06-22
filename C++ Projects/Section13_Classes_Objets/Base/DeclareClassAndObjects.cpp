#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

class Player
{
public:
    //Attributes specific to the class
    string Name;
    int Health;
    int XP;

    //Methods specific to the class
    void Talk(string TextToSay);
    bool IsDead();

    //Overloaded constructors specific to the class
    Player() : Name{"None"}, Health{100}, XP{3}
    {
        cout << "No args constructor called" << endl;
    }

    Player(string Name) : Name{Name}, Health{0}, XP{0}
    {
        cout << "Name constructor called" << endl;
    }

    Player(string Name, int Health) : Name(Name), Health{Health}
    {
        cout << "Name and Health constructor called" << endl;
    }

    Player(string Name, int Health, int XP) : Name(Name), Health{Health}, XP{XP}
    {
        cout << "Name, Health et XP constructor called" << endl;
    }
};

void Player::Talk(string TextToSay)
{
    cout << Name << " says: " << TextToSay << endl;
}

bool Player::IsDead()
{
    return (true);
}

class Account
{
public:
    //Attributes
    string Name{""};
    double Balance{};

    //Methods
    void Deposit(double Amount);
    void Withdraw(double Amount);
};

void Account::Deposit(double Amount)
{
    Balance += Amount;
    cout << "Deposit: " << Balance << endl;
}

void Account::Withdraw(double Amount)
{
    Balance -= Amount;
    cout << "Withdraw: " << Balance << endl;
}

int main()
{

    Player Imane;
    Player Amal;

    //Accessing attributes
    Imane.Name = "Imane";
    Imane.Health = 200;
    Imane.XP = 10;
    Imane.Talk("Hello !");

    Amal.Name = "Amal";
    Amal.Health = 500;
    Amal.XP = 50;
    Amal.Talk("Salut !");

    Player *Enemy = new Player();
    Enemy->Name = "Enemy";
    Enemy->Health = 100;
    Enemy->XP = 100;
    Enemy->Talk("I will destroy you !");

    delete Enemy;
    cout << endl;

    Player Players[]{Imane, Amal};

    vector<Player> PlayersVector{Imane, Amal};

    Account ImaneAccount;
    Account AmalAccount;

    ImaneAccount.Name = "Imane";
    ImaneAccount.Balance = 500;
    ImaneAccount.Deposit(100);
    ImaneAccount.Withdraw(500);

    Account *Osa{new Account};
    Osa->Name = "Osama";

    Player Villain{"Villain", 100, 5};

    return (0);
}
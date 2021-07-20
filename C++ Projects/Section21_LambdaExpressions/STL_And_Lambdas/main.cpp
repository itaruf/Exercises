#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;

void Test1()
{
	cout << "\n---Test1---" << endl;

	vector<int> V{10, 20, 30, 40, 50};

	for_each(V.begin(), V.end(), [](int Num)
			 { cout << Num << " "; });
}

void Test2()
{
	cout << "\n\n---Test2---" << endl;

	struct Point
	{
		int X;
		int Y;
	};

	Point PT1{1, 2};
	Point PT2{4, 3};
	Point PT3{3, 5};
	Point PT4{3, 1};

	vector<Point> triangle1{PT1, PT2, PT3};
	vector<Point> triangle2{PT2, PT3, PT1};
	vector<Point> triangle3{PT1, PT2, PT4};

	if (is_permutation(triangle1.begin(), triangle1.end(), triangle2.begin(), [](Point LHS, Point RHS)
					   { return (LHS.X == RHS.X && LHS.Y == RHS.Y); }))
		cout << "Triangle1 and Triangle2 are equivalent !" << endl;
	else
		cout << "Triangle1 and Triangle2 are not equivalent !" << endl;

	if (is_permutation(triangle1.begin(), triangle1.end(), triangle3.begin(), [](Point LHS, Point RHS)
					   { return (LHS.X == RHS.X && LHS.Y == RHS.Y); }))
		cout << "Triangle1 and Triangle3 are equivalent !" << endl;
	else
		cout << "Triangle1 and Triangle3 are not equivalent !" << endl;
}

void Test3()
{
	cout << "\n---Test3---" << endl;

	vector<int> V{93, 88, 75, 68, 65};
	int Bonus{5};

	transform(V.begin(), V.end(), V.begin(), [Bonus](int Score)
			  { return Score += Bonus; });

	for (int Score : V)
		cout << Score << " ";
}

void Test4()
{
	cout << "\n\n---Test4---" << endl;

	vector<int> V{1, 2, 3, 4, 5};

	V.erase(remove_if(V.begin(), V.end(), [](int Num)
					  { return (Num % 2 == 0); }),
			V.end());

	for (int Num : V)
		cout << Num << " ";
}

class Person
{
	friend ostream &operator<<(ostream &Os, const Person &RHS);

private:
	string Name;
	int Age;

public:
	Person(string Name, int Age) : Name{Name}, Age{Age} {};
	Person(const Person &p) : Name{p.Name}, Age{p.Age} {}
	~Person() = default;

	string GetName() const
	{
		return (Name);
	}
	void SetName(string Name)
	{
		this->Name = Name;
	};
	int GetAge() const
	{
		return (Age);
	}
	void SetAge(int Age)
	{
		this->Age = Age;
	}
};

ostream &operator<<(ostream &Os, const Person &RHS)
{
	Os << "[Person: " << RHS.Name << " : " << RHS.Age << "]";
	return (Os);
}

void Test5()
{
	cout << "\n\n---Test5---" << endl;

	Person P1("Imane", 20);
	Person P2("Cookie", 5);
	Person P3("Skitty", 17);

	vector<Person> People{P1, P2, P3};

	sort(People.begin(), People.end(), [](Person LHS, Person RHS)
		 { return (LHS.GetName() < RHS.GetName()); });

	for (Person Item : People)
		cout << Item << endl;

	cout << "\n";

	sort(People.begin(), People.end(), [](Person LHS, Person RHS)
		 { return (LHS.GetAge() > RHS.GetAge()); });

	for (Person Item : People)
		cout << Item << endl;
}

bool InBetween(const vector<int> &V, int StartValue, int EndValue)
{
	bool Result{false};
	Result = all_of(V.begin(), V.end(), [StartValue, EndValue](int Value)
					{ return (Value >= StartValue && Value <= EndValue); });
	return (Result);
}

void Test6()
{
	cout << "\n---Test6---" << endl;
	cout << boolalpha;

	vector<int> V(10);
	iota(V.begin(), V.end(), 1);

	for (int Num : V)
		cout << Num << " ";

	cout << endl;

	cout << InBetween(V, 50, 60) << endl;
	cout << InBetween(V, 1, 10) << endl;
	cout << InBetween(V, 5, 7) << endl;
}

class Password_Validator1
{
private:
	char RestrictedChar{'$'};

public:
	bool IsValid(string Password)
	{
		return all_of(Password.begin(), Password.end(), [this](char Character)
					  { return (Character != RestrictedChar); });
	}
};

class Password_Validator2
{
private:
	vector<char> RestrictedChars{'!', '$', '+'};

public:
	bool IsValid(string Password)
	{
		return all_of(Password.begin(), Password.end(), [this](char Character)
					  { return none_of(RestrictedChars.begin(), RestrictedChars.end(), [Character](char symbol)
									   { return Character == symbol; }); });
	}
};

void Test7()
{
	cout << "\n---Test7---" << endl;

	string Password{"holywood1$"};
	Password_Validator1 PV1;

	if (PV1.IsValid(Password))
		cout << "The Password " << Password << " is valid !" << endl;
	else
		cout << "The Password " << Password << " is not valid !" << endl;

	Password = "hollywood1";
	if (PV1.IsValid(Password))
		cout << "The Password " << Password << " is valid !" << endl;
	else
		cout << "The Password " << Password << " is not valid !" << endl;

	cout << "\n";

	Password = "C++Rocks !";
	Password_Validator2 PV2;

	if (PV2.IsValid(Password))
		cout << "The Password " << Password << " is valid !" << endl;
	else
		cout << "The Password " << Password << " is not valid !" << endl;

	Password = "CPlusPlusRocks !";
	if (PV2.IsValid(Password))
		cout << "The Password " << Password << " is valid !" << endl;
	else
		cout << "The Password " << Password << " is not valid !" << endl;

	Password = "CPlusPlusRocks";
	if (PV2.IsValid(Password))
		cout << "The Password " << Password << " is valid !" << endl;
	else
		cout << "The Password " << Password << " is not valid !" << endl;
}

int main()
{
	Test1();
	Test2();
	Test3();
	Test4();
	Test5();
	Test6();
	Test7();

	cout << "\n";
	return (0);
}

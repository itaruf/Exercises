#include <iostream>
#include <vector>
#include <algorithm>

int GlobalX{1000};

using namespace std;

void Test1()
{
	cout << "\n---Test1 --------------------------" << endl;

	int LocalX{100};

	auto L = [LocalX]()
	{
		cout << LocalX << endl;
		cout << GlobalX << endl;
	};
	L();
}

void Test2()
{
	cout << "\n---Test2 --------------------------" << endl;

	int X{100};

	auto L = [X]() mutable
	{
		X += 100;
		cout << X << endl;
	};

	L();
	cout << X << endl;

	L();
	cout << X << endl;
}

void Test3()
{
	cout << "\n---Test3 --------------------------" << endl;

	int X{100};

	auto L = [&X]() mutable
	{
		X += 100;
		cout << X << endl;
	};

	L();
	cout << X << endl;
}

void Test4()
{
	cout << "\n---Test4 --------------------------" << endl;

	int X{100};
	int Y{200};
	int Z{300};

	auto L = [=]() mutable
	{
		X += 100;
		Y += 100;

		cout << X << endl;
		cout << Y << endl;
	};
	L();

	cout << endl;

	cout << X << endl;
	cout << Y << endl;
}

void Test5()
{
	cout << "\n---Test5 --------------------------" << endl;

	int X{100};
	int Y{200};
	int Z{300};

	auto L = [&]()
	{
		X += 100;
		Y += 100;
		Z += 100;

		cout << X << endl;
		cout << Y << endl;
		cout << Z << endl;
	};
	L();

	cout << endl;

	cout << X << endl;
	cout << Y << endl;
	cout << Z << endl;
}

void Test6()
{
	cout << "\n---Test6 --------------------------" << endl;

	int X{100};
	int Y{200};
	int Z{300};

	auto L = [=, &Y]() mutable
	{
		X += 100;
		Y += 100;
		Z += 100;

		cout << X << endl;
		cout << Y << endl;
		cout << Z << endl;
	};
	L();

	cout << endl;

	cout << X << endl;
	cout << Y << endl;
	cout << Z << endl;
}

void Test7()
{
	cout << "\n---Test7 --------------------------" << endl;

	int X{100};
	int Y{200};
	int Z{300};

	auto L = [&, X, Z]() mutable
	{
		X += 100;
		Y += 100;
		Z += 100;

		cout << X << endl;
		cout << Y << endl;
		cout << Z << endl;
	};
	L();

	cout << endl;

	cout << X << endl;
	cout << Y << endl;
	cout << Z << endl;
}

class Person
{
	friend ostream &operator<<(ostream &Os, const Person &RHS);

private:
	string Name;
	int Age;

public:
	Person() = default;
	Person(string Name, int Age) : Name{Name}, Age{Age} {}
	Person(const Person &P) = default;
	~Person() = default;

	string GetName() const
	{
		return Name;
	}
	void SetName(string Name)
	{
		this->Name = Name;
	};
	int GetAge() const
	{
		return Age;
	}
	void SetAge(int Age)
	{
		this->Age = Age;
	}

	auto ChangePerson()
	{
		return [this](string NewName, int NewAge)
		{
			Name = NewName;
			Age = NewAge;
		};
	}
	auto ChangePerson2()
	{
		return [=](string NewName, int NewAge)
		{
			Name = NewName;
			Age = NewAge;
		};
	}
	auto ChangePerson3()
	{
		return [&](string NewName, int NewAge)
		{
			Name = NewName;
			Age = NewAge;
		};
	}
};

ostream &operator<<(ostream &Os, const Person &RHS)
{
	Os << "[Person: " << RHS.Name << " : " << RHS.Age << "]";
	return Os;
}

void Test8()
{
	cout << "\n---Test8 --------------------------" << endl;

	Person P1("P1", 20);
	cout << P1 << endl;

	auto ChangePerson = P1.ChangePerson();
	ChangePerson("Skitty", 30);
	cout << P1 << endl;

	auto ChangePerson2 = P1.ChangePerson2();
	ChangePerson2("Cookie", 5);
	cout << P1 << endl;

	auto ChangePerson3 = P1.ChangePerson3();
	ChangePerson3("Frank", 34);
	cout << P1 << endl;
}

class Lambda
{
private:
	int Y;

public:
	Lambda(int Y) : Y{Y} {};

	void operator()(int X) const
	{
		cout << X + this->Y << endl;
	};
};

void test9()
{
	cout << "\n---Test9 --------------------------" << endl;

	int Y{100};

	Lambda L(Y);
	auto L2 = [Y](int X)
	{ cout << X + Y << endl; };

	L(200);
	L2(200);
}

class People
{
	vector<Person> MyPeople;
	int MaxPeople;

public:
	People(int Max = 10) : MaxPeople(Max) {}
	People(const People &P) = default;

	void add(string Name, int Age)
	{
		MyPeople.emplace_back(Name, Age);
	}
	void SetMaxPeople(int Max)
	{
		MaxPeople = Max;
	}
	int get_max_people() const
	{
		return (MaxPeople);
	}

	vector<Person> GetMaxPeople(int MaxAge)
	{
		vector<Person> Result;
		int Countt{0};

		copy_if(MyPeople.begin(), MyPeople.end(), back_inserter(Result), [this, &Countt, MaxAge](const Person &P)
				{ return (P.GetAge() > MaxAge && ++Countt <= MaxPeople); });
		return (Result);
	}
};

void Test10()
{
	cout << "\n---Test10 --------------------------" << endl;

	People Friends;
	Friends.add("P1", 20);
	Friends.add("Cookie", 5);
	Friends.add("Skitty", 17);

	auto Result = Friends.GetMaxPeople(17);

	cout << endl;
	for (const auto &P : Result)
		cout << P << endl;

	Friends.SetMaxPeople(3);

	Result = Friends.GetMaxPeople(17);

	cout << endl;
	for (const auto &P : Result)
		cout << P << endl;

	Result = Friends.GetMaxPeople(50);

	cout << endl;
	for (const auto &P : Result)
		cout << P << endl;
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
	Test8();
	test9();
	Test10();

	return (0);
}
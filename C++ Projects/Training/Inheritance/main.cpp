#include <iostream>
#include <vector>
#include <memory>

class Elder {
private:
    int x, y;
protected:
    Elder(const int& x, const int& y) : x{ x }, y{ y } {
        std::cout << "Elder Constructor Called" << std::endl;
    }
    ~Elder() = default;
};

class Parent : public Elder {
private:
    int x, y;
    std::string parent_name;
protected:
    Parent(const int& x, const int& y, std::string parent_name) : Elder(x, y), parent_name{ parent_name } {
        std::cout << "Parent Constructor Called" << std::endl;
    }
    Parent(const int& x, const int& y) : Elder(x, y) {
        std::cout << "Parent Constructor Called" << std::endl;
    }
    ~Parent() = default;
};

class Child : public Parent {
private:
    int x, y;
    std::unique_ptr<int> z;
protected:
    Child(const int& x, const int& y, const int& z) : Parent(x, y), z(std::make_unique<int>(z)) {
        std::cout << "Child Constructor Called" << std::endl; 
    }
    ~Child() = default;
};

int main() {

    std::vector<int> v{ 4, 2, 4, 5, 4 };

    for (auto it = v.begin(); it != v.end(); ) {
        if (*it == 4) {
            it = v.erase(it);
        }
        else {
            it++;
        }
    }

    for (const auto& it : v) {
        std::cout << it << " ";
    }

    return (0);
}
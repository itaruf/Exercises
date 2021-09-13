#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

std::string solution(std::string &S);

std::string solution(std::string &S)
{
    auto it = S.find("AA");
    if (it != std::string::npos)
    {
        std::cout << S[it] << " " << S[it + 1] << std::endl;
        S.erase(it, it + 1);
        std::cout << "found AA: " << S << std::endl;
        solution(S);
    }
    it = S.find("BB");
    if (it != std::string::npos)
    {
        std::cout << S[it] << " " << S[it + 1] << std::endl;
        S.erase(it, it + 1);
        std::cout << "found BB: " << S << std::endl;
        solution(S);
    }
    it = S.find("CC");
    if (it != std::string::npos)
    {
        std::cout << S[it] << " " << S[it + 1] << std::endl;
        S.erase(it, it + 1);
        std::cout << "found CC: " << S << std::endl;
        solution(S);
    }
    if (it == std::string::npos)
        return (S);
}

int main()
{
    std::string S{"ACCAABBC"};
    std::cout << solution(S) << std::endl;
    S = "ABCBBCBA";
    std::cout << solution(S) << std::endl;
    S = "BABABA";
    std::cout << solution(S) << std::endl;
}
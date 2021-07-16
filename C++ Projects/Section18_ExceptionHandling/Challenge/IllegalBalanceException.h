#ifndef __ILLEGALBALANCEEXCEPTION_H__
#define __ILLEGALBALANCEEXCEPTION_H__

using std::exception;

class IllegalBalanceException : public exception
{
public:
    IllegalBalanceException() noexcept = default;
    ~IllegalBalanceException() = default;
    virtual const char *what() const noexcept
    {
        return ("Illegal Balance Exception");
    }
};

#endif // __ILLEGALBALANCEEXCEPTION_H__
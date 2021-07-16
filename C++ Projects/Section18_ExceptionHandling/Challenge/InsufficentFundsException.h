#ifndef __INSUFFICENTFUNDSEXCEPTION_H__
#define __INSUFFICENTFUNDSEXCEPTION_H__

using std::exception;

class InsufficentFundsException : public exception
{
public:
    InsufficentFundsException() noexcept = default;
    ~InsufficentFundsException() = default;
    virtual const char *what() const noexcept
    {
        return ("Insufficent Funds Exception");
    }
};

#endif // __INSUFFICENTFUNDSEXCEPTION_H__
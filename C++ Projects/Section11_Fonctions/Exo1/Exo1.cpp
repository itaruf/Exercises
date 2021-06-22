#include <iostream>
#include <cmath>
using std::cin;
using std::cout;
using std::endl;

void TemperatureConversion(double FahrenheitTemperature);
double FahrenheitToKelvin(double FahrenheitTemperature);
double FahrenheitToCelsius(double FahrenheitTemperature);

void TemperatureConversion(double FahrenheitTemperature)
{

    double CelsiusTemperature{FahrenheitToCelsius(FahrenheitTemperature)};
    double KelvinTemperature{FahrenheitToKelvin(FahrenheitTemperature)};

    cout
        << "The fahrenheit temperature " << FahrenheitTemperature << " degrees is equivalent to " << CelsiusTemperature << " degrees celsius and " << KelvinTemperature << " degrees kelvin.";
}

double FahrenheitToKelvin(double FahrenheitTemperature)
{
    return ((5.0 / 9.0) * (FahrenheitTemperature - 32) + 273);
}

double FahrenheitToCelsius(double FahrenheitTemperature)
{
    return ((5.0 / 9.0) * (FahrenheitTemperature - 32));
}

int main()
{
    double FahrenheitTemperature{50.0};
    TemperatureConversion(FahrenheitTemperature);
    return (0);
}

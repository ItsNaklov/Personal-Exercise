// Todo: Create a function called getCircleArea. It should have the radius of the circle as parameter and return the circle area. What happens if we dont return anything in the function?
const radiusCircle = 7;
function getCircleArea(radiusCircle)
{

return 2* Math.PI* radiusCircle;
}
console.log (getCircleArea(radiusCircle));
// Create a function called celciusToFahreneit it should have a parameter called celcius. It should return the temperature in fahrenheit.
function celciusToFahreneit(celcius){
    const degreeFahreneit = celcius *9 / 5 + 32;
    return degreeFahreneit;
}
console.log (celciusToFahreneit(23));
// Try call the function and check with google if the function returns the right value.
function fahrenheitToCelcius(fahrenheit)
{
    const degreeCelcius = (fahrenheit -32) *5 / 9; 
    return degreeCelcius;
}
console.log (fahrenheitToCelcius(73.4));
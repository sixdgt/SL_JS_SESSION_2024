// arrow function in javascript.

let msg = () => {
    return "Happy Coding Day to All Users";
}

console.log(msg());

// adding two numbers using arrow function in javascript
let add = (a, b) => {
    return a + b;
}

console.log(add(12, 13));

// traditional javascript function
function addTwoNumber(a, b){
    return a + b;
}

// returning single statement in arrow function in javascript
let multiply = (a, b) => a * b;

console.log(multiply(12, 13));

// note: we must pass the arguments to the function if they are passed in the operations

// let divide = () => a / b; // we must pass the arguments in the function divide(a, b) otherwise it will raise ReferenceError

// console.log(divide(12, 13));

// exercise: create an arrow function that takes two parameters 1. city_name and 2. country_name. Check the country name if it is "Nepal" then concat the country_name and city_name by converting them to uppercase and return it otherwise return "Invalid Country Name"

let getCountryInfo = (city_name, country_name) => {
    if(country_name === "Nepal"){
        // converting city_name and country_name to Uppercase
        let country = country_name.toUpperCase(); // toUpperCase() is a string method
        let city = city_name.toUpperCase();
        return country + "_" + city;
    } else {
        return "Invalid Country Name";
    }
}

console.log(getCountryInfo("Kathmandu", "Nepal")); // should return "NEPAL_KATHMANDU"

// more shorter form
let getCountryDetail = (city_name, country_name) => {
    if(country_name !== "Nepal"){
        return "Invalid Country Name";
    }
    return country_name.toUpperCase() + "_" + city_name.toUpperCase();
}
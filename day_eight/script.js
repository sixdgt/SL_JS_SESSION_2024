// var, let and const 
console.log(address); // undefined
var address = "Dav";
console.log(address);

// console.log(country); // initialization error
let country = "Nepal";
console.log(country);

// variable reassigned and redeclaration
var place = "Kathmandu";
console.log(place);

place = "Patan"; // re-assignment
console.log(place);

var place = "Bhaktapur"; // re-declaration
console.log(place);

// let - assigned but can't re-declared
let city = "Pokhara";
console.log(city);
city = "Dhangadi";

// let city = "Dharan"; // we cannot re-declare city again 
// console.log(city);

// const - assigned once and can't be re-assigned
// constant variable or value - not changeable variable

const pi = 3.1428;
// pi = 3.14; // error: Assignment to constant variable.

// scope case
var code = "DAVPROMO2024";
function showCode() {
  console.log(code); // DAVPROMO2024
}
showCode();

let msg = "Hello Everyone";
function showMessage(){
    console.log(msg); // Hello Everyone
    msg = "Day eight - let, var and const";
    console.log(msg); // Day eight - let, var and const
}
showMessage();

// case - if statement using var to define variable
var status = true;
if(status){
    var username = "Super Admin";
    console.log(username); // Super Admin
}
console.log(username); // Super Admin

// case - not defined in case of function
function getMessage(){
    var message = "Thursday is the fifth day of the week";
    console.log(message); // Thursday is the fifth day of the week
}
getMessage(); // Thursday is the fifth day of the week
// console.log(message); // error message

// case if statement inside function
function checkVarCase(){
    if(status){
        var user = "Goblin";
        console.log(user); // Goblin
    }
    console.log(user); // Goblin
}
checkVarCase();

// in case of let
function checkLetCase(){
    if(status){
        let count = 1;
        console.log(count); // 1
    }
    //console.log(count); // ReferenceError: count is not defined
}
checkLetCase();
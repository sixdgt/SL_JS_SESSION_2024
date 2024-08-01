// Operators in JavaScript
var title = "Arithmetic Operators in JavaScript";

// 1. Arithmatic Operators in JavaScript
var price = 1500.45;
var discount = 250.50;
var vat = 150;

var total_with_vat = price + vat;
var total_with_discount = total_with_vat - discount;
// dispplaying the price and discount in console
console.log(title);
console.log("Item Price: " + price);
console.log("Item Discount: " + discount);
console.log("Vat Amount: " + vat);
console.log("Price including vat: " + total_with_vat);
console.log("Price including discount: " + total_with_discount);
console.log("Total Amount to pay: " + total_with_discount);
// displaying the price and discount in html page
var am_title = document.getElementById("am_title");
am_title.innerHTML = title;

var am_price = document.getElementById("price");
am_price.innerHTML = "Item Price: " + price;

var am_discount = document.getElementById("discount");
am_discount.innerHTML = "Item Discount: " + discount;

var am_vat = document.getElementById("vat");
am_vat.innerHTML = "Vat Amount: " + vat;

var am_total_with_vat = document.getElementById("total_wtih_vat");
am_total_with_vat.innerHTML = "Price including vat: " + total_with_vat;

var am_total_with_discount = document.getElementById("total_with_discount");
am_total_with_discount.innerHTML = "Price including discount: " + total_with_discount;

// modulas example
var a = 10;
var b = 3;
console.log("Modulus of a and b: " + a % b);

// 2. Assignment Operator
var as_title = document.getElementById("as_title");
as_title.innerHTML = "Assignment Operator in JavaScript Example";

var x = 10;
var y = 20;

console.log("Value of x: " + x);
console.log("Value of y: " + y);

var value_of_x = document.getElementById("value_of_x");
value_of_x.innerHTML = "Value of x: " + x;

var value_of_y = document.getElementById("value_of_y");
value_of_y.innerHTML = "Value of y: " + y;

x += y; // x = x + y
console.log("x after addition: " + x);
var addition_of_x = document.getElementById("addition");
addition_of_x.innerHTML = "x after addition: " + x;

x -= y; // x = x - y
console.log("x after subtraction: " + x);
var subtraction_of_x = document.getElementById("subtraction");
subtraction_of_x.innerHTML = "x after subtraction: " + x;

x *= y; // x = x * y
console.log("x after multiplication: " + x);
var multiplication_of_x = document.getElementById("multiplication");
multiplication_of_x.innerHTML = "x after multiplication: " + x;

x /= y; // x = x / y
console.log("x after division: " + x);
var division_of_x = document.getElementById("division");
division_of_x.innerHTML = "x after division: " + x;

x %= y; // x = x % y
console.log("modulas of x to y: " + x);
var modulas_of_x = document.getElementById("modulas");
modulas_of_x.innerHTML = "modulas of x to y: " + x;
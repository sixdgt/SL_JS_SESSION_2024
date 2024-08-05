// 3. Comparative Operator in JavaScript
var num1 = 12;
var num2 = 23;

console.log("Comparison of num1 > num2: " + (num1 > num2)); // false

console.log("Comparison of num1 < num2: " + (num1 < num2)); // true

console.log("Comparison of num1 >= num2: " + (num1 >= num2)); // false

console.log("Comparison of num1 <= num2: " + (num1 <= num2)); // true

console.log("Comparison of num1 == num2: " + (num1 == num2)); // false

console.log("Comparison of num1 != num2: " + (num1 != num2)); // true

console.log("Comparison of num1 === num2: " + (num1 === num2)); // false

console.log("Comparison of num1 !== num2: " + (num1 !== num2)); // true

var coTitle = document.getElementById("co_title");
coTitle.innerHTML = "Comaparative Operators in JavaScript";

var numOne = document.getElementById("num_one");
numOne.innerHTML = "Number One: " + num1;

var numTwo = document.getElementById("num_two");
numTwo.innerHTML = "Number Two: " + num2;

var greaterThan = document.getElementById("greater_than");
greaterThan.innerHTML = "Comparison of num1 > num2: " + (num1 > num2);

var lessThan = document.getElementById("lesser_than");
lessThan.innerHTML = "Comparison of num1 < num2: " + (num1 < num2);

var greaterEqualsTo = document.getElementById("greater_than_equals_to");
greaterEqualsTo.innerHTML = "Comparison of num1 >= num2: " + (num1 >= num2);

var lessEqualsTo = document.getElementById("lesser_than_equals_to");
lessEqualsTo.innerHTML = "Comparison of num1 <= num2: " + (num1 <= num2);

var equalsTo = document.getElementById("equals_to");
equalsTo.innerHTML = "Comparison of num1 == num2: " + (num1 == num2);

var notEqualsTo = document.getElementById("not_equals_to");
notEqualsTo.innerHTML = "Comparison of num1 != num2: " + (num1 != num2);

var strictEqualsTo = document.getElementById("double_equals_to");
strictEqualsTo.innerHTML = "Comparison of num1 === num2: " + (num1 === num2);

var strictNotEqualsTo = document.getElementById("not_double_equals_to");
strictNotEqualsTo.innerHTML = "Comparison of num1 !== num2: " + (num1 !== num2);

// 4. Logical Operator in JavaScript
var username = "david";
var password = "david123";

console.log("Logical AND: " + (username === "david" && password === "david123")); // true
console.log("Logical AND: " + (username === "david" && password === "david")); // false

console.log("Logical OR: " + (username === "admin" || password === "admin123")); // false
console.log("Logical OR: " + (username === "david" || password === "admin123")); // true

console.log("Logical NOT: " + !(username === "admin" && password === "admin123")); // true
console.log("Logical NOT: " + !(username === "admin" || password === "david123")); // false
console.log("Logical NOT: " + !username === "admin" && password === "david123"); // true

var loTitle = document.getElementById("lo_title");
loTitle.innerHTML = "Logical Operators in JavaScript";

var usernameInput = document.getElementById("uname");
var passwordInput = document.getElementById("pwd");

usernameInput.innerHTML = username;
passwordInput.innerHTML = password;

var andResult = document.getElementById("and_result");
andResult.innerHTML = "Logical AND: " + (username === "david" && password === "david123");

var orResult = document.getElementById("or_result");
orResult.innerHTML = "Logical OR: " + (username === "admin" || password === "david123");

var notResult = document.getElementById("not_result");
notResult.innerHTML = "Logical NOT: " + !(username === "admin" || password === "david123");

// 5. Bitwise Operator in JavaScript
console.log("Bitwise AND: " + (10 & 5)); // 0
console.log("Bitwise OR: " + (10 | 5)); // 15
console.log("Bitwise XOR: " + (10 ^ 5)); // 15
console.log("Bitwise NOT: " + (~10)); // -11
console.log("Bitwise Left Shift: " + (10 << 1)); // 20
console.log("Bitwise Right Shift: " + (10 >> 1)); // 5

// 6. Ternary Operator in JavaScript
var age = 25;
var result = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Operator Result: " + result);
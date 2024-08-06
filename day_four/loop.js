// Loop in JavaScript

// 1. for loop
for (var i = 0; i < 10; i++){
    console.log("Value of i: " + i);
}

// 2. while loop
var num = 12;
while (num <= 20) {
    console.log("Value of num: " + num);
    num++;
}

// 3. integrating if statement with for loop
// continue statement in javascript - skip the current iteration
for (var i = 0; i < 10; i++){
    if(i == 4){
        console.log("Before continue statement");
        continue;
        console.log("After continue statement");
    }
    console.log("Value of i: " + i);
}

// 4. do while loop
var is_login = "Yes";
do {
    console.log("User logged status: " + is_login);
    break;
} while (is_login === "Yes");

do {
    console.log("User logged status: " + is_login);
} while(is_login === "No");
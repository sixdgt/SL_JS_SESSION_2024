// Defining fuctions in JavaScript
var USERNAME = "superadmin";
var PASSWORD = "admin123";

function checkCredentials(param_username, param_password){
    console.log("Checking credentials");
    console.log(USERNAME);
    if(param_username === USERNAME && param_password === PASSWORD){
        console.log("Login successful");
        return true;
    } else {
        console.log("Login failed");
        return false;
    }
}

// invoking the function
checkCredentials("hello", "pass");

// exercise
// Create a function that takes one parameter i.e user role
// 1. inside the function check the user role
// a. if the user role is "admin" then return "ADMIN"
// b. if the user role is "user" then return "USER"
// c. if the user role is nothing then return "GUEST"

// solution one: using if else if statement
function getUserRole(user_role){
    if(user_role === "admin"){
        return "ADMIN";
    } else if(user_role === "user"){
        return "USER";
    } else {
        return "GUEST";
    }
}

console.log(getUserRole("user")); // USER
console.log(getUserRole("admin")); // ADMIN
console.log(getUserRole("nothing")); // GUEST - if the user role value is passed anything rather than "admin" and "user" then it will return "GUEST"

// solution two: using switch statement
function showUserRole(user_role){
    switch(user_role){
        case "admin":
            return "ADMIN";
        case "user":
            return "USER";
        default:
            return "GUEST";
    }
}

console.log(showUserRole("user")); // USER
console.log(showUserRole("admin")); // ADMIN
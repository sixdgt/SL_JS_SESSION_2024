// Cookies - storing data in browser storage
// it manages the states of the user's data for certain interval of time

// storing data in cookies
document.cookie = "name=DAV College";

const username = "superadmin";
document.cookie = "username=" + username;

// reading data from cookies
console.log(document.cookie);

// storing all cookies data in variable
const cookies = document.cookie.split('; ');
console.log(cookies);
console.log(cookies.length); // length of cookies
// further splitting array into key and value
const cookiesName = cookies[0].split('=');
const cookiesUsername = cookies[1].split('=');
const cookiesCsrf = cookies[2].split('=');
// here split() is a string method which splits any string with passed sub-string as a parameter and returns the array of splitted strings
// Note: substring must be avaiable in the string with sequence
console.log(cookiesName);
console.log("Key: " + cookiesName[0], "Value: " + cookiesName[1]);
console.log(cookiesUsername);
console.log(cookiesCsrf);

// cookies.forEach(cookie => {
//     const [key, value] = cookie.split('=');
//     if (key === 'username') {
//         console.log('Username:', value);
//     }
// });

// exercise no 1: create a html form with input fields username and password. Then store the data into cookies whenever the user submitted the form
let uname = document.getElementById("username");
let pwd = document.getElementById("password");
let btnSubmit = document.getElementById("btnSubmit");

// method one: using ordinary function
btnSubmit.addEventListener('click', function(){
    document.cookie = "uname=" + uname.value;
    document.cookie = "pwd=" + pwd.value;
}); // ordinary function

// methoid two: using arrow function
btnSubmit.addEventListener('click', () => {
    document.cookie = "uname=" + uname.value;
    document.cookie = "pwd=" + pwd.value;
}); // arrow function

// do research how to store cookies using expiry time


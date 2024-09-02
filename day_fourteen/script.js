// events in javascript
function showMessage(){
    console.log("Today we are going to study about events in javascript");
}

function getInfo(){
    console.log("I am clicked double");
}

// event listeners in button
let btnTwo = document.getElementById("btnTwo");
btnTwo.addEventListener("click", function(event){
    // console.log("I am clicked single time");
    // using event listener
    let fullName = document.getElementById("fullName");
    console.log(event.target.innerHTML); // content inside the element
    console.log(fullName.value); // return input field data
    console.log(event.target.textContent); // return content inside the element
});

// arrow function with event
btnTwo.addEventListener("dblclick", () => {
    console.log("I am clicked double");
});

// exercise function with event
let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");
let btnAdd = document.getElementById("add");

btnAdd.addEventListener("click", () => {
    if(numOne.value === "" || numTwo.value === ""){
        // alert() is a built-in function of JS
        alert("Please enter the number first");
    } else {
        let sum = parseInt(numOne.value) + parseInt(numTwo.value);
        // parseInt() - converts string to number
        console.log("Sum: ", sum);
        alert("Sum of two number is: " + sum);
    }
});

// exercise number two: create one input field i.e country name and create an country list object in javascript
// check if country input by the use exist in the country list object or not
// if exist then show message "Country found" with green background
// if not then show message "Country Not Found" with red background
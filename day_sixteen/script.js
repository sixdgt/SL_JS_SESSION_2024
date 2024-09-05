// Form Validation in JavaScript
// all input fields
const firstName = document.getElementById("first_name");
const middleName = document.getElementById("middle_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const address = document.getElementById("address");

// add student button
const addStudent = document.getElementById("addStudent");

// adding event to add student button so that we can check user input
addStudent.addEventListener("click", (event) => {
    event.preventDefault(); // preventing form submission

    // validating first name
    if(firstName.value === "") {
        console.log("Please enter first name");
        // alert("Please enter first name");
        document.getElementById("error_first_name").innerHTML = "Please enter frist name";
    }
    // validating middle name
    if (middleName.value === "") {
        console.log("Please enter middle name");
        // alert("Please enter middle name");
        document.getElementById("error_middle_name").innerHTML = "Please enter middle name";
    }
    // validating last name
    if(lastName.value === "") {
        console.log("Please enter last name");
        // alert("Please enter last name");
        document.getElementById("error_last_name").innerHTML = "Please enter last name";
    }
    // validating email
    if(email.value === "") {
        console.log("Please enter email");
        // alert("Please enter email");
        document.getElementById("error_email").innerHTML = "Please enter email";
    }
    // validating contact number
    if(contact.value === "") {
        console.log("Please enter contact");
        // alert("Please enter contact");
        document.getElementById("error_contact").innerHTML = "Please enter contact";
    }
    // validating address
    if(address.value === "") {
        console.log("Please enter address");
        // alert("Please enter address");
        document.getElementById("error_address").innerHTML = "Please enter address";
    }
});


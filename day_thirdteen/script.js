const headingOne = document.getElementsByTagName("h1");
headingOne[0].textContent = "Day 13 - DOM Maniputaltion";

// creating element
const newHeading = document.createElement("h3");
newHeading.textContent = "Newly Created Heading Three";
document.body.appendChild(newHeading);

// removing element
const headingThree = document.getElementsByTagName("h3")[0];
// document.body.removeChild(headingThree);

// changing style
headingThree.style.color = "white";
headingThree.style.fontSize = "2rem";
headingThree.style.fontFamily = "Arial";
headingThree.style.textAlign = "center";
headingThree.style.backgroundColor = "red";
headingThree.style.border = "1px solid red";
headingThree.style.padding = "15px";

// changing attribute
headingThree.setAttribute("data-id", "new-heading");
console.log(headingThree.getAttribute("data-id"));

// element by class name

const headingByClass = document.getElementsByClassName("div");
console.log(headingByClass);
headingByClass[0].textContent = "This is a heading content";

// query selector
const divQuerySelector = document.querySelector(".div"); // select by class name
console.log(divQuerySelector);

const headQuerySelector = document.querySelector("#title"); // select by id
console.log(headQuerySelector);
console.log(headQuerySelector.textContent);

// query selector all
const divQuerySelectorAll = document.querySelectorAll("div"); // selecting by tag name
console.log(divQuerySelectorAll);
console.log(divQuerySelectorAll[0]); // it will fetch the element at index 0
console.log(divQuerySelectorAll[1]); // it will fetch the element at index 1

// adding class name to existing element
divQuerySelectorAll[1].classList.add("div-text-color");

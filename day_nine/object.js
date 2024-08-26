// Day Nine - Object Continuation
// creating object with new Keyword
let person = new Object();

person.name = "John Doe";
person.email = "john@gmail.com";
person.address = "Kathmandu";

console.log(person);

// accessing properties of objects created using new keyword
console.log("Name:", person.name);
console.log("Email:", person.email);
console.log("Address:", person.address);

// modifying/updating properties of objects created using new keyword
console.log("Before: ", person.email);
person.email = "john.doe@gmail.com";
console.log("After: ", person.email);

// deleting properties of objects
console.log("Before deleting email property:", person);
delete person.email;
console.log("After deleting email property:", person);

// checking if a property exists in an object
console.log("Property exists:", "name" in person); // true
console.log("Property exists:", "phone" in person); // false

// checking the type of a property 
console.log("Type of name property:", typeof person.name); // string
console.log("Type of email property:", typeof person.email); // undefined - because already deleted in line number 23
console.log("Type of address property:", typeof person.address); // string

// looping through properties of an object
for(let key in person){
    console.log(key, ":", person[key]);
}

// creating class using es6
class Product {
    constructor(title, category, price){
        this.title = title;
        this.category = category;
        this.price = price;
    }

    getTitle(){
        return this.title;
    }

    setTitle(title){
        this.title = title;
    }
}

let product = new Product("Mouse", "Accessories", 2500.00);
console.log(product);
console.log("Title:", product.title);

console.log("Category: ", product.getTitle());
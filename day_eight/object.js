// object in javascript
let item = {
    item_id: 1,
    item_name: "Mouse",
    item_category: "Accessories",
    item_price: 2500.00,
    item_spec: "High quality mouse with RGB color",
    item_quantity: 12
}
// object consist of properties i.e are in key-value pairs

// accessing properties of objects
console.log(item); 
console.log("ID:", item.item_id);
console.log("Name:", item.item_name);
console.log("Category:", item.item_category);
console.log("Price:", item.item_price);
console.log("Spec:", item.item_spec);
console.log("Quantity:", item.item_quantity);

// modifying/updating properties of objects
console.log("Before: ", item.item_category);
item.item_category = "Computer Accessories"; // updating category
console.log("After: ", item.item_category);

console.log("Before: ", item.item_name);
item.item_name = "Gaming Mouse"; // updating name
console.log("After: ", item.item_name);
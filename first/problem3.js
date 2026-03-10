let product = {
    name : "anas",
    price : 1200,
    inStock : true
}

let product1 = Object.create(product);
product1.name = "ABC";
product1.price = 500;
product1.inStock = false;

let product2 = Object.create(product);
product2.name = "PQR";
product2.price = 1000;
product2.inStock = false;

let product3 = Object.create(product);
product3.name = "XYZ";
product3.price = 100;
product3.inStock = true;

console.log(product1);
console.log(product2);
console.log(product3);
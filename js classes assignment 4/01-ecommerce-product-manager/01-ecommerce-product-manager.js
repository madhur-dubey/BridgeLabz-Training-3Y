// Q1: E-Commerce Product Manager
"use strict";

// A class is a blueprint for creating products.
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    displayDetails() {
        return `${this.name} | ${this.category} | ₹${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Keyboard", 1200, "Accessories"),
    new Product(2, "Mouse", 700, "Accessories"),
    new Product(3, "Monitor", 8500, "Electronics")
];

products[0].applyDiscount(10);

console.log("All products:");
products.forEach(product => console.log(product.displayDetails()));

console.log("\\nProducts costing more than ₹1000:");
const expensiveProducts = products.filter(product => product.price > 1000);
expensiveProducts.forEach(product => console.log(product.displayDetails()));

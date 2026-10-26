"use strict";

// Q9: Shopping cart with a simple coupon code.
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(code) {
        // Accept examples such as SAVE20 and DISC10.
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code);
        if (!match) {
            throw new Error("Invalid coupon. Use a code like SAVE20 or DISC10.");
        }

        const discountPercent = Number(match[2]);
        if (discountPercent < 1 || discountPercent > 100) {
            throw new Error("Coupon discount must be between 1 and 100.");
        }

        return this.getTotal() * (1 - discountPercent / 100);
    }
}

const cart = new Cart();
cart.addItem("Notebook", 80, 2);
cart.addItem("Pen", 20, 3);
cart.addItem("Backpack", 900, 1);

console.log("Cart items:", cart.items);
console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);

const couponCode = "SAVE20"; // Try DISC10 or an invalid code.
try {
    const finalTotal = cart.applyCoupon(couponCode);
    console.log(`Coupon: ${couponCode}`);
    console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
} catch (error) {
    console.log(`Coupon error: ${error.message}`);
}

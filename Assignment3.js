/*
    Apply transformations and calculations to array elements, and filter elements based on a condition
    You have an array called productPrices with various product prices.
    Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
    Use the filter method to create a new array called affordableProducts containing only products priced below $50
    Calculate the total cost of all items in the affordableProducts array using the reduce method.
*/
const productPrices = [100, 200, 400, 12, 120];
const discountedPrices = productPrices.map((price) => price * 0.9);
console.log("Discounted Prices: " + discountedPrices); // Logs the discounted prices

const affordableProducts = discountedPrices.filter((price) => price < 50);
console.log("Affordable Products: " + affordableProducts); // Logs the affordable products

const totalCost = affordableProducts.reduce((sum, price) => sum + price, 0);
console.log("Total Cost of Affordable Products: " + totalCost); // Logs the total cost

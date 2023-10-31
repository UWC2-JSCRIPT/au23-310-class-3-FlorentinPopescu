// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

"use strict";
  
const logReceipt = (...items) => {
  /*
   * display orders and calculate total amount
   * @param {Array} orders list 
   * @return {String} console logs  
   */

  let total = 0;
  
  if(items.length < 1) {
    throw ("at least one item must be specified");
  } else if (!items.some(item => (typeof item !== 'object') || (Object.keys(item).length >= 2))) {
    throw ("items are not objects");
  } else if (items.includes(undefined) || items.includes(null)) {
    throw ("items cannot be null or undefined"); 
  } else {
    
    // log on console item description & price and calculate total amount
    items.forEach(item => {
      console.log(`${item.descr} - \$${item.price}`);
      total += item.price;
    });
    
    // log on console the total amount
    console.log(`Total - \$${total}`);
  }
  
}

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97



//*******************************************************************/
const logReceiptTax = (tax, ...items) => {
  /*
   * display orders and calculate total amount
   * @param {Array} orders list 
   * @param {Number} applied tax 
   * @return {String} console logs  
   */

  let total = 0;
  
  if(items.length < 1) {
    throw ("at least one item must be specified");
  } else if (!items.some(item => (typeof item !== 'object') || (Object.keys(item).length >= 2))) {
    throw ("items are not objects");
  } else if (items.includes(undefined) || items.includes(null)) {
    throw ("items cannot be null or undefined"); 
  } else {
    
    // log on console item description & price and calculate total amount
    let itemsCount = 0;
    let subTotalWithTax = 0;

    items.forEach(item => {
      console.log(`${item.descr} - \$${item.price}`);
      
      itemsCount += 1;
      subTotalWithTax += item.price * (1 + tax);
      total += item.price;
      
      console.log(`   subtotal with tax for ${itemsCount} orders: `, subTotalWithTax.toFixed(2));
    });
    
    // adjust the total for tax
    let totalWIthTax = total * (1 + tax);

    // log on console the total amount
    console.log(`Total with tax - \$${totalWIthTax.toFixed(2)}`);
  }
  
}

console.log("\nEXTRA CREDIT:");

// Check
logReceiptTax(
  0.1,
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
 
'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu =[...restaurant.starterMenu, ...restaurant.mainMenu];

// Looping
// The item variable will store all elements in array.
// for (const item of menu){
//   console.log(item);
// }

// What if we want the current index? 
// entries() -- is a method to interate arrays which create arrays.
// So, for example if we want to print a nice menu, we could edit the console
// and print the menu.

for(const item2 of menu.entries()){

  /* The result is an array, so what is really happening is:
    [0,"Focaccia"]
    [1,"Bruschetta"]
    [2,"Garlic Bread"]
    [3,"Caprese Salad"]
    [4,"Pizza"]
    [5,"Pasta"]

    The number in the [] indicates what to print, in this case (0 for first element of the array of entries)
    [0]
    [1]
    [2]
    [3]
    [4]
    [5]

    The number in the [] indicates what to print, in this case (1 for second element of the array of entries)
    ["Focaccia"]
    ["Bruschetta"]
    ["Garlic Bread"]
    ["Caprese Salad"]
    ["Pizza"]
    ["Pasta"]

  */

    console.log(`${item2[0]+1}: ${item2[1]}`);

}


// But this is the old way, we could do this the modern way.

// With Destructuring
for(const [i, el] of menu.entries()){
  /* The result is the same */
    console.log(`${i+1}: ${el}`);
}


'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(straterindex, mainindex) {
        return [this.starterMenu[straterindex], this.mainMenu[mainindex]];
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
let [main, , second] = restaurant.categories;
console.log(main, second);
//const temp = main;
//main = second;
//second = temp;
[main, second] = [second, main];
console.log(main, second);
console.log(restaurant.order(2, 0));
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);
const [p = 1, q = 1, j = 1, k] = [8, 9];
console.log(p, q, j, k);
const { name, openingHours } = restaurant;
console.log(name, openingHours);
const { name: restaruantname, openingHours: hours } = restaurant;
console.log(restaruantname, hours);
console.log(hours);
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
let a = 23;
let b = 10;
const obj = {
    a: 10,
    b: 11,
    c: 12,
};
({ a, b } = obj);
console.log(a, b);
const arrat = [1, 2, 3];
const newarr = [1, 2, ...arrat];
console.log(newarr);
console.log(...newarr);
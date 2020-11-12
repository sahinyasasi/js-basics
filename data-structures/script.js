'use strict';
const hours1 = {
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
};
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
            open: 0,
            close: 24,
        },
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`hey here ypour ${ing2}and ${ing3}`);
    },
    ordering: function(mainmenu, ...others) {
        console.log(mainmenu);
        console.log(others);
    },
    hours1,
};
/*
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
const newmenu = [...restaurant.mainMenu, 'broncii'];
console.log(newmenu);
/*const ingredient = [
    prompt("let's make pasta"),
    prompt("let's make ing2"),
    prompt("let's make ing3"),
];
console.log(ingredient);*/
//restaurant.orderPasta(...ingredient);
//restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]);
/*const newrestarunt = {...restaurant, founder: 'me' };
console.log(newrestarunt);
const [pizza, rose, ...otherfood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log(pizza, rose, otherfood);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
restaurant.ordering('pizza', 'menu', 'you');
//restaurant.numguests = 23;
const guests = restaurant.numguests ? restaurant.numguests : 10;
console.log(guests);
console.log(restaurant.numguests || 10);
if (restaurant.ordering) {
    restaurant.ordering('me', 'you');
}
restaurant.ordering && restaurant.ordering('me', 'you');
const menus = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menus) console.log(item);
console.log(restaurant);
const orderSet = new Set(['hi', 'hello', 'hi']);
console.log(orderSet);
console.log(new Set('string'));
console.log(orderSet.size);
console.log(orderSet.has('hi'));
orderSet.add('me');
orderSet.delete('hi');
console.log(orderSet);
const staff = ['waiter', 'chef', 'waiter'];
const unique = [...new Set(staff)];
console.log(unique);
const rest = new Map();
rest.set('name', 'kittu');
rest.set(1, 'kittu');
rest.set(2, 'gotti');

rest
    .set('categories', ['hi', 'hello', 'you'])
    .set('me', 'hi')
    .set('mes', 'you');
console.log(rest);
console.log(rest.get('me'));
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);
console.log(question);
console.log(Object.entries(hours1));
const hoursMap = new Map(Object.entries(hours1));
console.log(hoursMap);
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
*/
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737' [0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
    else console.log('You got lucky 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');*/
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
    'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();

    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
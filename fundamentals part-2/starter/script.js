'use strict';
/*slet hasDriverslicense = false;
const passTest = true;
if (passTest) hasDriverslicense = true;
if (hasDriverslicense) console.log('i can drive');
//const interface = "hi";
//const private = 123;
//functions
function logger() {
    console.log("hi");
}
logger();
logger();

function fruit(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples}applesand ${oranges}oranges`;
    return juice;
}
const xyz = console.log(fruit(3, 0));

function clasAge(age) {
    return 2037 - age;
}
const birthyear = clasAge(19);
console.log(birthyear);
const clas = function(age) {
    return 2037 - age;
}
const birthyear2 = clas(19);
console.log(birthyear2);
const clas2 = age => 2037 - age;
const clas3 = clas2(19);
console.log(clas3);
const yearsRetirment = age => {
    const birthyear = 2037 - age;
    const retire = 65 - age;
}


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
const friends = ['sneha', 'deek', 'banda'];
console.log(friends[0]);
const x = new Array('sneha', 'deek', 'banda');
console.log(x[1]);
console.log(x.length);
console.log(x[x.length - 1]);
x[2] = 'mani';
console.log(x);

const calcAge = function(birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Basic Array Operations (Methods)
const friend = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friend.push('Jay');
console.log(friend);
console.log(newLength);

friend.unshift('John');
console.log(friend);

// Remove elements
friend.pop(); // Last
const popped = friend.pop();
console.log(popped);
console.log(friend);

friend.shift(); // First
console.log(friend);

console.log(friend.indexOf('Steven'));
console.log(friend.indexOf('Bob'));

friend.push(23);
console.log(friend.includes('Steven'));
console.log(friend.includes('Bob'));
console.log(friend.includes(23));

if (friend.includes('Steven')) {
    console.log('You have a friend called Steven');
}
const jonasArray = ['jonas',
    'schemat',
    2013 - 1, ['hi', 'hello']
];
const jonas = {
    firstName: "jonas",
    lastName: "schemat",
    year: 2013,
    nus: ['hi', 'hello']
};
console.log(jonas.year);
console.log(jonas["firstName"]);
console.log(jonasArray);
const namekey = "Name";
console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey]);
const intrest = prompt("waht are u intrested in");
if (jonas[intrest]) {
    console.log(jonas[intrest]);
} else {
    console.log("not valid qsn");
}
jonas.location = "junctiion";
jonas['pin'] = 521105;
console.log(jonas);
console.log(`${jonas.firstName}has ${jonas.nus.length}bestfriends`);
const jona = {
    firstName: "jonas",
    lastName: "schemat",
    year: 2013,
    nus: ['hi', 'hello'],
    age: function(year) {
        return 2037 - this.year;

    }
};
console.log(jona.age(2000));
console.log(jona['age'](2000));
for (let rep = 1; rep <= 10; rep++) {
    console.log(`do it ${rep}times`);
}
for (let i = 0; i < jona.length; i++) {
    console.log(jona.nus[i]);
}
let myArray = ["one", "two", "three", "four"];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

let names = ["hi", true, 1, "wtsup"];
let names1 = [];
for (let i = 0; i < names.length; i++) {
    console.log(names[i], typeof names[i]);
    // names1[i] = typeof names[i];
    names1.push(typeof names[i]);
}
console.log(names1);*/
let old = [1999, 2000, 2001];
let aGE = [];
for (let index = 0; index < old.length; index++) {
    aGE.push(2037 - old[index]);

}
console.log(aGE);
let names = ["hi", true, 1, "wtsup"];

for (let i = 0; i < names.length; i++) {
    if (typeof names[i] !== "string") continue;
    console.log(names[i], typeof names[i]);

}
for (let i = 0; i < names.length; i++) {
    if (typeof names[i] === "number") break;
    console.log(names[i], typeof names[i]);

}

for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i], i);
}

for (let exer = 1; exer < 4; exer++) {

    for (let it = 1; it < 6; it++) {
        console.log(`doing exercise${exer} for ${it}time`);
    }
}

let x = 1;
while (x < 5) {
    console.log(`hi how are u???${x}`);
    x++;
}


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
'use strict';
/*console.log(this);
const clacAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};
clacAge(1999);
const clacAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};
clacAgeArrow(1998);
const jonas = {
    year: 1999,
    clacage: function() {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.clacage();
const matilda = {
    year: 2017,
};
matilda.clacage = jonas.clacage;
matilda.clacage();
const r = jonas.clacage;
r();
var firstname = 'matilda';*/
const safe = this;
const jonas = {
    year: 1999,
    firstname: 'sai',

    clacage: function() {
        console.log(this);
        console.log(2037 - this.year);
        const isMillenial = function() {
            console.log(safe);
            console.log(safe.year >= 1981 && safe.year <= 1996);
        };
        isMillenial();
    },

    greet: () => console.log(`hey ${this.firstname}`),
};
jonas.greet();
jonas.clacage();
console.log(this.firstname);
/*const addExp = function(a, b) {
    console.log(arguments);
    return a + b;
};
addExp(2, 6);
var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addExp(2, 3, 4, 5);
addArrow(2, 3, 4, 5);*/
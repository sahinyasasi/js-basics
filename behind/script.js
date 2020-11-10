'use strict';
console.log(this);
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
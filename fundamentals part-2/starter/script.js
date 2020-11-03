'use strict';
let hasDriverslicense = false;
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
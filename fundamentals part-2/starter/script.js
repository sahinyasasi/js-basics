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
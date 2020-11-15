'use strict';
/*const bookings = [];
const createBooking = function(
    flighNumber,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    const booking = {
        flighNumber,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
    console.log(bookings);
};
createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 30);
const flight = 'LH123';
const jonas = {
    name: 'jonas',
    passport: 1234567,
};
const checkIn = function(flightNum, passenger) {
    flightNum = 'LH1999';
    passenger.name = 'mr.' + passenger.name;
    if (jonas.passport === 1234567) {
        alert('checkIN');
    } else {
        alert('error');
    }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
const nrePassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000);
};
nrePassport(jonas);
checkIn(flight, jonas);*/

const oneWord = function(string) {
    return string.replace(/ /g, '').toUpperCase();
};
const upperFirstWord = function(string) {
    const [first, ...others] = string.split(' ');

    return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function(string, fn) {
    console.log(string);
    console.log(fn(string));
    console.log(fn.name);
};
transformer('my name is sahinya', upperFirstWord);
transformer('my name is Sahinya', oneWord);
const high5 = function() {
    console.log('hi');
};
['hi', 'hello'].forEach(high5);
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting},${name}`);
    };
};
greet('hello')('jonas');
const greetArr = greeting => name => console.log(`${greeting},${name}`);
greetArr('hi')('hello');
const me = {
    airline: 'me',
    iataCode: 'LH',
    bookings: [],
    //book:function(){},
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};
me.book(239, 'Jonas Schmedtmann');
me.book(635, 'John Smith');
console.log(me);
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = me.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(me, 239, 'Mary Cooper');
console.log(me);
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
const bookEW = book.bind(eurowings);
const bookLH = book.bind(me);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
me.planes = 300;
me.buyplane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', me.buyplane.bind(me));
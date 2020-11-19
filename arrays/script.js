'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const createUserNames = function(accs) {
    accs.forEach(function(acc) {
        acc.userName = acc.owner
            .toLowerCase()
            .split(' ')
            .map(
                name => name[0] //function(name) {
                //return name[0];}
            )
            .join('');
    });
};
createUserNames(accounts);
console.log(accounts);

const calPrintBalance = function(accs) {
    accs.balance = accs.movements.reduce((acc, value) => acc + value, 0);
    labelBalance.textContent = `${accs.balance}EUR`;
};

const displayMovements = function(movements, sort = false) {
    containerMovements.innerHTML = '';
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
    movs.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `<div class="movements__row"> 
                <div class = "movements__type movements__type--${type}" > ${
      i + 1
    }
            ${type} </div>
            
                <div class = "movements__value" > ${mov} EUR</div> 
               </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
const calDisplaySummary = function(accs) {
    const incomes = accs.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}EUR`;

    const outs = accs.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(outs)}EUR`;
    const intrest = accs.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * accs.interestRate) / 100)
        .filter((int, i, arr) => int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${intrest}EUR`;
};
const updateUI = function(acc) {
    displayMovements(acc.movements);
    calPrintBalance(acc);
    calDisplaySummary(acc);
};
let currentAccount;
btnLogin.addEventListener('click', function(e) {
    e.preventDefault();
    currentAccount = accounts.find(
        acc => acc.userName === inputLoginUsername.value
    );

    console.log(currentAccount);
    if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
        labelWelcome.textContent = `welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
        containerApp.style.opacity = 100;
    }
    updateUI(currentAccount);
    inputLoginUsername.value = inputLoginPin.value = '';
});

btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);

    const receiverAcc = accounts.find(
        acc => acc.userName === inputTransferTo.value
    );
    console.log(amount, inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = ' ';
    if (
        amount > 0 &&
        currentAccount.balance >= amount &&
        receiverAcc &&
        receiverAcc.userName !== currentAccount.userName
    ) {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
});
btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    if (
        inputCloseUsername.value === currentAccount.userName &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.userName === currentAccount.userName
        );
        accounts.splice(index, 1);
        console.log(index);
        console.log(accounts);
    }
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
});
let sorted = false;
btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
});
console.log(movements);
movements.sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
});
console.log(movements);
movements.sort((a, b) => a - b);
console.log(movements);

labelBalance.addEventListener('click', function() {
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        el => Number(el.textContent.replace('€', ''))
    );
    console.log(movementsUI);

    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
/*const overallBalance2 = accounts
    .flatmap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);*/
/*const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
/*
const arr = [
    [1, 2, 3, 4],
    [4, 5], 6, 7
];
console.log(arr.flat());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUsd = movements.map(function(mov) {
    return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUsd);

const movementsDescriptions = movements.map(
    (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

const deposits = movements.filter(function(mov) {
    return mov > 0;
});
const depositsFor = [];
for (const mov of movements)
    if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);
console.log(movements);
console.log(deposits);
const withdrawals = movements.filter(function(mov) {
    return mov < 0;
});
console.log(withdrawals);
const balance = movements.reduce(function(acc, value, i, arr) {
    return acc + value;
}, 0);
console.log(balance);
const totalDeposits = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDeposits);
const firstWithDrawal = movements.find(mov => mov < 0);
console.log(firstWithDrawal);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/*let arrr = ['a', 'b', 'c', 'd', 'f'];
        console.log(arrr.slice(2));
        console.log(arrr.slice(1, -1));
        console.log(arrr.splice(2));
        console.log(arrr.splice(-2));
        console.log(arrr);
        const arrr2 = ['h', 'j', 'g', 'i', 'k'];
        console.log(arrr2.reverse());
        console.log(arrr2);*/
/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
        movements.forEach(function (movement) {
          if (movement > 0) {
            console.log(`u have deposited ${movement}`);
          } else {
            console.log(`u have withdrew ${Math.abs(movement)}`);
          }
        });

        // for (const movement of movements) {
        for (const [i, movement] of movements.entries()) {
          if (movement > 0) {
            console.log(`Movement ${i + 1}: You deposited ${movement}`);
          } else {
            console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
          }
        }
        console.log('---- FOREACH ----');
        movements.forEach(function (mov, i, arr) {
          if (mov > 0) {
            console.log(`Movement ${i + 1}: You deposited ${mov}`);
          } else {
            console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
          }
        });

        const currencies = new Map([
          ['USD', 'United States dollar'],
          ['EUR', 'Euro'],
          ['GBP', 'Pound sterling'],
        ]);
        currencies.forEach(function (value, key, Map) {
          console.log(`${key}:${value}`);
        });*/
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


  /*let arr = [ "a", "b","c","d","e"];

 console.log( arr.slice(2)); //(3) ['c', 'd', 'e'] 2 indexten itibaren devamini kesip yeni dizi olusturduk.

 console.log( arr.slice(2,4)); // (2) ['c', 'd'] 2 ve 4 indexi arasindaki kismi kestim aldim ama 4. index dahil deil.

 console.log( arr.slice(-2)); //['d', 'e'] negatif parametre sondan kopyalamaya basliyor.
 console.log( arr.slice(-3)); //(3) ['c', 'd', 'e']
 console.log( arr.slice(-1)); //['e']
 console.log( arr.slice(1, -2)); // (2) ['b', 'c']
 console.log( arr.slice()); (5) //  ['a', 'b', 'c', 'd', 'e']
 console.log([...arr]); // (5) ['a', 'b', 'c', 'd', 'e']*/

 //splice

 //console.log(arr.splice(2)); //(3) ['c', 'd', 'e']
 //console.log(arr); //(2) ['a', 'b'] orijinal diziyi mutasyona ugratiyor. yukardaki c d e gitti artik.

/*arr.splice(-1);  // dizinin son elemaninin kaldiriyor.
console.log(arr); //(4) ['a', 'b', 'c', 'd'] 
//arr.splice(1,2); // ilk parametre kacinci indexten baslayacagimizi secer , 2. parametre silmek istedigimiz öge belirler.
//console.log(arr); //(2) ['a', 'd']
console.log(arr.splice(0,3));*/

//reverse

/*arr = [ "a", "b","c","d","e"];
const arr2 = ["j","i","h","g","f"];
console.log(arr2.reverse()); //(5) ['f', 'g', 'h', 'i', 'j'] tersine döndürüyor.
console.log(arr2); // (5) ['f', 'g', 'h', 'i', 'j'] diziyi degistiriyor.

//concat 2 diziyi birlestirir.
const letters = arr.concat(arr2);
console.log(letters); //(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr,...arr2]); //(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log(letters.join(" - ")); //a - b - c - d - e - f - g - h - i - j*/



/*const arr = [23,11,64];
console.log(arr[0]); //23
console.log(arr.at(0)); //23 ES2022 de gelmis bu yöntem

// son elementi bulma

console.log(arr[arr.length-1]); //64 son elemani buluyoruz
console.log(arr.slice(-1) [0]); // [64] köseli parantezi 0 yaparsak 64 seklinde görünür.

console.log(arr.at(-1)); //64
console.log(arr.at(-2)); //11
console.log("Jonas".at(0)); // J
console.log("Jonas".at(-1));*/ //s

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


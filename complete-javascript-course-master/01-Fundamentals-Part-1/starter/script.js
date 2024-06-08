/*let js = 'amazing';
 console.log( 40 + 8 + 23 - 10);

 console.log("Jonas");
 console.log(23);
 
let firstName = " Matilda"
// let first = 'Jonas'
// let firstNamePerson
// let first_name_person

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3;  Degisken adlari sayiyla baslamaz, yalnizca rakamlar, harfler, alt cizgiler ve dolar icerebilir. 

// Variable name conventions

let jonas_matilda = 'JM';
let $function = 27;
let Person = 'Jonas';  //Simdilik büyük harfle baslama, bunun baska anlami var.
let person = 'Jonas';


let PI = 3.1415; 
// Tamami büyük harfle yazilan degiskenler asla degismeyecegini bildigimiz sabitler icin ayrilmistir. 

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';  //Bu yazim sekli alttakine göre daha iyi.

let job1 = 'programmer';
let job2 = 'teacher';  

console.log(myFirstJob);


// let country = 'Turkey'
// let continent = 'Europa'
// let population = '82 Milion'

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log('country' + 'continent'); Code Challenge kismindaki görevi yaptim.

// true;
// console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);*/

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job;

// var job = 'programmer';
// job = 'teacher';

// job = 'teacher';  sakin bu sekilde yazma, mutlaka let, const var variable belirt! yanlis bir yazim sekli.

// //! Math Operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2**3);
// // 2 ** 3 means 2 to the power of 3 = 2*2*2*

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// //! Assignment Operators

// let x = 10 + 5; //15
// x += 10; // x =  x + 10 = 25
// x *= 4; // x = x*4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 99
// console.log(x);

// //! Comparison Operators

// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah,  averageAge);*/

/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;*/

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// const age = 15;

// if (age >=18) {
//   console.log ("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2002;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*const massMark = 95;
 const heightMark = 1.88;
 const massJohn = 85;
 const heightJohn = 1.76;*/

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn,);

// if (BMIMark > BMIJohn){
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn} is higher than Mark's (${BMIMark})!`);
// }

// type conversiton (dönüstürme)

// const inputYear = "1991";
// console.log(Number (inputYear),  inputYear);
// console.log(Number (inputYear) + 18);

// console.log(Number ("Jonas")); // NaN bedeutet = Not a Number
// console.log(typeof NaN);

// console.log(String (23), 23);

/* coercion (zorlama)*/
// console.log('I am ' + 23 + ' years old');
// console.log('23' - "10" - 3);  // 10
// console.log("23" + "10" + 3); // 23103
// console.log("23" * "2"); // 46
// console.log("24" / "2"); // 12

// let n = "1" + 1; //"11"
// n = n - 1;
// console.log(n);

// console.log('10' - '4' - '3' -2 + '5'); // 15

// falsy values : 0, '' , undefined, NaN, null, false, -0

// console.log(Boolean (0)); //false
// console.log(Boolean ('')); //false
//  console.log(Boolean(undefined)); // false
// console.log(Boolean (null)); //false
// console.log(Boolean (NaN)); //false
// console.log(Boolean (false)); //false
// console.log(Boolean (-0)); //false
// console.log(Boolean ('Ayca')); //true
// console.log(Boolean ({})); //true

// let height = 25; // height is defined cünkü 25 bir sayi true deger. if i calistirir.
// height = 0;  height is undefined cünkü 0 falsy deger ve else i calistirir.
// if(height){
//   console.log('YAY ! height is defined');
// } else {
//   console.log("Height is undefined");
// }

// const age = 18;
// if(age === 18) console.log("You just became an adult");

// 18 === 18 //true

// 18 === 19 //false

// 18 === '18' //false

// 18 == '18' //true

// const favourite = prompt ("What's your favourite number?");

// console.log(favourite); //23
// console.log(typeof favourite); //string

// if (favourite == 23){
//   console.log("Cool! 23 is an amazing number");
// }
// cift esittir zorlayici oldugu icin stringi sayiya cevirir. Ama üc esittir de türlerinin de ayni olmasi lazim katidir,aksi takdir de konsolda sonuc cikmaz.

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if(favourite !==23) console.log("Why not 23?");

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); //false
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired); //true

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const scoreDolphins = 100;
// const scoreKoalas = 50;

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins){
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy 😭');
// }

// for ( rep = 1 ; rep <=10 ; rep++){
//   console.log("Lifting weights repetition 1"); // 10 Lifting weights repetition 1
// }

// for ( rep = 1 ; rep <=10 ; rep++){
//   console.log(`Lifting weights repetition ${rep}`);
// }
/*
script.js:350 Lifting weights repetition 2
script.js:350 Lifting weights repetition 3
script.js:350 Lifting weights repetition 4 */

// const day = prompt('Gün adi giriniz.');

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//     default:
//       console.log('Not a valid day');
// }

// let day = prompt('Gün adi giriniz.')

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');

// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');

// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');

// } else if (day === 'friday') {
//   console.log('Record videos');

// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }

const age = 19;
// age >= 18 ? console.log('I like to drink water') : console.log('I like to drink fruit juice');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

console.log(`I like to drink ${age >= 18 ? 'fruit juice' : 'water'}`);
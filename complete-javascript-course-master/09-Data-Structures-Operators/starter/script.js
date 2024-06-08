'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};



const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log("B737" [0]); //B
// console.log("B737".length); // 4
// console.log(airline.length); // 16

// console.log(airline.indexOf("r")); // 6
// console.log(airline.lastIndexOf("a")); // 14
// console.log(airline.indexOf("A")); // case sensitive var.
// console.log(airline.indexOf("a")); // 14

// console.log(airline.indexOf("Portugal")); // 8
// console.log(airline.indexOf("portugal")); // -1 dizede bulamadi.

// console.log(airline.slice(4)); //Air Portugal
// console.log(airline.slice(4,7)); // Air

// console.log(airline.slice(0,airline.indexOf(' '))); // TAP
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

//console.log(airline.slice(-2)); // al 
//console.log(airline.slice(1, -1)); //  AP Air Portuga

// const checkMiddleSeat = function (seat) 
// // B and E are middle seats
// const s = seat.slice(-1);

// if(s === 'B' || s ==='E'){
//   console.log("You got the middle seat. 😒");
// }
//   else { console.log("You got lucky. 😎");}

// }

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");
 
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
console.log("Ayca".toUpperCase()); // AYCA

const passenger = "jOnAS";

const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

//todo Comparing(karsilastirma) emails

const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail); //hello@jonas.io

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); //hello@jonas.io
console.log(email === normalizedEmail); //true

//todo Replacing

const priceGB = "288,97£"  // £ bu isareti alt+156 yaparak yaptim.
const priceUS = priceGB.replace("£", "$").replace("," ,".");
console.log(priceUS); // 288.97$

const announcement = "All passengers come to boarding door 23.Boarding door 23!";
console.log(announcement.replace("door", "gate")); //All passengers come to boarding gate 23.Boarding door 23!
console.log(announcement.replaceAll("door", "gate")); //All passengers come to boarding gate 23.Boarding gate 23!


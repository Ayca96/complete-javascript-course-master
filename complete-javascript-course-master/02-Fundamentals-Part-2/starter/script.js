

// function logger () {
//   console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

// function fruitProcessor (apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor (5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor (2,4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear){
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);


// Arrow Function
//  const calcAge3 = birthYear => 2037- birthYear;
//  const age3 = calcAge3 (1991);
//  console.log(age3);


//  const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`

//  }

//  console.log(yearsUntilRetirement(1991,"Jonas")); 
//  console.log(yearsUntilRetirement(1980,"Bob")); 


// const cutPieces = function (fruit){
//   return fruit * 4;
// }

// function fruitProcessor (apples, oranges) {
//   const applePieces = cutPieces (apples);
//   const orangePieces = cutPieces (oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2,3));

//! 2 farkli fonksiyonda ayni parametre ismi (birthYear) kullanilmasinin bir önemi yok ikiside kendi fonksiyonunda anlam ifade ediyor birbirleriyle isim disinda baska bir benzerlikleri yok. Year yazcak olsakta parametre olarak yine calisacak.

// const calcAge = function (birthYear) {
//   return 2037 - birthYear
// }

//  const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge (birthYear);
//   const retirement = 65 - age

//   if (retirement > 0){
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   }
//   else {
//     console.log(`${firstName} has already retired 😎`);
//     return -1
//   }
  

//  }
// console.log(yearsUntilRetirement (1991, "Jonas")); 
// console.log(yearsUntilRetirement (1950, "Mike")); 


// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);

// const year = new Array (1991,1996,2008);
// console.log(year);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2]= "Jay";
// console.log(friends); //(3) ['Micheal', 'Steven', 'Jay']

///todo friends const ile yazilmasina ragmen icindeki ismi degistirebildik bunun sebebi dizilerin (arrays) ilkel(primitive) degildir.Böylece mutasyona ugrayabilirler. Sadece ilkel (primitive) degerler degismezler.
//!const ile bildirilmis olsalar bile array ler degistirilebilir mutasyona ugrayabilirler.

//? Yapamayacagimiz sey tüm arrayi degistirmek. const ile atandigi icin tüm array degistirilemez hata aliriz.

//friends = ["Bob", "Alice"]; //Assignment to constant variable. Sabit değişkene atama.

// const firstName = "Jonas";
// const jonas = [firstName, "schmedtman", 2037-1991, "teacher", friends];
// console.log(jonas); // (5) ['Jonas', 'schmedtman', 46, 'teacher', Array(3)]

// console.log(jonas.length); //5

//Exercise

// const calcAge = function (birthYear){
// return 2037 - birthYear
// }

// const years = [1990,1967,2002, 2010, 2018];

// console.log(calcAge(years)); // NaN
// console.log(calcAge(years[0]));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);
// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
// console.log(ages); // (3) [47, 70, 19]

//todo Add elements

const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay"); // push sonuna eleman ekliyor
console.log(friends); //(4) ['Micheal', 'Steven', 'Peter', 'Jay']

console.log(newLength); // Uzunlugu gösterir.

friends.unshift("John");
console.log(friends); //(5) ['John', 'Micheal', 'Steven', 'Peter', 'Jay']
//unschift dizinin  basina eleman ekliyor.

//todo Remove elements


friends.pop(); // dizinin son elemanini kaldirir. Buyüzden icine ek bilgi girmemize gerek yok.
console.log(friends); //(4) ['John', 'Micheal', 'Steven', 'Peter'] Jay gitti.
const popped = friends.pop();
console.log(friends); //(3) ['John', 'Micheal', 'Steven'] Peter gitti.
console.log(popped); // Peter giden ögeyi gösterir.

friends.shift();
console.log(friends); // (2) ['Micheal', 'Steven'] dizinin ilk elemanini siler.Buyüzden ek bilgi girmemize gerek yok.

console.log(friends.indexOf("Steven")); //1 Belirli bir elemanin dizide hangi konumda oldugunu söylüyor.
console.log(friends.indexOf("Bob")); // -1 Dizide olmayan bir elemani yazinca -1 cikiyor.

console.log(friends.includes("Steven")); //true , ES6 yöntemi, elemanin index ini döndürmek yerine eleman dizideyse true degilse false döndürür.
console.log(friends.includes("Bob")); // false

friends.push(23);
console.log(friends.includes("23")); // false cünkü === kati esitlik ile test ediyor tip zorlamasi yapmiyor. Number ile String esit olmadigi icin false diyor.
console.log(friends.includes(23)); // true

if(friends.includes("Steven")){
  console.log("You have a friend called Steven");
}
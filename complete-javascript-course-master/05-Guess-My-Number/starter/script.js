'use strict';

// console.log(document.querySelector(".message").textContent);  
// document.querySelector(".message").textContent= "🎉Correct Number!"
// console.log(document.querySelector(".message").textContent); 

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23
// console.log(document.querySelector(".guess").value); 

//document.querySelector(".check").addEventListener("click", function (){

//console.log( document.querySelector(".guess").value);
//document.querySelector(".message").textContent= "🎉Correct Number!" 
//Burda ekranda degisir ama consol yapmadigimiz icin consolda görmeyiz tek fark bu.
//});

document.querySelector(".check").addEventListener("click", function (){

  const guess = Number(document.querySelector(".guess").value)
  console.log(guess, typeof guess); // stringti basina Number ekleyerek number a cevirdik.
 
  });
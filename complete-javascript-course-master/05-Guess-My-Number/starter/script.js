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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess)}

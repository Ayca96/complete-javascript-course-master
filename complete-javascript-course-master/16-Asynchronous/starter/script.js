'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// const getCountryData = function (country) {
//  const request = new XMLHttpRequest();
//  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

// request.send();


// request.addEventListener("load", function(){
//   console.log(this.responseText);
//   const [data] = JSON.parse(this.responseText);

//  // const [data] = JSON.parse(this.responseText)[0] dizinin ilk elemanini görmek icin  [0] bu da yapilir veya const [data]. Ikiside ayni kapiya cikiyor.
//   console.log(data);
//   const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flags?.png || ''}" alt="Country flag"/>
//         <div class="country__data">
//           <h3 class="country__name">${data.name?.common || 'Unknown'}</h3>
//           <h4 class="country__region">${data.region || 'Unknown'}</h4>
//           <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
//           <p class="country__row"><span>🗣️</span>${Object.values(data.languages || {})[0] || 'Unknown'}</p>
//           <p class="country__row"><span>💰</span>${Object.values(data.currencies || {})[0]?.name || 'Unknown'}</p>
//         </div>
// </article>
// `;
// countriesContainer.insertAdjacentHTML("beforeend",html);
// countriesContainer.style.opacity=1;

// });
// };
// getCountryData ("portugal")
// getCountryData("germany");
// getCountryData("turkey")


// Welcome to Callback Hell



// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);



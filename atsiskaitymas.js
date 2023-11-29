"use strict";

// 1.

// for (let i = 0; ; i++) {
//   const userInput = parseInt(prompt("iveskite skaiciu: "));
//   if (userInput < 0) {
//     alert(`rastas pirmas neigiamas skaicius yra: ${userInput}`);
//     break;
//   }
// }

// 2.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// 3.

// for (let i = 2; i < 12; i++) {
//   console.log(i ** 3);
// }

// 4.

// const persons = {
//   jonas: 30,
//   petras: 26,
//   ona: 45,
//   maryte: 36,
//   antanas: 77,
//   "zitos duona": 86,
// };

// for (let key in persons) {
//   const age = persons[key];
//   console.log(`${key}: ${age}`);
// }

// 5.

// let skaitliukas = 0;
// const objektas = {
//   vardas: "miau",
//   pavarde: "cat",
//   amzius: 3,
//   nickname: "pussy",
//   maistas: "lasisa",
// };

// for (let key in objektas) {
//   skaitliukas++;
// }

// console.log(`savybiu yra: ${skaitliukas}`);

// 6.

// let sentence = prompt("sakinys:");
// let words = sentence.split(" ");
// for (let word of words) {
//   console.log(word);
// }

// 7.

// let sentence = prompt("iveskite zodzius atskirtus tarpais: ");
// let skaitliukas = 0;
// for (let zodis of sentence) {
//   skaitliukas++;
// }
// console.log(
//   `"for of" simboliu kiekis = ${skaitliukas} | length simboliu kiekis = ${sentence.length}`,
// );

// 8.

// let i = 20;
// const n = 50;

// do {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= n);

// 9.

// do {
//   const userInput = parseInt(
//     prompt("iveskite skaicius (ivedus nelygini skaiciu programa sustos)"),
//   );
//   if (userInput % 2 !== 0) {
//     alert(`ivedete nelygini skaiciu: ${userInput} !`);
//     break;
//   } else {
//     console.log(userInput);
//   }
// } while (true);

// 10.

// let suma = 0;
// let skaitliukas = 0;

// do {
//   const userInput = parseInt(prompt("iveskite skaicius: "));

//   if (userInput === 0) {
//     console.log(suma);
//     break;
//   } else if (userInput < 0) {
//     continue;
//   } else {
//     console.log(userInput);
//     skaitliukas++;
//   }
//   suma += userInput;
// } while (true);

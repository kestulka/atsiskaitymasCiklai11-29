// 1.

// for (let i=0; ; i++){
// const userInput = parseInt(prompt("iveskite skaiciu: "))
//     if(userInput < 0){
//         alert(`rastas pirmas neigiamas skaicius yra: ${userInput}`)
//         break;
//     }
// }

// 2.

// for (let i=1; i<100; i++){
//     if(i%3 == 0){
//         continue;
//     }
//     else{
//         console.log(i)
//     }
// }

// 3.

// for (let i=2; i<12; i++){
//     console.log(i**3)
// }

// 4.

// const persons = {
//     jonas: 30,
//     petras: 26,
//     ona: 45,
//     maryte: 36,
//     antanas: 77,
//     "zitos duona": 86,
// };

// for (let key in persons){
//     const age = persons[key];
//     console.log(`${key}: ${age}`)
// }

// 5.

// let skaitliukas = 0;
// const objektas = {
//     vardas: "miau",
//     pavarde: "cat",
//     amzius: 3,
//     nickname: "pussy",
//     maistas: "lasisa"
// };

// for(let key in objektas){
//     skaitliukas++
// }

// console.log(`savybiu yra: ${skaitliukas}`)

// 7.

do {
  const userInput = prompt("enter a num: ");
  const num = parseFloat(userInput);

  if (num === randomNum) {
    alert("you guessed it right!");
    displayImage();
    break;
  } else if (num < randomNum) {
    alert("too low. try again");
  } else {
    alert("too high. try again");
  }
} while (true);






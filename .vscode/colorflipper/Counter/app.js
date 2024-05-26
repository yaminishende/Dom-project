// document.addEventListener('DOMContentLoaded', () => {
//     let counter = 6;
//     const counterDisplay = document.getElementById('counter');
//     const incrementButton = document.getElementById('increment');
//     const decrementButton = document.getElementById('decrement');

//     incrementButton.addEventListener('click', () => {
//         counter++;
//         counterDisplay.textContent = counter;
//     });

//     decrementButton.addEventListener('click', () => {
//         counter--;
//         counterDisplay.textContent = counter;
//     });
// });

// let count = 0;
// const counter = document.querySelector("#counter");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const styles = e.currentTarget.classList;
//         if (styles.contains('decrease')) {
//             count--;

//         }
//         else if (styles.contains('increase')) {
//             count++;
//         }
//         else {
//             count = 0;

//         }
//         if (count > 0) {
//            counter.style.color = "green";
//         }
//         if(count < 0){
//             counter.style.color = "red";
//         }
//         if(count === 0){
//           counter.style.color = "#222";
//         }
//         counter.textContent = count;


//     });
// });
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "green";
    }
    if (count > 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
});
});


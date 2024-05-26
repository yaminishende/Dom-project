const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click",function () {
    //get random number between 0-3
    const randomNumber =getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});
 function getRandomNumber()  {
   return Math.floor(Math.random() * colors.length);
 }

 
// let count = 0;

// const value = document.querySelector("#value");
// const btns = document.querySelector(".btn");

// btns.forEach( function (btn) {
//   btn.addEventListener("click", function (e) {
//    const styles = e.currentTarget.classList;
//    if(styles.contains("decrease")) {
//     count--;
//    } else if (styles.contains("increase")) {
//     count++;
//    } else {
//     count = 0;
//    }
//    if(count > 0){
//     value.style.color = "green";
//    }
//    if(count < 0) {
//     value.style.color = "red";
//    }
//    if(count === 0){
//     value.s
//    }
   
//    value.textContent = count;

//   });

// });
'use strict';

/////////////////////////////////////////////
// THRESHOLD COUNTER

/***************** DECLARATION *********************/

const countdown = document.querySelector('.timer');

const starter = document.querySelector('.start');
const reseter = document.querySelector('.reset');
const stopper = document.querySelector('.stop');

const btnPlus = document.querySelector('.inc_time');
const btnMinus = document.querySelector('.dec_time');

const minute = document.getElementById("min");
const second = document.getElementById("sec");

const days = document.querySelector('.day');
const dates = document.querySelector('.date');


/***************** FUNCTIONS *********************/


let startTimer;     // its now undefined and store data

// for start
function timer(){
  if(second.innerText != 0){
    second.innerText--;
  }else if(minute.innerText != 0 && second.innerText == 0){
    second.innerText = 59;
    minute.innerText--;
  }
};

// for stop
function stopInterval(){
  clearInterval(startTimer);
};

// DAY AND DATE
function myFunction() {
  let d = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const month = monthArray[d.getUTCMonth()];
  const day = d.getDate();
  const year = d.getFullYear();

  let n = weekday[d.getDay()];
  days.textContent = `${n}`;

  dates.textContent = `${day}th ${month}, ${year}`;
}
myFunction();

 

/******************** EVENTLISTNER *********************/


// 1. start
starter.addEventListener('click',function(){
  if(startTimer === undefined){
    startTimer = setInterval(timer, 1000);
  }else{
    alert("Timer is Aleready Running.");
  }
});

// 2. reset
reseter.addEventListener('click',function(){
  minute.innerText = 30;
  second.innerText = "00"
  stopInterval();
  startTimer = undefined;   //(becuse of it they no show aleready running)
});

// 3. stop
stopper.addEventListener('click', function(){
  stopInterval();
  startTimer = undefined;
})

// 4. plus
btnPlus.addEventListener('click', function(){
  if(startTimer === undefined){
   minute.innerText++;
  }
  
})
 
// 4. Minus
btnMinus.addEventListener('click', function(){
  if(startTimer === undefined){
    minute.innerText--;
 }
})



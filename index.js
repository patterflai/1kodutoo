/*jshint esversion:6*/
let clockContainer;
let changeColor;
let dayContainer;
window.onload= function(){
  init();
};

function init(){
  startClock();
  changeColor=document.querySelector('#change-color');
  window.setInterval(function(){
    changeBackgroundColor();
  },4200)
  changeColor.addEventListener('click', changeBackgroundColor);
  window.addEventListener('keypressaaa', changeBackgroundColor);
}

function startClock(){

  clockContainer =
  document.querySelector('#clockContainer');

updateClock();

  window.setInterval(function(){
    updateClock();
  }, 1000);
}

function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date;
  dayContainer = document.querySelector("#dayContainer");
  let day;
  switch (new Date().getDay()) {
    case 0:
    day="Pühapäev";

      break;
    case 1:
    day="Ésmaspäev";
      break;
    case 2:
    day="Teisipäev";
      break;
    case 3:
    day="Kolmapäev";
      break;
    case 4:
    day="Neljapäev";
      break;
    case 5:
    day="Reedepäev";
      break;
    case 6:
    day="Laupäev";
      break;
      default:
      day="See pole päev";
  }
  dayContainer.innerHTML = day;
}

function changeBackgroundColor(){
  const red= Math.round(Math.random()*255);
  const green= Math.round(Math.random()*255);
  const blue= Math.round(Math.random()*255);
  /*console.log(red, green, blue);*/
 document.body.style.backgroundColor=`rgb(${red},${green},${blue})`;
   /*document.body.style.backgroundColor="rgb("+red+","+green+","+blue+")";*/
}
function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

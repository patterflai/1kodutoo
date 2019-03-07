/*  jshint esversion:6*/
let clockContainer;
let changeColor;
let dayContainer;
window.onload = function () {
  init();
  tiktok();

};


function tiktok(){
  let timeNow = new Date();
  let secondNow = timeNow.getSeconds();
  let hourNow = timeNow.getHours();
  let minuteNow = timeNow.getMinutes();


  document.getElementById('secondhand').style.transform = "rotate("+ secondNow * 6 +"deg)";
  document.getElementById('minutehand').style.transform = "rotate("+ (minuteNow * 6 + secondNow / 10) + "deg)";
  document.getElementById('hourhand').style.transform = "rotate("+ (hourNow * 30 + minuteNow / 2) + "deg)";
  requestAnimationFrame(tiktok);

}

function init(){
  startClock();
  changeColor=document.querySelector('#change-color');
  /*window.setInterval(function(){changeBackgroundColor();},4200);*/
  changeColor.addEventListener('click', changeBackgroundColor);
  window.addEventListener('keypressaaa', changeBackgroundColor);


}

function startClock(){

  clockContainer =  document.querySelector('#clockContainer');

updateClock();

  window.setInterval(function(){
    updateClock();
  }, 1000);
}

function updateClock(){
  const date = new Date();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let date2 = new Date().getDate();
if (second < 10) {
  second ="0"+second;
}
if (minute < 10) {
  minute ="0"+minute;
}
if (hour < 10) {
  hour ="0"+hour;
}
  clockContainer.innerHTML = hour+":"+minute+":"+second;

  dayContainer = document.querySelector("#dayContainer");
  let day;
  switch (new Date().getDay()) {
    case 0:
    day="Pühapäev";

      break;
    case 1:
    day="Esmaspäev";
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

  monthContainter = document.querySelector("#monthContainer");
  let month;
  switch (new Date().getMonth()) {
    case 0:
    month="Jaanuar";
    break;
    case 1:
    month="Veebruar";
    break;
    case 2:
    month="Märts";
    break;
    case 3:
    month="Aprill";
    break;
    case 4:
    month="Mai";
    break;
    case 5:
    month="Juuni";
    break;
    case 6:
    month="Juuli";
    break;
    case 7:
    month="August";
    break;
    case 8:
    month="September";
    break;
    case 9:
    month="Oktoober";
    break;
    case 10:
    month="November";
    break;
    case 11:
    month="Detsember";
    break;
    default:
    month="See ei ole kuu";

  }
  dayContainer.innerHTML = day + ", " + date2 +" "+month;


}


function changeBackgroundColor(){
  const red= Math.round(Math.random()*255);
  const green= Math.round(Math.random()*255);
  const blue= Math.round(Math.random()*255);
  /*console.log(red, green, blue);*/
 document.body.style.backgroundColor=`rgb(${red},${green},${blue})`;
   /*document.body.style.backgroundColor="rgb("+red+","+green+","+blue+")";*/
}

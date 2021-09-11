var h = document.querySelector(".h");
var a = document.querySelector(".a");
var n = document.querySelector(".n");
var x;
var l;
var damn = document.querySelector(".damn");
var pray = document.querySelector(".pray");
var suprise = document.querySelector(".suprise");
var home = document.querySelector(".home");
n.style.display = "none";
a.style.display = "none";
h.style.display = "none";
suprise.style.display = "none";
damn.style.display = "none";
pray.addEventListener("click", praying);

function praying() {
  pray.style.animationName = "boom";
  pray.style.animationDuration = "2.5s";
  pray.style.animationIterationCount = "1";
  pray.style.animationDirection = "alternate";
  setTimeout(function () {
    pray.style.top = "45%";
  }, 2000);
  setTimeout(function () {
    pray.style.color = "White";
    pray.style.fontSize = "1000%";
    pray.innerHTML = "Shake!!!";
    pray.style.animationName = "onghoanglan1";
    pray.style.animationIterationCount = "infinite";
    pray.style.imationDirection = "alternate";
    pray.style.animationDuration = "0.07s";
    pray.removeEventListener("click", praying);
  }, 2300);
  setTimeout(function () {
    damn.style.display = "none";
    home.style.animationName = "bang";
    home.style.animationIterationCount = "1";
    home.style.animationDuration = "2s";
    home.style.backgroundImage = "url('https://c8.alamy.com/comp/WW4EHX/grunge-halloween-background-with-blood-splash-space-on-wall-WW4EHX.jpg')";
     pray.style.animationName = "none"
    pray.style.fontSize = "400%"
    pray.style.top = "30%"
    pray.style.left = "50%"
  }, 9000);
  setTimeout(function () {
    pray.style.display = "block"
   l = Math.floor(Math.random()*50) + 1;
    if(l==50){
      h.style.display = "block";
      pray.innerHTML = "Hiếm vãi lít ra í!Chúc mừng bạn đã nhận đc rương AOV"}
    else if(l>=30){
      n.style.display = "block";
     pray.innerHTML = "Khá lắm rồi!Chúc mừng bạn đã nhận đc rương OPM"}
    else if(l>=1){
      a.style.display = "block";
     pray.innerHTML = "Vui rồi :V !Chúc mừng bạn đã nhận đc rương MLA"}
  }, 12000);
  setTimeout(function () {
    damn.style.display = "block";
    pray.style.display = "none";
    x = Math.floor(Math.random() * 100) + 1;
    if (x > 94) {
      damn.style.animationName = "viu";
      damn.style.animationDuration = "3s";
      damn.style.animationIterationCount = "1";
      damn.style.animationDirection = "alternate";
      damn.style.borderRadius = "300px";
      damn.style.width = "200px";
      damn.style.height = "200px";
    } else if (x > 83) {
      damn.style.animationName = "viu";
      damn.style.animationDuration = "3s";
      damn.style.animationIterationCount = "1";
      damn.style.animationDirection = "alternate";
      damn.style.borderRadius = "200px";
      damn.style.width = "100px";
      damn.style.height = "100px";
    } else if (x > 57) {
      damn.style.animationName = "viu";
      damn.style.animationDuration = "3s";
      damn.style.animationIterationCount = "1";
      damn.style.animationDirection = "alternate";
      damn.style.borderRadius = "100px";
      damn.style.width = "50px";
      damn.style.height = "50px";
    } else if (x > 0) {
      damn.style.animationName = "viu";
      damn.style.animationDuration = "3s";
      damn.style.animationIterationCount = "1";
      damn.style.animationDirection = "alternate";
      damn.style.borderRadius = "50px";
      damn.style.width = "20px";
      damn.style.height = "20px";
    }
  }, 6000);
}
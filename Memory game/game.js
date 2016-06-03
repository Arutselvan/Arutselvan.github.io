function startgame() {
   document.getElementById("start").style.display = "none";
   document.getElementById("game").style.display = "block";
   document.getElementById("timer").style.display = "block";
   remainingTime = 90;
}
var string = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randArr = [];
var count = 0;
var index;
var comp1;
var comp2;
var score = 0;
var clickcount = 0;

function shuffle(ar) {
   var ci = ar.length;
   var temp;
   var rani;
   while (ci != 0) {
      rani = Math.floor(Math.random() * ci);
      ci -= 1;
      temp = ar[ci];
      ar[ci] = ar[rani];
      ar[rani] = temp;
   }
   return ar;
}
for (i = 0; i < 8; i++) {
   var ran = Math.floor(Math.random() * (26 - i));
   randArr.push(string[ran]);
   randArr.push(string[ran]);
   string.splice(ran, 1);
}
for (i = 0; i < 16; i++) {
   document.getElementById("" + i).style.backgroundColor = "#2dd22d";
}
randArr = shuffle(randArr);
for (i = 0; i < 16; i++) {

}

function clickshow(i) {
   ++count;
   ++clickcount;
   if (count == 1) {
      index = i;
      document.getElementById("" + i).innerHTML = randArr[i];
      document.getElementById("" + i).style.backgroundColor = "white";
      comp1 = document.getElementById("" + i).innerHTML;

   } else {
      document.getElementById("" + i).innerHTML = randArr[i];
      comp2 = document.getElementById("" + i).innerHTML;
      if (comp1 === comp2 && i != index) {
         ++score;
         document.getElementById("" + i).style.backgroundColor = "white";
         document.getElementById("" + i).onclick = null;
         document.getElementById("" + index).onclick = null;
         count = 0;
         console.log("helo");
         if (score == 8) {
            clearInterval(timeinterval);
            document.getElementById("game").style.display = "none";
            document.getElementById("timer").style.display = "none";
            document.getElementById("msg").innerHTML = "YOU WON!"
            document.getElementById("score").innerHTML = score;
            document.getElementById("time").innerHTML = (90 - remainingTime) + " " + "SECONDS";
            document.getElementById("clicks").innerHTML = clickcount;
            document.getElementById("scoreblock").style.display = "block";

         }
      }
      if (comp1 !== comp2) {
         document.getElementById("" + i).style.backgroundColor = "white";
         setTimeout(function() {
            document.getElementById("" + i).innerHTML = "";
            document.getElementById("" + index).innerHTML = "";
            document.getElementById("" + i).style.backgroundColor = "#2dd22d";
            document.getElementById("" + index).style.backgroundColor = "#2dd22d";
            count = 0;
         }, 400);
      }
   }
}


function timer() {

   --remainingTime;

   var minutes = parseInt((remainingTime / (60)) % 60);
   var seconds = parseInt(remainingTime % 60);
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;


   if (remainingTime <= 0) {
      clearInterval(timeinterval);
      document.getElementById("game").style.display = "none";
      document.getElementById("timer").style.display = "none";
      document.getElementById("msg").innerHTML = "TIME UP! YOU LOST!"
      document.getElementById("score").innerHTML = score;
      document.getElementById("timeremaining").style.display = "none";
      document.getElementById("clicks").innerHTML = clickcount;
      document.getElementById("scoreblock").style.display = "block";
   }
}
var timeinterval = setInterval(timer, 1000);
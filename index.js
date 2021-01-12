$(document).ready(function () {
  setInterval(myinterval, 1400);
});
let score = 0;
function myinterval() {
  var image78 = $('<img id="elementId">');
  image78.attr('src', "rat.png");
  image78.attr("onclick", "click12()");



  let random = Math.floor(Math.random() * 9);
  if (random == 0) {
    image78.appendTo('#d1');
    setTimeout(function () {

      $("#d1").empty();
    }, 700);
  }
  else if (random == 1) {
    image78.appendTo('#d2');
    setTimeout(function () {

      $("#d2").empty();
    }, 700);
  }
  else if (random == 2) {
    image78.appendTo('#d3');
    setTimeout(function () {

      $("#d3").empty();
    }, 700);
  }
  else if (random == 3) {
    image78.appendTo('#d4');
    setTimeout(function () {

      $("#d4").empty();
    }, 700);
  }
  else if (random == 4) {
    image78.appendTo('#d5');
    setTimeout(function () {

      $("#d5").empty();
    }, 700);
  }
  else if (random == 5) {
    image78.appendTo('#d6');
    setTimeout(function () {

      $("#d6").empty();
    }, 700);
  }
  else if (random == 6) {
    image78.appendTo('#d7');
    setTimeout(function () {

      $("#d7").empty();
    }, 700);
  }
  else if (random == 7) {
    image78.appendTo('#d8');
    setTimeout(function () {

      $("#d8").empty();
    }, 700);
  }
  else {
    image78.appendTo('#d9');
    setTimeout(function () {

      $("#d9").empty();
    }, 700);
  }

}
function click12() {
  score = score + 10;
  $("#total-score").html(score);
  $("#para4").html(`Your Score is ${score}.`);
}

var timeleft = 25;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
   $("#contTime").html("Finished");
   $("#divId").css("display", "block");
   $("#divmain75").css("display", "none");
    getCookie(score);
    setCookie(score);
  } 
  else
   {
   $("#contTime").html(` ${timeleft} seconds remaining`);
    $('#para3').html(document.cookie);

  }
  timeleft -= 1;
}, 1000);


function getCookie(score) {

  var highScore = document.cookie.split("=")[1];
  if (highScore == undefined) {
    highScore = 0;
  }
  if (score > highScore) {
   $("#para3").html(score);
   $("#para5").html(`Congratulation You made High Score  ${score}`);
  }
}
function setCookie(score) {
  // console.log('heyy');
  var highScore = document.cookie.split("=")[1];
  if (highScore == undefined) {
    highScore = 0;
  }
  if (score > highScore) {
    document.cookie = 'highScore=' + score;
  }
  console.log(document.cookie);
  document.getElementById("para3").innerHTML = document.cookie;
}

let score = 0;
setInterval(myinterval, 1400);

function myinterval() {
  let image78 = document.createElement('img');
  image78.setAttribute("src", "rat.png");
  image78.setAttribute('id', "elementId");
  image78.setAttribute("onclick", "click12()");
  

  let random = Math.floor(Math.random() * 9);
  if (random == 0) {
    document.getElementById("d1").appendChild(image78);
    setTimeout(function () {
      image78.parentNode.removeChild(image78);
    },700);
  }
  else if (random == 1) {
    document.getElementById("d2").appendChild(image78);
    setTimeout(function () {
      image78.parentNode.removeChild(image78);
    }, 700);
  }
  else if (random == 2) {
    document.getElementById("d3").appendChild(image78);
    setTimeout(function () {
      image78.parentNode.removeChild(image78);
    },700);
  }
  else if (random == 3) {
    document.getElementById("d4").appendChild(image78);
    setTimeout(function () {
      image78.parentNode.removeChild(image78);
    }, 700);
  }
  else if (random == 4) {
    document.getElementById("d5").appendChild(image78);
    setTimeout(function () {
      image78.parentNode.removeChild(image78);
    }, 700);
  }
  else if (random == 5) {
    document.getElementById("d6").appendChild(image78);
    setTimeout(function () {
      image78.parentNode.removeChild(image78);
    }, 700);
  }
  else if (random == 6) {
    document.getElementById("d7").appendChild(image78);
    setTimeout(function () {
      image78.parentNode.removeChild(image78);
    }, 700);
  }
  else if (random == 7) {
    document.getElementById("d8").appendChild(image78);
    setTimeout(function () {
      image78.parentNode.removeChild(image78);
    }, 700);
  }
  else {
    document.getElementById("d9").appendChild(image78);
    setTimeout(function () {
      image78.parentNode.removeChild(image78);
    }, 700);
  }

}
function click12()
{
  score = score + 10;
  document.getElementById("total-score").innerHTML = score;
  document.getElementById("para4").innerHTML = `Your Score is ${score}.`;
}

var timeleft = 25;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("contTime").innerHTML = "Finished";
    document.getElementById("divId").style.display = "block";
    document.getElementById("divmain75").style.display = "none";
   
    getCookie(score);
    setCookie(score);
  } else {
    document.getElementById("contTime").innerHTML = timeleft + " seconds remaining";
    document.getElementById('para3').innerHTML = document.cookie;
    
  }
  timeleft -= 1;
}, 1000);


function getCookie(score) {

  var highScore = document.cookie.split("=")[1];
  if (highScore == undefined) {
    highScore = 0;
  }
  if (score > highScore) {
    document.getElementById("para3").innerHTML=score;
    document.getElementById("para5").innerHTML = 'Congratulation You made High Score ' + score;
  }
}
function setCookie(score) {
  // console.log('heyy');
  var highScore = document.cookie.split("=")[1];
  if(highScore==undefined)
  {
    highScore=0;
  }
  if(score > highScore){
  document.cookie= 'highScore=' +score;
   }
    console.log(document.cookie);
    document.getElementById("para3").innerHTML = document.cookie;
}

const img = document.getElementsByClassName("img1")[0];
const img2 = document.getElementsByClassName("img2")[0];

function roll() {
  var i = Math.floor(Math.random() * 6);
  var j = Math.floor(Math.random() * 6);
  var aa = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
  ];
  img.src = aa[i];
  img2.src = aa[j];
  if (i > j) {
    document.querySelector("h1").innerHTML = "Player1 wins";
  } else if (i < j) {
    document.querySelector("h1").innerHTML = "Player2 wins";
  } else {
    document.querySelector("h1").innerHTML = "Its a tie";
  }
}

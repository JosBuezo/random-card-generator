/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

document.body.style.backgroundImage =
  "url('https://wallpapermemory.com/uploads/418/poker-background-hd-1440x900-144770.jpg')";
document.body.style.backgroundSize = "cover";

window.onload = function() {
  document.getElementById("value").innerHTML = generateValue();
  let suitOne = document.querySelector("#suitOne");
  let suitTwo = document.querySelector("#suitTwo");
  let suit = generateSuit();
  suitOne.innerHTML = suit;
  suitTwo.innerHTML = suit;
  if (suit === "&hearts;") {
    document.body.style.color = "red";
  } else if (suit === "&diams;") {
    document.body.style.color = "red";
  } else {
    document.body.style.color = "black";
  }
};
let generateValue = function() {
  let values = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
  let secondPart = Math.floor(Math.random() * values.length);

  return values[secondPart];
};

let generateSuit = function() {
  let suitsOne = ["&hearts;", "&spades;", "&diams;", "&clubs;"];
  let firstPart = Math.floor(Math.random() * suitsOne.length);

  return suitsOne[firstPart];
};
function timedRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);", timeoutPeriod);
}

window.load = timedRefresh(1000);

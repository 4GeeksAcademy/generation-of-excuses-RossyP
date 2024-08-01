/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuses = document.getElementById("excuse");

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

//The dog peed my phone while I was praying

function random(arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  return randomNum;
}

console.log(random(when));

window.onload = function() {
  //write your code here
  let randomSentence = `${who[random(who)]} ${action[random(action)]} ${
    what[random(what)]
  } ${when[random(when)]}`;
  console.log(randomSentence);
  excuses.innerHTML = randomSentence;
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generateDomain(top) {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    for (let pindex = 0; pindex < 2; pindex++) {
      for (aindex = 0; aindex < 2; aindex++) {
        for (nindex = 0; nindex < 2; nindex++) {
          console.log(pronoun[pindex] + adj[aindex] + noun[nindex] + top);
        }
      }
    }
  }
  generateDomain(".net");
  console.log("Hello Rigo from the console!");
};

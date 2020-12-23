/*

Copyright (c) Eduardo Migueis 2020.

 */

//textarea
var countTarget = document.querySelector("#input-text");

//target of the word count value. <span>
var wordCount = document.querySelector("#word-count");
//target of the character count value. <span>
var characterCount = document.querySelector("#character-count");

var count = function () {
  //value inside the textarea
  var characters = countTarget.value;
  //number of characters
  var characterLength = characters.length;

  var words = characters.split(/[\n\r\s]+/g).filter(function (word) {
    return word.length > 0;
  });

  wordCount.innerHTML = words.length;
  characterCount.innerHTML = characterLength;
};

//sets the inicial sentence inside the textarea
countTarget.textContent = "Almost before we knew it, we had left the ground.";

count();

//binds the input event of the text area to the function count()
window.addEventListener(
  "input",
  function (event) {
    if (event.target.matches("#input-text")) {
      count();
    }
  },
  false
);

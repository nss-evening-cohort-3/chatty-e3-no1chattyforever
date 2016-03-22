"use strict";
var Chatty = function() {
document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);

  // Handle the click event on any li
  if (event.target.tagName.toLowerCase() === "li") {
    console.log("You clicked on an <li> element");
  }

  // Handle the click event on any DOM element with a certain class
  if (event.target.className === "article-section") {
    console.log("You clicked on an `article-section` element");
  }

  // Inspect the `id` property of the event target
  if (event.target.id === "page-title") {
    console.log("You clicked on the page-title element");
  }
}
})();

var input = document.getElementById("userInput");
//EVENT LISTENER FOR RETURN KEY KEYPRESS IN MESSAGE FIELD
function keyEvent(currentMessage) {
  if (event.target.className === "form-control") {
      console.log("You clicked on a `input` element");
      input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
      
      }
      }
  }); 
}   
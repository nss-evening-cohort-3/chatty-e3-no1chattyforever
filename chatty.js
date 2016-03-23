"use strict";

var Chatty;
var darkBox = document.getElementById('darkTheme');
var bodyTag = document.getElementById('main');

darkBox.addEventListener("click", function() {
  if (darkBox.checked === true) {
    bodyTag.classList.add('darkTheme');
    } else if (darkBox.checked === false) {
      bodyTag.classList.remove('darkTheme');
    }
});

"use strict";

var Chatty;

function options() {
  var darkBox = document.getElementById('darkTheme');
  var largeBox = document.getElementById("largeText");
  var body = document.getElementById('main');
  var container = document.getElementById("container");
  var output = document.getElementById("messageContainer");
  var logo = document.getElementById("logo");
  var header = document.getElementById("header");
  var labelDark = document.getElementById("labelDark");
  var labelLarge = document.getElementById("labelLarge");
  var text = document.getElementsByClassName("msg");
  var deletebtn = document.getElementsByClassName("deletebtn");
  var hoverDelete = document.getElementById("hover");

  darkBox.addEventListener("click", function() {
    if (darkBox.checked === true) {
      body.classList.add('darkBody');
      container.classList.remove('contain');
      container.classList.add('darkContainer');
      output.classList.remove('messageContainer');
      output.classList.add('darkMC');
      logo.classList.remove('logo');
      logo.classList.add('darkLogo');
      header.classList.add('darkHeader');
      labelLarge.classList.add('darkHeader');
      } else if (darkBox.checked === false) {
        body.classList.remove('darkBody');
        container.classList.remove('darkContainer');
        container.classList.add('contain');
        output.classList.remove('darkMC');
        output.classList.add('messageContainer');
        logo.classList.remove('darkLogo');
        logo.classList.add('logo');
        header.classList.remove('darkHeader');
        labelLarge.classList.remove('darkHeader');
    }
});

//Change messages and delete button to dark theme **if messages and delete buttons exist on DOM
  for (let i = 0; i < Chatty.getChats().length; i++) { 
    darkBox.addEventListener("click", function() {
      if (darkBox.checked === true && messageContainer.innerHTML.indexOf(0) > 0) {
        text[i].classList.add('darkMessage');
        deletebtn[i].classList.add('darkDelete');
        } else if (darkBox.checked === false && messageContainer.innerHTML.indexOf(0) > 0) {
          text[i].classList.remove('darkMessage');
          deletebtn[i].classList.remove('darkDelete');
      }
    });

    //Change message to large size **if message exists on DOM
    largeBox.addEventListener("click", function() {
      if (largeBox.checked === true && messageContainer.innerHTML.indexOf(0) > 0) {
        text[i].classList.add('largeText');
        } else if (largeBox.checked === false && messageContainer.innerHTML.indexOf(0) > 0) {
          text[i].classList.remove('largeText');
      }
    });
  }
}

//clear button event listeners
var clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearBtnFunc);
clearButton.addEventListener('click', check);

//checks for content in message field
function check() {
	if (messageContainer.innerHTML.indexOf(0) < 0) {
		clearButton.disabled = true;
	}
}

//clears messages from DOM
function clearBtnFunc() {
	output.innerHTML = "";
}


Chatty.loadChats();

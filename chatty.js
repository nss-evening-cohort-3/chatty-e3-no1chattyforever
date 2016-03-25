"use strict";


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
  var hoverDelete = document.getElementById("hover")

//Change body styling to dark theme
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
    labelDark.classList.add('darkHeader');
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
      labelDark.classList.remove('darkHeader');
      labelLarge.classList.remove('darkHeader');
    }
});

//Change messages and delete button to dark theme
  for (let i = 0; i < Chatty.getChats().length; i++) { 
    darkBox.addEventListener("click", function() {
      if (darkBox.checked === true) {
        text[i].classList.add('darkMessage');
        deletebtn[i].classList.add('darkDelete');
        } else if (darkBox.checked === false) {
          text[i].classList.remove('darkMessage');
          deletebtn[i].classList.remove('darkDelete');
      }
    });

//Change message to large size
    largeBox.addEventListener("click", function() {
      if (largeBox.checked === true) {
        text[i].classList.add('largeText');
        } else if (largeBox.checked === false) {
          text[i].classList.remove('largeText');
      }
    });

//Create hover styling to delete button. NOT WORKING PROPERLY.
    hoverDelete.addEventListener("mouseover", function() {
      hoverDelete.classList.add("deleteHover");
    });

    hoverDelete.addEventListener("mouseout", function() {
      hoverDelete.classList.remove("deleteHover");
    });
  }
}

Chatty.loadChats();

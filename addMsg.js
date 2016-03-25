"use strict";

var Chatty = (function(chatty) {
  // accept user input on return key click
  let inputEl = document.getElementById('userInput');
  //return key part
  inputEl.addEventListener('keypress', function(e) {

    if(e.keyCode == 13) {
      let chatHistory = Chatty.getChats(); //use getter to access chats array
      let chatObj = {
        "msg": inputEl.value
      };
      // add input to chats array (make sure it all continues posting to DOM)
      chatHistory.push(chatObj); //push value of input into chats array
      Chatty.populateDOM(chatHistory);
      //empty input value on keypress
      inputEl.value = "";
    }
});

  // allow delete of single msg
  var dltBtn = document.getElementsByClassName('delete');


}( Chatty || {} ));
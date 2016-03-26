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

      //enables clear button use when a message is added after message board has been cleared
      prepClrBtn();
    }
});

//envoked after enter keypress line 23
function prepClrBtn() {
		clearButton.disabled = false;
}

  // allow delete of single msg
  chatty.setEventListener = function() {
    var dltBtn = document.getElementsByClassName('deletebtn')
    for (var i = 0; i < dltBtn.length; i++) {
      dltBtn[i].addEventListener("click", function (event) {
      let chattyIndex = event.target.id.split("chat")[1];
      let chats = Chatty.getChats();
      chats.splice(chattyIndex, 1);
      Chatty.populateDOM(chats);
      });
    }
  };
  return chatty;


}( Chatty || {} ));
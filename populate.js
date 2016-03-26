"use strict";

var Chatty = (function(chatty) {
  chatty.populateDOM = function (chats) {
    let outputEl = document.getElementById('output');
    outputEl.innerHTML = "";
    let chatHistory = Chatty.getChats();
    // loop through array to output msgs in DOM
    for (let i = 0; i < chats.length; i++) {
      //give each dlt btn a unique id
      let elementId = "chat"+i;

      outputEl.innerHTML += '<span id=' + elementId + ' class="deletebtn col-xs-1 glyphicon glyphicon-remove hover" aria-hidden="true"></span>' + '<p id="message" class="msg col-xs-11">' + chats[i].msg + '</p>';
      options();
    };
    Chatty.setEventListener();
  }
  return chatty;
}( Chatty || {} ));
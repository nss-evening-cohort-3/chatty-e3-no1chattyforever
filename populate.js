"use strict";

var Chatty = (function(chatty) {
  chatty.populateDOM = function (chats) {
    let outputEl = document.getElementById('output');
    let chatHistory = Chatty.getChats();
    // loop through array to output msgs in DOM
    for (let i = 0; i < chats.length; i++) {
      outputEl.innerHTML +=  '<span id="hover" class="deletebtn col-xs-1 glyphicon glyphicon-remove" aria-hidden="true"></span>' + '<p id="message" class="msg col-xs-11">' + chats[i].msg + '</p>';
      options();
    };
  }
  return chatty;

}( Chatty || {} ));
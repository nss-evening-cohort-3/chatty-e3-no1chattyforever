"use strict";

var Chatty = (function(chatty) {
  chatty.populateDOM = function (chats) {
    console.log(chats);
    let outputEl = document.getElementById('output');
    outputEl.innerHTML = "";
    let chatHistory = Chatty.getChats();
    // loop through array to output msgs in DOM
    for (let i = 0; i < chats.length; i++) {
      outputEl.innerHTML += '<p>' + chats[i].msg + '<button class="delete">' + "Delete" + '</button></p>';
    };
  }
  return chatty;

}( Chatty || {} ));
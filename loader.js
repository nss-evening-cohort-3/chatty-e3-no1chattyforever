"use strict";
var Chatty = (function(chatty) {
  var chats = [];

  return {
    getChats: function () {
      return chats;
    },

    loadChats: function () {
      var chatLoader = new XMLHttpRequest();
      chatLoader.addEventListener("load", function () {
        var data = JSON.parse(this.responseText);
        chats = data.messages;
        Chatty.populateDOM(chats);
        });
      chatLoader.open("GET", "chatty.json");
      chatLoader.send(); 
    }
	}
  
}( Chatty || {} ));

"use strict";
var Chatty = (function(chatty) {
  var chats = [];
  return {
    loadChats: function (callback) {
    	console.log("loadChats");
      var chatLoader = new XMLHttpRequest();
      chatLoader.addEventListener("load", function () {
      var data = JSON.parse(this.responseText);
      chats = data.messages;
      console.log("this works", chats);
      });
      chatLoader.open("GET", "chatty.json");
      chatLoader.send();
      
    }

	}
  return chatty;
})(Chatty);
Chatty.loadChats();
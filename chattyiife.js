"use strict";
var Chatty = (function(chatty(){
  var chats = [];
  return {
    var loadChats = loadChats (function (callback) {
    	console.log("loadChats");
      var chatLoader = new XMLHttpRequest();
      chatLoader.open("GET", "chatty.json");
      chatLoader.send();
      chatLoader.addEventListener("load", function () {
      loadChats = JSON.parse(this.responseText).inventory.cars;
      callback(chats);	
      console.log("this works", chats);
      });
    }
	}
	return chatty;
})(Chatty);
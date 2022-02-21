(function() {

  var btn = document.getElementById("btn");

  addEvent(btn, "click mouseover", handler);


  function handler ( event ) {
    alert("Happy to see you " + event.type + " here!");
  }

})();


function addEvent ( element, event, fnc ) {
  var events = event.split(/\s/),
      evt = "";
  while ( evt = events.shift() ) {
    ((element.addEventListener) ? element.addEventListener(evt, fnc, false) : element.attachEvent("on" + evt, fnc));
  }
}

function removeEvent ( element, event, fnc ) {
  var events = event.split(/\s/),
      evt = "";
  while ( evt = events.shift() ) {
    ((element.removeEventListener) ? element.removeEventListener(evt, fnc, false) : element.detachEvent("on" + evt, fnc));
  }
}

function playMusic(){
var music = new Audio('click.mp3');
music.play();
      }

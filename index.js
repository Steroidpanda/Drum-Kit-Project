
// Detects when button gets pressed, and passes the info to makeSound function//
for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//detects when keyboard is pressed and passes that info to makeSound function//
document.addEventListener('keydown', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

// function that takes in the event and then plays the relevant sound//
function makeSound(key) {

  switch (key) {
    case 'w':
      var tomOne = new Audio('sounds/crash.mp3');
      tomOne.play();
      break;

    case 'a':
      var tomOne = new Audio('sounds/kick-bass.mp3');
      tomOne.play();
      break;

    case 's':
      var tomOne = new Audio('sounds/snare.mp3');
      tomOne.play();
      break;

    case 'd':
      var tomOne = new Audio('sounds/tom-1.mp3');
      tomOne.play();
      break;

    case 'j':
      var tomOne = new Audio('sounds/tom-2.mp3');
      tomOne.play();
      break;

    case 'k':
      var tomOne = new Audio('sounds/tom-3.mp3');
      tomOne.play();
      break;

    case 'l':
      var tomOne = new Audio('sounds/tom-4.mp3');
      tomOne.play();
      break;

    default:
      console.log(key);
  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector('.' + currentKey);
 activeButton.classList.add('pressed');

 setTimeout(function(){
   activeButton.classList.remove('pressed');
 }, 150);

}

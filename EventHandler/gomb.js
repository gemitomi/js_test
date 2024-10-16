// this is how you store a DOM element (a button) in a variable
const button = document.querySelector(".js-button");

// this is just an example function
function example () {
  alert("you clicked!");
}
alert("Hi");
// this is how you add an event listener to your button,
// that only runs on click
button.addEventListener("click", example);

// this is how you turn a class on and off on an element
// this doesn't work yet, as `this` points to the global context instead of your button
// TODO: do this class toggling only on click!
//this.classList.toggle("is-info");

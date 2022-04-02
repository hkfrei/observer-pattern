import CounterObservable from "./CounterObservable";

// create an instace of the CounterObservable
const counterObs = new CounterObservable();

// references to html elements
const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");
const observableContainer = document.getElementById("observable");
const countElement = document.getElementById("count");

// initial count
let count = 0;

// function to update the count
function updateCount(notification) {
  if (notification === "decrease") count = --count;
  if (notification === "increase") count = ++count;
  countElement.innerText = count;
}

// function to update latest notification for the observable.
function logObservableNotification(notification) {
  observableContainer.innerHTML =
    "Observable received the message:<br /><ul><li>" +
    notification +
    "</li></ul>";
}

// subscribe the functions to the oberservable
counterObs.subscribe(updateCount);
counterObs.subscribe(logObservableNotification);

// notify the observable on click
increaseButton.addEventListener("click", () => counterObs.notify("increase"));
decreaseButton.addEventListener("click", () => counterObs.notify("decrease"));

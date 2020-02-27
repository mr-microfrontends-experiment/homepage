const usersElement = document.querySelector("#usersElement");
const userIdElement = document.querySelector("#userIdElement");
const jokeElement = document.querySelector("#joke-element");

usersElement.addEventListener("outClickedItem", event => {
  console.log(event.detail, "User");

  // send the userId to the future user detail component here
  userIdElement.innerHTML = event.detail.id;
});

jokeElement.categories = ["nerdy"];
console.log(jokeElement);

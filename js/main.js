const usersElement = document.querySelector("#usersElement");
const userDetailElement = document.querySelector("#userDetailElement");
const jokeElement = document.querySelector("#joke-element");

usersElement.addEventListener("outClickedItem", event => {
  console.log(event.detail, "User");

  userDetailElement.userId = event.detail.id;
});

jokeElement.categories = ["nerdy"];
console.log(jokeElement);

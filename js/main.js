const usersElement = document.querySelector("#usersElement");
const userIdElement = document.querySelector("#userIdElement");

usersElement.addEventListener("outClickedItem", event => {
  console.log(event.detail, "User");

  // send the userId to the future user detail component here
  userIdElement.innerHTML = event.detail.id;
});

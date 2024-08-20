const dialog = document.querySelector("dialog");
const joinButton = document.querySelector("button");

joinButton.addEventListener("mousedown", () => {
  dialog.showModal();
});

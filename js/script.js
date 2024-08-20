const googleFormsDialog = document.querySelector(".google-forms-container");
const joinButton = document.querySelector("button");

joinButton.addEventListener("mousedown", () => {
  googleFormsDialog.showModal();
});

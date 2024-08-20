const dialog = document.querySelector("dialog");
const joinButton = document.querySelector("button");

const closeDialog = (e) => {
  if (e.target === dialog) dialog.close();
};

joinButton.addEventListener("mousedown", () => dialog.showModal());
dialog.addEventListener("mousedown", closeDialog);

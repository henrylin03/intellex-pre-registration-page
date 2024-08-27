const dialog = document.querySelector("dialog");
const joinButton = document.querySelector("#join-waitlist");
const emailButton = document.querySelector("#email");

// event handlers
const closeDialog = (e) => {
  if (e.target === dialog) dialog.close();
};

const sendEmail = () => {
  const EMAIL_ADDRESS = "admin@intellex.academy";
  const emailLink = `mailto:${EMAIL_ADDRESS}?subject=Pre-registration Enquiry`;

  window.location.href = emailLink;
};

// event listeners
joinButton.addEventListener("click", () => dialog.showModal());
dialog.addEventListener("click", closeDialog);
emailButton.addEventListener("click", sendEmail);

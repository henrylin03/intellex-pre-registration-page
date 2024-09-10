const signupDialog = document.querySelector("dialog");
const joinButton = document.querySelector("#join-waitlist");
const emailButton = document.querySelector("#email");

const closeDialog = (e) => {
  if (e.target === signupDialog) signupDialog.close();
};

const sendEmail = () => {
  const EMAIL_ADDRESS = "admin@intellex.academy";
  const emailLink = `mailto:${EMAIL_ADDRESS}?subject=Pre-registration Enquiry`;

  window.location.href = emailLink;
};

const enableCTAs = () => {
  joinButton.addEventListener("click", () => signupDialog.showModal());
  signupDialog.addEventListener("click", closeDialog);
  emailButton.addEventListener("click", sendEmail);
};

export default enableCTAs;

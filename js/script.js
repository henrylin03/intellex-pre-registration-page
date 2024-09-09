const dialog = document.querySelector("dialog");
const joinButton = document.querySelector("#join-waitlist");
const emailButton = document.querySelector("#email");
const switchLanguageButtons = document.querySelectorAll(
  ".switch-language-button"
);

// event handlers
const closeDialog = (e) => {
  if (e.target === dialog) dialog.close();
};

const sendEmail = () => {
  const EMAIL_ADDRESS = "admin@intellex.academy";
  const emailLink = `mailto:${EMAIL_ADDRESS}?subject=Pre-registration Enquiry`;

  window.location.href = emailLink;
};

const switchLanguage = (e) => {
  const selectedLanguage = e.target.dataset.language;
  const variableLanguageElements = {
    english: document.querySelectorAll("body [lang='en']"),
    simplifiedChinese: document.querySelectorAll("body [lang='zh']"),
  };

  if (!(selectedLanguage in variableLanguageElements)) return;

  // update ui styling for buttons
  switchLanguageButtons.forEach((button) =>
    button.classList.remove("selected")
  );
  e.target.classList.add("selected");

  for (const [language, elements] of Object.entries(variableLanguageElements)) {
    if (language === selectedLanguage) {
      elements.forEach((element) => (element.style.display = "block"));
    } else {
      elements.forEach((element) => (element.style.display = "none"));
    }
  }
};

// event listeners
switchLanguageButtons.forEach((button) =>
  button.addEventListener("click", switchLanguage)
);
joinButton.addEventListener("click", () => dialog.showModal());
dialog.addEventListener("click", closeDialog);
emailButton.addEventListener("click", sendEmail);

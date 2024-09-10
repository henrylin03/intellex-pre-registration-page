const switchLanguageButtons = document.querySelectorAll(
  ".switch-language-button"
);

const handleLanguageSwitch = (e) => {
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

const enableLanguageSwitch = () =>
  switchLanguageButtons.forEach((button) =>
    button.addEventListener("click", handleLanguageSwitch)
  );

export default enableLanguageSwitch;

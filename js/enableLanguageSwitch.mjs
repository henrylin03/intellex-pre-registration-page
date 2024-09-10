const switchLanguageButtons = document.querySelectorAll(
  ".switch-language-button"
);

const handleLanguageSwitch = (e) => {
  const currentPageName = window.location.pathname.replace(".html", "");
  const PAGE_TITLES = {
    "/": {
      english: "Intellex | Join our waitlist to get matched to a career mentor",
      simplifiedChinese: "Intellex | 职业导师配对",
    },
    "/privacy-policy": {
      english: "Intellex | Privacy Policy",
      simplifiedChinese: "Intellex | 隐私政策",
    },
    "/terms-and-conditions": {
      english: "Intellex | Terms and Conditions",
      simplifiedChinese: "Intellex | 条款与条件",
    },
  };
  const selectedLanguage = e.target.dataset.language;
  const variableLanguageElements = {
    english: document.querySelectorAll("body [lang='en']"),
    simplifiedChinese: document.querySelectorAll("body [lang='zh']"),
  };

  if (
    !(selectedLanguage in variableLanguageElements) ||
    !(currentPageName in PAGE_TITLES)
  )
    return;

  // update page title
  document.title = PAGE_TITLES[currentPageName][selectedLanguage];

  // update ui styling for buttons
  switchLanguageButtons.forEach((button) =>
    button.classList.remove("selected")
  );
  e.target.classList.add("selected");

  // hide/show variable elements
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

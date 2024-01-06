(function initialTheme() {
  const storageTheme: string = localStorage.getItem("theme");
  if (storageTheme === "1" || storageTheme === "2" || storageTheme === "3") {
    buttonShutter();
    themeSwitcher(storageTheme);
  } else {
    buttonShutter();
    themeSwitcher("1");
  }
})();

document.querySelector(".radioBox").addEventListener("click", (event) => {
  const themeNumber: string = (event.target as HTMLDivElement).dataset.value;
  if (themeNumber === "1" || themeNumber === "2" || themeNumber === "3") {
    buttonShutter();
    themeSwitcher(themeNumber);
    localStorage.setItem("theme", themeNumber);
  }
});

function buttonShutter() {
  document.querySelectorAll(".theme").forEach((element) => {
    element.classList.remove("activatedStateOn");
    element.classList.add("activatedStateOff");
  });
}
function themeSwitcher(theme: string) {
  document.documentElement.className = `theme${theme}Color`;
  document.querySelector(`.theme${theme}Button`).classList.remove("activatedStateOff");
  document.querySelector(`.theme${theme}Button`).classList.add("activatedStateOn");
}

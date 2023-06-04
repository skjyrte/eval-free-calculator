document.querySelector(".radioBox").addEventListener("click", (event) => {
  let themeNumber: string = (event.target as HTMLDivElement).dataset.value;
  if (themeNumber === "1" || themeNumber === "2" || themeNumber === "3") {
    document.querySelectorAll(".theme").forEach((element) => {
      element.classList.remove("activatedStateOn");
      element.classList.add("activatedStateOff");
    });
    (event.target as HTMLDivElement).classList.remove("activatedStateOff");
    (event.target as HTMLDivElement).classList.add("activatedStateOn");
    document.documentElement.className = `theme${themeNumber}Color`;
  }
});

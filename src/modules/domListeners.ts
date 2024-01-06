import {inputProcessor} from "./inputProcessor";

document.querySelector(".keyboard").addEventListener("click", (event) => {
  if ((event.target as HTMLInputElement).value != undefined) {
    document.querySelector(".resultBox").innerHTML = inputProcessor(
      (event.target as HTMLInputElement).value,
      document.querySelector(".resultBox").innerHTML
    );
  }
});

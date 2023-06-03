let currentValue: string = "0";

document.querySelector(".keyboard").addEventListener("click", (event) => {
  if ((event.target as HTMLInputElement).value != undefined) {
    return checker((event.target as HTMLInputElement).value);
  }
});

function checker(value: string) {
  if (value.match(new RegExp(/^[0-9|.|]$/g))) {
    insertValues(value);
  }

  if (value.match(new RegExp(/[+|\-|\/|*]$/g))) {
    insertOperator(value);
  }

  if (value === "del") {
    deleteCharacter(value);
  }
  if (value === "reset") {
    resetValues();
  }
  if (value === "=") {
    calculate();
  }
  document.querySelector(".resultBox").innerHTML = currentValue;
}

function insertValues(value: string) {
  let lastIndex: number = Math.max(
    currentValue.lastIndexOf("-"),
    currentValue.lastIndexOf("+"),
    currentValue.lastIndexOf("*"),
    currentValue.lastIndexOf("/")
  );
  if (value === ".") {
    currentValue =
      currentValue
        .substring(lastIndex, currentValue.length - 1)
        .indexOf(".") === -1
        ? currentValue + value
        : currentValue;
  } else {
    currentValue = currentValue !== "0" ? currentValue + value : value;
  }
}

function insertOperator(value: string) {
  currentValue = currentValue === "" ? (currentValue = "0") : currentValue;
  currentValue = currentValue[currentValue.length - 1].match(
    new RegExp(/[+|\-|\/|*]$/g)
  )
    ? currentValue
    : currentValue + value;
}

function deleteCharacter(value: string) {
  currentValue = currentValue.slice(0, -1);
  if (currentValue === "") {
    resetValues;
  }
}

function resetValues() {
  currentValue = "0";
}

function calculate() {
  currentValue = currentValue === "" ? (currentValue = "0") : currentValue;
  let resultValue: number = eval(currentValue);
  currentValue = resultValue.toString();
}

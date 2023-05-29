let currentValue: string = "0";
let firstVariable: number = 0;
let secondVariable: number = 0;
let currentOperand: string = "";
let counter: number = 0;

document.querySelector(".keyboard").addEventListener("click", (event) => {
  if ((event.target as HTMLInputElement).value != undefined) {
    return checker((event.target as HTMLInputElement).value);
  }
});

function checker(value: string) {
  if (value.match(new RegExp(/^[0-9|.]$/g))) {
    insertValues(value);
  }
  if (value === "del") {
    deleteCharacter(value);
  }
  if (value === "reset") {
    resetValues();
  }
  if (value.match(new RegExp(/^[*|/|+|-]$/g))) {
    setOperand(value);
  }
  if (value.match(new RegExp(/^[*|/|+|-]$/g))) {
    setOperand(value);
  }
  if (value === "=") {
    equalsFunction();
  }
  console.log(`currentValue: ${currentValue}`);
  console.log(`currentOperand: ${currentOperand}`);
}

function insertValues(value: string) {
  if (value === ".") {
    currentValue =
      currentValue.indexOf(".") === -1 ? currentValue + value : currentValue;
  } else {
    currentValue = currentValue !== "0" ? currentValue + value : value;
  }
}
function deleteCharacter(value: string) {
  currentValue = currentValue.slice(0, -1);
  if (currentValue === "") {
    resetValues;
  }
}

function resetValues() {
  currentValue = "0";
  firstVariable = 0;
  secondVariable = 0;
  currentOperand = "";
  counter = 0;
}
function setOperand(value: string) {
  if (value === "*") {
    currentOperand = "*";
  }
  if (value === "/") {
    currentOperand = "/";
  }
  if (value === "+") {
    currentOperand = "+";
  }
  if (value === "-") {
    currentOperand = "-";
  }
  if (currentValue !== "" && counter === 0) {
    secondVariable = firstVariable;
    firstVariable = parseFloat(currentValue);
    currentValue = "";
    counter++;
  }
  if (currentValue !== "" && counter > 0) {
    secondVariable = firstVariable;
    firstVariable = parseFloat(currentValue);
    currentValue = "";
    calculate();
    counter++;
  }
  console.log(
    `firstVariable: ${firstVariable} secondVariable: ${secondVariable} currentValue: ${currentValue}`
  );
}

function calculate() {
  if (currentOperand === "*") {
    firstVariable = secondVariable * firstVariable;
  }
  if (currentOperand === "/") {
    firstVariable = secondVariable / firstVariable;
  }
  if (currentOperand === "-") {
    firstVariable = secondVariable - firstVariable;
  }
  if (currentOperand === "+") {
    firstVariable = secondVariable + firstVariable;
  }
  console.log(`firstVariable: ${firstVariable}`);
}

function equalsFunction() {
  if (currentValue !== "" && counter === 0) {
    secondVariable = firstVariable;
    firstVariable = parseFloat(currentValue);
    currentValue = "";
    counter++;
  }
  if (currentValue !== "" && counter > 0) {
    secondVariable = firstVariable;
    firstVariable = parseFloat(currentValue);
    currentValue = secondVariable.toString();
    calculate();
    counter++;
  }
  calculate();
}

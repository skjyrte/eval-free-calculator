let currentValue: string = "0";

document.querySelector(".keyboard").addEventListener("click", (event) => {
  if ((event.target as HTMLInputElement).value != undefined) {
    return checker((event.target as HTMLInputElement).value);
  }
});

function checker(value: string) {
  if (value.match(new RegExp(/^[0-9.]$/g))) {
    insertValues(value);
  }

  if (value.match(new RegExp(/[\+\-\/\*]$/g))) {
    insertOperator(value);
  }

  if (value === "del") {
    deleteCharacter(value);
  }
  if (value === "reset") {
    resetValues();
  }
  document.querySelector(".resultBox").innerHTML = currentValue;

  if (value === "=") {
    try {
      calculate();
      document.querySelector(".resultBox").innerHTML = currentValue;
      if (currentValue === "NaN") {
        throw new TypeError("INPUT ERROR");
      }
    } catch (e) {
      currentValue = "0";
      document.querySelector(".resultBox").innerHTML = e.message;
    }
  }
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
    new RegExp(/[\+\-\/\*]$/g)
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
  const operatorExp = new RegExp(/(\+|\-|\/|\*)/g);
  dividerMultiplier(operatorExp);
}

function dividerMultiplier(operatorExp: any) {
  try {
    const operator = new RegExp(/(\/|\*)/g);
    while (currentValue.search(operator) !== -1) {
      let currentOperator: string = currentValue[currentValue.search(operator)];
      let indexArray: Array<string> = currentValue.split(operatorExp);

      let indexB: number = indexArray.indexOf(currentOperator);
      let indexA: number = indexB - 1;
      let indexC: number = indexB + 1;

      if (currentOperator === "*") {
        indexArray[indexA] = (
          parseFloat(indexArray[indexA]) * parseFloat(indexArray[indexC])
        ).toString();
      }

      if (currentOperator === "/") {
        if (parseFloat(indexArray[indexC]) === 0) {
          throw new TypeError("DIVIDE BY ZERO");
        } else {
          indexArray[indexA] = (
            parseFloat(indexArray[indexA]) / parseFloat(indexArray[indexC])
          ).toString();
        }
      }

      indexArray[indexB] = "";
      indexArray[indexC] = "";

      currentValue = indexArray.join("");
    }
    addSubstract();
  } catch (e) {
    throw new TypeError(e.message);
  }
}
function addSubstract() {
  let operatorExp = new RegExp(/(?=[+\-])/g);
  let indexArray: Array<string> = currentValue.split(operatorExp);
  let numberArray: Array<number> = indexArray.map((element) =>
    parseFloat(element)
  );
  currentValue = numberArray
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toString();
}

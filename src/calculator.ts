document.querySelector(".keyboard").addEventListener("click", (event) => {
  if ((event.target as HTMLInputElement).value != undefined) {
    let currentValue: string = document.querySelector(".resultBox").innerHTML;
    return checker((event.target as HTMLInputElement).value, currentValue);
  }
});

function checker(value: string, currentValue: string) {
  try {
    if (value !== "=") {
      currentValue = typer(value, currentValue);
      document.querySelector(".resultBox").innerHTML = currentValue;
    }
    if (value === "=") {
      currentValue = calculate(currentValue);
      document.querySelector(".resultBox").innerHTML = currentValue;
    }
    if (currentValue === "NaN") {
      throw new TypeError("INPUT ERROR");
    }
  } catch (e) {
    currentValue = "0";
    document.querySelector(".resultBox").innerHTML = e.message;
  }
}

function typer(value: string, currentValue: string) {
  if (value.match(new RegExp(/^[0-9.]$/g))) {
    return insertValues(value, currentValue);
  }
  if (value.match(new RegExp(/[\+\-\/\*]$/g))) {
    return insertOperator(value, currentValue);
  }
  if (value === "del") {
    return deleteCharacter(currentValue);
  }
  if (value === "reset") {
    return "0";
  }
}

function insertValues(value: string, currentValue: string) {
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
  return currentValue;
}

function insertOperator(value: string, currentValue: string) {
  currentValue = currentValue === "" ? (currentValue = "0") : currentValue;
  currentValue = currentValue[currentValue.length - 1].match(
    new RegExp(/[\+\-\/\*]$/g)
  )
    ? currentValue
    : currentValue + value;
  return currentValue;
}

function deleteCharacter(currentValue: string) {
  currentValue = currentValue.slice(0, -1);
  if (
    currentValue === "" ||
    currentValue.search(new RegExp(/^[A-Z]/g)) !== -1
  ) {
    currentValue = "0";
  }
  return currentValue;
}

function calculate(currentValue: string) {
  const operatorExp = new RegExp(/(\+|\-|\/|\*)/g);
  return dividerMultiplier(operatorExp, currentValue);
}

function dividerMultiplier(operatorExp: any, currentValue: string) {
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
    return addSubstract(currentValue);
  } catch (e) {
    throw new TypeError(e.message);
  }
}
function addSubstract(currentValue: string) {
  let operatorExp = new RegExp(/(?=[+\-])/g);
  let indexArray: Array<string> = currentValue.split(operatorExp);
  let numberArray: Array<number> = indexArray.map((element) =>
    parseFloat(element)
  );
  return numberArray
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toString();
}

module.exports = checker;

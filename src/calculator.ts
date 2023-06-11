document.querySelector(".keyboard").addEventListener("click", (event) => {
  if ((event.target as HTMLInputElement).value != undefined) {
    document.querySelector(".resultBox").innerHTML = processInput(
      (event.target as HTMLInputElement).value,
      document.querySelector(".resultBox").innerHTML
    );
  }
});

export function processInput(lastInput: string, currentString: string) {
  if (lastInput !== "=") {
    return valueEdit(lastInput, currentString);
  }
  if (lastInput === "=") {
    return calculateNumber(currentString);
  }
}

function valueEdit(lastInput: string, currentString: string) {
  if (lastInput.match(new RegExp(/^[0-9.]$/g))) {
    return addNumber(lastInput, currentString);
  }
  if (lastInput.match(new RegExp(/[\+\-\/\*]$/g))) {
    return addOperator(lastInput, currentString);
  }
  if (lastInput === "del") {
    return deleteCharacter(currentString);
  }
  if (lastInput === "reset") {
    return "0";
  }
}

function addNumber(lastInput: string, currentString: string) {
  let lastOperatorIndex: number = Math.max(
    currentString.lastIndexOf("-"),
    currentString.lastIndexOf("+"),
    currentString.lastIndexOf("*"),
    currentString.lastIndexOf("/")
  );
  let resultString: string = currentString;
  if (lastInput === ".") {
    resultString =
      currentString
        .substring(lastOperatorIndex, currentString.length - 1)
        .indexOf(".") === -1
        ? currentString + lastInput
        : currentString;
  } else {
    resultString =
      currentString !== "0" ? currentString + lastInput : lastInput;
  }
  return checkInputForText(resultString);
}

function addOperator(lastInput: string, currentString: string) {
  let resultString: string =
    currentString === "" ? (currentString = "0") : currentString;
  resultString = resultString[resultString.length - 1].match(
    new RegExp(/[\+\-\/\*]$/g)
  )
    ? resultString
    : resultString + lastInput;
  return checkInputForText(resultString);
}

function checkInputForText(currentString: string) {
  if (
    currentString === "" ||
    currentString.search(new RegExp(/^[A-Z]/g)) !== -1
  ) {
    return "0";
  } else {
    return currentString;
  }
}

function deleteCharacter(currentString: string) {
  let resultString: string = currentString.slice(0, -1);
  return checkInputForText(resultString);
}

export function calculateNumber(currentString: string) {
  const regexInputCheck = new RegExp(/(\+|\-|\/|\*|\.|[0-9])/g);
  try {
    for (let letter of currentString) {
      if (letter.search(regexInputCheck) === -1) {
        throw new TypeError("INTERNAL ERROR");
      }
    }
    return divideMultiply(currentString);
  } catch (e) {
    return e.message;
  }
}

function divideMultiply(currentString: string) {
  const regexOperatorAll = new RegExp(/(\+|\-|\/|\*)/g);
  const regexOperatorCurrent = new RegExp(/(\/|\*)/g);
  try {
    let resultString: string = currentString;
    while (resultString.search(regexOperatorCurrent) !== -1) {
      let currentOperator: string =
        resultString[resultString.search(regexOperatorCurrent)];
      let indexOperatorArray: Array<string> =
        resultString.split(regexOperatorAll);

      let indexB: number = indexOperatorArray.indexOf(currentOperator);
      let indexA: number = indexB - 1;
      let indexC: number = indexB + 1;

      if (currentOperator === "*") {
        indexOperatorArray[indexA] = (
          parseFloat(indexOperatorArray[indexA]) *
          parseFloat(indexOperatorArray[indexC])
        ).toString();
      }

      if (currentOperator === "/") {
        if (parseFloat(indexOperatorArray[indexC]) === 0) {
          throw new TypeError("DIVIDE BY ZERO");
        } else {
          indexOperatorArray[indexA] = (
            parseFloat(indexOperatorArray[indexA]) /
            parseFloat(indexOperatorArray[indexC])
          ).toString();
        }
      }

      indexOperatorArray[indexB] = "";
      indexOperatorArray[indexC] = "";

      resultString = indexOperatorArray.join("");
    }
    return addSubtract(resultString);
  } catch (e) {
    return e.message;
  }
}

export function addSubtract(currentString: string) {
  let regexOperatorCurrent = new RegExp(/(?=[+\-])/g);
  const regexConversionCheck = new RegExp(/(\/|\*)/g);
  try {
    if (currentString.search(regexConversionCheck) !== -1) {
      throw new TypeError("INTERNAL ERROR");
    }
    let indexOperatorArray: Array<string> =
      currentString.split(regexOperatorCurrent);
    let numberArray: Array<number> = indexOperatorArray.map((element) =>
      parseFloat(element)
    );
    let resultString: string = numberArray
      .reduce((accumulator, resultString) => accumulator + resultString, 0)
      .toString();
    if (resultString === "NaN") {
      throw new TypeError("INPUT ERROR");
    }
    return resultString;
  } catch (e) {
    return e.message;
  }
}

function calculate(wholeInputString: string) {
  const regexInputCheck = new RegExp(/(\+|-|\/|\*|\.|[0-9])/g);
  try {
    for (const letter of wholeInputString) {
      if (letter.search(regexInputCheck) === -1) {
        throw new TypeError("INTERNAL ERROR");
      }
    }
    return divideMultiply(wholeInputString);
  } catch (e) {
    return e.message;
  }
}

function divideMultiply(wholeInputString: string) {
  const regexOperatorAll = new RegExp(/(\+|-|\/|\*)/g);
  const regexOperatorCurrent = new RegExp(/(\/|\*)/g);
  try {
    let resultString: string = wholeInputString;
    while (resultString.search(regexOperatorCurrent) !== -1) {
      const currentOperator: string =
        resultString[resultString.search(regexOperatorCurrent)];
      const indexOperatorArray: Array<string> = resultString.split(regexOperatorAll);

      const indexB: number = indexOperatorArray.indexOf(currentOperator);
      const indexA: number = indexB - 1;
      const indexC: number = indexB + 1;

      if (currentOperator === "*") {
        indexOperatorArray[indexA] = (
          parseFloat(indexOperatorArray[indexA]) * parseFloat(indexOperatorArray[indexC])
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

function addSubtract(wholeInputString: string) {
  const regexOperatorCurrent = new RegExp(/(?=[+-])/g);
  const regexConversionCheck = new RegExp(/(\/|\*)/g);
  try {
    if (wholeInputString.search(regexConversionCheck) !== -1) {
      throw new TypeError("INTERNAL ERROR");
    }
    const indexOperatorArray: Array<string> =
      wholeInputString.split(regexOperatorCurrent);
    const numberArray: Array<number> = indexOperatorArray.map((element) =>
      parseFloat(element)
    );
    const resultString: string = numberArray
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

export {calculate, divideMultiply, addSubtract};

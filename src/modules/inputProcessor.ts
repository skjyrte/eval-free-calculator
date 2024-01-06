import {calculate} from "./calculate";

function inputProcessor(lastInputCharacter: string, wholeInputString: string) {
  return lastInputCharacter === "="
    ? calculate(wholeInputString)
    : valueEdit(lastInputCharacter, wholeInputString);
}

function valueEdit(lastInputCharacter: string, wholeInputString: string) {
  if (lastInputCharacter.match(new RegExp(/^[0-9.]$/g))) {
    return addNumber(lastInputCharacter, wholeInputString);
  } else if (lastInputCharacter.match(new RegExp(/[+\-/*]$/g))) {
    return addOperator(lastInputCharacter, wholeInputString);
  } else if (lastInputCharacter === "del") {
    return deleteCharacter(wholeInputString);
  } else if (lastInputCharacter === "reset") {
    return "0";
  } else {
    throw new TypeError("INTERNAL ERROR");
  }
}

function addNumber(lastInputCharacter: string, wholeInputString: string) {
  const lastOperatorIndex: number = Math.max(
    wholeInputString.lastIndexOf("-"),
    wholeInputString.lastIndexOf("+"),
    wholeInputString.lastIndexOf("*"),
    wholeInputString.lastIndexOf("/")
  );
  const resultString = () => {
    if (lastInputCharacter === ".") {
      return wholeInputString
        .substring(lastOperatorIndex, wholeInputString.length - 1)
        .indexOf(".") === -1
        ? wholeInputString + lastInputCharacter
        : wholeInputString;
    } else {
      return wholeInputString !== "0"
        ? wholeInputString + lastInputCharacter
        : lastInputCharacter;
    }
  };
  return clearInvalidInput(resultString());
}

function addOperator(lastInputCharacter: string, wholeInputString: string) {
  let resultString: string =
    wholeInputString === "" ? (wholeInputString = "0") : wholeInputString;
  resultString = resultString[resultString.length - 1].match(new RegExp(/[+\-/*]$/g))
    ? resultString
    : resultString + lastInputCharacter;
  return clearInvalidInput(resultString);
}

function clearInvalidInput(wholeInputString: string) {
  if (wholeInputString === "" || wholeInputString.search(new RegExp(/^[A-Z]/g)) !== -1) {
    return "0";
  } else {
    return wholeInputString;
  }
}

function deleteCharacter(wholeInputString: string) {
  const resultString: string = wholeInputString.slice(0, -1);
  return clearInvalidInput(resultString);
}

export {inputProcessor};

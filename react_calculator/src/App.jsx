import { useState } from "react";
import Calci from "./calci";
function App() {
  const [number, setNumber] = useState("");
  const [display, setDisplay] = useState("");

  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState("");
  const [operatorClicked, setOperatorClick] = useState(false);

  function handleClick(value) {
    if (number == "Error") {
      setNumber(value);
      setDisplay(value);
      return;
    }
    if (operatorClicked) {
      setNumber(value);
      setDisplay((prev) => prev + value);
      setOperatorClick(false);
    } else {
      if (value === "." && number.includes(".")) {
        return;
      }
      setNumber((prev) => prev + value);
      setDisplay((prev) => prev + value);
    }
  }
  function handleDelete() {
    setNumber((prev) => prev.slice(0, -1));
    setDisplay((prev) => prev.slice(0, -1));
  }
  function handleClear() {
    setNumber("");
    setFirstNumber(null);
    setOperator("");
    setDisplay("");
    setOperatorClick(false);
  }
  function handleOperator(value) {
    console.log("operator Clicked : ", value);
    if (number === "" || number === "Error") return;
    setFirstNumber(Number(number));
    setOperator(value);
    setOperatorClick(true);

    setDisplay((prev) => prev + value);
  }

  function handleCalculate() {
    if (firstNumber === null || operator === "" || number === "") {
      return;
    }
    const secondNumber = Number(number);
    let result;

    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber === 0) {
          setNumber("Error");
          setDisplay("Error");
          setFirstNumber(null);
          setOperator("");
          return;
        }
        result = firstNumber / secondNumber;
        break;

      default:
        return;
    }
    setNumber(String(result));
    setDisplay(String(result));

    setFirstNumber(null);
    setOperator("");
    setOperatorClick(false);
  }

  return (
    <>
      <Calci
        number={display}
        setNumber={setNumber}
        handleClick={handleClick}
        handleDelete={handleDelete}
        handleClear={handleClear}
        handleOperator={handleOperator}
        handleCalculate={handleCalculate}
      />
    </>
  );
}

export default App;

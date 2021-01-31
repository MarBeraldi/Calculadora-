var operator = null;
var inputValueMemo = 0;
function getContentClick(event) {
  const value = event.target.innerHTML;
  filterAction(value);
}
const filterAction = (value) => {
  switch (value) {
    case "0":
      addNumberInput(0);
      break;
    case "1":
      addNumberInput(1);
      break;
    case "2":
      addNumberInput(2);
      break;
    case "3":
      addNumberInput(3);
      break;
    case "4":
      addNumberInput(4);
      break;
    case "5":
      addNumberInput(5);
      break;
    case "6":
      addNumberInput(6);
      break;
    case "7":
      addNumberInput(7);
      break;
    case "8":
      addNumberInput(8);
      break;
    case "9":
      addNumberInput(9);
      break;
    case ",":
      addNumberInput(",");
      break;
    case "+":
      setOperation("+");
      break;
    case "-":
      setOperation("-");
      break;
    case "x":
      setOperation("*");
      break;
    case "/":
      setOperation("/");
      break;
    case "+/-":
      setOperation("+/-");
      break;
    case "%":
      setOperation("%");
      break;
    case "=":
      calculation();
      break;
    case "AC":
      resetCalculator();
      break;
  }
};
function addNumberInput(value) {
  const inputScreen = document.getElementsByClassName("calculator__screen")[0];
  const inputValue = inputScreen.value;
  if (inputValue === "0" && inputValue.length === 1 && value !== ",") {
    inputScreen.value = value;
    return;
  }
  if(inputScreen.value === "" && value === ","){
    inputScreen.value = 0 + value;
    return;
  }
  inputScreen.value = inputValue + value;
}
function setOperation(operator) {
  const inputScreenValue = document.getElementsByClassName("calculator__screen")[0];
  this.operator = operator;
  if (inputScreenValue !== 0) {
    calculation();
  }
}
function convert(value) {
  let result = value.toString().replace(",", ".");
  return parseFloat(result);
}
function invertComma(value) {
  return value.toString().replace(".", ",");
}
function calculation() {
  const inputScreen = document.getElementsByClassName("calculator__screen")[0];

  let valueOne = convert(this.inputValueMemo);
  let valueTwo = convert(inputScreen.value);
  let total = 0;

  if (this.operator === "+" && inputScreen.value !== "") {
    total = valueOne + valueTwo;
  }

  if (this.operator === "-" && inputScreen.value !== ""){
    if(valueOne !== 0){
      total = valueOne - valueTwo;
    }else{
      total = valueTwo;
    }
  }
  if (this.operator === "*" && inputScreen.value !== ""){
    if(valueOne !== 0){
      total = valueOne * valueTwo;
    }else{
      total = valueTwo;
    }
  }
  if (this.operator === "/" && inputScreen.value !== ""){
    if(valueOne !== 0){
      total = valueOne / valueTwo;
    }else{
      total = valueTwo;
    }
  }

  if (this.operator === "%" && inputScreen.value !== ""){
    total = valueTwo / 100;
  }

  if (this.operator === "+/-" && inputScreen.value !== ""){
    if(valueTwo > 0){
      total = -valueTwo;
    }else{
      total = valueTwo;
    }
  }
  this.inputValueMemo = total;
  inputScreen.value = "";
  inputScreen.placeholder = invertComma(total);
}
const resetCalculator = () =>{
  let inputScreen = document.getElementsByClassName("calculator__screen")[0];
  inputScreen.value = 0;
  this.inputValueMemo = 0;
  this.operator = null;
}

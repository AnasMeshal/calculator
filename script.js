let resultDiv = document.getElementById("result");

let currentNumber = "";
let result = "";

const capture = (button) => {
  if (button.dataset.number) {
    currentNumber += button.dataset.number;
    resultDiv.innerHTML = currentNumber;
  } else {
    currentNumber += button.dataset.action;
    resultDiv.innerHTML = currentNumber;
  }
};

const deleteResult = () => {
  currentNumber = "";
  resultDiv.innerHTML = currentNumber;
};

const equal = () => {
  try {
    resultDiv.innerHTML = eval(resultDiv.innerHTML);
    currentNumber = resultDiv.innerHTML;
  } catch (error) {
    resultDiv.innerHTML = "ERR";
    currentNumber = "";
  }
};

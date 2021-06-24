let getResult = document.getElementById("getResult");
let buttons = document.querySelectorAll("button");
let inputValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "CE") {
      inputValue = "";
      getResult.value = inputValue;
    } else if (buttonText == "=") {
      getResult.value = eval(inputValue);
    } else {
      inputValue += buttonText;
      getResult.value = inputValue;
    }
  });
}

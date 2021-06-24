const clickMe = () => {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let result = document.getElementById("result");

  height = height * 12; // changing feet to inch
  height = height * 0.025; //height in meter

  let bmiValue = weight / Math.pow(height, 2);
  let newBMIValue = Math.round(bmiValue);

  result.innerHTML = `Your BMI value is: ${newBMIValue}`;
};

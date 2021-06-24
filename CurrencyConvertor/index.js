const getDollar = () => {
  let inrInput = document.getElementById("inrInput").value;
  let dollar = document.getElementById("dollar");
  let inrRate = 0.014;
  let getOutput = inrRate * inrInput;
  dollar.innerHTML = `$${getOutput}`;
  console.log(getOutput);
};

const getInr = () => {
  let dollarInput = document.getElementById("dollarInput").value;
  let inr = document.getElementById("inr");
  let dollarRate = 73.23;
  let getOutput = dollarRate * dollarInput;
  inr.innerHTML = `${getOutput.toFixed(2)} Rupees`;
  console.log(getOutput);
};

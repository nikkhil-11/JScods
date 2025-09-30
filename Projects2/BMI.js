const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector(".results");
  const conclusion = document.querySelector(".conclusion");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = "please give a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "please give a valid weight";
  } else {
    const bmi = parseFloat( (weight / ((height * height) / 10000)).toFixed(2))
    if (bmi < 18.6) {
      conclusion.innerHTML = "You are underweight";
    } else if (bmi > 18.6 && bmi <= 24.9) {
      conclusion.innerHTML = "You are fit";
    } else {
      conclusion.innerHTML = "You are overweight";
    }
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

//weight/(((height/100)*(height/100)))

const btns = document.querySelectorAll(".btn:not(#bteql , #btc)");
const bteql = document.querySelector("#bteql");
const btc = document.querySelector("#btc");
const display = document.querySelector(".display");

ansGiven = false;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (ansGiven === true) {
      display.value = "";
      ansGiven = false;
    }
    display.value = display.value + btn.innerText;
  });
});

btc.addEventListener("click", () => {
  display.value = "";
});

bteql.addEventListener("click", () => {
  if (calculate() !== "error") {
    const result = calculate();
    display.value = result;
  } else {
    display.value = "ERROR";
  }
  ansGiven = true;
});

const calculate = () => {
  try {
    ans = eval(display.value);
    return ans;
  } catch (error) {
    return "error";
  }
};

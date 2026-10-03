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
allowedKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "/",
  "(",
  ")",
  ".",
];
document.addEventListener("keydown", (event) => {
  if (allowedKeys.includes(event.key)) {
    if (ansGiven === true) {
      display.value = "";
      ansGiven = false;
    }
    display.value = display.value + event.key;
  }
  if (event.key === "=" || event.key === "Enter") {
    if (calculate() !== "error") {
      const result = calculate();
      display.value = result;
    } else {
      display.value = "Error";
    }
    ansGiven = true;
  }
});

btc.addEventListener("click", () => {
  display.value = "";
});

bteql.addEventListener("click", () => {
  if (calculate() !== "error") {
    const result = calculate();
    display.value = result;
  } else {
    display.value = "Error";
  }
  ansGiven = true;
});

const calculate = () => {
  try {
    ans = eval(display.value);
    return Math.round(ans * 1000) / 1000;
  } catch (error) {
    return "error";
  }
};

// counter.js
// Counter UI logic and keyboard shortcuts

// Elements
const counterEl = document.getElementById("counter");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const stepInput = document.getElementById("step");

// Safety: only run if required elements exist
if (counterEl && incBtn && decBtn && resetBtn && stepInput) {
  // helpers
  function getStep() {
    const v = Number(stepInput.value);
    return v > 0 ? v : 1;
  }
  function setValue(n) {
    counterEl.textContent = n;
  }

  // state
  let value = 0;
  setValue(value);

  // events
  incBtn.addEventListener("click", () => {
    value += getStep();
    setValue(value);
  });

  decBtn.addEventListener("click", () => {
    value -= getStep();
    // if you want to avoid negative values, uncomment the next line:
    // value = Math.max(0, value);
    setValue(value);
  });

  resetBtn.addEventListener("click", () => {
    value = 0;
    setValue(value);
  });

  // keyboard shortcuts: + / - to change value, PageUp/PageDown to change step
  document.addEventListener("keydown", (e) => {
    // note: some browsers produce "Add" or "Subtract" on numpad; keep it simple and check +/-
    if (e.key === "+") {
      value += getStep();
      setValue(value);
    } else if (e.key === "-") {
      value -= getStep();
      setValue(value);
    } else if (e.key === "PageUp") {
      stepInput.value = Math.max(1, getStep() + 1);
    } else if (e.key === "PageDown") {
      stepInput.value = Math.max(1, getStep() - 1);
    }
  });
} else {
  // no-op if HTML not present; prevents runtime errors during partial page renders
  // console.warn("Counter DOM not found — counter.js not initialized.");
}

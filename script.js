// script.js
// menu toggle helpers: close on ESC and auto-close when clicking a menu item or the help button.

// get the checkbox toggle (hamburger)
const toggle = document.querySelector('.hamburger input[type="checkbox"]');
const hamburgerBtn = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");

if (toggle) {
  // close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.checked)
      hamburgerMenu.classList.remove("open");
  });

  // close when menu item clicked (anchor) or help button pressed
  document.querySelectorAll(".menu a, .menu button").forEach((el) => {
    el.addEventListener("click", () => {
      hamburgerMenu.classList.remove("open");
    });
  });
}

hamburgerBtn.addEventListener("click", () => {
  hamburgerMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  hamburgerMenu.classList.remove("open");
});
// ---- placeholder minimal counter functionality so UI is demoable (optional) ----
// If you want the page to remain purely layout-only, remove the block below.

const counterEl = document.getElementById("counter");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const stepInput = document.getElementById("step");

console.log(counterEl, incBtn, decBtn, resetBtn, stepInput);

function getStep() {
  const v = Number(stepInput.value);
  console.log(v);
  return v ? v : 1;
}
function setValue(n) {
  counterEl.textContent = n;
}

let value = 0;
setValue(value);

incBtn.addEventListener("click", () => {
  value += getStep();
  setValue(value);
});
decBtn.addEventListener("click", () => {
  value -= value - getStep() > 0 ? getStep() : 0;
  setValue(value);
});
resetBtn.addEventListener("click", () => {
  value = 0;
  setValue(value);
});

// keyboard shortcuts + / - and PageUp/PageDown to change step
document.addEventListener("keydown", (e) => {
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

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const overlay = document.getElementById("modalOverlay");

// Open modal
openModalBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  console.log(object);
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

// Optional: close when clicking outside modal box
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.add("hidden");
  }
});

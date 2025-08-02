document.addEventListener("DOMContentLoaded", () => {
  // Tooltip
  const btn = document.getElementById("qrTooltipBtn");
  const box = document.getElementById("qrTooltipBox");
  const close = document.getElementById("qrTooltipClose");

  if (btn && box && close) {
    btn.addEventListener("click", () => box.classList.add("active"));
    close.addEventListener("click", () => box.classList.remove("active"));
  }

  // Burger menu
  const burgerBtn = document.getElementById("burgerBtn");
  const navOverlay = document.getElementById("navOverlay");
  const closeNav = document.getElementById("closeNav");

  if (burgerBtn && navOverlay && closeNav) {
    burgerBtn.addEventListener("click", () => navOverlay.classList.add("active"));
    closeNav.addEventListener("click", () => navOverlay.classList.remove("active"));
  }
});

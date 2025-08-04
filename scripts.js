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

  // Mobile mode warning (session-based)
  const mobileWarning = document.getElementById("mobileWarning");
  const enableMobileView = document.getElementById("enableMobileView");
  const closeWarningBtn = document.getElementById("closeWarningBtn");
  const userChoice = sessionStorage.getItem("shoutstack_mobile_mode");

  if (userChoice === "enabled") {
    document.body.style.maxWidth = "430px";
    document.body.style.margin = "0 auto";
    if (mobileWarning) mobileWarning.style.display = "none";
  }

  if (userChoice === "dismissed") {
    if (mobileWarning) mobileWarning.style.display = "none";
  }

  if (mobileWarning) {
    enableMobileView?.addEventListener("click", () => {
      document.body.style.maxWidth = "430px";
      document.body.style.margin = "0 auto";
      sessionStorage.setItem("shoutstack_mobile_mode", "enabled");
      mobileWarning.style.display = "none";
    });

    closeWarningBtn?.addEventListener("click", () => {
      sessionStorage.setItem("shoutstack_mobile_mode", "dismissed");
      mobileWarning.style.display = "none";
    });
  }
});

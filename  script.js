
const btn = document.getElementById("hamburger");
const panel = document.getElementById("mobilePanel");

btn.addEventListener("click", () => {
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!isOpen));
  panel.hidden = isOpen;
});


panel.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "a") {
    btn.setAttribute("aria-expanded", "false");
    panel.hidden = true;
  }
});


document.addEventListener("click", (e) => {
  const clickedInside = btn.contains(e.target) || panel.contains(e.target);
  if (!clickedInside && !panel.hidden) {
    btn.setAttribute("aria-expanded", "false");
    panel.hidden = true;
  }
});

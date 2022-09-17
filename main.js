console.log("hello");

// Menu coming in from the side
document.getElementById("hamburger_trigger").addEventListener("click", menuOut);
document.getElementById("cross_trigger").addEventListener("click", menuLeave);

// Menu appears
function menuOut() {
  document.getElementById("menu_from_side").classList.add("show-menu");
}

// Menu leaves
function menuLeave() {
  document.getElementById("menu_from_side").classList.remove("show-menu");
}

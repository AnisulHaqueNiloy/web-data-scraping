// const menu = document.getElementById("menu_icon");

// const nav = document.getElementById("nav");

// menu.addEventListener("click", () => {
//   if (nav.className == "hidden") {
//     nav.classList.remove("hidden");
//   } else {
//     nav.classList.add("hidden");
//   }
// });
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu_icon");
  const nav = document.getElementById("nav");

  menuIcon.addEventListener("click", function () {
    // Toggle the 'hidden' class on the nav element
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
    } else {
      nav.classList.add("hidden");
    }
  });
});

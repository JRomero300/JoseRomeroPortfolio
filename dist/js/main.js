//Select DOM Items
const menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const menuitems = document.querySelectorAll(".nav-item");

//Set intial State of Menu
let showMenu = false;

menubtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menubtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    menuitems.forEach(item => item.classList.add("show"));
    // Set Menu State
    showMenu = true;
  } else {
    menubtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    menuitems.forEach(item => item.classList.remove("show"));
    // Set Menu State
    showMenu = false;
  }
}

jQuery(document).ready(function() {
  jQuery(".skillbar").each(function() {
    jQuery(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: jQuery(this).attr("data-percent")
        },
        6000
      );
  });
});

function toggleNav() {
  var navBurger = document.querySelector("home-burger-menu");
  var nav = document.querySelector("home-links");

  if (nav) {
    // Toggle the class name between 'home-links' and 'home-links-js'
    if (nav.classList.contains("home-links")) {
      nav.classList.remove("home-links");
      nav.classList.add("home-links-js");
    } else {
      nav.classList.remove("home-links-js");
      nav.classList.add("home-links");
    }
  } else {
    console.error("Element with id 'myNav' not found.");
  }
}

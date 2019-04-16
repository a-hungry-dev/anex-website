function toggleNav() {
  var x = document.getElementById("navigation");
  if (x.className === "links") {
    x.className += " responsive";
  } else {
    x.className = "links";
  }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

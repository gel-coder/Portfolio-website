// Get all elements with the 'animated-element' class
const animatedElements = document.querySelectorAll(".animated-element");

// Function to handle scroll events
function handleScroll() {
  animatedElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isInView =
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight);

    if (isInView) {
      element.classList.add("active");
    }
  });
}

// Attach the 'handleScroll' function to the 'scroll' event
window.addEventListener("scroll", handleScroll);

// Initial check on page load
document.addEventListener("DOMContentLoaded", () => {
  handleScroll();
});

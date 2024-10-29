// Simplify the code with comments

// Create constants for transform values
const opScale = "scale(1.2)";
const opNoScale = "scale(1)";

// Define functions for hover and un-hover effects
function onHover(option) {
  // Get the element to affect
  const el = document.querySelector(`#${option}`);

  // Set its transform value to scale up
  el.style.transform = opScale;

  // Set its color to a lighter version of the default color
  el.style.color = "rgba(30, 126, 129, 60%)";
}

function offHover(option) {
  // Get the element to affect
  const el = document.querySelector(`#${option}`);

  // Set its transform value back to normal
  el.style.transform = opNoScale;

  // Set its color back to the default
  el.style.color = "rgb(30, 126, 129)";
}

// Define the onscroll event handler
window.onscroll = function () {
  // Call the onScroll function
  onScroll();
};

// Define the onScroll function
function onScroll() {
  const sections = ["about", "projects", "contact", "other"];
  const scrollPositions = [10, 200, 400, 600];

  sections.forEach((section, index) => {
    if (window.scrollY > scrollPositions[index]) {
      onHover(section);
    } else {
      offHover(section);
    }
  });
}

onScroll();

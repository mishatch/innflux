let valueDisplays = document.querySelectorAll(".num");
let interval = 60;
const animateNumbers = () => {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
      startValue++;
      valueDisplay.textContent = `${startValue} +`;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, interval);
  });
};

//
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateNumbers();
      observer.unobserve(entry.target); // Stop observing once animation triggered
    }
  });
}

// Set up the Intersection Observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Adjust threshold as needed (from 0 to 1)
};

const observer = new IntersectionObserver(handleIntersection, options);

// Get the element to be observed
const animatedElement = document.querySelector(".num");

// Start observing the element
if (animatedElement) {
  observer.observe(animatedElement);
}

//Disable scroll on webpage preloader and make it dissapear.

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);

  document.body.style.overflow = "hidden";

  const preloader = document.getElementById("preloader");

  setTimeout(function () {
    preloader.classList.add("fade-out");
    setTimeout(function () {
      preloader.remove();
      document.body.style.overflow = "auto";
    }, 1000);
  }, 3500);
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    // Remove the hash from the URL
    history.replaceState(null, null, " ");
  }

  // Delay the scroll to make sure it happens after the browser's automatic scroll
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 1);
});

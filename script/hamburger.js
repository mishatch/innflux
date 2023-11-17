"use strict";
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav-list");
const body = document.querySelector("body");
window.onload = function () {
  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    body.classList.toggle("no-scroll");
  });
};
const closeMenu = function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
};

'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Video Popup
 */

const aboutPlayButton = document.getElementById('about-video-btn');
const videoPopup = document.getElementById('video-popup');
const closeVideoPopup = document.getElementById('close-video-popup');
const videoPlayer = document.getElementById('youtube-player');

aboutPlayButton.addEventListener('click', () => {
  videoPopup.style.display = 'block';

  const youtubeLink = 'https://youtu.be/CO7voe1wmhA'; // Replace with your YouTube video link
  const videoId = extractVideoId(youtubeLink);
  videoPlayer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
});

closeVideoPopup.addEventListener('click', () => {
  videoPopup.style.display = 'none';
  videoPlayer.innerHTML = '';
});

function extractVideoId(url) {
  let videoId = '';
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[7].length === 11) {
    videoId = match[7];
  }
  return videoId;
}

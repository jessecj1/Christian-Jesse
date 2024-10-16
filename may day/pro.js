const navBTN = document.querySelector(".nav-button");
const navBTN1 = document.querySelector(".nav-button1");
const navCon = document.querySelector("nav");
const smallNav = document.querySelector(".small-nav");
const darkMode = document.querySelector(".moon");
const nav = document.querySelector("nav");
const ul = document.querySelector(".deeml");
const ul1 = document.querySelector(".deeml1");
const ul2 = document.querySelector(".deeml2");
const ul3 = document.querySelector(".deeml3");
const ul4 = document.querySelector(".deeml4");
const sunny = document.querySelector(".logo-sunny");
const moon = document.querySelector(".logo-moon");
const aboutContent = document.querySelector(".about-top-tx");
const logo1 = document.querySelector(".logo-ht");
const logo2 = document.querySelector(".logo-ht1");
const topPart = document.querySelector(".top");
const portf = document.querySelector(".portfolio");
const blog = document.querySelector(".blog-sec");
const blogText = document.querySelector(".top-text-blog");
const smallLogo1 = document.querySelector(".small-nav-logo1");
const smallLogo2 = document.querySelector(".small-nav-logo2");
const topCon = document.querySelector(".top-con");

const aboutTeam = document.querySelector(".about-me-sec");
blogText.classList.remove("deemlt");

sunny.classList.add("logo-hd");

navBTN.addEventListener("click", function () {
  navCon.classList.remove("animatable");
  navCon.classList.add("animated");
  navBTN.classList.add("ht");
  navCon.classList.remove("ht");
  navBTN1.classList.remove("ht");
});

ul.addEventListener("click", function () {
  navCon.classList.add("ht");
  navBTN.classList.remove("ht");
  navBTN1.classList.add("ht");
});

ul1.addEventListener("click", function () {
  navCon.classList.add("ht");
  navBTN.classList.remove("ht");
  navBTN1.classList.add("ht");
});

ul2.addEventListener("click", function () {
  navCon.classList.add("ht");
  navBTN.classList.remove("ht");
  navBTN1.classList.add("ht");
});

ul3.addEventListener("click", function () {
  navCon.classList.add("ht");
  navBTN.classList.remove("ht");
  navBTN1.classList.add("ht");
});

ul4.addEventListener("click", function () {
  navCon.classList.add("ht");
  navBTN.classList.remove("ht");
  navBTN1.classList.add("ht");
});

navBTN1.addEventListener("click", function () {
  // navCon.classList.remove("animatable");
  navCon.classList.remove("animated");
  navCon.classList.add("ht");
  navBTN1.classList.add("ht");
  navBTN.classList.remove("ht");
});

moon.addEventListener("click", function () {
  moon.classList.add("logo-hd");
  sunny.classList.remove("logo-hd");
  nav.classList.add("deem");
  ul.classList.add("deemlt");
  ul1.classList.add("deemlt");
  ul2.classList.add("deemlt");
  ul3.classList.add("deemlt");
  ul4.classList.add("deemlt");
  aboutTeam.classList.add("deem");
  aboutContent.classList.add("deemlt");
  logo2.classList.remove("boom");
  logo1.classList.add("boom");
  topPart.classList.add("keem-dark");
  portf.classList.remove("keem-lt");
  portf.classList.add("keem-dark");
  blog.classList.add("deem");
  blogText.classList.add("deemlt");
  smallNav.classList.add("deem");
  smallNav.classList.remove("team-nav");
  smallNav.classList.add("deem");
  smallLogo1.classList.add("boom");
  smallLogo2.classList.remove("boom");
  navBTN.classList.add("logo-cor");
  navBTN1.classList.add("logo-cor");
});

sunny.addEventListener("click", function () {
  moon.classList.remove("logo-hd");
  sunny.classList.add("logo-hd");
  nav.classList.remove("deem");
  ul.classList.remove("deemlt");
  ul1.classList.remove("deemlt");
  ul2.classList.remove("deemlt");
  ul3.classList.remove("deemlt");
  ul4.classList.remove("deemlt");
  aboutTeam.classList.remove("deem");
  aboutContent.classList.remove("deemlt");
  logo1.classList.remove("boom");
  logo2.classList.add("boom");
  topPart.classList.remove("keem-dark");
  portf.classList.add("keem-lt");
  portf.classList.remove("keem-dark");
  blog.classList.remove("deem");
  blogText.classList.remove("deemlt");
  smallNav.classList.remove("deem");
  smallNav.classList.add("team-nav");
  smallNav.classList.remove("deem");
  smallLogo1.classList.remove("boom");
  smallLogo2.classList.add("boom");
  navBTN.classList.remove("logo-cor");
  navBTN1.classList.remove("logo-cor");
});

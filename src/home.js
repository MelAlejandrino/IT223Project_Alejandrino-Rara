const navTab = document.querySelector(".nav-holder");
const navIcon = document.getElementById("menu-icon");
const userIcon = document.getElementById("userIcon");
const header = document.getElementById("header-tab");
const sections = document.querySelectorAll("section");
const headerpage = document.querySelector(".headpage");
const navigation = document.querySelector(".nav-tab");
let atHeader = false;

navIcon.addEventListener("click", () => {
  const visibility = navTab.getAttribute("data-visible");
  if (visibility === "false") {
    navTab.setAttribute("data-visible", true);
    header.setAttribute("aria-expanded", true);
    if (atHeader || atChapel) {
      navIcon.src = "src/assets/menublack.png";
      userIcon.src = "src/assets/user.png";
    } else if (!atHeader || !atChapel) {
      navIcon.src = "src/assets/menublack.png";
      userIcon.src = "src/assets/user.png";
    }
    sections.forEach((section) => {
      section.classList.add("blursection");
    });
  } else {
    navTab.setAttribute("data-visible", false);
    header.setAttribute("aria-expanded", false);
    if (atHeader === true || atChapel === true) {
      navIcon.src = "src/assets/menu.png";
      userIcon.src = "src/assets/userwhite.png";
    }
    if (atHeader === false && atChapel === false) {
      navIcon.src = "src/assets/menublack.png";
      userIcon.src = "src/assets/user.png";
    }
    sections.forEach((section) => {
      section.classList.remove("blursection");
    });
  }
});

// chapel
const chapel = document.querySelector(".page-4");
const headerNav = document.querySelector("header");
const page2 = document.querySelector(".secondpage");
const firstChild = page2.firstElementChild;
let atChapel = false;
let isIntersecting = false;

const checkIntersection = () => {
  const navRect = headerNav.getBoundingClientRect();
  const chapelRect = chapel.getBoundingClientRect();
  const headerRect = headerpage.getBoundingClientRect();

  if (!atHeader) {
    navIcon.src = "src/assets/menublack.png";
    userIcon.src = "src/assets/user.png";
    navigation.classList.add("navchange");
    // page2.classList.remove("scroll");
    // firstChild.classList.remove("scrollC");
    isIntersecting = false;
    atChapel = false;
    atHeader = false;
  }
  if (
    navRect.bottom >= chapelRect.top - 150 &&
    navRect.top <= chapelRect.bottom - 100
  ) {
    console.log('at chapel')
    const visibility = navTab.getAttribute("data-visible");
    if (!isIntersecting) {
      if (!atChapel) {
        if (visibility == "true") {
          navIcon.src = "src/assets/menublack.png";
          userIcon.src = "src/assets/user.png";
        } else {
          navIcon.src;
          navIcon.src = "src/assets/menu.png";
          userIcon.src = "src/assets/userwhite.png";
        }
        navigation.classList.remove("navchange");
        isIntersecting = true;
        atChapel = true;
        atHeader = false;
      }
    }
  } else {
    if (isIntersecting) {
      if (atChapel) {
        navIcon.src = "src/assets/menublack.png";
        userIcon.src = "src/assets/user.png";
        navigation.classList.add("navchange");
        // page2.classList.remove("scroll");
        // firstChild.remove("scrollC");
        isIntersecting = false;
        atChapel = false;
        atHeader = false;
      }
    }
  }

  if (
    navRect.bottom >= headerRect.top &&
    navRect.top <= headerRect.bottom - 450
  ) {
    const visibility = navTab.getAttribute("data-visible");
    if (!isIntersecting) {
      if (!atChapel) {
        if (visibility == "true") {
          navIcon.src = "src/assets/menublack.png";
          userIcon.src = "src/assets/user.png";
        } else {
          navIcon.src = "src/assets/menu.png";
          userIcon.src = "src/assets/userwhite.png";
        }
        navigation.classList.remove("navchange");
        // page2.classList.add("scroll");
        // firstChild.classList.add("scrollC");
        isIntersecting = true;
        atHeader = true;
        atChapel = false;
      }
    }
  } else {
    if (isIntersecting) {
      if (atHeader) {
        navIcon.src = "src/assets/menublack.png";
        userIcon.src = "src/assets/user.png";
        navigation.classList.add("navchange");
        // page2.classList.remove("scroll");
        // firstChild.classList.remove("scrollC");
        isIntersecting = false;
        atHeader = false;
        atChapel = false;
      }
    }
  }
};

window.addEventListener("scroll", checkIntersection);

const moreButton = document.getElementById('moreButton');
moreButton.addEventListener('click', () => {
  window.location.href = '../products.html'
})

const navTab = document.querySelector(".nav-holder");
const navIcon = document.getElementById("menu-icon");
const userIcon = document.getElementById("userIcon");
const header = document.getElementById("header-tab");
const sections = document.querySelectorAll("section");
const headerpage = document.querySelector(".prodPage");
const navigation = document.querySelector(".nav-tab");
const footer = document.querySelector('footer');
let atHeader;

if (window.location.pathname === '/products.html') {
  atHeader = true;
} else if (window.location.pathname === '/cart.html') {
  atHeader = false;
} else {
  console.log('File not found');
}


navIcon.addEventListener("click", () => {
  const visibility = navTab.getAttribute("data-visible");
  if (visibility === "false") {
    navTab.setAttribute("data-visible", true);
    header.setAttribute("aria-expanded", true);
    if (atHeader || atChapel) {
      navIcon.src = "src/assets/menublack.png";
      userIcon.src = "src/assets/user.png";
    }
    else if (!atHeader || !atChapel) {
      navIcon.src = "src/assets/menublack.png";
      userIcon.src = "src/assets/user.png";
    }
    sections.forEach((section) => {
      section.classList.add("blursection");
    });
    footer.classList.add('blursection');
  } else {
    navTab.setAttribute("data-visible", false);
    header.setAttribute("aria-expanded", false);
    if (atHeader === true || atChapel === true) {
      console.log('test1');
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
    footer.classList.remove('blursection');
  }
});

// chapel
const headerNav = document.querySelector("header");
let atChapel = false;
let isIntersecting = false;

const checkIntersection = () => {
  const navRect = headerNav.getBoundingClientRect();
  const headerRect = headerpage.getBoundingClientRect(); 

  if (navRect.bottom >= headerRect.top && navRect.top <= (headerRect.bottom - 500)) {
    const visibility = navTab.getAttribute("data-visible");
    if (!isIntersecting) {
      if (!atChapel) {
        if (visibility == "true") {
          navIcon.src = "src/assets/menublack.png";
          userIcon.src = "src/assets/user.png";
        } else {
          console.log('test2');
          navIcon.src = "src/assets/menu.png";
          userIcon.src = "src/assets/userwhite.png";
        }
        navigation.classList.remove("navchange");
        isIntersecting = true;
        atHeader = true;
      }
    }
  } else {
    if (isIntersecting) {
      if (atHeader) {
        navIcon.src = "src/assets/menublack.png";
        userIcon.src = "src/assets/user.png";
        navigation.classList.add("navchange");
        isIntersecting = false;
        atHeader = false;
      }
    }
  }
};

window.addEventListener("scroll", checkIntersection);


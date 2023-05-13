// atong javascript file
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// icon
// name
const namePC = document.getElementById("icon");
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 640px)").matches) {
    namePC.setAttribute("hidden", "");
  } else {
    namePC.removeAttribute("hidden", "");
  }
});

if (window.matchMedia("(max-width: 640px)").matches) {
  namePC.setAttribute("hidden", "");
} else {
  namePC.removeAttribute("hidden", "");
}

// nav-tab
// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach((entry) => {
//     const visibility = navTab.getAttribute("data-visible");
//     if (entry.isIntersecting) {
//       atHeader = true;
//       navigation.classList.remove("navchange");
//       if (atHeader === true) {
//         if (visibility === "true") {
//           navIcon.src = "src/assets/menublack.png";
//           userIcon.src = "src/assets/user.png";
//         }
//         if (visibility === "false") {
//           navIcon.src = "src/assets/menu.png";
//           userIcon.src = "src/assets/userwhite.png";
//         }
//       }
//     } else {
//       atHeader = false;
//       navigation.classList.add("navchange");
//       if (atHeader === false) {
//       }
//       navIcon.src = "src/assets/menublack.png";
//       userIcon.src = "src/assets/user.png";
//     }
//   });
// });

// observer.observe(headerpage);

// add to cart



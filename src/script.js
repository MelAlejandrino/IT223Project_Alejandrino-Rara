// atong javascript file
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
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
const headerspage = document.querySelector('.headpage')
const observer3 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry)
    } else {
      console.log('not')
    }
  });
},{
  threshold: 0.6,
});

observer3.observe(headerspage);






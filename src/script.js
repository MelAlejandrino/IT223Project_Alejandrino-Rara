// atong javascript file
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//       if(entry.isIntersecting){
//           entry.target.classList.add('show');
//           console.log('i am nav')
//       } else {
//           entry.target.classList.remove('show');
//       }
//   });
// });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const navpctab = document.querySelector('.navpctab');
// icon
// name

const namePC = document.getElementById("icon");
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 640px)").matches) {
    namePC.setAttribute("hidden", "");
    navpctab.classList.add('hidden');
  } else {
    namePC.removeAttribute("hidden", "");
    navpctab.classList.remove('hidden');
  }
});

if (window.matchMedia("(max-width: 640px)").matches) {
  namePC.setAttribute("hidden", "");
      navpctab.classList.add('hidden');
} else {
  namePC.removeAttribute("hidden", "");
      navpctab.classList.remove('hidden');
}

const headerspage = document.querySelector('.headpage')
const observer3 = new IntersectionObserver((entries, observer) => {
  const entry = entries[0];
  console.log('entry', entry);
  console.log('entry.isIntersecting', entry.isIntersecting);
});


observer3.observe(headerspage);






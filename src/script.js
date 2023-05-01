// atong javascript file
const blob = document.getElementById("skull");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1000, fill: "forwards" });
}

// icon
// name
const namePC = document.getElementById('icon');
window.addEventListener('resize', () => {
  if (window.matchMedia("(max-width: 640px)").matches) {
    namePC.setAttribute('hidden', '');
  } else {
    namePC.removeAttribute('hidden', '');
  }
});

if (window.matchMedia("(max-width: 640px)").matches) {
    namePC.setAttribute('hidden', '');
  } else {
    namePC.removeAttribute('hidden', '');
  }

//   nav - tab
const navTab = document.querySelector('.nav-holder');
const navIcon = document.getElementById('menu-icon');
const header = document.getElementById('header-tab');
navIcon.addEventListener('click', () => {
  console.log('working')
  const visibility = navTab.getAttribute("data-visible");
  if (visibility === "false"){
    navTab.setAttribute("data-visible", true);
    header.setAttribute("aria-expanded", true);
    navIcon.src = 'src/assets/menublack.png';
  }
  else{
    navTab.setAttribute("data-visible", false);
    header.setAttribute("aria-expanded", false);
    navIcon.src = 'src/assets/menu.png';
  }
});
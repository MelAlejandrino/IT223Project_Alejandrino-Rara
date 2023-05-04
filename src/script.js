// atong javascript file

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

  function isHeader(atHeader){
    return atHeader;
  }
  // nav-tab
const navTab = document.querySelector('.nav-holder');
const navIcon = document.getElementById('menu-icon');
const userIcon = document.getElementById('userIcon');
const header = document.getElementById('header-tab');
const sections = document.querySelectorAll('section');
const headerpage = document.querySelector('.headpage');
const navigation = document.querySelector('.nav-tab');
let atHeader;
const observer = new IntersectionObserver(function(entries, observer){

  entries.forEach(entry => {
    const visibility = navTab.getAttribute("data-visible");
    if(entry.isIntersecting){
      atHeader = true;
      navigation.classList.remove('navchange');
      if(atHeader === true){
        if(visibility === "true"){
          navIcon.src = 'src/assets/menublack.png';
          userIcon.src = 'src/assets/user.png'
        }
        if(visibility === "false"){
          navIcon.src = 'src/assets/menu.png';
          userIcon.src = 'src/assets/userwhite.png'
        }
      }
      
    }
    else{
      atHeader = false;
      navigation.classList.add('navchange');
      if(atHeader === false){
        console.log(atHeader)
      }
      navIcon.src = 'src/assets/menublack.png';
      userIcon.src = 'src/assets/user.png'
    }
  })
});

observer.observe(headerpage);



navIcon.addEventListener('click', () => {
  const headerStatus = isHeader(atHeader);
  const visibility = navTab.getAttribute("data-visible");
  if (visibility === "false"){
    navTab.setAttribute("data-visible", true);
    header.setAttribute("aria-expanded", true);
    if (headerStatus){
      navIcon.src = 'src/assets/menublack.png';
      userIcon.src = 'src/assets/user.png'
    }
    if (!headerStatus){
      navIcon.src = 'src/assets/menublack.png';
      userIcon.src = 'src/assets/user.png'
    }
    sections.forEach((section) => {
      section.classList.add('blursection');
    });
  }
  else{
    navTab.setAttribute("data-visible", false);
    header.setAttribute("aria-expanded", false);
    if (headerStatus === true){
      navIcon.src = 'src/assets/menu.png';
      userIcon.src = 'src/assets/userwhite.png'
    }
    if (headerStatus === false){
      navIcon.src = 'src/assets/menublack.png';
      userIcon.src = 'src/assets/user.png'
    }
    sections.forEach((section) => {
      section.classList.remove('blursection');
    });
  }
});

// chapel

const chapel = document.querySelector('.page-4');

const observer2 = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    const visibility = navTab.getAttribute("data-visible");
    if(entry.isIntersecting){
      console.log(entry.target)
      atHeader = true;
      navigation.classList.remove('navchange');
      if(atHeader === true){
        if(visibility === "true"){
          navIcon.src = 'src/assets/menublack.png';
        }
        if(visibility === "false"){
          navIcon.src = 'src/assets/menu.png';
        }
      }
      
    }
    else{
      atHeader = false;
      navigation.classList.add('navchange');
      if(atHeader === false){
        console.log(atHeader)
      }
      navIcon.src = 'src/assets/menublack.png';
    }
  })
}, {rootMargin: '100vh 0px 0px 0px'});

observer2.observe(chapel);







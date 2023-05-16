window.addEventListener('scroll', (e) => {
    const targets = document.querySelectorAll('.scroll');
    const targetsContent = document.querySelectorAll('.scrollC');
    const targetsContainer = document.querySelectorAll('.scrollCont');
    console.log(window.scrollY);
    var scrolled = window.pageYOffset;
    var rate = scrolled * -1.5;
    var rateC = scrolled * -0.1;
    var rateContainer = scrolled * -0.2;
    targets.forEach(target => {
        target.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    });

    targetsContent.forEach(targetC => {
        targetC.style.objectPosition =  `50% ${rateC}%`;
    });

    targetsContainer.forEach(target => {
        target.style.transform = `translate3d(0px, ${rateContainer}px, 0px)`;
    });
})


  
window.addEventListener('scroll', (e) => {
    const targets = document.querySelectorAll('.scroll');
    const targetsContent = document.querySelectorAll('.scrollC');

    var scrolled = window.pageYOffset;
    var rate = scrolled * -1.5;
    var rateC = scrolled * -0.5;
    targets.forEach(target => {
        target.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    });

    targetsContent.forEach(targetC => {
        targetC.style.transform =  `translate3d(0px, ${rateC}px, 0px)`;
    })
})
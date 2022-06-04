const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(`
    #header, 
    #home, #home .col-a, #home .col-b,
    #functionality, #functionality .functionality-card,
    #app, #app .col-a, #app .col-b,
    #plans, #plans .plans-card,
    #contact, #contact #form,
    #footer
`);

const Modal = {
    open() {
        document.body.classList.add('menu-expended')
    },
    close() {
        document.body.classList.remove('menu-expended')
    },
}

const navHeight = document.querySelector('#nav').offsetHeight

function navShadowOnScroll(navHeight) {
    if (scrollY > navHeight) {
        document.querySelector('#header').classList.add('shadow-on-scroll')
    } else {
        document.querySelector('#header').classList.remove('shadow-on-scroll')
    }
}

function backToTopButtonShow(navHeight) {
    if (scrollY > navHeight) {
        document.querySelector('.backToTop').classList.add('show')
    } else {
        document.querySelector('.backToTop').classList.remove('show')
    }
}

window.addEventListener('scroll', () => {
    navShadowOnScroll(navHeight)
    backToTopButtonShow(navHeight)
})
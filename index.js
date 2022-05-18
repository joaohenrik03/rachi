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
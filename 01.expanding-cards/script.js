const panels=document.querySelectorAll('.panel')

panels.forEach(panelbak => {
    panelbak.addEventListener('click',() => {
        removeActiveClasses()
        panelbak.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel=> {
        panel.classList.remove('active')
    })
}
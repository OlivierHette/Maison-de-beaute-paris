const cardWoman     = document.querySelector('.card--woman')
const cardLinks     = document.querySelector('.card__list-links')

const modal         = document.getElementsByClassName('modal')
const closeModal    = document.getElementsByClassName('modal__close')

const accordion     = document.querySelectorAll('.modal__body__services-items')
const panel         = document.querySelectorAll('.accordion')

const handleClickCard = () => {
    
    cardWoman.addEventListener('click', (e) => {
        e.preventDefault()
        modal[0].style.display = 'flex'
    })

    closeModal[0].addEventListener('click', (e) => {
        e.preventDefault()
        modal[0].style.display = 'none'
    })
}
handleClickCard()

console.log('acc', accordion);
console.log('panel', panel);

const handleClickAcc = () => {
    
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', (e) => {
            e.preventDefault()

            if (panel[i].style.maxHeight) {
                panel[i].style.maxHeight = null
            } else {
                panel[i].style.maxHeight = panel[i].scrollHeight + 'px'
            }
        })
    }

}
handleClickAcc()
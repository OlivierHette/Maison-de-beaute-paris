// import lightGallery from 'lightgallery'

// const cardWoman     = document.querySelector('.card--woman')
// const cardLinks     = document.querySelector('.card__list-links')
// const cardMan       = document.querySelector('.card--man')

const card          = document.querySelectorAll('.card')
const modal         = document.getElementsByClassName('modal')
const closeModal    = document.getElementsByClassName('modal__close')

const accordion     = document.querySelectorAll('.modal__body__services-items')
const panel         = document.querySelectorAll('.accordion')

const galleryLinks  = document.querySelectorAll('.gallery__header-links')
const galleryBody   = document.querySelectorAll('.gallery__body')

// const createModal = () => {
//     const newModal = document.createElement('div')
//     const body = document.querySelector('body')
//     const header = document.querySelector('header')
    
//     body.appendChild(newModal)
//     header.after(newModal)
//     newModal.className = 'modal modal--woman' // au click ajouter femme ou homme

//     /* Creation of header's modal */
    
//     const modalHeader = document.createElement('div')
//     newModal.appendChild(modalHeader)
//     modalHeader.className = 'modal__header modal__header--woman' // au click ajouter --woman ou --man

//     const  modalTitleHeader = document.createElement('h3')
//     modalHeader.appendChild(modalTitleHeader)
//     modalTitleHeader.className = 'card__header-title'
//     modalTitleHeader.innerHTML = `Pour <br> ${'femme'}`// au click ajouter femme ou homme

//     const modalClose = document.createElement('div')
//     modalHeader.appendChild(modalClose)
//     modalClose.className = 'modal__close'
    
//     const modalCross = document.createElement('span')
//     modalClose.appendChild(modalCross)
//     modalCross.className = 'modal__close-cross'
//     modalCross.innerHTML = '&times;'
    
//     /* Creation of body's modal */

//     const modalTitle = document.createElement('h4')
//     newModal.appendChild(modalTitle)
//     modalTitle.className = 'modal-title'
//     modalTitle.innerHTML = 'Préstation et tarifs'

//     const modalBody = document.createElement('div')
//     newModal.appendChild(modalBody)
//     modalBody.className = 'modal__body'

//     const modalBodyServices = document.createElement('div')
//     modalBody.appendChild(modalBodyServices)
//     modalBodyServices.className = 'modal__body__services'

//     const modalBodyServicesTitle = document.createElement('h5')
//     modalBodyServices.appendChild(modalBodyServicesTitle)
//     modalBodyServicesTitle.className = 'modal__body__services-title'
//     modalBodyServicesTitle.innerHTML = "Autour de l'ongle"


//     const modalBodyItems = document.createElement('div')
//     modalBodyServices.appendChild(modalBodyItems)
//     modalBodyItems.className = 'modal__body__services-items'

//     const modalBodyInfo = document.createElement('div')
//     modalBodyItems.appendChild(modalBodyInfo)
//     modalBodyInfo.className = 'modal__body__services-info'

//     const modalBodyText = document.createElement('div')
//     modalBodyInfo.appendChild(modalBodyText)
//     modalBodyText.className = 'modal__body__services-text'

//     const modalBodyH6 = document.createElement('h6')
//     const modalBodySpan = document.createElement('span')

//     modalBodyText.appendChild(modalBodyH6)
//     modalBodyText.appendChild(modalBodySpan)

//     modalBodyH6.innerHTML = "Manucure complète"
//     modalBodySpan.innerHTML = "Classique Green/semi permanent"

//     const modalBodyPrices = document.createElement('span')
//     modalBodyInfo.appendChild(modalBodyPrices)
//     modalBodyPrices.className = 'modal__body__services-prices'
//     modalBodyPrices.innerHTML = "35€/45€"

//     /* Accordion * /
    
//     /*
//     SI on clique sur le modal[0] alors on ajoute les classe --woman
//     Sinon on ajoute les classes --man 
//     */
// }
// createModal()

/* Modal */
const handleClickCard = () => {

    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', (e) => {
            e.preventDefault()
            modal[i].style.display ='flex'
        })
        closeModal[i].addEventListener('click', (e) => {
            e.preventDefault()
            modal[i].style.display = 'none'
        })
    }
}
handleClickCard()

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

/* Light Gallery */

lightGallery(document.querySelector('#front'))
lightGallery(document.querySelector('#realisations'))

/* Gallery swap */

const handleClickGallery = () => {

    for (let i = 0; i < galleryLinks.length; i++) {
        
        galleryLinks[i].addEventListener('click', (e) => {
            e.preventDefault()
            if (galleryLinks[i] === galleryLinks[1] && galleryBody[1].classList[1] === undefined) {
                galleryBody[0].classList.toggle('gallery-active')
                galleryBody[1].classList.toggle('gallery-active')
                galleryLinks[0].classList.toggle('active-links')
                galleryLinks[1].classList.toggle('active-links')
            }
            if (galleryLinks[i] === galleryLinks[0] && galleryBody[0].classList[1] === undefined) {
                galleryBody[0].classList.toggle('gallery-active')
                galleryBody[1].classList.toggle('gallery-active')
                galleryLinks[0].classList.toggle('active-links')
                galleryLinks[1].classList.toggle('active-links')
            }
        })
        
    }
}
handleClickGallery()
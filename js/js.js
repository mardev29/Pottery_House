'use strict'
'use strict'

/* --------------------Slider-------------------- */


const sliderNext = document.querySelector(`.Slider-next`)
const sliderPrev = document.querySelector(`.Slider-prev`)
const sliderImg = document.querySelectorAll(`.Slider-img`)
const sliderPoint = document.querySelectorAll(`.Slider-point`)


let slider = 0

//Cuando hago click en Slider-next hago una función
//Slider++
//Si slider es MAYOR o IGUAL a 3...
// entonces...slider es 0
//Todas Slider-img LE REMOVE la clase isActive
//A slider-img LE ADD la clase isActive

sliderNext.addEventListener( `click` , () => {
    slider++

    if (slider >= 3){
        slider = 0
    }

    sliderImg.forEach(( eachImg , index )=>{
        sliderImg[index].classList.remove(`isActive`)
    })

    sliderImg[slider].classList.add(`isActive`)


})

sliderPrev.addEventListener(`click` , () => {
    slider--

    if(slider < 0) {
        slider = 2
    }

    sliderImg.forEach(( eachImg , index ) => {
        sliderImg[index].classList.remove(`isActive`)
    })

    sliderImg[slider].classList.add(`isActive`)
})

sliderPoint.forEach(( eachPoint , index) => {
    sliderPoint[index].addEventListener(`click` , () => {
        slider = index

        sliderPoint.forEach(( eachPoint , index) => {
            sliderPoint[index].classList.remove(`isActive`)
        })
        sliderPoint[slider].classList.add(`isActive`)

        sliderImg.forEach(( eachImg , index ) => {
            sliderImg[index].classList.remove(`isActive`)
        })
    
        sliderImg[slider].classList.add(`isActive`)
    })


})

/* --------------------Menu desplegable-------------------- */


// Cuando hago CLICK en headerLeft hace un FUNCTION
  // headerUl le TOGGLE de la clase isActive
  // headerButton le TOGGLE la clase isActive

  const headerMenu = document.querySelector(`.Header-menu`)
    const headerNav = document.querySelector(`.Header-nav`)
  console.log ( headerMenu)
  console.log ( headerNav)

  headerMenu.addEventListener(`click` , () => {
    headerMenu.classList.toggle(`isActive`)
    headerNav.classList.toggle(`isActive`)
  })



// const imagen = document.querySelector('.Imagen')
// console.log( imagen )

//     imagen.addEventListener(`click`,()=>{
//         imagen.src = "assets/main-img-0.jpg"
//     })





// Cuando hago CLICK en newsSveg hace una FUNCTION
// lightbox le ADD la clase isActive

const newsSvg      = document.querySelectorAll('.News-svg')
const lightbox      = document.querySelector(`.Lightbox`)
const lightboxImg   = document.querySelector('.Lightbox-img')
const lightboxClose = document.querySelector(`.Lightbox-close`)
const lightboxBg    = document.querySelector(`.Lightbox-bg`)

console.log( newsSvg )
console.log( lightbox )

    newsSvg.addEventListener(`click`,()=>{

        lightbox.classList.add(`isActive`)
        lightboxImg.src = newsSvg[i].src

    })



// Cuando hago CLICK en Lightbox-close
    // Lightbox le REMOVE la clase isActive
lightboxBg.addEventListener('click',()=>{

    lightbox.classList.remove(`isActive`)

})

lightboxClose.addEventListener('click',()=>{
    lightbox.classList.remove(`isActive`)
})
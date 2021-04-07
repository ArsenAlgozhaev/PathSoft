// const images = [
//     {
//         image = document.querySelector('#bg-img1'),
//         text: ''
//     },
//     {
//         image: document.querySelector('#bg-img1'),
//         text: ''
//     },
//     {
//         image: document.querySelector('#bg-img1'),
//         text: ''  
//     },
//     {
//         image: document.querySelector('#bg-img1'),
//         text: ''
//     }
// ]
// let slideIndex = 1

// let output = document.querySelector('.image-out')
// let outputText = document.querySelector('.slide-inner')
// let outputDots = document.querySelector('.dots')
// let dots = ''
// let image = ''

// for (let i = 0; i < images.length; i++) {
//     dots += `<span class="dot" onclick="dotSlide(${i})"></span>`   
//     image += `<img src="${images[i].image}" alt="Slide Image" class="slide-image">`   
// }

// outputDots.innerHTML = dots
// output.innerHTML = image

// slideShow(slideIndex)

// function nextSlide(n) {
//     slideIndex += n
//     slideShow(slideIndex)
// }

// function slideShow(index){

//     let currentImage = document.querySelectorAll('.slide-image')
//     if (index > images.length) {
//         index = 1
//         slideIndex = 1
//     }

//     if (index <= 0) {
//         index = images.length
//         slideIndex = images.length
//     }

//     currentImage[index - 1].classList.add('active')
//     outputText.innerHTML = images[index - 1].text

//     dotSlide(index - 1)
// }

// function dotSlide(n) {
//     let imageDots = document.querySelectorAll('.dot')
//     let currentImage = document.querySelectorAll('.slide-image')

//     for (let item of imageDots) {
//         item.classList.remove('active')
//     }

//     for (let item of currentImage) {
//         item.classList.remove('active')
//     }

//     imageDots[n].classList.add('active')
//     currentImage[n].classList.add('active')

//     output.src = images[n].image
// }
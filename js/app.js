// SLIDER

const images = [
    {
        src: '../img/project-one.png',
        city: 'Rostov-on-Don <br>LCD admiral',
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request'
    },
    {
        src: '../img/project-two.png',
        city: 'Sochi Thieves',
        apartmentArea: '105 m2',
        repairTime: '4 months',
        repairCost: 'Upon request'
    },
    {
        src: '../img/project-three.png',
        city: 'Rostov-on-Don Patriotic',
        apartmentArea: '93 m2',
        repairTime: '3 months',
        repairCost: 'Upon request'
    }
]

function initSlider() {
    let sliderImages = document.querySelector('.projects__slider-img')
    let sliderInfo = document.querySelectorAll('.projects__specification-item')
    let sliderArrow = document.querySelectorAll('.projects__arrow')
    let sliderDots = document.querySelector('.projects__circle')

    initImages()
    initInfo()
    initArrow()
    initDots()

    function initImages() {
        images.forEach((image, index) => {
            let elementImg = `<img class="projects__img n${index} ${index === 0 ? 'active' : ''}" src="${image.src}" alt="Project" data-index="${index}">`
            sliderImages.innerHTML += elementImg
        })
    }

    function initInfo() {
        images.forEach((elem, index) => {
            let elementCity = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.city}</p>`
            let elementApartment = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.apartmentArea}</p>`
            let elementTime = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.repairTime}</p>`
            let elementCost = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.repairCost}</p>`

            sliderInfo.forEach((info) => {
                if (info.classList.contains('city')) {
                    info.innerHTML += elementCity
                } else if (info.classList.contains('apartment')) {
                    info.innerHTML += elementApartment
                } else if (info.classList.contains('time')) {
                    info.innerHTML += elementTime
                } else {
                    info.innerHTML += elementCost
                }
            })
        })
    }

    function initArrow() {
        sliderArrow.forEach(arrow => {
            arrow.addEventListener('click', function () {
                let indexNumber = +sliderImages.querySelector('.active').dataset.index
                let nextNumber
                if (arrow.classList.contains('left-arrow')) {
                    nextNumber = indexNumber === 0 ? images.length - 1 : indexNumber - 1
                } else {
                    nextNumber = indexNumber === images.length - 1 ? 0 : indexNumber + 1
                }
                moveSlider(nextNumber)
            })
        })
    }

    function initDots() {
        images.forEach((image, index) => {
            let dots = `<div class="projects__circle-item n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'></div>`
            sliderDots.innerHTML += dots
        })
        sliderDots.querySelectorAll('.projects__circle-item').forEach(dot => {
            dot.addEventListener('click', function () {
                moveSlider(this.dataset.index)
            })
        })
    }

    function moveSlider(numb) {
        sliderImages.querySelector('.active').classList.remove('active')
        sliderImages.querySelector('.n' + numb).classList.add('active')

        sliderDots.querySelector('.active').classList.remove('active')
        sliderDots.querySelector('.n' + numb).classList.add('active')

        sliderInfo.querySelector('active').classList.remove('active')
        sliderInfo.querySelector('.n' + numb).classList.add('active')
    }
}

document.addEventListener('DOMContentLoaded', initSlider())

// 
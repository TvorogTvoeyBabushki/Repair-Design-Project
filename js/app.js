// SLIDER

const images = [
    {
        src: 'img/project-one.png',
        city: 'Rostov-on-Don <br>LCD admiral',
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request',
        link: 'Rostov-on-Don, Admiral'
    },
    {
        src: 'img/project-two.png',
        city: 'Sochi Thieves',
        apartmentArea: '105 m2',
        repairTime: '4 months',
        repairCost: 'Upon request',
        link: 'Sochi Thieves'
    },
    {
        src: 'img/project-three.png',
        city: 'Rostov-on-Don Patriotic',
        apartmentArea: '93 m2',
        repairTime: '3 months',
        repairCost: 'Upon request',
        link: 'Rostov-on-Don Patriotic'
    }
]

function initSlider() {
    if(!images || !images.length) return

    let sliderImages = document.querySelector('.projects__slider-img')
    let sliderArrow = document.querySelectorAll('.projects__arrow')
    let sliderArrowTel = document.querySelectorAll('.area-arrow')
    let sliderDots = document.querySelector('.projects__circle')
    let sliderCity = document.querySelector('.city')
    let sliderApartment = document.querySelector('.apartment')
    let sliderTime = document.querySelector('.time')
    let sliderCost = document.querySelector('.cost')
    let sliderLink = document.querySelector('.projects__slider-elements')

    initImages()
    initInfo()
    initLink()
    initArrow()
    initArrowTel()
    initDots()

    function initImages() {
        images.forEach((image, index) => {
            let elementImg = `<img class="projects__img n${index} ${index === 0 ? 'active' : ''}" src="./${image.src}" alt="Project" data-index="${index}">`
            sliderImages.innerHTML += elementImg
        })
    }

    function initInfo() {
        images.forEach((elem, index) => {
            let elementCity = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.city}</p>`
            let elementApartment = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.apartmentArea}</p>`
            let elementTime = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.repairTime}</p>`
            let elementCost = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.repairCost}</p>`

            sliderCity.innerHTML += elementCity
            sliderApartment.innerHTML += elementApartment
            sliderTime.innerHTML += elementTime
            sliderCost.innerHTML += elementCost
        })
    }

    function initLink() {
        images.forEach((image, index) => {
            let link = `<a class="projects__element n${index} ${index === 0 ? 'active' : ''}" href="#" data-index='${index}'>${image.link}</a>`
            sliderLink.innerHTML += link
        })
        sliderLink.querySelectorAll('.projects__element').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault()
                moveSlider(this.dataset.index)
            })
        })
    }

    function initArrow() {
        sliderArrow.forEach(arrow => {
            arrow.addEventListener('click', function() {
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

    function initArrowTel() {
        sliderArrowTel.forEach(arrow => {
            arrow.addEventListener('click', function() {
                let indexNumber = +sliderImages.querySelector('.active').dataset.index
                let nextNumber
                if (arrow.classList.contains('area-arrow--left')) {
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

        sliderCity.querySelector('.active').classList.remove('active')
        sliderCity.querySelector('.n' + numb).classList.add('active')

        sliderApartment.querySelector('.active').classList.remove('active')
        sliderApartment.querySelector('.n' + numb).classList.add('active')

        sliderTime.querySelector('.active').classList.remove('active')
        sliderTime.querySelector('.n' + numb).classList.add('active')

        sliderCost.querySelector('.active').classList.remove('active')
        sliderCost.querySelector('.n' + numb).classList.add('active')

        sliderLink.querySelector('.active').classList.remove('active')
        sliderLink.querySelector('.n' + numb).classList.add('active')
    }
}

document.addEventListener('DOMContentLoaded', initSlider())

// 
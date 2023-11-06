var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".photo__next",
        prevEl: ".photo__prev",
    },
});



let btn =document.querySelector('.header__btn')
let overlay = document.querySelector(".overlay")
let close = document.querySelector(".close")

btn.addEventListener('click', () => {
    overlay.style.display = 'flex'
})
close.addEventListener('click', () => {
    overlay.style.display = 'none'
})
overlay.addEventListener('click', (e) => {
    if(e.target.className ==='overlay'){
        overlay.style.display = 'none'
    }
})



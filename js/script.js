var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            spaceBetween: 10,
            spaceAround: 30,
            slidesPerView: 1,

        },
        482: {
            spaceBetween: 15,
            centeredSlides: false,
            slidesPerView: 2,

        },
        994: {
            centeredSlides: false,
            spaceBetween: 20,
            slidesPerView: 3,

        },
        1200: {
            centeredSlides: true,
            slidesPerView: 4,

        },
    }


});

// Testimonials

// pic var
let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');
let pic4 = document.getElementById('pic4');
let pic5 = document.getElementById('pic5');
let pic6 = document.getElementById('pic6');
let pic7 = document.getElementById('pic7');
let pic8 = document.getElementById('pic8');

// Det Var
let test1 = document.getElementById('test1');
let test2 = document.getElementById('test2');
let test3 = document.getElementById('test3');
let test4 = document.getElementById('test4');
let test5 = document.getElementById('test5');
let test6 = document.getElementById('test6');
let test7 = document.getElementById('test7');
let test8 = document.getElementById('test8');

let dets1 = document.getElementById('dets1');
let dets2 = document.getElementById('dets2');
let dets3 = document.getElementById('dets3');
let dets4 = document.getElementById('dets4');
let dets5 = document.getElementById('dets5');
let dets6 = document.getElementById('dets6');
let dets7 = document.getElementById('dets7');
let dets8 = document.getElementById('dets8');

pic1.addEventListener('click', () => {
    test1.classList.remove('hide');
    test1.classList.add('show');
    pic1.classList.add('dot');
    pic2.classList.remove('dot');
    pic3.classList.remove('dot');
    pic4.classList.remove('dot');
    pic5.classList.remove('dot');
    pic6.classList.remove('dot');
    pic7.classList.remove('dot');
    pic8.classList.remove('dot');
    test2.classList.add('hide');
    test3.classList.add('hide');
    test4.classList.add('hide');
    test5.classList.add('hide');
    test6.classList.add('hide');
    test7.classList.add('hide');
    test8.classList.add('hide');
    dets1.classList.remove('hide');
    dets1.classList.add('show');
    dets2.classList.add('hide');
    dets3.classList.add('hide');
    dets4.classList.add('hide');
    dets5.classList.add('hide');
    dets6.classList.add('hide');
    dets7.classList.add('hide');
    dets8.classList.add('hide');

});
pic2.addEventListener("click", () => {
    test2.classList.remove('hide');
    test2.classList.add('show');
    pic1.classList.remove('dot');
    pic2.classList.add('dot');
    pic3.classList.remove('dot');
    pic4.classList.remove('dot');
    pic5.classList.remove('dot');
    pic6.classList.remove('dot');
    pic7.classList.remove('dot');
    pic8.classList.remove('dot');
    test1.classList.add('hide');
    test3.classList.add('hide');
    test4.classList.add('hide');
    test5.classList.add('hide');
    test6.classList.add('hide');
    test7.classList.add('hide');
    test8.classList.add('hide');
    dets1.classList.add('hide');
    dets2.classList.remove('hide');
    dets2.classList.add('show');
    dets3.classList.add('hide');
    dets4.classList.add('hide');
    dets5.classList.add('hide');
    dets6.classList.add('hide');
    dets7.classList.add('hide');
    dets8.classList.add('hide');
});
pic3.addEventListener("click", () => {
    test3.classList.remove('hide');
    test3.classList.add('show');
    pic3.classList.add('dot');
    pic2.classList.remove('dot');
    pic1.classList.remove('dot');
    pic4.classList.remove('dot');
    pic5.classList.remove('dot');
    pic6.classList.remove('dot');
    pic7.classList.remove('dot');
    pic8.classList.remove('dot');
    test1.classList.add('hide');
    test2.classList.add('hide');
    test4.classList.add('hide');
    test5.classList.add('hide');
    test6.classList.add('hide');
    test7.classList.add('hide');
    test8.classList.add('hide');
    dets1.classList.add('hide');
    dets3.classList.remove('hide');
    dets3.classList.add('show');
    dets2.classList.add('hide');
    dets4.classList.add('hide');
    dets5.classList.add('hide');
    dets6.classList.add('hide');
    dets7.classList.add('hide');
    dets8.classList.add('hide');
});
pic4.addEventListener("click", () => {
    test4.classList.remove('hide');
    test4.classList.add('show');
    pic4.classList.add('dot');
    pic2.classList.remove('dot');
    pic3.classList.remove('dot');
    pic1.classList.remove('dot');
    pic5.classList.remove('dot');
    pic6.classList.remove('dot');
    pic7.classList.remove('dot');
    pic8.classList.remove('dot');
    test1.classList.add('hide');
    test3.classList.add('hide');
    test2.classList.add('hide');
    test5.classList.add('hide');
    test6.classList.add('hide');
    test7.classList.add('hide');
    test8.classList.add('hide');
    dets1.classList.add('hide');
    dets4.classList.remove('hide');
    dets4.classList.add('show');
    dets3.classList.add('hide');
    dets2.classList.add('hide');
    dets5.classList.add('hide');
    dets6.classList.add('hide');
    dets7.classList.add('hide');
    dets8.classList.add('hide');
});
pic5.addEventListener("click", () => {
    test5.classList.remove('hide');
    test5.classList.add('show');
    pic5.classList.add('dot');
    pic2.classList.remove('dot');
    pic3.classList.remove('dot');
    pic4.classList.remove('dot');
    pic1.classList.remove('dot');
    pic6.classList.remove('dot');
    pic7.classList.remove('dot');
    pic8.classList.remove('dot');
    test1.classList.add('hide');
    test3.classList.add('hide');
    test4.classList.add('hide');
    test2.classList.add('hide');
    test6.classList.add('hide');
    test7.classList.add('hide');
    test8.classList.add('hide');
    dets1.classList.add('hide');
    dets5.classList.remove('hide');
    dets5.classList.add('show');
    dets3.classList.add('hide');
    dets4.classList.add('hide');
    dets2.classList.add('hide');
    dets6.classList.add('hide');
    dets7.classList.add('hide');
    dets8.classList.add('hide');
});
pic6.addEventListener("click", () => {
    test6.classList.remove('hide');
    test6.classList.add('show');
    pic6.classList.add('dot');
    pic2.classList.remove('dot');
    pic3.classList.remove('dot');
    pic4.classList.remove('dot');
    pic5.classList.remove('dot');
    pic1.classList.remove('dot');
    pic7.classList.remove('dot');
    pic8.classList.remove('dot');
    test1.classList.add('hide');
    test3.classList.add('hide');
    test4.classList.add('hide');
    test5.classList.add('hide');
    test2.classList.add('hide');
    test7.classList.add('hide');
    test8.classList.add('hide');
    dets1.classList.add('hide');
    dets2.classList.add('hide');
    dets6.classList.remove('hide');
    dets6.classList.add('show');
    dets3.classList.add('hide');
    dets4.classList.add('hide');
    dets5.classList.add('hide');
    dets7.classList.add('hide');
    dets8.classList.add('hide');
});
pic7.addEventListener("click", () => {
    test7.classList.remove('hide');
    test7.classList.add('show');
    pic7.classList.add('dot');
    pic2.classList.remove('dot');
    pic3.classList.remove('dot');
    pic4.classList.remove('dot');
    pic5.classList.remove('dot');
    pic6.classList.remove('dot');
    pic1.classList.remove('dot');
    pic8.classList.remove('dot');
    test1.classList.add('hide');
    test2.classList.add('hide');
    test3.classList.add('hide');
    test4.classList.add('hide');
    test5.classList.add('hide');
    test6.classList.add('hide');
    test8.classList.add('hide');
    dets1.classList.add('hide');
    dets2.classList.add('hide');
    dets7.classList.remove('hide');
    dets7.classList.add('show');
    dets3.classList.add('hide');
    dets4.classList.add('hide');
    dets5.classList.add('hide');
    dets6.classList.add('hide');
    dets8.classList.add('hide');
});
pic8.addEventListener("click", () => {
    test1.classList.add('hide');
    test2.classList.add('hide');
    test3.classList.add('hide');
    test4.classList.add('hide');
    test5.classList.add('hide');
    test6.classList.add('hide');
    test7.classList.add('hide');
    pic8.classList.add('dot');
    test8.classList.remove('hide');
    test8.classList.add('show');
    pic2.classList.remove('dot');
    pic3.classList.remove('dot');
    pic4.classList.remove('dot');
    pic5.classList.remove('dot');
    pic6.classList.remove('dot');
    pic7.classList.remove('dot');
    pic1.classList.remove('dot');
    dets1.classList.add('hide');
    dets2.classList.add('hide');
    dets3.classList.add('hide');
    dets4.classList.add('hide');
    dets5.classList.add('hide');
    dets6.classList.add('hide');
    dets7.classList.add('hide');
    dets8.classList.remove('hide');
    dets8.classList.add('show');
});

// Back top top

let backTop = document.getElementById('backto-top');

backTop.style.display = "none";

window.onscroll = () => {

    let cur = window.scrollY;
    if (cur > 100) {
        backTop.style.display = "block";


    } else {
        backTop.style.display = "none";

    }
}
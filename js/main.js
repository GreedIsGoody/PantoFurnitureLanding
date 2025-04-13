const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');


// Click on buttons with hints

for (let btn of infoBtns) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();

        // Hide all hints
        for (let hint of infoHints) {
            hint.classList.add('none');
        }

        //Show current
        this.parentNode.querySelector('.info-hint').classList.toggle('none');
    });
}



//Close hints by clicking on document
document.addEventListener('click', function () {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
})


// Preventing the event from floating to the top
for (let hint of infoHints) {
    hint.addEventListener('click', (e) => { e.stopPropagation(); });
}

// Swiper slider 
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 42,

    breakpoints: {
        600 : {
            slidesPerView:2,
            spaceBetween:20,
        },
        920: {
            slidesPerView:3,
            spaceBetween:20,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },
})


// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {
    btn.addEventListener('click', function () {

        //Remove active classes from buttons
        for (let btn of tabsBtns) {
            btn.classList.remove('tab-controls__btn--active');
        }

        // Add active class to current button
        this.classList.add('tab-controls__btn--active');


        //Hide all products and Show products what we needed
        for (let product of tabsProducts) {

            //Checking slides 
            if (this.dataset.tab === 'all') {
                product.classList.remove('none');
            } else {
                if (product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none');
                } else {
                    product.classList.add('none');
                }

            }

        }
        // Update swiper
        swiper.update()

    })
}

// Mobile Nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function () {
    mobileNav.classList.add('mobile-nav-wrapper--open')
}

mobileNavCloseBtn.onclick = function () {
    mobileNav.classList.remove('mobile-nav-wrapper--open')
}
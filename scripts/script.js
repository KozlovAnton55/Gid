// Плавный скрол по якорям 

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
 
// Плавный скрол по якорям 

// Затемнение Header при скроле 

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_scroll');
        } else {
            header.classList.remove('header_scroll');
        }
    };
}());

// Затемнение Header при скроле 

// Бургер меню 

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav_menu_list');
    const menuCloseItem = document.querySelector('.nav_close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav_menu_list_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav_menu_list_active');
    });
}());

// Бургер меню 
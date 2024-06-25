let items = document.querySelectorAll('.slider .list .items');
let thumbnails = document.querySelectorAll('.thumbnail .items');

let countItem = items.length;
let itemActive = 0;

function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .items.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .items.active');
    if(itemActiveOld) itemActiveOld.classList.remove('active');
    if(thumbnailActiveOld) thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select');
    const icon = dropdown.querySelector('#icon');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    dropdown.addEventListener('click', ()=>{
        const isOpen = menu.classList.contains('menu-open');
        dropdown.classList.toggle('dropdown-expanded', !isOpen);
        icon.classList.toggle('icon-rotate', !isOpen);
        menu.classList.toggle('menu-open', !isOpen);
    });
    
    options.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            selected.innerText = option.innerText;
            icon.classList.remove('icon-rotate');
            menu.classList.remove('menu-open');
            dropdown.classList.remove('dropdown-expanded', 'bill-expand');
            options.forEach(opt => {
                opt.classList.remove('active', 'hidden');
            });
            option.classList.add('active', 'hidden');
        });
    });
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('dropdown-expanded','bill-expand');
            icon.classList.remove('icon-rotate');
            menu.classList.remove('menu-open');
        }
    });
});

var tabButtons = document.querySelectorAll(".nav-title");

    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener("click", function () {
        var tabName = this.dataset.nav;
        var tabContent = document.getElementById(tabName);
        var allTabContent = document.querySelectorAll(".desc-content");
        var allTabButtons = document.querySelectorAll(".nav-title");

        for (var j = 0; j < allTabContent.length; j++) {
          allTabContent[j].style.display = "none";
        }

        for (var k = 0; k < allTabButtons.length; k++) {
          allTabButtons[k].classList.remove("active");
        }

        tabContent.style.display = "block";
        this.classList.add("active");
      });
    }

    document.querySelector(".nav-title").click();


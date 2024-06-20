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
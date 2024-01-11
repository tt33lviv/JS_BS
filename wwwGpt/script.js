// Добавление класса при прокрутке страницы
window.onscroll = function() {
    stickHeader();
};

function stickHeader() {
    var header = document.getElementById("sticky-header");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}
$(window).on('load', function () {
    document.getElementById('all').style.display = "block"
    document.getElementById('loader').style.display = "none"

    AOS.init();

    $('.li').click(function () {
        $('.li').children('span').removeClass('active-menu')
        $(this).children('span').addClass('active-menu')
    })
});
$(document).ready(function () {
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.click(function () {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            document.getElementById('menu').style.left = "0%"
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            document.getElementById('menu').style.left = "-100%"
        }
    });
})

function addAnchor() {
    document.getElementById('menu').style.left = "-100%"
    menuBtn.classList.remove('open');
    menuOpen = false;
    $('.navbarMe').css({
        "display": "flex",
    })
}

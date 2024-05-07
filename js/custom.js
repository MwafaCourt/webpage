// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// nav menu 
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width")
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}

setTimeout(function() {
    $('.alert').fadeOut()
}, 10000)
$('.box').on('click', () => {
    $('.alert').toggleClass('hidden')
    setTimeout( function() {
        $('.alert').fadeOut()
    }, 3000)
})

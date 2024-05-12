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
    $('.alert').toggleClass('hidden')
}, 10000)
$('.box').on('click', () => {
    $('.alert').toggleClass('hidden')
    setTimeout( function() {
        $('.alert').toggleClass('hidden')
    }, 3000)
})
$('img').ready(
    function() {
       setTimeout(
        function() {
            $('.loader').addClass('hidden');
            $('.content').removeClass('hidden');
        }, 3000
       )
    }
)

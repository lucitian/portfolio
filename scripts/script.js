$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
})

$(document).ready(function () {
    $('.navbar_content').click(test => {
        var sectionId = test.target.innerHTML
        $('html, body').animate({
            scrollTop: $('#'+sectionId.toLowerCase()).offset().top
        }, 500)
    });
})

$(function () {
    $('.navbar_options').click(function() {
        $('.navbar_list').prev()
        $('.bars').prop('checked', false)
    });
})

$(document).ready(function () {
    $('.header_logo').click(home => {
        $('html,body').animate({
            scrollTop: 0
        })
    }) 

})
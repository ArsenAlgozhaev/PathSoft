// function myFunction(x) {
//     $('.bar1').toggle("change");
//     $('.bar2').toggle("change");
//     $('.bar3').toggle("change");
// }



$('.open-adaptive-window-btn').click(function() {
    $('.bar1').addClass('change')
    $('.bar2').addClass('change')
    $('.bar3').addClass('change')
    $('.header-adaptive-nav').addClass('active')
    $('.close-adaptive-window-btn').addClass('active')
    $('.open-adaptive-window-btn').addClass('active')
})

$('.close-adaptive-window-btn').click(function() {
    $('.bar1').removeClass('change')
    $('.bar2').removeClass('change')
    $('.bar3').removeClass('change')
    $('.header-adaptive-nav').removeClass('active')
    $('.open-adaptive-window-btn').removeClass('active')
    $('.close-adaptive-window-btn').removeClass('active')
})



// $('.open-adaptive-window-btn').click(function() {
//     $('.modal-window-nav').addClass('active')
// })

// $('.close-adaptive-window-btn').click(function() {
//     $('.modal-window-nav').removeClass('active')
// })

console.log (123)
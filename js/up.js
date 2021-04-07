jQuery(document).ready(function() {
    var btn = $('#btn-up');  
    $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
        btn.removeClass('dont-show');
    } else {
        btn.removeClass('show');
        btn.addClass('dont-show');
    }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});
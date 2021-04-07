$('.open-btn').click(function() {
    $('.modal-window').addClass('active')
})

$('.close-btn').click(function() {
    $('.modal-window').removeClass('active')
})

function hideModals(){
    // $(document.body).removeClass('is-open-modal');
    $('.modal').removeClass('is-open');
}

$(document).click(function (e) {
    if ($(e.target).is('.modal')) {
        closeModal();
    }
});
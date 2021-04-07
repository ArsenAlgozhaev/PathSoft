window.addEventListener('scroll', function(){
    const header = document.querySelector('.header-main')
    console.log ('Window Scroll', this.scrollY)
    if (this.scrollY > 45) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})
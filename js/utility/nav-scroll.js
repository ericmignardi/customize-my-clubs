const navScroll = () => {
    window.addEventListener('scroll', function(event) {
        var scroll = this.scrollY;
        var header = document.querySelector('.header');
        
        if (scroll > 250) {
            header.classList.add('header__scroll');
        } else {
            header.classList.remove('header__scroll');
        }
    });
};

export default navScroll;

const mobileToggle = () => {
    const toggleButton = document.querySelector('.header__toggle');
    const mobileMenu = document.querySelector('.mobile-header');
    
    let isMobileMenuOpen = false;

    toggleButton.addEventListener('click', () => {
        isMobileMenuOpen = !isMobileMenuOpen;
        if (isMobileMenuOpen) {
            mobileMenu.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobileMenu.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });
};

export default mobileToggle;
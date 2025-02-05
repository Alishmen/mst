window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(51, 51, 51, 0.9)';
    } else {
        header.style.backgroundColor = '#333';
    }
});

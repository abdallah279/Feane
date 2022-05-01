let navbar = document.querySelector('.navbar');
navbar.classList.toggle('fixed', window.scrollY > 0);

window.addEventListener('scroll', function(){
    // Header Fixed
    navbar.classList.toggle('fixed', window.scrollY > 0);
});
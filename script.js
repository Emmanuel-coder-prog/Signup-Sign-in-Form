document.addEventListener('DOMContentLoaded', function() {
    const showSignUp = document.getElementById('showSignUp');
    const showSignIn = document.getElementById('showSignIn');
    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');

    showSignUp.addEventListener('click', function(e) {
        e.preventDefault();
        signInForm.classList.add('active');
        signUpForm.classList.add('active');
    });

    showSignIn.addEventListener('click', function(e) {
        e.preventDefault();
        signInForm.classList.remove('active');
        signUpForm.classList.remove('active');
    });
});
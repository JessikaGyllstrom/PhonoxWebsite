
let navbar = document.querySelector(".navbar")

function openMenuFunction() {
    navbar.classList.toggle('active');
}
function closeMenuFunction() {
    navbar.classList.remove('active');
}


window.onscroll = () => {

    navbar.classList.remove('active');

    if(window.scrollY > 100) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
}


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

// var header = document.querySelector('.header');
// var oldColor = header.style.backgroundColor;

// document.body.addEventListener('scroll', () => {
//     let yPosition = document.body.scrollTop;
//     if (yPosition > 100) {
//         header.style.backgroundColor = "#fff";
//     }
//     else {
//         header.style.backgroundColor = oldColor;
//     }
// })

const header = document.querySelector('.header');

window.onscroll = function () {

    var top = window.scrollY;
    console.log(top);
    if (top >= 100) {
        header.classList.add('active');
    } else{
        header.classList.remove('active');
    }
}
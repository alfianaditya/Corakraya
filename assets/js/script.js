let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

var header = document.querySelector('.header');
// var text = document.querySelector('.header .navbar a');
var oldColor = header.style.backgroundColor;

document.body.addEventListener('scroll', () => {
    let yPosition = document.body.scrollTop;
    if (yPosition > 100) {
        header.style.backgroundColor = "#fff";
        // text.style.color = "black";
    }
    else {
        header.style.backgroundColor = oldColor;
        text.style.color = "white";
    }
})

function kirim() {
    alert("Pesan Berhasil Dikirim");
  }

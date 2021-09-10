const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=> {
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Tampilkan Lebih Sedikit'){
        readMoreBtn.innerText = 'Tampilkan lebih Banyak';
    }else {
        readMoreBtn.innerText = 'Tampilkan Lebih Sedikit';
    }
})
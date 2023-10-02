// Script for navigation bar
const bar = document.getElementById('bar');
const mobile = document.querySelector('.navbar');
const close = document.getElementById('close')

if(bar){
  bar.addEventListener('click', () => {
    mobile.classList.add('navbar1')
  })
} 

if(close) {
  close.addEventListener('click', () => {
    mobile.classList.remove('navbar1')
  })
}


// SMALL PRODUCTS
const MainImg = document.querySelector('#Mainimg');
const smallImg = document.querySelectorAll('.small-img');


smallImg.forEach(img => {
   img.addEventListener('click', () =>{
    MainImg.src = img.src
   })
})








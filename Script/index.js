const typewriterdiv = document.querySelector('.type');
var typing= new Typed(typewriterdiv, {
  // add 
  strings: ['',  'DATA', 'VTU', 'SME'],
  typeSpeed:500,
  loop: true, 
  showCursor: false,
  fadeOutClass: 'typed-fade-in'
});

let buyNow = document.querySelector('.buy')
console.log(buyNow);
buyNow.addEventListener('click', ()=>{
  window.location = '../Pages/login.html'
})
let navBtn = document.querySelector('.buy-data')
console.log(navBtn);
navBtn.addEventListener('click', function(){
  window .location = '../Pages/login.html'
})

let mediaNav = document.querySelector('.')

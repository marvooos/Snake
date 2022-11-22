const slider = document.querySelector('.slider');
const cell = document.querySelector('.cell');
// const butNext = document.querySelector('.but-next');
// const butPrev = document.querySelector('.but-prev');


// const cellRed = document.querySelector('.cellRed');
// const cellGreen = document.querySelector('.cellGreen');

// //RED
// function bodyColorRed() {
// document.body.style.background = 'red';
// };
// cellRed.addEventListener('click',  () => {
//    setTimeout (() => document.body.style.background = '', 2000);
//    bodyColorRed();
// });


//GREEN
// function bodyColorGreen() {
// document.body.style.background = 'Green';
// };
// cellGreen.addEventListener('click',  () => {
//    setTimeout (() => document.body.style.background = '', 3000);
//    bodyColorGreen();
// });
let offset = 0;

document.querySelector('.but-next').addEventListener('click', () => {
   offset = offset + 400;
   if (offset > 800) {
     offset = 0;
   };
   slider.style.left = -offset + 'px';
   
});
document.querySelector('.but-prev').addEventListener('click', () => {
   offset = offset - 400;
   if (offset < 0) {
     offset = 800;
   };
   slider.style.left = -offset + 'px';
   
}); 



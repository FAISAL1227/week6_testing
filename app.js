document.addEventListener('DOMContentLoaded', () => {
   const counterElement = document.getElementById('counter');
   const incrementButton = document.getElementById('increment');
   const decrementButton = document.getElementById('decrement');

   let counter = 0;

   incrementButton.addEventListener('click', () => {
       counter++;
       counterElement.textContent = counter;
   });

   decrementButton.addEventListener('click', () => {
       counter--;
       counterElement.textContent = counter;
   });
});

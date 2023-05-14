const addButtons = document.querySelectorAll('#addCart');
const cartCounter = document.querySelector('.counter');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dataKey = button.getAttribute('data-key');
    console.log('test')
    cart.push(dataKey);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
  });
});

function updateCartCounter() {
  cartCounter.innerText = cart.length;
}

window.addEventListener('DOMContentLoaded', () => {
  updateCartCounter();
});


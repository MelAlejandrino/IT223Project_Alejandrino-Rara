const cartCounter = document.querySelector(".counter");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
container.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.id === "addCart") {
    const addB = e.target;
    console.log(addB);
    const dataKey = addB.getAttribute("data-key");
    cart.push(dataKey);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
  }
});

function updateCartCounter() {
  cartCounter.innerText = cart.length;
}

window.addEventListener("DOMContentLoaded", () => {
  updateCartCounter();
});

console.log(container);
    // const dataKey = e.target.id.getAttribute("data-key");
    // console.log("test");
    // cart.push(dataKey);
    // localStorage.setItem("cart", JSON.stringify(cart));
    // updateCartCounter();
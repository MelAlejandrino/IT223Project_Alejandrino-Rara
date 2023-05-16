container = document.querySelector(".cartContainer");

function fetchProducts() {
  fetch("src/products.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        displayProduct(item);
      });
    })
    .catch((error) => console.error(error));
}

function displayProduct(item) {
  container.innerHTML += `
      <div class="cartitem" data-key="${item.key}">
          <picture>
            <img src="${item.src}" alt="" />
          </picture>
        <div class="card-details">
          <h1>${item.name}</h1>
          <p>${item.details}</p>
          <p>₱${item.price}</p>
        </div>
      </div>
    `;
}
if(cart.length === 0){
    container.innerHTML += `
    <div>
    <h1 class="empty">OOPS WAY SULOD MAN CHUY</h1>
    </div>
  `;
}else{
    cart.forEach((prod) => {
        fetch("src/products.json")
        .then((response) => response.json())
        .then((data) => {
          data.forEach((item) => {
            if (item.key === prod) {
              displayProduct(item);
            }
          });
        })
        .catch((error) => console.error(error));
    });
    
}

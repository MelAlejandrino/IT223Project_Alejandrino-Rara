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
if (cart.length === 0) {
  container.innerHTML += `
    <div>
    <h1 class="empty">YOU DID NOT ADD A PRODUCT YET</h1>
    </div>
  `;
} else {
  let totalPrice = 0;
  const fetchPromises = cart.map((prod) => {
    return fetch("src/products.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          if (item.key === prod) {
            displayProduct(item);
            let price = item.price.replace(",", ""); // Remove commas from the price
            console.log(price);
            totalPrice += Number(price);
          }
        });
      })
      .catch((error) => console.error(error));
  });

  Promise.all(fetchPromises)
    .then(() => {
      console.log(totalPrice);
      const totalCheckout = document.getElementById('totalCheckout');
      totalCheckout.innerText = `₱${totalPrice}`;
    })
    .catch((error) => console.error(error));
}



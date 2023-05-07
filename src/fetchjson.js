const container = document.querySelector(".prodContainer");
fetch("src/products.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      container.innerHTML += `
      <div class="card">
      <div class="card-img">
        <picture>
          <img src="${item.src}" alt="" />
        </picture>
        <div class="card-cart">
          <a href="" style="color: black">ADD TO CART</a>
        </div>
      </div>
      <div class="card-details">
        <h1>${item.name}</h1>
        <p>${item.details}</p>
        <div class="card-button">
          <button>${item.price}</button>
        </div>
      </div>
    </div>
        `;
    });
  })
  .catch((error) => console.error(error));

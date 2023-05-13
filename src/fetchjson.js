const container = document.querySelector(".prodContainer");
const radioButtons = document.getElementsByName('filtCategories');
const labels = document.querySelectorAll('label');

// Add event listeners to labels
labels.forEach((label) => {
  label.addEventListener('click', function() {
    const radioButton = document.getElementById(this.getAttribute('for'));
    radioButton.checked = true;
    this.classList.add("activeCategory");
    let next = this.nextElementSibling;
    let before = this.previousElementSibling;

    while(next) {
    next.classList.remove("activeCategory");
    next = next.nextElementSibling;
  }

    while(before){
        before.classList.remove("activeCategory");
        before = before.previousElementSibling;
    }
    // Trigger 'change' event on the radio button
    const event = new Event('change');
    radioButton.dispatchEvent(event);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  fetchProducts();
});

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', function() {
    container.innerHTML = ''; // Clear existing results before fetching and displaying products

    if (this.value === "allCateg") {
      fetchProducts();
    }

    if (this.value === "disCateg") {
      fetch("src/products.json")
        .then((response) => response.json())
        .then((data) => {
          data.forEach((item) => {
            if (item.disc === "YES") {
              displayProduct(item);
            }
          });
        })
        .catch((error) => console.error(error));
    }

    if (this.value === "highCateg") {
      fetch("src/products.json")
        .then((response) => response.json())
        .then((data) => {
          data.forEach((item) => {
            if (item.highend === "YES") {
              displayProduct(item);
            }
          });
        })
        .catch((error) => console.error(error));
    }
  });
}

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
    <div class="card item">
      <div class="card-img">
        <picture>
          <img src="${item.src}" alt="" />
        </picture>
        <div class="card-cart">
          <h1 id="addCart">ADD TO CART</h1>
        </div>
      </div>
      <div class="card-details">
        <h1>${item.name}</h1>
      </div>
    </div>
  `;
}



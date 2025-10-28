const menubar = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav");
const icons = document.querySelector(" .nav .icons ");
const form = document.querySelector("form");
const sumbitBtn = document.querySelector(".Sumbit");
const firstName = document.querySelector(".first-name");
const LastName = document.querySelector(".last-name");
const Email = document.querySelector(".email");
let totalCart = document.querySelector(".cart-container .cart-count");

menubar.addEventListener("click", (e) => {
  if (e.target.className.includes("fa-bars")) {
    e.target.className = "fa-solid fa-x";
    nav.style.display = "flex";
    icons.style.display = "flex";
  } else {
    e.target.className = "fa-solid fa-bars";
    nav.style.display = "none";
    icons.style.display = "none";
  }
});

// form Validation

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstName.value === "" || LastName.value === " " || Email.value === "") {
    alert("Please fill in all fields before submitting! ");
  } else {
    Toastify({
      text: "✅ Form sent successfully!",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #228b22, #ffc328)",
    }).showToast();
  }
});

// Task 2 seacrh products by their name

let Top_products = document.querySelector(".Top-products");

const products = [
  {
    name: "Carrot",
    description: "Bright, crunchy, and full of sweetness",
    price: 5.2,
    image: "assets/carot.png",
    category: "Vegetable",
  },
  {
    name: "Banana",
    description: "A soft, sweet fruit with a yellow peel.",
    price: 6.5,
    image: "assets/Bannana.png",
    category: "Fruit",
  },
  {
    name: "Blueberry",
    description: "Small, round, dark-blue fruit",
    price: 3.0,
    image: "assets/Blueberry.png",
    category: "Fruit",
  },
  {
    name: "Pineapple",
    description: "A tropical fruit with a spiky outer",
    price: 4.0,
    image: "assets/Pineapple.png",
    category: "Fruit",
  },
  {
    name: "Bell Pepper",
    description: "Crisp, sweet vegetables",
    price: 2.0,
    image: "assets/Bell Pepper.png",
    category: "Vegetable",
  },
  {
    name: "Watermelon",
    description: "Cool juicy and super refreshing",
    price: 3.0,
    image: "assets/watemelon.png",
    category: "Fruit",
  },
  {
    name: "Lemon",
    description: "Fresh and tangy",
    price: 4.89,
    image: "assets/lemon.png",
    category: "Fruit",
  },
  {
    name: "Broccoli",
    description: "Tiny green trees full of nutrients",
    price: 5.5,
    image: "assets/Broccoli.png",
    category: "Vegetable",
  },
  {
    name: "Beetroot",
    description: "Deep purple, sweet, and earthy",
    price: 9.0,
    image: "assets/Beetroot.png",
    category: "Vegetable",
  },
  {
    name: "Apple",
    description: "A sweet, crisp fruit that comes in red",
    price: 5.89,
    image: "assets/Red Apple.png",
    category: "Fruit",
  },
];

function producttemp(product) {
  let div = document.createElement("div");
  div.classList.add("product");
  let img = document.createElement("img");
  img.src = product.image;

  let productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  let h4 = document.createElement("h4");
  h4.textContent = product.name;
  let p = document.createElement("p");
  p.textContent = product.description;
  let price = document.createElement("p");
  price.classList.add("price");
  price.textContent = `$ ${product.price}`;
  let productcategory = document.createElement("span");
  productcategory.classList.add("product-category");
  productcategory.textContent = product.category;
  let categName = document.createElement("span");
  categName.classList.add("product-name-categ");

  let span = document.createElement("span");
  span.classList.add("cart");
  span.innerHTML += ` <i class="fa-solid  fa-cart-shopping"></i>`;
  let i = document.createElement("i");
  i.className = "fa-regular fa-heart";

  categName.appendChild(h4);
  categName.appendChild(productcategory);
  productInfo.appendChild(categName);
  productInfo.appendChild(p);
  productInfo.appendChild(price);
  productInfo.appendChild(span);

  div.appendChild(img);
  div.appendChild(productInfo);
  div.appendChild(i);

  return div;
}

products.map((product) => {
  Top_products.appendChild(producttemp(product));
});

// serach product

function search(name) {
  Top_products.innerHTML = "";
  const result = products.filter((product) => {
    if (product.name.toLowerCase().includes(name)) {
        return   Top_products.appendChild(producttemp(product));
    }

   
  });
  console.log(result)
   if(result.length === 0   ){
     Top_products.innerHTML = "<h1> there is no  product found with that name </h1>"
    }
}

// search by product name
let input = document.getElementById("product-name");

input.addEventListener("input", () => {
  let searchValue = input.value.trim().toLowerCase();
  search(searchValue);
});

// search by category

let fruitsBtn = document.querySelector(".fruits");
let vegetablesBtn = document.querySelector(".vegetables");

fruitsBtn.addEventListener("click", () => {
  Top_products.innerHTML = "";

  products.map((product) => {
    if (product.category == "Fruit") {
      Top_products.appendChild(producttemp(product));
    }
  });
});

vegetablesBtn.addEventListener("click", () => {
  Top_products.innerHTML = "";

  products.map((product) => {
    if (product.category == "Vegetable") {
      Top_products.appendChild(producttemp(product));
    }
  });
});

// filter by price

let priceInput = document.getElementById("price");

priceInput.addEventListener("input", () => {
  Top_products.innerHTML = "";
  let selectedprice = priceInput.value;
  products.filter((product) => {
    if (product.price < selectedprice) {
      Top_products.appendChild(producttemp(product));
    }
  });
});

let cart = document.querySelectorAll(" .cart  .fa-cart-shopping");
console.log(cart);

cart.forEach((c) => {
  c.addEventListener("click", () => {
    totalCart.textContent++;
    console.log(totalCart.textContent);
  });
});

let cartCount = 0;
const cartCountElement = document.getElementById("cartCount");

// 🔹 Search functionality
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".Product");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  productCards.forEach(product => {
    const productName = product.querySelector("h4").innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
});

// 🔹 Add to Cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.innerText = `🛒 (${cartCount})`;
    alert("Item added to cart!");
  });
});

// 🔹 Dark Mode Toggle
const darkModeBtn = document.createElement("button");
darkModeBtn.innerText = "🌙 Dark Mode";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.padding = "10px 15px";
darkModeBtn.style.border = "none";
darkModeBtn.style.borderRadius = "8px";
darkModeBtn.style.background = "crimson";
darkModeBtn.style.color = "white";
darkModeBtn.style.cursor = "pointer";

document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.innerText = "☀️ Light Mode";
  } else {
    darkModeBtn.innerText = "🌙 Dark Mode";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("order-form");
  const addToCartButton = document.getElementById("add-to-cart");
  const cartList = document.getElementById("cart");
  const totalSpan = document.getElementById("total");
  const checkoutButton = document.getElementById("checkout");

  let cart = [];
  let total = 0;

  addToCartButton.addEventListener("click", function (e) {
    e.preventDefault();

    const item = document.getElementById("item").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    if (quantity > 0) {
      const price = calculateItemPrice(item, quantity);
      cart.push({ item, quantity, price });
      updateCartUI();
    }
  });

  cartList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-item")) {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1);
      updateCartUI();
    }
  });

  checkoutButton.addEventListener("click", function () {
    // Send the cart data to the server for backend processing (not implemented here)
    alert("Checkout not implemented in this example.");
  });

  function calculateItemPrice(item, quantity) {
    // Placeholder function to calculate item price (should fetch prices from a backend)
    const prices = {
      burger: 5.99,
      pizza: 8.99,
      pasta: 7.99,
    };
    return prices[item] * quantity;
  }

  function updateCartUI() {
    cartList.innerHTML = "";
    total = 0;

    cart.forEach((cartItem, index) => {
      const li = document.createElement("li");
      li.textContent = `${cartItem.quantity} x ${
        cartItem.item
      } - $${cartItem.price.toFixed(2)}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-item");
      deleteButton.setAttribute("data-index", index);

      li.appendChild(deleteButton);

      cartList.appendChild(li);
      total += cartItem.price;
    });

    totalSpan.textContent = total.toFixed(2);
  }
});

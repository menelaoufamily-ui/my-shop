let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  showCart();
}

function showCart() {
  let cartList = document.getElementById("cart");
  let totalElement = document.getElementById("total");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - €" + item.price;
    cartList.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = "Total: €" + total;
}

const cart = document.getElementById("cart-ul");
const cartItems = document.getElementById("cart-items");

function cartAppend(itemName, itemPrice) {
    const item = document.createElement("li");
    item.textContent = itemName;
    cart.appendChild(item);

    let rows = cartItems.rows;
    for (let i=1; i<rows.length; i++) {
        console.log(rows[i])
    }

    const itemData = document.createElement("tr");
    const itemType = document.createElement("td");
    itemType.textContent = itemName;
    itemData.appendChild(itemType);
    const quantity = document.createElement("td");
    quantity.textContent = "1";
    itemData.appendChild(quantity);
    const price = document.createElement("td");
    price.textContent = itemPrice;
    itemData.appendChild(price);
    cartItems.appendChild(itemData);

}

function clearCart() {
    cart.innerHTML = "";

}
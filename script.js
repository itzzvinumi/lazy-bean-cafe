function calculateTotal() {
  const pricePerCoffee = 1200;
  const quantityInput = document.getElementById("quantity").value;
  
  if (quantityInput < 1) {
    alert("Please enter a valid quantity of at least 1.");
    return;
  }

  const totalPrice = pricePerCoffee * quantityInput;
  const outputText = document.getElementById("total-price");
  
  outputText.innerHTML = `Total for ${quantityInput} coffee(s): <strong>LKR ${totalPrice.toLocaleString()}</strong>`;
}
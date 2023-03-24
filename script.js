 const priceRows = document.querySelectorAll('[data-ns-test="prices"]');
  
  // Initialize the total price to zero
  let totalPrice = 0;
  
  // Loop through each price row and add its value to the total price
  priceRows.forEach(row => {
    totalPrice += parseInt(row.textContent);
  });
  
  // Get the table cell element where the total price will be displayed
  const totalCell = document.querySelector('[data-ns-test="grandTotal"]');
  
  // Set the text content of the total cell to the total price
  totalCell.textContent = totalPrice;
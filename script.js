//your code here
const priceElements = document.querySelectorAll("[data-ns-test='prices']");

      // Calculate the total price
      let totalPrice = 0;
      for (let i = 0; i < priceElements.length; i++) {
        totalPrice += parseInt(priceElements[i].textContent);
      }

      // Display the total price in the grand total element
      const grandTotalElement = document.querySelector("[data-ns-test='grandTotal']");
      grandTotalElement.textContent = totalPrice.toString();

      // Create a new row for the total price
      const newRow = document.createElement("tr");
      const newCell1 = document.createElement("td");
      const newCell2 = document.createElement("td");
      newCell1.textContent = "Total";
      newCell2.textContent = totalPrice.toString();
      newRow.appendChild(newCell1);
      newRow.appendChild(newCell2);
      grandTotalElement.parentNode.parentNode.insertBefore(newRow, grandTotalElement.parentNode);

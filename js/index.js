// ITERATION 1

function updateSubtotal(product) {
//  console.log('Calculating subtotal, yey!');

  // Unit Price
  let price = product.querySelector(".price span"); // Choose the selector by product
  let priceNumber = price.innerHTML; // Assign the value

  // Quantity  
  let quantity = product.querySelector(".quantity input");
  let quantityNumber = quantity.value;

  // Calculate line parcial subtotal
  let subtotalPrice = priceNumber * quantityNumber;

  // Subtotal
  let subtotalDOM = product.querySelector(".subtotal span");
  subtotalDOM.innerText = subtotalPrice;

  // Return each subtotal value
  return subtotalPrice;
}

function calculateAll() {

  // ITERATION 2
  // Select all products to sum the total
  let allProducts = document.querySelectorAll(".product");  // Choose the selector by class
  let subTotalGeneral = 0; // Set a variable to store and sum each partial subtotal
  allProducts.forEach((eachProduct) => {
    // Call updateSubtotal() for each product and sum the subtotal to Grand Total
    subTotalGeneral += updateSubtotal(eachProduct);
  })

  // ITERATION 3
  // Assign the subTotalGeneral value to its selector
  document.querySelector("#total-value span").innerText = subTotalGeneral
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove(); // Un poco animal, ¿eh?... jajaja... pero en la fauna JS funciona...
  calculateAll()
}

// ITERATION 5

function createProduct() {
// 1. target "Product Name" and "Unit Price" input DOM nodes
let createProductListDOM = document.querySelectorAll(".create-product input");
// 2. extract their values
let newProductNameDOM = createProductListDOM[0].value;
let newProductPriceDOM = createProductListDOM[1].value;

// 3. add a new row to the table with:  |
//    - product name                    |
//    - unitary price                   | Crear los elementos que faltan
//    - quantity input                  | Refactorizar a función de flecha
//    - "Remove" button                 |

const addToList = () => {
  let cartBodyDOM = document.querySelector("#cart tbody")
  
  // create element
  let cartRowDOM = document.createElement("tr");
  cartRowDOM.setAttribute("class", "product");
  cartBodyDOM.appendChild(cartRowDOM);
  
  let rowTdNameDOM = document.createElement("td");
  rowTdNameDOM.setAttribute("class", "name");
  cartRowDOM.appendChild(rowTdNameDOM);
  
  let tdSpanNameDOM = document.createElement("span");
  tdSpanNameDOM.innerText = newProductNameDOM;
  rowTdNameDOM.appendChild(tdSpanNameDOM);
  
  let rowTdPriceDOM = document.createElement("td");
  rowTdPriceDOM.setAttribute("class", "name");
  cartRowDOM.appendChild(rowTdPriceDOM);
  
  let tdSpanPriceDOM = document.createElement("span");
  tdSpanPriceDOM.innerText = newProductPriceDOM;
  rowTdPriceDOM.appendChild(tdSpanPriceDOM);
  
  // 4. ensure that all of the functionality works as expected.
  // 
}

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // select each button to add the click event
  let removeButtons = document.querySelectorAll(".btn-remove")

  // add Event Listener to apply action
  removeButtons.forEach((eachButton) => {
    eachButton.addEventListener("click", removeProduct);
  });

  // select create button to add the click event
  let createProductBtn = document.querySelector("#create")

  // add Event Listener to apply action
  createProductBtn.addEventListener("click", createProduct);
  
  
});

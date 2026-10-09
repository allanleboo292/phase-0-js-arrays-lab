// Write your code here
const products = ["Laptop","Phone", "Headphones","Monitor"];

function logFirstProduct(){
  console.log(products[0])
}
// Function to add a new product to the array

function addProduct(name){
  products.push(name)
}

// Function to change the name of product

function updateProductName(position, newName){
  products[position] = newName;
}

// Remove product 

function removeLastProduct(){
  products.pop()
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};


/* ============= Get All Variables ============= */
const sub_Total = document.getElementById('sub-total');
const tax = document.getElementById('tax');
const total = document.getElementById('total');

/* ============= Phone Plus Button ============= */
function phonePlus() {
  getInteger("phone", true,  1219)
}

/* ============= Phone Plus Button ============= */
function phoneMinus() {
  getInteger("phone", false,  1219)
}

/* ============= Case Plus Button ============= */
function casePlus() {
  getInteger("case", true,  59)
}

/* ============= Case Minus Button ============= */
function caseMinus() {
  getInteger("case", false,  59)
}

/* ============= Common Function ============= */
function getInteger(product, add, price) {
  const ProductNum = document.getElementById(product + '-input')
  let Count_Product = parseInt(ProductNum.value)
  
  if (add) {
    Count_Product += 1;
  } else {
    Count_Product -= 1;
  }
  ProductNum.value = Count_Product
  const add_Product = document.getElementById(product + "-display")
  let singlePrice = Count_Product * price
  add_Product.innerText = singlePrice

  
}


function calculateTotal() {
  
}
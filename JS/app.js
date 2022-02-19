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
  } else if(ProductNum.value > 0) {
    Count_Product -= 1;
  }
  ProductNum.value = Count_Product
  const add_Product = document.getElementById(product + "-display")
  let singlePrice = Count_Product * price
  add_Product.innerText = singlePrice

  calculateTotal()
  
}


function calculateTotal() {
  const phone_Total = parseInt(document.getElementById("phone-display").innerText)
  const case_Total = parseInt(document.getElementById("case-display").innerText)
  const calSubTotal = phone_Total + case_Total;
  sub_Total.innerText = calSubTotal;
  const calTax = parseFloat((calSubTotal * 0.2).toFixed(2))
  tax.innerText = calTax;
  total.innerText = calSubTotal + calTax

}
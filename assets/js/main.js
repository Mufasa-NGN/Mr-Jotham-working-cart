const submitProduct = document.getElementById("submitProduct")
const productName = document.getElementById("productName")
const productDesc = document.getElementById("desc")
const productPrice = document.getElementById("price")

const productDisplay = document.querySelector("#display")


productDisplay.style.display = "flex"
productDisplay.style.flexDirection = "row"


//      This is where the real codding started

var productList = []

submitProduct.addEventListener ("click", function() {
    var pName = productName.value
    var pDesc = productDesc.value
    var pPrice = productPrice.value

    var product = {pName: pName, pDesc: pDesc, pPrice: pPrice}

    productList.push(product)

    console.log(productList);
})
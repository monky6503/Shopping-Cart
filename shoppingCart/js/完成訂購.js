const products = document.querySelectorAll(".item");
products.forEach(product => {
  let name = product.getAttribute("name");
  let price = parseInt(product.getAttribute('data-price'));
  let count = JSON.parse(localStorage.getItem("Items"))[product.getAttribute("name")];
  product.previousElementSibling.innerHTML = `x ${count}`

  let total = price * count
  product.innerHTML = `NT$${(total).toLocaleString()}`;
})


let cartQuantity = parseInt(JSON.parse(localStorage.getItem("Count")));
let totalAmount = parseInt(JSON.parse(localStorage.getItem("Total")));
document.querySelector(".js-count").innerHTML = `${cartQuantity}`;
document.querySelector(".js-amount").innerHTML = `NT$${(totalAmount).toLocaleString()}`;
document.querySelector(".js-total").innerHTML = `NT$${(totalAmount).toLocaleString()}`;


const infos = JSON.parse(localStorage.getItem("Info"));
console.log(infos);

document.querySelector(".buyer").innerHTML = `${infos["buyer"]}`;
document.querySelector(".phone").innerHTML = `${infos["phone"]}`;
document.querySelector(".mail").innerHTML = `${infos["mail"]}`;
document.querySelector(".address").innerHTML = `${infos["address"]+"&nbsp;"+infos["code"]+"&nbsp;"+infos["city"]}`;
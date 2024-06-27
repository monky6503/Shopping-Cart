

//確保回到這頁 先前選擇的數量還會在
const items = JSON.parse(localStorage.getItem("Items"));
if(items){
  document.querySelectorAll('.js-input').forEach(input => {
    let name = input.nextElementSibling.nextElementSibling.getAttribute("name");
    input.value = items[name];
});
}

updateCartQuantity();

function updateCartQuantity(){
  const inputObject = document.querySelectorAll(".js-input");
  let cartQuantity = 0;
  let totalAmount = 0;
  let items = {mbp:0,ipp:0,ip_15p:0};

  inputObject.forEach(input =>{
    const quantity = parseInt(input.value);
    const priceElement = input.nextElementSibling.nextElementSibling;
    let name = priceElement.getAttribute("name")
    const price = parseInt(priceElement.getAttribute('data-price'));

    items[name] +=quantity;
    cartQuantity+=quantity;

    priceElement.innerHTML = `NT$${(quantity * price).toLocaleString()}`;
    totalAmount += price * quantity;
  })

  document.querySelector(".js-count").innerHTML = `${cartQuantity}`;
  document.querySelector(".js-amount").innerHTML = `NT$${(totalAmount).toLocaleString()}`;
  document.querySelector(".js-total").innerHTML = `NT$${(totalAmount).toLocaleString()}`;

  localStorage.setItem("Items",JSON.stringify(items));
  localStorage.setItem("Count",cartQuantity);
  localStorage.setItem("Total",totalAmount);
}




document.querySelectorAll('.js-plus').forEach(button => {
  button.addEventListener('click', function() {
      let input = button.previousElementSibling;
      let name = button.nextElementSibling;
      let value = JSON.parse(localStorage.getItem("Items"))[name.getAttribute("name")];
      input.value = parseInt(value) + 1;
      updateCartQuantity();
  });
});


document.querySelectorAll('.js-minus').forEach(button => {
  button.addEventListener('click', function() {
      let input = button.nextElementSibling;
      let name = button.nextElementSibling.nextElementSibling.nextElementSibling;
      let value = JSON.parse(localStorage.getItem("Items"))[name.getAttribute("name")]
      if (value > 0) {
          input.value = parseInt(value) - 1;
          updateCartQuantity();
      }
  });
});

document.querySelectorAll('.js-input').forEach(input => {
  input.addEventListener('input', function() {
      if (parseInt(input.value) < 0) {
          input.value = 0;
      }
      updateCartQuantity();
  });
});


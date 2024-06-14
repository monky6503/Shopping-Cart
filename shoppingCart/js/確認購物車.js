
function updateCartQuantity(){
  const inputObject = document.querySelectorAll(".js-input");
  let cartQuantity = 0;
  let totalAmount = 0;

  inputObject.forEach(input =>{
    const quantity = parseInt(input.value);
    cartQuantity+=quantity;
    const priceElement = input.nextElementSibling.nextElementSibling;
    const price = parseInt(priceElement.getAttribute('data-price'));
    priceElement.innerHTML = `NT$${(quantity * price).toLocaleString()}`;
    totalAmount += price * quantity;
    
  })

  document.querySelector(".js-count").innerHTML = `${cartQuantity}`;
  document.querySelector(".js-amount").innerHTML = `NT$${(totalAmount).toLocaleString()}`;
  document.querySelector(".js-total").innerHTML = `NT$${(totalAmount).toLocaleString()}`;
}




document.querySelectorAll('.js-plus').forEach(button => {
  button.addEventListener('click', function() {
      let input = button.previousElementSibling;
      input.value = parseInt(input.value) + 1;
      updateCartQuantity()
  });
});


document.querySelectorAll('.js-minus').forEach(button => {
  button.addEventListener('click', function() {
      let input = button.nextElementSibling;
      if (parseInt(input.value) > 0) {
          input.value = parseInt(input.value) - 1;
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



updateCartQuantity();







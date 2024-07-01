let shops = [
  {
    id:23133,
    name:"AirPods Max",
    price:549,
    describe:"Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here. The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound.",
    img:"./image/product-list/airpods-max-spacegray.png"
  },
  {
    id:94819,
    name:"AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)",
    price:249,
    describe:"You need it!",
    img:"./image/product-list/AidpodsPro.jpeg"
  },
  {
    id:99201,
    name:"AirPods (3rd generation) with Lightning Charging Case",
    price:169,
    describe:"You need it!",
    img:"./image/product-list/AirPods3.jpeg"
  },
  {
    id:49281,
    name:"HomePod-Midnight",
    price:299,
    describe:"You need it!",
    img:"./image/product-list/homepod.jpeg"
  }
  ,
  {
    id:20193,
    name:"HomePod mini -Yellow",
    price:99,
    describe:"You need it!",
    img:"./image/product-list/homepod-mini.jpeg"
  },
  {
    id:20991,
    name:"Beats Solo 4 — On-Ear Wireless Headphones – Cloud Pink",
    price:199,
    describe:"You need it!",
    img:"./image/product-list/beast-solo4.jpeg"
  },
  {
    id:88102,
    name:"Magic Keyboard for iPad Pro 13‑inch (M4) - US English - Black",
    price:349,
    describe:"You need it!",
    img:"./image/product-list/magickeyboard.jpeg"
  }
  ,
  {
    id:10921,
    name:"Apple Pencil Pro",
    price:129,
    describe:"You need it!",
    img:"./image/product-list/applepencil-pro.jpeg"
  }
  ,
  {
    id:47389,
    name:"AirTag",
    price:29,
    describe:"You need it!",
    img:"./image/product-list/airtag.jpeg"
  }
];


let stepshopping = JSON.parse(localStorage.getItem("stepshopping"));
let result="";


const listsElement = document.querySelector(".shops")
const content = document.querySelectorAll(".shops");
content.forEach(text =>{
  result+=text.innerHTML;
})

const newshop = shops.filter((item,index) =>{
                  if(stepshopping.includes(index)){
                    return item;
                  }
                });

newshop.forEach(item =>{
  result += `<div class="col-12 w-100 py-2 list">
              <div class="row py-3 list">
                <div class="col-6 product d-flex align-items-center">
                  <img class="rounded-circle me-1" src=${item.img} alt="">
                  <div>
                    <p class="name m-0">${item.name}</p>
                    <p class="m-0 fw-light" style="font-size:12px">#${item.id}</p>
                  </div>
                </div>
                <div class="col-6 d-flex align-items-center justify-content-end gap-1">
                  <button type="button" class="minus js-minus"><i class="bi bi-dash"></i></button>
                  <input style="width:60px;height:25px;" type="number" class="form-control js-input" placeholder="1" value="1">
                  <button type="button" class="plus js-plus"><i class="bi bi-plus"></i></button>
                  <p class="cost ms-3 js-cost" data-price="${item.price}" name="${item.name}">$${item.price}</p>
                </div>
              </div>
              <hr class="text-body-tertiary m-0">
            </div>`;
});

listsElement.innerHTML = result;





//確保回到這頁 先前選擇的數量還會在
const items = JSON.parse(localStorage.getItem("Items"));
if(items){
  document.querySelectorAll('.js-input').forEach(input => {
    let name = input.nextElementSibling.nextElementSibling.getAttribute("name");
    input.value = items[name] ||1;
});
}

updateCartQuantity();

function updateCartQuantity(){
  const inputObject = document.querySelectorAll(".js-input");
  let cartQuantity = 0;
  let totalAmount = 0;
  let items = {};

  inputObject.forEach(input =>{
    const quantity = parseInt(input.value);
    const priceElement = input.nextElementSibling.nextElementSibling;
    let name = priceElement.getAttribute("name")
    const price = parseInt(priceElement.getAttribute('data-price'));

    if(!items[name]){
      items[name] = 0;
    }
    items[name] +=quantity;
    cartQuantity+=quantity;

    priceElement.innerHTML = `$${(quantity * price).toLocaleString()}`;
    totalAmount += price * quantity;


    //如果數量為0則移除該商品
    if(quantity === 0){
      const productElement = input.closest('.col-12');
      productElement.remove();
      delete items[name];
      const index = shops.findIndex(item => item.name === name);
      stepshopping = stepshopping.filter(id => id !==index);
      console.log(stepshopping)
      localStorage.setItem("stepshopping",JSON.stringify(stepshopping));
    }
  });

  document.querySelector(".js-count").innerHTML = `${cartQuantity}`;
  document.querySelector(".js-amount").innerHTML = `$${(totalAmount).toLocaleString()}`;
  document.querySelector(".js-total").innerHTML = `$${(totalAmount).toLocaleString()}`;

  localStorage.setItem("Items",JSON.stringify(items));
  localStorage.setItem("Count",cartQuantity);
  localStorage.setItem("Total",totalAmount);
}




document.querySelectorAll('.js-plus').forEach(button => {
  button.addEventListener('click', function() {
      let input = button.previousElementSibling;
      let value = parseInt(input.value) ||0;
      input.value = parseInt(value) + 1;
      updateCartQuantity();
  });
});


document.querySelectorAll('.js-minus').forEach(button => {
  button.addEventListener('click', function() {
      let input = button.nextElementSibling;
      let value = parseInt(input.value) ||0;
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


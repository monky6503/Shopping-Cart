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
console.log(stepshopping)

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
  result += `<div class="col-12 w-100 py-2 shop">
          <div class="row  py-3">
            <div class="col-6 product d-flex align-items-center">
              <img class="rounded-circle me-1" src="${item.img}" alt="">
              <div>
                <p class="name m-0">${item.name}</p>
                <p class="m-0 fw-light" style="font-size:12px">#${item.id}</p>
              </div>
            </div>
            <div class="col-6 total d-flex align-items-center justify-content-end gap-4">
              <p>x 1</p>
              <p class="m-0 item" name="${item.name}" data-price="${item.price}"></p>
            </div>
          </div>
          <hr class="text-body-tertiary m-0">
        </div>`;
});

listsElement.innerHTML = result;

















const products = document.querySelectorAll(".item");
products.forEach(product => {
  let name = product.getAttribute("name");
  let price = parseInt(product.getAttribute('data-price'));
  let count = JSON.parse(localStorage.getItem("Items"))[name];
  product.previousElementSibling.innerHTML = `x ${count}`

  let total = price * count
  product.innerHTML = `$${(total).toLocaleString()}`;
})


let cartQuantity = parseInt(JSON.parse(localStorage.getItem("Count")));
let totalAmount = parseInt(JSON.parse(localStorage.getItem("Total")));
document.querySelector(".js-count").innerHTML = `${cartQuantity}`;
document.querySelector(".js-amount").innerHTML = `$${(totalAmount).toLocaleString()}`;
document.querySelector(".js-total").innerHTML = `$${(totalAmount).toLocaleString()}`;


const infos = JSON.parse(localStorage.getItem("Info"));

document.querySelector(".buyer").innerHTML = `${infos["buyer"]}`;
document.querySelector(".phone").innerHTML = `${infos["phone"]}`;
document.querySelector(".mail").innerHTML = `${infos["mail"]}`;
document.querySelector(".address").innerHTML = `${infos["address"]+"&nbsp;"+infos["code"]+"&nbsp;"+infos["city"]}`;


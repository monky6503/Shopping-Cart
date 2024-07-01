const colorElement = document.querySelectorAll(".color");
colorElement.forEach(button => button.addEventListener("click",function(){
  let imgElement = document.querySelector(".productShow");
  imgElement.src = `./shoppingCart/image/product-list/airpods-max-${this.name}.png`
}))


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

let stepshopping = [];
const stepshoppingData = localStorage.getItem("stepshopping");


if (stepshoppingData) {
    try {
        stepshopping = JSON.parse(stepshoppingData);
    } catch (error) {
        console.error("Error parsing stepshopping data from localStorage:", error);
        stepshopping = [];
    }
}
const addElement = document.querySelectorAll(".addCart");

addElement.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    stepshopping.push(index);
    localStorage.setItem("stepshopping",JSON.stringify(stepshopping));
  });
})




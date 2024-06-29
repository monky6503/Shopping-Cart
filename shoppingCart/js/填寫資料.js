let cartQuantity = parseInt(JSON.parse(localStorage.getItem("Count")));
let totalAmount = parseInt(JSON.parse(localStorage.getItem("Total")));
document.querySelector(".js-count").innerHTML = `${cartQuantity}`;
document.querySelector(".js-amount").innerHTML = `NT$${(totalAmount).toLocaleString()}`;
document.querySelector(".js-total").innerHTML = `NT$${(totalAmount).toLocaleString()}`;




const buyer = document.querySelector(".name");
const phone = document.querySelector(".tel");
const mail = document.querySelector(".mail");
const city = document.querySelector(".city");
const code = document.querySelector(".zipCode");
const address  = document.querySelector(".address");
const pay = document.querySelector(".pay");
const inputsElement = document.querySelectorAll("input");



const infos = JSON.parse(localStorage.getItem("Info"))
if(infos){
  inputsElement.forEach(input =>{
    let name = input.getAttribute("name");
    input.value = infos[name] || "";
  })
}


function updateInfo(){
  let info = {};
  inputsElement.forEach(input =>{
    let value = input.value;
    let name = input.getAttribute("name");
    if(!info[name]){
      info[name] = "";
    }
    info[name] = value
  })
  console.log(info);

  localStorage.setItem("Info",JSON.stringify(info));
}

pay.addEventListener("click",updateInfo);
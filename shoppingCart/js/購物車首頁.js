const grayElement = document.querySelector(".space-gray");
const pinkElement = document.querySelector(".pink");
const greenElement = document.querySelector(".green");
const silverElement = document.querySelector(".silver");
const skyblueElement = document.querySelector(".sky-blue");
let imgElement = document.querySelector(".airpod-max");



grayElement.addEventListener("click",function(){
  imgElement.src = "./shoppingCart/image/product-list/airpods-max-spacegray.png"
})

pinkElement.addEventListener("click",function(){
  imgElement.src = "./shoppingCart/image/product-list/airpods-max-pink.png"
})

greenElement.addEventListener("click",function(){
  imgElement.src = "./shoppingCart/image/product-list/airpods-max-green.png"
})

silverElement.addEventListener("click",function(){
  imgElement.src = "./shoppingCart/image/product-list/airpods-max-silver.png"
})

skyblueElement.addEventListener("click",function(){
  imgElement.src = "./shoppingCart/image/product-list/airpods-max-skyblue.png"
})
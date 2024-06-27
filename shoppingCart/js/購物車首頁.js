const colorElement = document.querySelectorAll(".color");
colorElement.forEach(button => button.addEventListener("click",function(){
  let imgElement = document.querySelector(".airpod-max");
  imgElement.src = `./shoppingCart/image/product-list/airpods-max-${this.name}.png`
}))
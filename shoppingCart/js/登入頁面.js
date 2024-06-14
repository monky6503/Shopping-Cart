let password = document.getElementById("inputPassword");
let eyeicon = document.getElementById("eyeicon");


eyeicon.addEventListener("click",function(){
  if(password.type==="password"){
    password.type = "text";
    eyeicon.classList.remove("bi-eye-slash-fill");
    eyeicon.classList.add("bi-eye-fill");
  } else{
    password.type = "password";
    eyeicon.classList.remove("bi-eye-fill");
    eyeicon.classList.add("bi-eye-slash-fill");
  }
})


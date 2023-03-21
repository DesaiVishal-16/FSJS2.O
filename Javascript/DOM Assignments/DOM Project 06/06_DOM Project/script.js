
//TASK 01

//-TO CHANGE LOGO TO NEW LOGO

//--Method 1
const changeLogo=document.querySelector(".logo");
changeLogo.src="https://ineuron.ai/images/ineuron-logo.png";

//--Method 2
document.addEventListener("DOMContentLoaded", function() {
    const changeLogo=document.querySelector(".logo");
    changeLogo.src="assets/ineuron-logo.png"
  });



 //TASK 02

//-TO CHANGE APP PRICE FROM "$4" TO "$10"

const newPrice=document.querySelector(".app_price span");
newPrice.textContent="$10"


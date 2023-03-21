//TASK 01
//--TO ADD SCROLL BEHAVIOUR TO RIGHT SECTION
const rightSection=document.querySelector(".new");
rightSection.style.overflowY="scroll";
 //--TO GIVE BORDER TO RIGHT SECTION
rightSection.style.border="4px solid red"


//TASK 02

//TO REMOVE BACKGROUND I 
const bgImage=document.querySelector("body")
bgImage.style.background="none"

//TASK 03
//TO ADD MENU LIST IN MENU BUTTON
const nav = document.querySelector(".navbar");

nav.style.visibility = "visible";

const menuButton = document.querySelector(".navbar-toggler");

menuButton.addEventListener("click", function(){

document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
})
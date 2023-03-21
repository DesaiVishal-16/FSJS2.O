//TASK 01
//--TO CHANGE COLOR OF H1 TAG TO "RED"

const h1=document.querySelector(".caption .title");
h1.style.color="red"

//TASK 02
//--TO CHANGE COLOR OF BUTTON TO "RED" WHEN HOVER 

const button=document.querySelector(".add-to-cart");
button.addEventListener("mouseover",colorRed)
    function colorRed(){
    button.style.backgroundColor="red";
}

button.addEventListener("mouseout",colorOriginal)
function colorOriginal(){
    button.style.backgroundColor=""
}
const button=document.createElement("button");
 button.textContent="CLICK TO CHANGE COLOR";
 button.style.padding="10px";
 button.style.background="linear-gradient(to right,#DB0B5F,#6F00ED)";
 button.style.color="white";
 button.style.fontWeight="800";
 button.style.border=" 2px solid white"
 button.style.borderRadius="5px"
 button.style.marginTop="300px";
 button.style.marginLeft="600px";
 button.style.flexDirection="column";
 document.body.appendChild(button);

 button.addEventListener("click",function(){
     const background=document.querySelector("body");
     const random="#"+Math.floor(Math.random()*16777215).toString(16)
     background.style.backgroundColor=random;
     console.log(random);
 }) 
 



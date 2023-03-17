const body=document.querySelector("body");
body.style.background="linear-gradient(to right,#77a1d3, #79cbca, #e684ae)";

             // TEXT
const text=document.createElement("h1");
text.textContent="CLICK TO CREATE CIRCLE";
text.style.color="white";
text.style.position="absolute";
text.style.top="60px";
text.style.left="550px";
body.appendChild(text);
            
            //SCREEN
const screen=document.createElement("div");
screen.style.border="4px solid white";
screen.style.padding="200px 30%";
screen.style.marginTop="150px";
screen.style.marginLeft="300px";
screen.style.marginRight="300px";
screen.style.backgroundColor="black";
 body.appendChild(screen);
 
            //  SCREEN EVENT LISTENER

  screen.addEventListener("click",function(event){
    const circle=document.createElement("div");
    circle.style.width="25px";
    circle.style.height="25px";
    circle.style.borderRadius="25px";
    circle.style.position="absolute";
    circle.style.top = `${event.clientY - 15}px`;
    circle.style.left = `${event.clientX - 15}px`;
         

           //RANDOM COLOR
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    circle.style.backgroundColor=randomColor;
    screen.appendChild(circle);
             
            //TIMEOUT
    setTimeout(() => {
        circle.remove();
     }, 
     2000);
});

             //RELOAD BUTTON
 const reload=document.createElement("button");
 reload.textContent="CLEAN SCREEN"
 reload.style.color="white";
 reload.style.fontSize="18px"
 reload.style.fontWeight="550";
 reload.style.backgroundColor="#2827CC";
 reload.style.padding="25px 80px 25px 80px";
 reload.style.marginTop="40px";
 reload.style.marginLeft="630px"
 reload.style.borderRadius="25px";
 reload.style.borderColor="transparent";

         //BUTTON EVENT LISTENER
reload.addEventListener("mouseover",function(){
  this.style.backgroundColor="#2827EE";
});

reload.addEventListener("mouseout",function(){
  this.style.backgroundColor="#2827CC";
});

 body.appendChild(reload);

reload.addEventListener("click",function(){
   location.reload();
});
const body=document.querySelector("body");
body.style.backgroundColor="black";

            // UL
 const ul=document.createElement("ul")
 body.appendChild(ul);
      

      // LIST
    for(let s=1;s<=13;s++){
    const listButton=document.createElement("li");
    listButton.style.display="flex";
    listButton.style.flexDirection="column";
    ul.appendChild(listButton);
   
      //BUTTONS
    const button=document.createElement("button");
    button.style.backgroundColor="#120E43";
    button.style.color="white";
    button.style.padding="15px";
    button.style.fontSize="18px";
    listButton.appendChild(button);
      
    //BUTTON ID
    button.setAttribute("id", "button" + s);
    }
         //CLICK
    const button1=document.getElementById("button1");
    button1.textContent="SINGLE CLICK";
    button1.addEventListener("click",click);
    function click(){
        button1.style.backgroundImage="url('./assets/PineTools.com_files/row-1-column-1.jpg')";
        button1.style.backgroundSize="cover";
    }
        //DOUBLE CLICK
    const button2=document.getElementById("button2");
    button2.textContent="DOUBLE CLICK";
    button2.addEventListener("dblclick",dblclick);
    function dblclick(){
        button2.style.backgroundImage="url('./assets/PineTools.com_files/row-2-column-1.jpg')"; 
        button2.style.backgroundSize="cover";
    }
         //MOUSEOVER
    const button3=document.getElementById("button3");
    button3.textContent="MOUSEOVER";
    button3.addEventListener("mouseover",mouseover);
    function mouseover(){
        button3.style.backgroundImage="url('./assets/PineTools.com_files/row-3-column-1.jpg')";
        button3.style.backgroundSize="cover";
    }

         //MOUSEOUT
    const button4=document.getElementById("button4");
    button4.textContent="MOUSEOUT";
    button4.addEventListener("mouseout",mouseout);
    function mouseout(){
        button4.style.backgroundImage="url('./assets/PineTools.com_files/row-4-column-1.jpg')";
        button4.style.backgroundSize="cover";
    }

         //KEYPRESS
    const button5=document.getElementById("button5");
    button5.textContent="KEYPRESS";
    button5.addEventListener("keypress",keypress);
    function keypress(){
        button5.style.backgroundImage="url('./assets/PineTools.com_files/row-5-column-1.jpg')";
        button5.style.backgroundSize="cover";
    }  
         //KEYUP"
    const button6=document.getElementById("button6");
    button6.textContent="KEYUP";
    button6.addEventListener("keyup",keyup);
    function keyup(){
        button6.style.backgroundImage="url('./assets/PineTools.com_files/row-6-column-1.jpg')";
        button6.style.backgroundSize="cover";
    }
         //KEYDOWN
    const button7=document.getElementById("button7");
    button7.textContent="KEYDOWN";
    button7.addEventListener("keydown",keydown);
    function keydown(){
        button7.style.backgroundImage="url('./assets/PineTools.com_files/row-7-column-1.jpg')"; 
        button7.style.backgroundSize="cover";
    }
        //FOCUS
    const button8=document.getElementById("button8");
    button8.textContent="FOCUS ON BUTTON";
    button8.addEventListener("focus",focus);
    function focus(){
        button8.style.backgroundImage="url('./assets/PineTools.com_files/row-8-column-1.jpg')";
        button8.style.backgroundSize="cover";
    }
       //BLUR
    const button9=document.getElementById("button9");
    button9.textContent="REMOVE FOCUS FROM BUTTON";
    button9.addEventListener("blur",blur);
    function blur(){
        button9.style.backgroundImage="url('./assets/PineTools.com_files/row-9-column-1.jpg')";
        button9.style.backgroundSize="cover";
    }

        //KEYDOWN EVENT.KEY
    const button10=document.getElementById("button10");
    button10.textContent="PRESS A";
    button10.addEventListener("keydown",a);
    function a(){
        if(event.key=="a"){
        button10.style.backgroundImage="url('./assets/PineTools.com_files/row-10-column-1.jpg')";
        button10.style.backgroundSize="cover";
        }
    }
    const button11=document.getElementById("button11");
    button11.textContent="PRESS 1";
    button11.addEventListener("keydown",a1);
    function a1(){
        if(event.key=="1"){
        button11.style.backgroundImage="url('./assets/PineTools.com_files/row-11-column-1.jpg')";
        button11.style.backgroundSize="cover";
        }
    }
          
    const button12=document.getElementById("button12");
    button12.textContent="PRESS ANY ALPHABET";
    button12.addEventListener("keydown",alpha);
    function alpha(){
        const alphabet= /^[a-zA-Z]$/; 
        if (alphabet.test(event.key)) {
        button12.style.backgroundImage="url('./assets/PineTools.com_files/row-12-column-1.jpg')";
        button12.style.backgroundSize="cover";
        }
    }
    const button13=document.getElementById("button13");
    button13.textContent="PRESS ANY NUMBERS";
    button13.addEventListener("keydown",numeric);
    function numeric(){
        const numbers=/^[0-9]$/; 
        if (numbers.test(event.key)){
        button13.style.backgroundImage="url('./assets/PineTools.com_files/row-13-column-1.jpg')";
        button13.style.backgroundSize="cover";
        }
    }
 

   



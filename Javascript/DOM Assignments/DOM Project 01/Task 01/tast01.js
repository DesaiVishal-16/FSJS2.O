//Task 01   

//---TO change contact to Project
const ul=document.querySelector("nav ul");

ul.lastElementChild.innerHTML="<a> Projects </a>"
 
//--To ADD A NEW LIST NAME AS HIRE ME
const newList=document.createElement("li");
newList.innerHTML="<a> Hire Me </a>"
ul.appendChild(newList);

//--TO REMOVE FOOTER UL  
const footer=document.querySelector("footer")
const foo=document.querySelector("footer ul")
footer.removeChild(foo)



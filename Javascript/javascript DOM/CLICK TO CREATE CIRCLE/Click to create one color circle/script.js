
const body= document.querySelector('body');
body.style.backgroundColor="black";
body.style.height="100vh";
body.style.overflow="hidden";

                 //TEXT
const text=document.createElement("h1");
text.textContent="CLICK TO CREATE CIRCLE";
text.style.color="white";
text.style.marginTop="300px";
text.style.marginLeft="500px";
body.appendChild(text);
                
                //EVENT LISTENER
body.addEventListener('click', function(event) {
  const circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.width = '50px';
  circle.style.height = '50px';
  circle.style.backgroundColor="red";
  circle.style.borderRadius="50px";
  circle.style.position="absolute";
  circle.style.top = `${event.clientY - 25}px`;
  circle.style.left = `${event.clientX - 25}px`;
  body.appendChild(circle);
          

                //TIMEOUT
  setTimeout(() => {
      circle.remove();
   }, 
   5000);

});
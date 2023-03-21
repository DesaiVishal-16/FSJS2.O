//TO REMOVE ALL A TAG WHICH CONTAIN "2.0"


const languages=document.querySelectorAll(".main__languages a");
    languages.forEach(remove =>{
    if(remove.innerText.includes("2.0")){
      remove.style.display="none"
    }
 });

 


 //TO ADD  TEXT AS "iNeuron" IN INPUT FIELD

 const input=document.querySelector(".main__form-input");
 input.value="iNeuron"

 
 // TO enable input and submit button 

 input.disabled = false;
//  submit.disabled = false;

 // If someone click on submit button the languages in left card comes back
 

const submit=document.querySelector(".main__form-btn")
submit.addEventListener("click", event => {
  event.preventDefault(); 
  languages.forEach(add =>{
    if(add.innerText.includes("2.0")){
      add.style.display="inline"
    }
  });
});

submit.disabled = false;
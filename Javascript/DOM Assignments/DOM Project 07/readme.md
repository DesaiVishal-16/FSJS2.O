# DOM PROJECT 07

## Task 01

> TO REMOVE ALL TEXT WHICH CONTAINS"2.0" in language section
 
**Before:**

![Before Task01](./DOM%20P7/ass7.1-before.png)

**After Update:**
![After Task01](./DOM%20P7/ass7.1-after.png)


```js
const languages=document.querySelectorAll(".main__languages a");
    languages.forEach(remove =>{
    if(remove.innerText.includes("2.0")){
      remove.style.display="none"
    }
 });
```

## Task 02

> TO ADD  TEXT AS "iNeuron" IN INPUT FIELD

> TO enable input and submit button 

> If someone click on submit button the languages in left card comes back 

**Before:**

![Before Task02](./DOM%20P7/ass7.2-before.png)

**After Update:**

![After Task02](./DOM%20P7/ass7.2-after.png)


```js
//TO ADD  TEXT AS "iNeuron" IN INPUT FIELD
 const input=document.querySelector(".main__form-input");
 input.value="iNeuron";

 // TO enable input and submit button 
 input.disabled = false;
 submit.disabled = false;

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
```
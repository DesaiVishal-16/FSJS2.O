# DOM PROJECT 06

## Task 01

> TO CHANGE LOGO TO "iNeuron" LOGO
 
**Before:**
![Before Task01](./06_DOM%20Project/Output/beforetask01.png)

**After Update:**
![After Task01](./06_DOM%20Project/Output/DOM%20P3%20SS-1.png)


```js

//--Method 1
const changeLogo=document.querySelector(".logo");
changeLogo.src="https://ineuron.ai/images/ineuron-logo.png";

//--Method 2
document.addEventListener("DOMContentLoaded", function() {
    const changeLogo=document.querySelector(".logo");
    changeLogo.src="assets/ineuron-logo.png"
  });

```

## Task 02

> TO CHANGE APP PRICE FROM "$4" TO "$10"
 
**Before:**
![Before Task02](./06_DOM%20Project/Output/beforetask02.png)

**After Update:**
![After Task02](./06_DOM%20Project/Output/DOM%20P3%20SS-2.png)


```js
const newPrice=document.querySelector(".app_price span");
newPrice.textContent="$10"

```



# DOM PROJECT 09

## Task 01
> TO CHANGE COLOR OF H1 TAG TO "RED"
 
**Before:**
![Before Task01](./DOM%20P9/ass9.1-before.png)

**After Update:**
![After Task01](./DOM%20P9/ass9.1-after.png)


```js
//--TO CHANGE COLOR OF H1 TAG TO "RED"
const h1=document.querySelector(".caption .title");
h1.style.color="red"
```


## Task 02
> TO CHANGE COLOR OF BUTTON TO "RED" WHEN HOVER 
 
**Before:**
![Before Task02](./DOM%20P9/ass9.2-before.png)

**After Update:**
![After Task02](./DOM%20P9/ass9.2-after.png)


```js
const button=document.querySelector(".add-to-cart");
button.addEventListener("mouseover",colorRed)
    function colorRed(){
    button.style.backgroundColor="red";
}

button.addEventListener("mouseout",colorOriginal)
function colorOriginal(){
    button.style.backgroundColor=""
}
```
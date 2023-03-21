# DOM PROJECT 08

## Task 01
> TO ADD SCROLL BEHAVIOUR TO RIGHT SECTION

> TO GIVE BORDER TO RIGHT SECTION
 
**Before:**
![Before Task01](./DOM%20P8/ass8.1-before.png)

**After Update:**
![After Task01](./DOM%20P8/ass8.1-after.png)


```js
//--TO ADD SCROLL BEHAVIOUR TO RIGHT SECTION
const rightSection=document.querySelector(".new");
rightSection.style.overflowY="scroll";
 //--TO GIVE BORDER TO RIGHT SECTION
rightSection.style.border="4px solid red"
```

## Task 02
> TO REMOVE BACKGROUND 
 
**Before:**
![Before Task02](./DOM%20P8/ass8.2-before.png)

**After Update:**
![After Task02](./DOM%20P8/ass8.2-after.png)


```js
//TO REMOVE BACKGROUND I 
const bgImage=document.querySelector("body")
bgImage.style.background="none"
```

## Task 03
> TO ADD MENU LIST IN MENU BUTTON
 
**Before:**
![Before Task03](./DOM%20P8/ass8.3-before.png)

**After Update:**
![After Task03](./DOM%20P8/ass8.3-after.png)


```js
//TO ADD MENU LIST IN MENU BUTTON
const nav = document.querySelector(".navbar");

nav.style.visibility = "visible";

const menuButton = document.querySelector(".navbar-toggler");

menuButton.addEventListener("click", function(){

document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
})
```
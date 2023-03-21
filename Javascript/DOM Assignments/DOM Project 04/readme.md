# DOM PROJECT 04

> TO Change Background Color of Card Stats and Card Stats text color 

**Before:**
![Before Task01](./Output/dom%2004%20before.png)

**After Update:**
![After Task01](./Output/DOM%20P1%20SS.png)


```js
//TO change color of card stats and card stats text color

const textStats=document.querySelectorAll(".stat,.stat-value")
textStats.forEach(changeColor => {
    changeColor.style.color="white";
    
});

//Barbarian
const barbarian=document.querySelector(".clash-card__unit-stats--barbarian")
barbarian.style.backgroundColor="#ec9b3b";

//Archer
const archer=document.querySelector(".clash-card__unit-stats--archer")
archer.style.backgroundColor="#ee5487";

//Giant
const giant=document.querySelector(".clash-card__unit-stats--giant")
giant.style.backgroundColor="#f6901a";

//Goblin
const goblin=document.querySelector(".clash-card__unit-stats--goblin")
goblin.style.backgroundColor="#82bb30";

//Wizard
const wizard=document.querySelector(".clash-card__unit-stats--wizard")
wizard.style.backgroundColor="#4facff";
```
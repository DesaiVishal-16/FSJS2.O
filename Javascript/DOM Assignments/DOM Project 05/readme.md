# DOM PROJECT 05

## Task 01
> TO ADD ONE MORE BUTTON AS "PRO SUBSCRIPTION"
> TO ADD ONE MORE SECTION IN RECIPES AS "CHINESE (7)"
> TO ADD ONE MORE CARD 
> TO CHANGE FOOTER "YOUR NAME" TEXT TO "VISHAL DESAI" 

**Before:**
![Before Task01](./05_DOM%20Project/Output/before.png)

**After Update:**
![After Task01](./05_DOM%20Project/Output/after05.png)


```js
//TO ADD ONE MORE BUTTON AS "PRO SUBSCRIPTION"
const buttonDiv = document.querySelector(".nav-center div:nth-child(3)");
const newButton = document.createElement("a");
newButton.className="btn";
newButton.href="index.html"
newButton.innerText = "Pro Subscription";
buttonDiv.append(newButton);


//TO ADD ONE MORE SECTION IN RECIPES AS "CHINESE (7)"
const recipeDiv=document.querySelector(".tags-container div")
const newSection=document.createElement("a") 
newSection.textContent="Chinese (7)"
newSection.href="#"
recipeDiv.appendChild(newSection)


//TO ADD ONE MORE CARD
const cardDiv=document.querySelector(".recipe-gallery");
      //---new Div
const newCard=document.createElement("div");
newCard.className="card";
cardDiv.appendChild(newCard);
     //---new A tag
const cardA=document.createElement("a");
cardA.href="#";
cardA.className="recipe-text";
newCard.appendChild(cardA);

     //---new image element
const cardImage=document.createElement("img")
cardA.appendChild(cardImage);
cardImage.src="img/recipe-6.jpg"
cardImage.className="recipe-img"
 
     //---new h5 tag and p tag
const newH5=document.createElement("h5")
const newPara=document.createElement("p");

newH5.className="recipe-name"
newPara.className="recipe-disp"

newH5.textContent="Pizza"
newPara.textContent="Prep : 15min | Cook : 25min"

cardA.appendChild(newH5);
cardA.appendChild(newPara);


//TO CHANGE FOOTER "YOUR NAME" TEXT TO "VISHAL DESAI"
const changeName=document.querySelector(".page-footer p a")
changeName.textContent="Vishal Desai"

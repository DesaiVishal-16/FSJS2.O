# DOM PROJECT 03

## Task 01
> TO Change placeholder text

 
**Before:**
![Before Task01](./dom%2003before.png)

**After Update:**
![After Task01](./thirdAssignmentImage/task1Output.png)


```js
const name = document.querySelectorAll(".enterName, .userName");
const email = document.querySelectorAll(".enterMail, .userEmail");
const message = document.querySelectorAll(".enterMessage, .userMessage");

name.forEach(changeName => {
    changeName.placeholder="FSJS 2.0"
    
});
email.forEach(changeEmail => {
    changeEmail.placeholder="fsjs@ineuron.ai"
});
message.forEach(changeMessage => {
    changeMessage.placeholder="Hello World"
});
```
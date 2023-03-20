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
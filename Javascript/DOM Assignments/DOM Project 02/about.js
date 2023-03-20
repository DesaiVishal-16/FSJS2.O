let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

//TO CHANGE Baground Color of all h3 tag

const allh3=document.querySelectorAll(".accordian h3");

allh3.forEach(h3 => {
    h3.style.backgroundColor="#dadaf8" 
});

//To ADD SKILLS  Section

const div=document.querySelector(".accordian-wrapper");
const newDiv=document.createElement("div");
newDiv.className="accordian";
div.appendChild(newDiv);

const h3=document.createElement("h3");
newDiv.appendChild(h3);
h3.textContent="Skills";

h3.style.backgroundColor="#dadaf8";

const p=document.createElement("p");
newDiv.appendChild(p);
 p.style.display="block";
p.textContent="I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over Github.";



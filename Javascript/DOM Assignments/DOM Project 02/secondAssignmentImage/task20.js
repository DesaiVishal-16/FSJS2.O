//To ADD SKILLS  Section

const div=document.querySelector(".accordian-wrapper");
const newDiv=document.createElement("div");
newDiv.className="accordian";
div.appendChild(newDiv);

const h3=document.createElement("h3");
newDiv.appendChild(h3)
h3.textContent="Skills"

const p=document.createElement("p");
newDiv.appendChild(p);
p.style.display="block"
p.textContent="I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over Github.";



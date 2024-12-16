const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.classList.add("paragraph");
para.textContent = "Hey I'm Red";
para.setAttribute("style","color: red;")
container.appendChild(para);

const h3 = document.createElement("h3")
h3.classList.add("blueh3")
h3.textContent = "I'm a blue h3!";
h3.setAttribute("style", "color: blue;")
container.appendChild(h3)

//i dont think this div is being added, try it later when i have had a sleep
const practice = document.createElement("div");
practice.classList.add("domPractice");
practice.textContent = "I'm a second div";
practice.setAttribute("style", "border: solid black; backgroundColour: pink;");
const h1 = document.createElement("div");
h1 = document.add("h1");
h1.textContent = "I'm a div";
const para2 = document.createElement("p");
para2.classList.add("paragraph");
para2.textContent = "ME TOO!";
//practice.appendChild(h1,para2)
container.appendChild(practice, h1, para2)
/*
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.*/ 
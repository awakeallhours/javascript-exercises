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

const practice = document.createElement("div");
practice.classList.add("domPractice");
practice.textContent = "I'm a second div";
container.appendChild(practice)
practice.setAttribute("style", "border: solid black; background: pink;");
const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "I'm a div";
const para2 = document.createElement("p");
para2.classList.add("paragraph");
para2.textContent = "ME TOO!";
practice.appendChild(h1)
practice.appendChild(para2)
container.appendChild(practice)


btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});


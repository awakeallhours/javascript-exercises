const list = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener ("click", () => {
    const myItem = input.value;
    input.value = '';
})

const listItem = document.createElement("li")

const listText = document.createElement("span")
listText.textContent = myItem


const listButton = document.createElement("btn")
listButton.textContent = "delete"

listItem.appendChild(listText)
listItem.appendChild(listButton)
list.appendChild(listItem)

listButton.addEventListener ('click', () => {
    list.removeChild(listItem)
})

input.focus()

/*const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.addEventListener('click', () => {
        const myItem = input.value;
        input.value = '';
      })

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });*/


//button.addEventListener("click", () => {
 //   alert(button.id);
/*Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
Create a function that will run in response to the button being clicked.

Inside the function body, start off by storing the current value of the input element in a variable.

Next, empty the input element by setting its value to an empty string — ''.

Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables. 

Append the span and the button as children of the list item.

Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.

Append the list item as a child of the list.

Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).

Finally, use the focus() method to focus the input element ready for entering the next shopping list item.*/
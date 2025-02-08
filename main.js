let allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs); // Returns a NodeList of all <p> elements

// now you want to choose only the fisrt element of all p elements in your html 
// Select the first element of a type: 
let firstParagraph = document.querySelector("p");
console.log(firstParagraph); // Returns the first <h1> element
// Select an element by its ID:
let header = document.getElementById("main-header");
console.log(header); 

// Select an element by its class:

let highlightedText = document.querySelector(".highlight");
console.log(highlightedText); 

 
// 2. Modifying Elements in the DOM
// Once an element is selected, we can modify its content, styling, or attributes.
// target the h4 and write something in it:

let heading = document.querySelector("h4");
heading.innerHTML = "We can modify the content";

// Changing Text Content
let changeContent = document.querySelector(".main-paragraph");
changeContent.innerHTML = "This is the new text";

// change the style of elements
let box = document.querySelector(".box");
box.style.backgroundColor = "blue";
box.style.fontSize = "20px";
box.style.color = "pink";

// select attributes: 
let image = document.querySelector("img");
image.src = "galileo.jpg";
image.alt = "using an Image";

// JavaScript Events
// each element in DOM can be the source of our events
let btn = document.querySelector(".btn");
btn.style.padding = "20px";
btn.style.backgroundColor= "green";
btn.style.color="white";
btn.addEventListener("click", () => {
    alert("Button clicked!");
});

// Mouseover Event (Hover Effect)

let boxOne = document.querySelector(".boxOne");
boxOne.addEventListener("mouseenter", () => {
    boxOne.style.backgroundColor = "red";
});
let boxTwo = document.querySelector(".boxOne");
boxOne.addEventListener("mouseout", () => {
    boxTwo.style.backgroundColor = "white";
});
// each keyboard press

let inputField = document.querySelector("input");
inputField.addEventListener("", () => {
   let userValue =  inputField.value;
   console.log(userValue);
   
});
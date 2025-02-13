alert("JavaScript file is loaded!");

//when page loads
//get references to interactive elements 
const txtParagraph = document.getElementById("paragraph");
const txtHeader = document.getElementById("header");
const imgCat = document.getElementById("Cat");
const btnText = document.getElementById("text");
const btnHtml = document.getElementById("html");
const btnStyle = document.getElementById("style");
const btnClass = document.getElementById("class");
const btnAttribute = document.getElementById("attribute");
const btnHighlight = document.getElementById("highlight");

//listen for all events
btnText.addEventListener("click", changeText);
btnHtml.addEventListener("click", changeHtml);
btnStyle.addEventListener("click", toggleStyle);
btnClass.addEventListener("click", toggleClass);
btnAttribute.addEventListener("click", changeAttribute);
btnHighlight.addEventListener('mouseenter', addHighlight);
btnHighlight.addEventListener('mouseleave', removeHighlight);

function changeText() {
    txtParagraph.textContent = "Now I am text!";
}

function changeHtml() {
    txtParagraph.innerHTML = "<b>Now I am bold HTML!</b>";
}

function toggleStyle() {
    txtHeader.style.color = txtHeader.style.color === "blue" ? "black" : "blue";
}

function toggleClass() {
    txtHeader.classList.toggle("green");
}

function changeAttribute() {
    imgCat.src = "images/HappyCat.jpg"; // Make sure this image exists
}

function addHighlight(){
    btnHighlight.style.backgroundColor = "yellow";
}

function removeHighlight(){
    btnHighlight.style.backgroundColor = "";
}



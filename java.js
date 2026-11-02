let heading = document.getElementById("heading");
let message = document.getElementById("message");
let button = document.getElementById("changeButton");
let but = document.getElementById("myButton");
let nameInput = document.getElementById("name");
let greeting = document.getElementById("greeting");


button.addEventListener("click", function(){
    heading.textContent = "Welcome to dom"

    message.textContent = "hey i have learnt dom and i understand it very well"
});

but.addEventListener("dblclick", function(){
    alert("opps! you double-clicked me ");
});
heading.addEventListener("mouseout", function(){
    heading.style.color = "red";
});
nameInput.addEventListener("input", function(){
    greeting.textContent = "Hello," + nameInput.value + "welcome to my website" ;
});

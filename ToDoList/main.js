let adToDoButton = document.getElementById("adToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

adToDoButton.addEventListener("click", function(){
    var paragraph = document.createElement("p")
    paragraph.classList.add("pragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = ""
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    })
})

const toDoItems = document.getElementById("todo");
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");
const btn = document.getElementById("btn");

input.addEventListener("keydown",(event) => {
if(event.key === "Enter"){
    addItem();
}
})




btn.addEventListener("click",addItem);
function addItem() {

    const divParent = document.createElement("div");
    const divChild = document.createElement("div");
    let isDone = false;
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';
    checkIcon.className= "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener('click', () => {
        
        if (!isDone){
            checkIcon.style.color = "rgb(13, 229, 0)"
            isDone = !isDone;

        } else {
            checkIcon.style.color = "lightgray";
            isDone = !isDone;
        }});

    divChild.appendChild(checkIcon);
    
    trashIcon.className= "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener('click', () => {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);
    toDoItems.appendChild(divParent);

    input.value = '';
}
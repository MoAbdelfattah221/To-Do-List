let add = document.querySelector(".add");
let text = document.querySelector(".text");
let tasksDiv = document.querySelector(".tasks");

if(text.value === ""){
    add.style.backgroundColor = "#08068580";
};

text.onkeydown  = () => {
    add.style.backgroundColor = "rgb(8,6,133)";
};

add.onclick = () => {
    if(text.value === ""){
        return "";
    }else{
        // Initializing 
        let div = document.createElement("div");
        let p = document.createElement("p");
        let i = document.createElement("i");

        // Appending
        tasksDiv.appendChild(div);
        div.appendChild(p);
        div.appendChild(i);

        // Add Classes
        i.classList.add("fa-solid");
        i.classList.add("fa-xmark");

        // Styling
        div.style.cssText = "display: flex; margin-top: 10px; justify-content: space-between; align-items: center;";
        p.style.cssText = "margin: 0;";
        i.style.color = "rgb(8,6,133)";

        // Add Text
        p.innerHTML = text.value;

        // Delete Icon
        i.onclick = () => {
            div.remove();
        };
    };
};
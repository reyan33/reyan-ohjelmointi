console.log("JS is working");
let list = ["Tehtävä 1", "Tehtävä 2"];
const ul = document.getElementById("taskList");

function update (){
    let html="";
    list.forEach((list)=>{
        html+= `<li>${list}</li>`;
        ul.innerHTML = html;
    })
}
update();

function addTask() {
    const input = document.getElementById("taskInput");
    // prevent empty input
    if (input.value.trim() === "") return;
    list.push(input.value);
    update();
    input.value = "";
}

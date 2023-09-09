const save_button=document.querySelector(".save");
const input=document.querySelector("#notepad");
const clear_button=document.querySelector(".clear");


window.addEventListener("load", ()=> {
    input.value=localStorage.getItem("x");
});


function save(){
    const clicked=input.value;
    
   localStorage.clear();
    localStorage.setItem("x",clicked);
    console.log("saved");
    
}
function clear(){
    input.value="";
    localStorage.clear();

}
save_button.addEventListener("click",save);
clear_button.addEventListener("click",clear);



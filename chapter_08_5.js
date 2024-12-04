console.log("hello, chapter - 08 - 03 Revision.Hey!");

const button = document.getElementById("toggle_button");
const bulb = document.getElementById("bulb");

button.addEventListener("click",()=>{
    bulb.classList.toggle("glow");
});
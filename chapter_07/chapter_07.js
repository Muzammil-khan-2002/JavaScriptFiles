console.log("\nQ - 01");
document.body.querySelector(".container").querySelector("li").style.backgroundColor="green";


console.log("\nQ - 03");
document.body.children[0].children[2].firstElementChild.style.backgroundColor="green";
document.body.children[0].children[2].lastElementChild.style.backgroundColor="green";


console.log("\nQ - 04");
let list = document.body.querySelector(".container").children[3].querySelectorAll("li");

list.forEach((e)=>{
    e.style.backgroundColor="yellow";
})
console.log("Chapter - 06 Revision.");
// Q - 01
 console.log("\nQ - 01");
// let age01 = parseInt(prompt("enter your age?\t"));

// if(age01>=19)
// {
//     alert("You can Drive.");
// }
// else{
//     alert("Illigile age, You Can't drive!");
// }


// Q - 02
console.log("\nQ - 02");
// let iterate = true;
// while(iterate)
// {
//     let age02 = parseInt(prompt("enter your age?\t"));
//     if(age02>=19)
//     {
//         alert("Yes, You can drive.");
//     }
//     else
//     {
//         alert("Illigle age, you can't drive!");
//     }
//     iterate = confirm("Do you want to enter age again?");
// }

// Q - 03
// console.log("\nQ - 03");

// let loop = true;
// while(loop)
// {
//     let age03 = prompt(("entre the age?\t"));
//     if(age03 <= 0)
//     {
//         console.error("erorr: Age Can't zero/Negative!");
//         alert("Zero/Negative age not accepted!");
//     } 
//     if(age03 >= 19)
//     {
//         alert("Valid, You Can Drive.");
//     }
//     else{
//         alert("Illigle age, Strictly Can't Drive!");
//     }
//     loop = confirm("Do you want to enter age again?\t");
// }

// Q - 04
console.log("Q - 04");

// let loop_01 = true;
// while(loop_01)
// {
//     let num = parseInt(prompt("Enter any integer value?\t"));
//     if(num > 4)
//     {
//         alert("Redirecting to google.com");
//         window.location.href="https://www.google.com";
//     }
//     else
//     {
//         alert("Number isn't greater than 4, so staying on current page ok.");
//     }
//     loop_01 = confirm ("do you want to Re-entered Number?");
// }

// Q - 05
let loop_05 = true;
while(loop_05)
{
    console.log("Q - 05");
    let user_color = prompt("Enter Color?");
    document.body.style.backgroundColor = user_color;
    loop_05 = confirm("Do you re-change body color again?");
}
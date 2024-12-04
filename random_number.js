console.log("Hello, Wellcome in the Random Number Ganerator Game.");


const user_input = parseInt(prompt("enter any number between 1 - 10?"));


const rand_num  = parseInt(1 + 10 * Math.random());
console.log(rand_num);
 
if(user_input === rand_num)
{
    alert("Hurry, You are won.");
}
else
{
    alert("you are Losser, try again!");
}
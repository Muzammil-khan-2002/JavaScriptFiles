console.log("Chapter - 03 Revision.");

// Q-01
console.log("\nmarks of student");
let marks = {
    muzammil : " 99.99%",
    Rahul : " 87.50%",
    Sumit : " 76.88%",
    Ganesh : " 60.90%",
    Akshay : " 53.44%"
}

console.log(marks);

// Q - 02
console.log("\nfor-in loop");
for (const key in marks)
{
    if(key.hasOwnProperty.call(marks,key))
    {
        const element = marks[key];
        console.log(key,element);
    }
}

console.log("\nChoose Correct Number.");


// Q - 03
const correct_Number = 7;
let user_input;
do
{
    user_input = parseInt(prompt("\nEnter the corrrect Number?"));
    if(user_input !== correct_Number)
    {
        console.log("enter key again");
    }
}while(user_input !== correct_Number);
console.log("correct number entered.");

// Q - 04

let array = [10,20,30,40,50];
let sum=0;
for(let iterator of array)
{
    sum+=iterator;
}
console.log("\n"+sum);
console.log("mean = "+(sum/array.length));



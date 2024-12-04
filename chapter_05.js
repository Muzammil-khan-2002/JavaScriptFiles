
console.log("Chapter - 05 Revision.");
// Q - 01
console.log("\nQ - 01");
// let array_01 = [10,20,30,40,50];

// let user_input_01 = parseInt(prompt("enter number to add to the array?\t"));

// array[array_01.length]=user_input_01;
// console.log(array_01);

// Q - 02
console.log("\n Q - 02");

let array_02 = [];

do{

    let user_input_02 = parseInt(prompt("enter number for add to array\t"));
    

    if(user_input_02==0)
    {
        break;
    }
    if(!isNaN (user_input_02))
    {
        array_02.push(user_input_02);
    }
    else{
        console.log("Invalid!");
    }
}while(true);

console.log("final array: "+array_02);

// Q - 03
console.log("\n Q - 03");
let array_03 = [5,10,20,30,35,45,65,75,80,90,100];

let check = array_03.filter((e)=>{
    if(e%10==0)
    {
        return true;
    }
    return false;
})
console.log(check);

// Q - 04
console.log("\nQ - 04");
let newArr = array_03.map((e)=>{
    return e**2;
})
console.log(newArr);

// Q - 05
console.log("\nQ - 05");
let array_05=[1,2,3,4,5,6];
console.log(array_05.reduce((a,b)=>{
        return a*b;
}));
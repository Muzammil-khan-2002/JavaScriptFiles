// Q-01
console.log("Chapter - 02");
let age = 20 ;
if(age >= 10 && age <= 19)
{
    console.log("Say, True");
}
else
{
    console.log("Say, Lies!");
}

// Q-02
let choice = 7;
switch(choice)
{
    case 1:
            console.log("Month : January");
            break;
    case 2:
            console.log("Month : February");
            break;
    case 3:
            console.log("Month : March");
            break;
    case 4:
            console.log("Month : April");
            break;
    case 5:
                console.log("Month : May");
                break;
    case 6:
            console.log("Month : June");
            break;
    case 7:
                console.log("Month : July");
                break;

}

// Q-04
let num = 3;
if(num%2==0 && num%3==0)
{
    console.log("divisible.");
}
else
{
    console.log("not!");
}

if(num%2==0 || num%3==0)
    {
        console.log("divisible.");
    }
    else
    {
        console.log("not!");
    }

    // Q-05
    let age1 = 18;
    let varify = age1>=19 ? "you can drive." : "age in illigile for drive, not drive!";
    console.log(varify);
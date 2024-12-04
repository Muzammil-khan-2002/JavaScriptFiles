console.log("chapter - 04 Revision.");

// Q - 01
console.log("\nQ-01");
console.log("harry\"");
console.log("harry\"".length);


//Q - 02
console.log("\nQ-02");
let str01 = "hello, world";
console.log(str01.includes("World"));// case sensitive
console.log(str01.includes("world"));
console.log(str01.includes("world",7));

console.log(str01.startsWith("hello"));
console.log(str01.startsWith("world"));
console.log(str01.startsWith("world",7));
console.log(str01.endsWith("world"));
console.log(str01.endsWith("world",12));


// Q - 03
console.log("\nQ-03");
let str = "MUZAMMIL_KHAN";
console.log(str.toLowerCase());

// Q - 04
console.log("\nQ-04");
let sss = "Please Give Rs1000/-";
let amount = sss.match(/\d+/);  //  \d+ matches one or more digits
    amount = parseInt(amount[0]);
console.log(amount);

// Q - 05
console.log("\nQ-05");
let myname = "muzammil";
myname[3]="R";
console.log(myname);

let new_myname = myname.slice(0,3) +"RR"+ myname.slice(4);
console.log("\n"+new_myname);
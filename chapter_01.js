// Q-01 
let str = "12345";
let num = 12345;
console.log(str);
console.log(num);


// Q-02
console.log(typeof str);
console.log(typeof num);


// Q-03
const obj = {
    id:1,
    myname:"Muzammil",
    address:"Pune",
    contact:12345
}
console.log(obj);
obj.id=5;
obj.myname="Yaman";
obj.address="dhule";
obj.contact=11111;
console.log(obj);


// Q-04
obj.surname="Pathan";
obj.qualification="B-Tech";
console.log(obj);

for (const key in obj) {
    if (key.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element);
    }
}

// Q-05
let dictionary = {
    apple:"safarchand",
    banana:"kela",
    man:"aadmi",
    woman:"aurat",
    child:"bachcha"
}

console.log(dictionary.apple);
console.log(dictionary.banana);

// even or odd functions
function iseven(num){
    if (num%2==0) {
       console.log(`number ${num} is even`);
       return 1;
    }
    console.log(`number ${num} is odd`);
}

iseven(56);


// Square of a function 
function Square(num) {
    return num*num;
}

console.log(Square(5));


// maximum of two numbers

const max = function (num1,num2){
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

console.log(max(15,7));


//concatenate two string 
const concatenate = function (str1 , str2) {
    return str1+str2;
    
}

console.log(concatenate("kamran ", "hassan"));

//Arrow function to calculate sum of two numbers
const sum = (num1,num2) => num1 +num2;

console.log(sum(3,12));


// search a specific char in string

const searchKey = (str, key) =>{
    for (let i = 0; i < str.length; i++) {
        if (key == str[i]) {
            return true;
        }
        
    }
    return false;
}

console.log(searchKey("kamran","i"));


// product of two value  also set second parameter to a default value

const pro = (value, value1=1) =>{
    return value*value1;
}

console.log(pro(3,6));


// greeting function 
const greeting = (name,age = 18) => {
    console.log(name);
    return `Hello ${name}`;
}
console.log(greeting("kamran",23));

// Higher order funcitions

function hig(val,greeting){
    for (let i = 1; i <= val; i++) {
       
        greeting("haider");
        
    }
}
//    console.log(val);
hig(4,greeting);



// higher order


// callbadk one
 function one(val) {
    console.log(`first callback called with value ${val}`);
    return val+ 10;
 }

 // seconde callback
 function second(val) {
    console.log(`Second callback called with value ${val}`);
    return val+ 10;
 }


 // main higher order function

 function higher(val, callback1,callback2) {
    let result = callback1(val);
    callback2(result);
 }

 higher(5,one, second);
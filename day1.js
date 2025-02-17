// Easy Questions
// Variables & Data Types:

// Declare a variable using var, let, and const. Explain the difference between them.
// What is the difference between null, undefined, and NaN? Give examples.


// var (Function-scoped)
// Hoisted and initialized as undefined
// Can be redeclared and reassigned
// Not block-scoped, only function-scoped

var x = 10;
if (true) {
  var x = 20; // Redeclares and modifies x globally
}
console.log(x); // Output: 20

// let (Block-scoped)
// Hoisted but remains in the Temporal Dead Zone (TDZ) until initialized
// Cannot be redeclared in the same scope
// Can be reassigned

let y = 10;
if (true) {
  let y = 20; // New variable inside the block
  console.log(y); // Output: 20
}
console.log(y); // Output: 10 (Different from `var`)


// const (Block-scoped & Immutable Reference)
// Must be initialized at declaration
// Hoisted, but stays in TDZ
// Cannot be reassigned, but objects & arrays remain mutable

const z = 10;
z = 20; // ❌ Error: Assignment to constant variable


///NULL,undefined,NAN

let a=null;//null
let b;//output =undefined
let c=Number("APPLE");//since apple cant be converted into number so it generates an error
console.log(`${a}+" "+ ${b} + " " +${c}`);


// UNIT-2 FUNCTIONS-:
// Basic Functions:

// Write a function greet(name) that returns "Hello, <name>!".
// Convert the function to an arrow function.

function greet(name)
{
    return `Hello, <${name}>!`;
}
console.log(greet("Vimal"));
// Output: Hello, <Vimal>!

const wish=(name)=>{
    return `Hello, <${name}>!`;
}
console.log(wish("Vimal"));
// Output: Hello, <Vimal>!



//UNIT-3Operators:

// What will be the output of the following? Explain why
console.log(5 + "5"); //The + operator performs concatenation when one operand is a string.
                      // "5" (string) + 5 (number) → JavaScript converts 5 to "5"

                     //Output: "5" + "5" → "55" (string)
console.log(5 - "5");  //The - operator only works for numbers, so JavaScript tries to convert the string "5" to a number (5).

                       //Output: 5 - 5 → 0
console.log("10" == 10);  //"True as it checks the value not data types hence string 10 and numeric value 10 is same"
console.log("10" === 10);  ///"false as it compares value as well as data types as the data types are differnt so it returns false"


console.log("5" + 5 + 5);//output 555

// The + operator is used for both addition and string concatenation.
// The first operand is a string ("5"), so JavaScript treats everything as a string.
// "5" + 5 → "55" (5 is converted to a string)
// "55" + 5 → "555" (again, 5 is converted to a string)


console.log(5 + 5 + "5")//105



//UNIT-4: Loops & Conditionals:

// Write a program to print all even numbers from 1 to 20 using a loop.
// Check if a number is positive, negative, or zero using an if-else statement.

for(let i=1;i<=20;i++)
{
    if(i%2==0)
        console.log(i+" ");
        
}
// Output: 2 4 6 8 10 12 14 16 18 20

//Number checking

function checkNum(num)
{
    if(num>0)
    {
        console.log("No. is positive");  
    }
    else if(num==0)
    {
        console.log("Zero");   
    }
    else{
        console.log("No . is negative");
        
    }
}
checkNum(10);


// Moderate Questions
// Arrays & Objects:

// Create an array fruits with "Apple", "Banana", "Orange".
// Add "Grapes" to the array at the end.
// Remove the first element from the array.
// Write a function that takes an array of numbers and returns the sum of all even numbers.


let arr=["Apple","Banana","Orange"];
arr.push("Grapes");//to insert an element at end
arr.shift()//to remove an element from begin

function even(ar)
{
    let sum=0;
    for(let i=0;i<ar.length;i++)
    {
        if(ar[i]%2==0)
        {
            sum=sum+ar[i];
        }
    }
    console.log(sum);
    
}
let ar=[1,2,3,4,5]
even(ar);


// Higher Order Functions:

// Given the array [2, 4, 6, 8, 10], use the .map() method to return an array where each element is squared.
// Use .filter() to return only numbers greater than 5.
// Explain .reduce() with an example.

//map
let abc=[1,2,3,4,5]
let square=abc.map((e)=>
    {return e*e})
console.log(square);

//filter
let fil=[1,5,6,4];
let full=fil.filter((e)=>{
    return e>5;
})
console.log(full);

//reduce
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);//accumulator stores the result of previous iterations

console.log(sum); // Output: 15


//Objects & Destructuring:

// Create an object person with properties: name, age, and city.
// Use object destructuring to extract name and age.

const obj={
    name:"Vimal",
    age:"32",
    city:"Bangalore"
}
let {name,age}=obj
console.log(name);
console.log(age);



// Closures:

// Write a function that returns another function. The inner function should remember the outer function’s variable even after the outer function has executed

function powerOfTwo(n)
{
    return n*n;
}
function powerOfThree(powerOfTwo,n)
{
    return powerOfTwo(n)*n;
}
const ans=powerOfThree(powerOfTwo,3);
console.log(ans);

// Scope & Hoisting:

// Predict the output:

console.log(v);
var v = 10;//undefined


function test() {
    // console.log(a);
    let a = 20;
  }
  test();//error
  

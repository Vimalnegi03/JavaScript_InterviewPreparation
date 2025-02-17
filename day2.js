//Question Link-https://docs.google.com/document/d/1LpiLCXPpt77o0ZEU2gC7IiPhS65XR6Zi38g4zdxIJm0/edit?usp=sharing
// JavaScript Conditionals and Loops Assignment


// Problem 1: Basic If-Else Conditional
// Write a function checkEvenOdd that takes a number as input and returns a string indicating whether the number is "even" or "odd".

function checkEvenOdd(num)
{
    if(num&1)
    {
        return "odd";
    }
    else
    return "even"
}
let ans=checkEvenOdd(5);
console.log(ans);//odd

// Problem 2: Multiple Conditions
// Write a function gradeCalculator that accepts a score between 0 and 100 and returns the corresponding grade:

// A: 90 - 100
// B: 75 - 89
// C: 50 - 74
// D: 35 - 49
// F: 0 - 34
function gradeCalculator(score)
{
    if (score > 100||score<0)
    {
        return "INVALID SCORE";
    }
    else
    {
        if(score>=90)
        {
            return "A";
        }
        else if(score>=75&&score<90)
        {
            return "B";
        }
        else if(score>=50&&score<75)
        {
            return "C";
        }
        else if(score>=35&&score<50)
        {
            return "D";
        }
        else
        {
            return "F";
        }
    }
}
const grade=gradeCalculator(45)//D
console.log(grade);


// Problem 3: Switch Case
// Write a function dayOfWeek that takes a number (1-7) and returns the corresponding day of the week. The mapping is as follows:

// 1 → "Monday"
// 2 → "Tuesday"
// 3 → "Wednesday"
// 4 → "Thursday"
// 5 → "Friday"
// 6 → "Saturday"
// 7 → "Sunday"
// If the number is not between 1 and 7, return "Invalid day number."

function dayOfWeek(day)
{
    switch(day)
    {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";  
        case 3:
            return "Wednesday"; 
        case 4:
           return "Thursday";     
        case 5:
           return "Friday";
        case 6:
            return "Saturday";
        case 7:
             return "Sunday";
        default:
            return "Invalid Day"     
        }
}
const day=dayOfWeek(1);//Monday
console.log(day);


// Problem 4: Loop through an Array
// Write a function sumEvenNumbers that takes an array of integers and returns the sum of all the even numbers in the array.

function sumEvenNumbers(nums)
{
    let sum=0;
    for(let num of nums)
    {
        if(num%2==0)
        {
          sum+=num;
        }
    }
    return sum;
}
console.log(sumEvenNumbers([3,2,5,8]));


// Problem 5: For Loop with Conditional
// Write a function countVowels that takes a string and counts how many vowels ('a', 'e', 'i', 'o', 'u') are present in the string. Return the count.


function countVowels(str)
{
    let count = 0;
    // str=str.toLowerCase()  -:to convert string to lower case
    console.log(str);
    
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='a'||str[i]=='A'||str[i]=='e'||str[i]=="E"||str[i]=="i"||str[i]=="I"||str[i]=='o'||str[i]=="O"||str[i]=='u'||str[i]=='U')
        {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Apple"))


// Problem 6: While Loop with a Condition
// Write a function factorial that takes a positive integer n and returns the factorial of that number using a while loop.

function factorial(num)
{
    let result = 1;
    while(num>0)
    {
        result=result*num;
        num--;
    }
    return result;
}
console.log(factorial(5));


// Problem 7: Nested Loops
// Write a function generateMultiplicationTable that generates a multiplication table for numbers from 1 to n. 
// The function should return a string representing the multiplication table in this format:

function generateMultiplicationTable(num)
{
    for(let i=1;i<=num;i++)
    {
        for(let j=1;j<=10;j++)
        {
            console.log(`${i}*${j}=${i*j}`);
        }
        console.log();
        
    }
}
generateMultiplicationTable(6);


// Problem 8: Break/Continue in Loops
// Write a function findFirstEven that takes an array of numbers and returns the first even number it encounters. 
// If no even number is found, return null. Use a for loop and the break statement.

function findFirstEven(nums)
{
    for(let num of nums)
    {
        if(num%2==0)
        {
           console.log(num);
            break;
        }
    }
    return null;
}
findFirstEven([1,3,4]);
console.log(findFirstEven([1,3,5]));



// Problem 9: FizzBuzz
// Write a function fizzBuzz that prints the numbers from 1 to 100. 
// But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
// For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzBuzz()
{
    for(let i=1;i<=100;i++)
    {
        if(i%3==0 && i%5==0)
        {
            console.log("FizzBuzz"+" ");
        }
        else if(i%5==0)
        {
            console.log("Buzz"+" ");
            
        }
        else if(i%3==0)
        {
            console.log("Fizz"+" ");
            
        }
        else
        {
            console.log(i+" ");
            
        }
    }
}
fizzBuzz();


// Problem 10: For...In Loop
// Write a function objectProperties that takes an object and returns a string representing the keys and values of the object in this format:

// key1: value1
// key2: value2
// Use a for...in loop to iterate over the object.

const obj={
    name:"Vimal",
    age:22,
    city:"Tehri"
}
function objectProperties(obj)
{
    for(let key in obj)
    {
        console.log(key+":"+obj[key]);
    }
}
objectProperties(obj);

//Questions Link-https://docs.google.com/document/d/1NZRTre91z_AAJDMTdzhEC0YNTQGv1kY_r2Zxm_JRmFc/edit?usp=sharing

// 1. Objects Basics

// Create an object person with the following properties:

// {
//   name: "John Doe",
//   age: 25,
//   city: "New York"
// }

// Access and print the name property.

// Add a new property country with the value "USA".

// Delete the city property.

const person={
    name:"John Doe",
    age:25,
    city:"New York"
}
console.log(person.name);
person.country="USA";
delete person.city //to delete city property
console.log(person);

// Array Basics

// Create an array fruits containing the values: "Apple", "Banana", "Orange".

// Add "Grapes" to the end of the array.

// Remove the first element from the array.

// Find the index of "Orange".

const fruits=["Apple","Banana","Orange"]
fruits.push("Grapes");
fruits.shift();
console.log(fruits.indexOf("Orange"));


// 3. Class Basics

// Create a simple class Car with brand and year properties.

// Add a method getDetails that returns a string like "Toyota - 2022".

// Create an instance of Car and call getDetails().

class car{
    constructor(brand,year){
        this.brand=brand;
        this.year=year
    }
    getDetails(){
        console.log(`${this.brand}-${this.year}`);
        
    }
}
const myCar=new car("Toyota",2022);
myCar.getDetails()


// Medium Questions
// 4. Object Methods
// Given the following object, implement a method getFullName that returns the full name:
//  const user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: function() {
//     // Implement this
//   }
// };

const user={
    firstName:"John",
    lastName:"Doe",
    getFullName:function()
    {
        console.log(`${this.firstName} ${this.lastName}`);
        
    }
}
user.getFullName()


// 5. Array Methods
// Given an array of numbers:
//  const numbers = [5, 12, 8, 130, 44];


// Use filter to find numbers greater than 10.
// Use map to create a new array where each number is doubled.
// Use reduce to calculate the sum of all numbers.


const numbers=[5,12,8,130,44];

const greater=numbers.filter((e)=>{
    return e>10
});
console.log(greater);

const double=numbers.map((ele,index,array)=>{
    return ele*2;
})
console.log(double);

let sum=0;
sum=numbers.reduce((accumulator,current)=>{
    return current+accumulator
},0)
console.log(sum);

//or
let add=0;
numbers.reduce((accumulator,current)=>{
    add+=current
},0);

console.log(add);



// Class Inheritance
// Create a parent class Animal with a method speak that logs "Animal makes a sound".
// Create a subclass Dog that overrides speak to log "Dog barks".
// Instantiate Dog and call speak().

class Animal{
    speak(){
        console.log("Animal makes a sound");   
    }
}
class Dog extends Animal{
    speak(){
        console.log("Dog barks");
    }
}
const dog=new Dog();
dog.speak();


// Hard Questions
// 7. Nested Objects and Destructuring
// Given the object:
//  const company = {
//   name: "Tech Corp",
//   address: {
//     street: "123 Main St",
//     city: "San Francisco",
//     country: "USA"
//   },
//   employees: [
//     { name: "Alice", role: "Developer" },
//     { name: "Bob", role: "Designer" }
//   ]
// };
// Use destructuring to extract city from address.
// Extract the first employee’s name.

const company = {
     name: "Tech Corp",
      address: {
        street: "123 Main St",
        city: "San Francisco",
        country: "USA"
      },
      employees: [
        { name: "Alice", role: "Developer" },
        { name: "Bob", role: "Designer" }
      ]
    };
    console.log(company.address.city)
    const {city}=company.address;
    console.log(city);
    console.log(company.employees[0].name);
    let {name}=company.employees[0];
    console.log(name);
    

//     8. Advanced Array Manipulation
// Given an array of students:
//  const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 92 },
//   { name: "Charlie", score: 88 }
// ];


// Use sort to order students by score in descending order.
// Use find to get the first student with a score above 90.
// Use every to check if all students scored above 80.

const students = [
      { name: "Alice", score: 85 },
      { name: "Bob", score: 92 },
      { name: "Charlie", score: 88 }
    ];

    students.sort((a, b) => b.score - a.score)
    console.log(students);
    
    const firstStudent = students.find(student => student.score > 90);
    console.log(firstStudent);
    
    const allStudents = students.every(student => student.score > 80);
    console.log(allStudents); // Output: true
    

//     9. Class with Static and Private Methods
// Create a class BankAccount with:
// A private property _balance.
// Methods deposit(amount) and withdraw(amount).
// A static method bankInfo() that returns "Welcome to XYZ Bank".
// Test the class by creating an instance and performing transactions.

class BankAccount{
    #balance=0;
    constructor(amount)
    {
        this.amount=amount
    }
    deposit(amount)
    {
        this.#balance+=amount;
        console.log("money successfully inserted new balance is",+this.#balance );
        
    }
    withdraw(amount)
    {
        if (this.#balance >= amount)
        {
            this.#balance-=amount;  
            console.log("money successfully withdrawn the remaining amount is ",this.#balance);
             
        }
    }
    static bankInfo()
    {
        return "Welcome to XYZ Bank";
    }
}
let p=new BankAccount(0)
p.deposit(100);
p.withdraw(50);

console.log(BankAccount.bankInfo());//static methods are accesed only like this using class name and method name


// Deep Cloning and Object Manipulation
// Write a function deepClone(obj) that creates a deep copy of an object.
// Modify properties in the copied object and ensure the original remains unchanged.

function deepClone(obj)
{
    let str=JSON.stringify(obj);
    obj2=JSON.parse(str);
    obj2.name="Raghav";
    obj2.city="Chamba"
    return obj2;
}
const obj={
    name:"Vimal",
    city:"Tehri",
    education:{
        school:"Convent",
        college:"THDC"
    }
}
let obj2=deepClone(obj);
console.log(obj);
console.log(obj2);

//question link-https://docs.google.com/document/d/1z3qoR_tcOLvfrpY7yUtFx4PJFmw58I_c_G9EWdNLzuo/edit?usp=sharing

// Easy Level:
// What is a prototype in JavaScript?

// Expected Answer: A prototype in JavaScript is an object that is associated with every function and object by default. 
// It is used to add properties and methods to all instances of a given object.

// What is the difference between prototype and __proto__ in JavaScript?

// Expected Answer:
// prototype: A property of a constructor function that allows you to add methods and properties to instances of objects created by that constructor.
// __proto__: A reference to the prototype of an object, which is used for inheritance (not recommended for direct use in modern JavaScript).



// How can you add a method to all objects of a specific constructor function?

function Person(name) {
    this.name = name;
}

// Adding method to the Person prototype
Person.prototype.printName = function() {
    console.log(this.name);
};

let obj = new Person("Vimal");
obj.printName();  // Output: Vimal


// How does prototype chain work in JavaScript?

// Expected Answer: The prototype chain is a mechanism in JavaScript used to look up properties and methods from an object. 
// When a property or method is accessed on an object, JavaScript first checks if that property exists on the object itself. 
// If it does not, it looks up the prototype of that object, and this process continues up the prototype chain until the property is found or the chain reaches null.

// Can you explain how inheritance works using prototypes in JavaScript?

// Expected Answer: In JavaScript, inheritance is implemented through the prototype chain. When an object inherits from another object,
//  it essentially gets access to the properties and methods of the other object's prototype. 
// You can create inheritance between constructor functions using Object.create() or by setting the prototype of one function to another. For example:

let obj3={
    name:"vimal",
    class:"Nursery",
    isGood:function(){
    console.log("yes he is good");
    
    }
}
let obj4={
    name:"raj"
}
obj4.__proto__=obj3;
obj4.isGood();

//this method is also correct
// let obj3 = {
//     name: "Vimal",
//     class: "Nursery",
//     isGood: function() {
//         console.log("Yes, he is good");
//     }
// };

// let obj4 = Object.create(obj3);  // obj4 inherits from obj3

// obj4.name = "Raj";  // Overriding the name property of obj4

// obj4.isGood();  // Output: Yes, he is good


// What will the following code output and why?

// javascript

function A() {}
function B() {}
B.prototype = new A();
var b = new B();
console.log(b instanceof A);
console.log(b instanceof B);

// Expected Answer:
// b instanceof A will be true, because B.prototype is an instance of A.
// b instanceof B will be true, because b is an instance of B.



// Hard Level:
// Can you explain how Object.create() works with prototypes in JavaScript?

// Expected Answer: Object.create() is a method that creates a new object with the specified prototype object and properties. 
// This allows you to create an object that inherits from another object, without using a constructor function. For example:

const animal = {
    speak() {
        console.log('Animal speaks');
    }
};

const dog = Object.create(animal);
dog.speak();  // Output: Animal speaks




// How can you implement classical inheritance in JavaScript using prototypes without using ES6 classes?

// Expected Answer: Classical inheritance can be implemented by using constructor functions and manipulating the prototype property. Here's an example:

let obj5={
    name:"vimal",
    class:"Nursery",
    isGood:function(){
    console.log("yes he is good");
    
    }
}
let obj6={
    name:"raj"
}
obj6.__proto__=obj3;
obj6.isGood();


// What happens when you set the prototype of a constructor function to null?

// Expected Answer: Setting the prototype of a constructor function to null means that the instances created by that constructor will not inherit from Object.prototype.
//  This can be useful if you want to create a "pure" object with no inherited properties or methods. 
// However, doing so removes important features like the toString() method and others from the object.

function MyObject() {}
MyObject.prototype = null;  // No inheritance chain
const ob = new MyObject();
console.log(ob.toString());  // TypeError: obj.toString is not a function


// How do you implement method chaining using prototypes in JavaScript?

// Expected Answer: Method chaining can be implemented by having each method return the object itself (this). Here's an example

function Calculator(value) {
    this.value = value;
}

Calculator.prototype.add = function(num) {
    this.value += num;
    return this;  // Return the object itself for chaining
};

Calculator.prototype.subtract = function(num) {
    this.value -= num;
    return this;  // Return the object itself for chaining
};

const calc = new Calculator(10);
calc.add(5).subtract(3);
console.log(calc.value);  // Output: 12


//POLYFILLS_:
//polyfill of forEach myforEach

//points to remeber while writing polyfills always remember return type ,always remember the parameters that function accept
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
}
}
let test=[1,2,3,4];
test.forEach((e)=>{
    console.log(e);
})
test.myForEach((e)=>{
    console.log(e);
    
})

//polyfill for map

let ans=test.map((e)=>{
    return e*2;
})
console.log(ans);
Array.prototype.myMap=function(callback)
{
    let ans=[]
    for(let i=0;i<this.length;i++)
    {
       ans.push(callback(this[i]));
    }
    return ans;
}
let ans1=test.myMap((e)=>e*3)
console.log(ans1);


//filter function

let ans3=test.filter((e)=>{
   return e>2
})
console.log(ans3);

//filter function polyfill
Array.prototype.myFilter=function(callback){
    let ans=[]
    for(let i=0;i<this.length;i++)
    {
        if(callback(this[i]))
            ans.push(this[i]);
    }
    return ans;
}
let ans4=test.myFilter((e)=>{
    return e>2
})
console.log(ans4);


//polyfill for reduce-:

let ans6=test.reduce((prev,currVal)=>{
    return prev+currVal
},0)
console.log(ans6);


Array.prototype.myReduce=function(callback,initialValue)
{
    let ans=initialValue;
    for(let i=0;i<this.length;i++)
    {
        ans = callback(ans, this[i], i, this)
    }
    return ans;
}
let ans7=test.myReduce((prev,currVal)=>{
    return prev+currVal
},0)
console.log(ans7);
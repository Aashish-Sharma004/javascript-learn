//hello to javascript
//console.log("hello javascript")

//Arthimetic Operators
let a =2;
let b =5;
console.log("a+b")
console.log("a-b")
console.log("a*b")
console.log("a**b")
console.log("a/b")
console.log("a%b")


 // Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log("person")

//object properties
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

//obect constructor
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");

//click event
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
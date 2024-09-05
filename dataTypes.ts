

// In Typescript we have Built In and User defined Data TypeFlags

// Builtin or primitive  Data Types :
//                         1. string
//                         2.number        
//                         3.boolean
//                         4.Null
//                         5.Undefined
//                         6.any 
//                         7.void


// User Defined or Object Types  :
//                             1.Arrays
//                             2.Tuples
//                             3.functions
//                             4.classes
//                             5.intefaces
//                             6 enum

//string 

var empName : string= "Prasanth"
console.log(empName)

//number

var empCode:number = 100
console.log(empCode)

//Boolean

var weatherOutsideIsGood : boolean = true
console.log(weatherOutsideIsGood)

//void -Represents the absence of any value, typically used for functions that do not return a value.


function logMessage(message: string): void {
  console.log(message);
}

//any:A type that can represent any value. It is used when the type of a variable is unknown or when you want to opt out of type checking.

let randomValue: any = "Hello";
randomValue = 10; // No error
console.log(randomValue)

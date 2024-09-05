//Named function

function display()
{
    console.log("Welcome to India");
}

display();

//Named function - parameters and return type


function sum(a:number,b:number):number
{
return a+b
}

console.log(sum(1,4));


//Function to subtract 
function sub(x:number,y:number):number
{
    return x-y
}

console.log(sub(9,7))

//Anonymous Function

let greeting=function()
{
    console.log("Welcome to INDIA")
}

greeting();

//Anon Function with Parameters and return types

let sum1 = function(x:number,y:number):number
{
    return x+y
}

console.log(sum1(1,7))


//Function Parameters

//1)Optional   2)Default Parameters

function greet(greet: string, name: string): string {
    return greet + " " + name;
}

console.log(greet("hi", "chebby"));

//Optional parameter

function gree(greet:string,name?:string):string
{
return  greet +" "+ name
}

console.log(gree("hi"))


//Default Parameters


function gee(name: string, greeting: string = "welcome"): string {
    return greeting + " " + name;
}

console.log(gee("chebby"));
console.log(gee("prasanth","hello"))

//Function Overloading


function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
    return a + b;
}

console.log(add(1, 2));           // Output: 3
console.log(add("hi", "chebby")); // Output: "hi chebby"


//Rest Parameters


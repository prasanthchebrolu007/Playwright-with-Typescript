//constant

const studentName : string = "prasanth";
//studentName = "chebrolu"

//let

let stuName : string = "prasanth";
stuName = "chebrolu"

//var

var stuName1 : string = "prasanth";
stuName1 = "chebrolu"



////

let variable1 : string = "1";
let variable2 : number = 1;
let variable3 : boolean = true;

variable1.match
variable3.valueOf
variable2.toExponential


///Arrays

let list1 : number[] = [1,2,3]
let list2 : Array<number> = [1,2,3,4]


//Both datatype and initial value

var employeeName:string= "john"

console.log(employeeName);

//only type

var employeeName :string;
console.log(employeeName)


//var variable - function scope

function varFunc()
{
    if(true){
        var x=1;
        console.log(x);  //ok
    }
      console.log(x);  //ok

    }
//console.log(x);    //not ok


//let variable - code scope

function letFunc()
{
    if(true){
        let x=1;
        console.log(x);    //ok 
    }
     // console.log(x);  //not ok

    }
//console.log(x);   //not ok
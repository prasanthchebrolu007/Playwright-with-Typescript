var greet = "Greetings";
greet = "10";


///Prasanth learning how to write a funtion

function addthreeNum(num1:number ,num2: number ,num3: number):number{
    return (num1+num2+num3)
  }
  console.log(addthreeNum(1,2,3))

///Prasanth learning how to write a funtion - seeing errors in runtime
  function addthreeNum1(num1 ,num2, num3):number{
    return (num1+num2+num3)
  }
  console.log(addthreeNum(1,2,3))
  


//Prasanth learning Objects and using it with function

let person: { name: string, age: number } = {
    name: "Prasanth",
    age: 40
  };
  
  function greetPerson(person: { name: string, age: number }): string {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
  }
  
  console.log(greetPerson(person));
  
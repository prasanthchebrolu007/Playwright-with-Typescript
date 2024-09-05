var greet = "Greetings";
greet = "10";
///Prasanth learning how to write a funtion
function addthreeNum(num1, num2, num3) {
    return (num1 + num2 + num3);
}
console.log(addthreeNum(1, 2, 3));
///Prasanth learning how to write a funtion - seeing errors in runtime
function addthreeNum1(num1, num2, num3) {
    return (num1 + num2 + num3);
}
console.log(addthreeNum(1, 2, 3));
//Prasanth learning Objects and using it with function
var person = {
    name: "Prasanth",
    age: 40
};
function greetPerson(person) {
    return "Hello, ".concat(person.name, "! You are ").concat(person.age, " years old.");
}
console.log(greetPerson(person));

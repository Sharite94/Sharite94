let person = {
  name: "Sharite",
  age: 27,
};

let evaluations = [7, 10, 9];

let selectedColors = ["green", "blue", "red"];

selectedColors[3] = "yellow";

selectedColors[4] = "5";

selectedColors[5] = { greeting: "hi ik ben een object" };

//Not Notation
person.name = "Sharite";
console.log(person.name);

//Brackert Notation
let selection = "age";
person[selection] = "27";

console.log(person.age);

console.log(evaluations);

console.log(selectedColors);

console.log(selectedColors.length);

console.log(selectedColors[0]);

console.log(selectedColors[2]);

console.log(selectedColors[5]);

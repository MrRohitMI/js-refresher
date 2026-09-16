let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];

// Task 1: Accessing Specific Value
console.log(shoppingList[0]);

// Task 2: Implementing push Method
shoppingList.push("Carrots");
console.log(shoppingList);

// Task 3: Implementing pop Method
shoppingList.pop();
console.log(shoppingList);

// Task 4: Implementing splice Method
console.log(shoppingList);
shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");
console.log(shoppingList);

let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "India",
  },
};

// Task 1: Fetching Specific Value
console.log(student.name);

// Task 2: Adding Value
student.phone = "123-456-7890";
console.log(student);

// Task 3: Removing Value
delete student.grade;
console.log(student);

// Task 4: Modifying Value
student.age = 21;
console.log(student);

// Conditional Assignments
//  Task 1: Understanding if Statements
function conditionalCheck(number) {
  if (number > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}
console.log(conditionalCheck(1));
console.log(conditionalCheck(0));
console.log(conditionalCheck(-1));

// Task 2: Implementing else if Statements
let grade = 98;
// grade = 89;
// grade = 70;
// grade = 69;
// grade = 59;
// grade = 101;
if (grade >= 90 && grade <= 100) {
  console.log("A");
} else if (grade >= 80 && grade <= 89) {
  console.log("B");
} else if (grade >= 70 && grade <= 79) {
  console.log("C");
} else if (grade >= 60 && grade <= 69) {
  console.log("D");
} else if (grade <= 60) {
  console.log("F");
}

// Task 3: Exploring Truthy/Falsy Concepts
function checkString(string) {
  return string ? "Truthy" : "Falsy";
}
console.log(checkString("Hello"));
console.log(checkString(""));

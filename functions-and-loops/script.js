// Assignment 1
let numbers = [2, 4, 6, 8, 10, 12];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * numbers[i]);
}

// Assignment 2

calculateDiscount = (price) => {
  let discount = price * (15 / 100);
  let finalPrice = price - discount;
  return finalPrice;
};
let prices = [500, 1200, 999, 2500, 750];

for (let i = 0; i < prices.length; i++) {
  console.log(calculateDiscount(prices[i]));
}

// Assignment 3

let users = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 },
];
users.forEach((item) => {
  if (item.age >= 18) {
    console.log(item.name);
  }
});

// Assignment 4

calculateNetSalary = (name, salary) => {
  let tds = salary * (10 / 100);
  let pf = salary * (5 / 100);
  let finalSalary = salary - (tds + pf);
  return finalSalary;
};
let employees = [
  { name: "Aman", salary: 50000 },
  { name: "Priya", salary: 75000 },
  { name: "Rahul", salary: 62000 },
  { name: "Neha", salary: 48000 },
  { name: "Karan", salary: 90000 },
];
employees.forEach((item) => {
  console.log(calculateNetSalary(item.name, item.salary));
});



// Assignment 5

let users1 = [
  { name: "Aman", age: 16 },
  { name: "Priya", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Neha", age: 14 },
  { name: "Karan", age: 27 },
  { name: "Simran", age: 31 },
  { name: "Vikram", age: 45 },
  { name: "Riya", age: 19 },
];

let adults = 0;
let minors = 0;
let oldest = 0;
let oldestName;
let totalAge = 0;
for (let i = 0; i < users1.length; i++) {
  if (users1[i].age >= 18) {
    adults++;
  } else {
    minors++;
  }
  if (users1[i].age > oldest) {
    oldest = users1[i].age;
    oldestName = users1[i].name;
  }
  totalAge = totalAge + users1[i].age;
}
let avgAge = totalAge / users1.length;
console.log("Total users :" + users1.length);
console.log("Number of adults (18+) :" + adults);
console.log("Number of minors (<18) :" + minors);
console.log("Name of the oldest user :" + oldestName);
console.log("Avg age of all users :" + avgAge);

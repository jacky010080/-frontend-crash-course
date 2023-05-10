// 1.
const person = {
  name: "Jacky",
  age: 22,
  gender: "male"
}
console.log(person.name, person.age);

// 2.
person.greet = function() {
  return "Hello";
}
console.log(person.greet());

// 3.
person.friends = ["Sammy", "Juby", "Hank", "Mike"];
console.log(person.friends);
for (let i = 0; i < person.friends.length; i++) {
  console.log(person.friends[i]);
}
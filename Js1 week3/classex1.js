const user = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favourite: "computers",
    sports: "running to class",
  },
};
const user2 = {
  name: "Peter",
  age: 42,
  role: "Teacher",
  classes: ["Maths", "Physics"],
  hobbies: {
    favourite: "Raspberry Pi",
    sports: "Tennis",
  },
};

const users = [user, user2];
const keysToLog = ["name", "age", "role"];

for (let index = 0; index < users.length; index++) {
  console.log(
    `${users[index].name} is ${users[index].age} years old and is working as ${users[index].role}`
  );
}

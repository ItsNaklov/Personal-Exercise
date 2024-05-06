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
function createOutput (users, keysToLog){


const users = [user, user2];
const keysToLog = ["name", "age", "hobbies"];
let output = "";
for (let index = 0; index < users.length; index++) {
    const user = users[i];
  for (let k = 0; k < keysToLog.length; k++) {
    const key = keysToLog[k];
    const value = user[key];
    output += value + " ";
if (typeof value === "object") {
    output = users[index][keysToLog[k]] + " ";

}
}
}
}
output += "\n";
console.log(output);
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.intruduce = () => {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old`
      );
    };
  }
}

const user = new Person("Emil", 25);
user.intruduce();
console.log(user.name);

class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.balance = balance;
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`after deposit the balance is ${this.balance}`);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`after withdrawal the balance is ${this.balance}`);
    }
  }
}
const account = new BankAccount(123456, "emil", 5000);
account.deposit(1500);
account.withdraw(2000);

// class shoppingCart {
//   item = [];
//   totalAmount = 0;

//   addItem(item, price) {
//     {
//       this.item.push({itemName: item, price: price});
//       this.totalAmount += price;
//     }
//   }
//   remouveItem(item) {
//     if (this.item.includes(item)) {
//       this.totalAmount = this.totalAmount - item.price;
//       this.item.splice(this.item.indexOf(item), 1);
//     }
//     console.log(item);
//   }
// }
// const shoppingCart1 = new shoppingCart();
// shoppingCart1.addItem("apple", 10);
// shoppingCart1.addItem("banana", 20);
// console.log(shoppingCart1.item);
// console.log(shoppingCart1.totalAmount);

// shoppingCart1.remouveItem("apple");
// console.log(shoppingCart1);
// console.log(shoppingCart1.totalAmount);

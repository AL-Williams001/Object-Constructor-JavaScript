// const items = [
//   {
//     description: "Shampoo",
//     price: 10,
//     quantity: 60,
//   },
//   {
//     description: "Soap",
//     price: 5,
//     quantity: 100,
//   },
// ];

// // items.push({
// //   description: "Toothpaste",
// //   price: 20,
// //   quantity: 20,
// // });

// // console.log(items);

// function Item(description, price, quantity) {
//   this.description = description;
//   this.price = price;
//   this.quantity = quantity;
// }

// const item = new Item("Conditioner", 15, 30);
// const item1 = new Item("Toothpaste", 20, 20);

// console.log(item1.quantity);

// function Person(name, age, occupation) {
//   this.name = name;
//   this.age = age;
//   this.occupation = occupation;
//   this.sayName = function () {
//     console.log(name);
//   };
// }

// const person1 = new Person("Alex", 30, "Developer");
// const person2 = new Person("Alice", 25, "Designer");

// console.log(person2.sayName());

const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false; // assuming isRead is initially false
  this.getInfo = function () {
    return `${title} by ${author}, ${pages} ${
      this.isRead ? "already read" : "not read yet"
    }`;
  };
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295);
book1.isRead = true;
library.push(book1);

const book2 = new Book("Harry Potter", "J.K. Rowling", 400);
library.push(book2);

library.forEach((book) => {
  const h1 = document.createElement("h1");

  h1.textContent = book.getInfo();

  document.body.append(h1);
});

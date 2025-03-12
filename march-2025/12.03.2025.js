/* const students = [
  {
    name: "Alex",
    grades: {
      math: 4,
      english: 5,
      history: 3,
    },
  },
  {
    name: "Kate",
    grades: {
      math: 5,
      english: 4,
      history: 5,
    },
  },
];
 */

/* const user = {
  name: "John",
  age: 25,
  sayHello: function () {
    return "Hello!";
  },
  introduce() {
    return `My name is ${this.name}`;
  },
};

console.log(user.introduce());
 */

/* const user = {
  name: "John",
  age: 25,
  getAge() {
    return `I am ${this.age} years old`;
  },
  getInfo() {
    return `- Name: ${this.name}\n- Age: ${this.age}`;
  },
};
console.log(user.getInfo()); */

/* let user = {
  name: "Иван",
  age: 25,
  getNewName(name) {
    this.name = name;
  },
};

user.getNewName('Alex')
console.log(user.name) */

/* let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

console.log(rabbit.eats); */

/* let animal = {
  speak() {
    console.log("Animal makes a sound");
  },
};

let dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof");
};

dog.speak();
dog.bark(); */

/* let animal = {
  speak() {
    console.log("Animal makes a sound");
  },
};

let dog = Object.create(animal);
dog.speak = function () {
  console.log("Bark!");
};
dog.speak();
 */

/* let animal = {
  eats: true,
};

let rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.hasOwnProperty("jumps"));
console.log(rabbit.hasOwnProperty("eats")); */

/* const vehicle = {
  wheels: true,
};

let car = Object.create(vehicle);
car.door = 4;

let electricCar = Object.create(car);
electricCar.battery = "full";

console.log(electricCar.wheels);
console.log(electricCar.door);
console.log(electricCar.battery); */

/* const book = {
  title: "Erman",
  author: "Mobi",
};

book.year = 2023;
delete book.author;
console.log(book);
console.log("title" in book);  */

/* const product = {
  name: "Laptop",
  price: 1500,
};

product.price = 1200
delete product.name

console.log(product) */

/* let schedule = {}

for (let sch in schedule){

} */

/* function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Пример использования
let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false */

/*  let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumPrice = (salaries) => {
  let sum = 0;
  if (Object.keys(salaries).length === 0) {
    return 0;
  } else {
    for (let price in salaries) {
      sum += salaries[price];
    }
  }
  return sum;
};
console.log(sumPrice(salaries)); 
 */
/* 
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (obj) => {
  for (let item in obj) {
    if (typeof obj[item] === "string") {
      continue;
    } else {
      obj[item] *= 2;
    }
  }
  return obj;
};
console.log(multiplyNumeric(menu)); */

/* let carMake = "Toyota";
let carModel = "Corolla";
let carYear = 2023;

const car = {
  carMake,
  carModel,
  carYear,
};

console.log(car); */

/* let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

const checkPropertyTypes = (obj) => {
  let newObj = {};
  for (let item in obj) {
    newObj[item] = typeof obj[item];
  }
  return newObj;
};

console.log(checkPropertyTypes(user)); */

/* let user = {
  name: "John",
  age: 30,
  isAdmin: true,
  email: "john@example.com"
};

const is

function filterObject(obj, predicate){

} */

/* let user = { name: "John" };
let admin = user;
admin.name = "Pete";
console.log(user);
console.log(admin);
user.name = "Mike";
console.log(user);
console.log(admin); */

/* let user = {
  name: "John",
  age: 30,
};

let clone = {};
for (let item in user) {
  clone[item] = user[item];
}

console.log(clone);
 */

/* let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);
console.log(user);
 */

/* let user = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const shallowClone = (obj) => {
  return Object.assign({}, obj);
};

console.log(shallowClone(user)); */

/* const positiveSum = (numbers) => {
  let sum = 0;
  for (let number of numbers) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
};

console.log(positiveSum([1, -4, 7, 12]));
 */

/* function stringToNumber(string) {
  return +string;
}

console.log(stringToNumber("1234")); */

/* function noSpace(str) {
  return str.replaceAll(" ", "");
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); */

/* function isPangram(str) {
  let strLower = str.toLowerCase();
  let allWord = "abcdefghijklmnopqrstuvwxyz";
  return allWord.includes(strLower);
}

console.log(isPangram("This is not a pangram."));
 */

/* function sortArray(array) {
  return array.sort((a, b) => a - b);
}

console.log(sortArray([5, 2, 8, 1, 9])); */

/* function countVowels(str) {
  let newStr = str.toLowerCase().split("");
  let word = "aeiou";
  let counter = 0;
  for (let char of newStr) {
    if (word.includes(char)) {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels("hello")); */

/* function gcd(num1, num2) {
  if (num1 > num2) {
    if (num2 % num1 === 0) {
      return num1;
    }else{

    }
  }
} */
/* 
function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

console.log(isPalindrome("racecar")); */

/* let newPromise = new Promise((resolve, reject)=> {
  return setTimeout(() => {

  })
}) */

/* const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Completed");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result);
});
 */

/* function delayedMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

delayedMessage("Hello World!", 2000).then(() => {
  console.log("Write message to seconds");
});
 */

/* let a = 5;
console.log(a);

setTimeout(() => {
  a += 5;
  console.log(a);
}, 0);

let b = 100;
console.log(a, b); */

/* console.log(1);

setTimeout(() => console.log(2));

new Promise((resolve) => {
  console.log(3);
  resolve();
}).then(() => console.log(4));

setTimeout(() => console.log(5)); */

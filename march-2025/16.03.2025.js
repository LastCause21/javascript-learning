/* const animals = [
    { type: "Кошка", name: "Мурка" },
    { type: "Собака", name: "Рекс" },
    { type: "Кошка", name: "Барсик" },
    { type: "Собака", name: "Бобик" },
    { type: "Кошка", name: "Пушок" }
];



function countAnimals(animals) {

}

console.log(countAnimals(animals)); */

/* function nameBySide(name) {
  let splitName = name.split(" ");
  return splitName[0].slice(0, 1) + "." + splitName[1].slice(0, 1);
}

console.log(nameBySide("Sam Harris"));
 */

/* const animals = [
  { type: "Кошка", name: "Мурка" },
  { type: "Собака", name: "Рекс" },
  { type: "Кошка", name: "Барсик" },
  { type: "Собака", name: "Бобик" },
  { type: "Кошка", name: "Пушок" },
];



function countAnimals(animals) {
  return animals.reduce((result, item) =>{

    if (!result[item.animals]){

    }
  }, {})
}

console.log(countAnimals(animals)); */

/* const names = ["Anna", "Bob", "Charlie"];

console.log(names[0][0]);
console.log(names[1][0]);
console.log(names[2][0]); */

/* const words = ["Apple", "Banana", "Cherry", "Date"];
const getFirstLetters = (words) => {
  let newArray = [];
  for (let word of words) {
    newArray.push(word[0]);
  }
  return newArray;
};
console.log(getFirstLetters(words)); */

/* const students = ["Alex", "John", "Mary", "Steve"];
const scores = [85, 92, 78, 95];

function createReport(students, scores) {
  let result = {};

  for (let i = 0; i <= students.length; i++) {
    result[students[i]] = scores[i];
  }
  return result;
}
console.log(createReport(students, scores)); */

// const word = "Hello";
/* 
for (let i = 0; i <= word.length; i++) {
  if (word[i] === word[0]) {
    if (word[i] === word[2]) {
    }
    console.log(word[i]);
  }
} */

/* const word = "Hello";

console.log(word[0]);
console.log(word[2]);
console.log(word[4]);
 */

/* const word = "JavaScript";

console.log(word[0]);
console.log(word[3]);
console.log(word[9]);
console.log(word[8]); */

/* const firstName = "Alex";
const lastName = "Smith";

console.log(firstName[0] + "\n" + lastName[0]);
console.log(firstName[3] + "\n" + lastName[4]); */

/* const colors = ["Red", "Blue", "Green", "Yellow"];

for (let color of colors) {
  console.log(color[0]);
} */

/* const animals = ["Cat", "Dog", "Bird", "Fish"];
let newArray = [];
for (let animal of animals) {
  newArray.push(animal[0] + animal[animal.length - 1]);
}
console.log(newArray); */

/* const words = ["Hello", "World", "JavaScript"];

let newArray = [];

for (let word of words) {
  newArray.push(word[0] + "." + word[word.length - 1]);
}
console.log(newArray); */

/* const names = ["Anna", "Bob", "Mike", "John"];

function getShortNames(names) {
  let newArray = [];
  for (let name of names) {
    if (name[0][0].toLowerCase() === name[name.length - 1].toLowerCase()) {
      newArray.push(name);
    }
  }
  return newArray;
}
console.log(getShortNames(names)); */

/* const words = ["Hello", "Hi", "Hey", "Goodbye"]; */

/* const findWords = (words) => {
  let newArray = [];
  for (let word of words) {
    if (word[0] === "H") {
      if (word.length > 2) {
        newArray.push(word);
      }
    }
  }
  return newArray;
};

console.log(findWords(words)); */

/* const phrases = ["Good morning", "Hello world", "Good night", "Hi there"];

const getFirstWords = (phrases) => {
  let newArray = [];
  let newArray2 = phrases.toString().split(" ");
  for (let phrase of newArray2) {
    newArray.push(phrase[0]);
  }
  return newArray;
};

console.log(getFirstWords(phrases)); */

/* const phrases = ["Good morning", "Hello world", "Good night", "Hi there"];

function getFirstWords(phrases) {
  let newArray = [];

  for (let phrase of phrases) {
    let words = phrase.split(" ");
    newArray.push(words[0]);
  }
  return newArray;
}

console.log(getFirstWords(phrases)); */

/* const phrases = ["Good morning", "Hello world", "Good night", "He there"];

function getLastWords(phrases) {
  let newArray = [];
  let word;
  for (let phrase of phrases) {
    word = phrase.split(" ");
    newArray.push(word[1]);
  }

  return newArray;
}
console.log(getLastWords(phrases)); */

/* const phrases = ["Good morning", "Hello world", "Good night", "Hi there"];

function getLastWords(phrases) {
  let newArray = [];
  for (let phrase of phrases) {
    let words = phrase.split(" ");
    newArray.push(words[words.length - 1]);
  }
  return newArray;
}

console.log(getLastWords(phrases));
 */

/* const names = ["Alex Brown", "John Smith", "Mary Jones"];

const getInitials = (names) => {
  let initials = [];
  for (let name of names) {
    let splitName = name.split(" ");
    initials.push(splitName[0][0] + "." + splitName[1][0]);
  }
  return initials;
};
console.log(getInitials(names)); */

/* const students = ["Alex", "John", "Mary", "Steve"];
const grades = [95, 88, 92, 78];

function getTopStudents(students, grades) {
  let topStudents = [];

  for (let i = 0; i < students.length; i++) {
    if (grades[i] > 90) {
      topStudents.push(students[i]);
    }
  }
  return topStudents;
}
console.log(getTopStudents(students, grades)); */

/* const names = ["Alex", "John", "Mary"];
const ages = [25, 17, 32];

function getAdults(names, ages) {
  let newArray = [];

  for (let i = 0; i < names.length; i++) {
    if (ages[i] >= 18) {
      newArray.push(names[i]);
    }
  }
  return newArray;
}
console.log(getAdults(names, ages)); */

/* const users = ["Alex Miller", "John Smith", "Mary Wilson"];
const ages = [25, 17, 32];

const createUsersList = (users, ages) => {
  let newArray = [];
  for (let user of users) {
    if (user[ages] > 18) {
      let newUser = user.split(" ");
      newArray.push(newUser[user]);
    }
  }
  return newArray;
};

console.log(createUsersList(users, ages)); */

/* const users = ["Alex Miller", "John Smith", "Mary Wilson"];
const ages = [25, 17, 32];

function createUsersList(users, ages) {
  let result = [];

  for (let i = 0; i < users.length; i++) {
    let nameParts = users[i].split(" ");
    let initials = nameParts[1][0] + "." + nameParts[0][0];
    let userString = initials + "(" + ages[i] + ")";
    if (ages[i] < 18) {
      userString = userString + "!";
    }
    result.push(userString);
  }
  return result;
}
console.log(createUsersList(users, ages)); */

/* const users = ["Alex Miller", "John Smith", "Mary Wilson"];

const getInitialsAndName = (users) => {
  let newArray = [];
  for (let i = 0; i < users.length; i++) {
    let changeInitial = users[i].split(" ");
    let newInitial = changeInitial[0][0] + "." + changeInitial[1][0];
    newArray.push(newInitial + " - " + users[i]);
  }
  return newArray;
};
console.log(getInitialsAndName(users));
 */

/* const words = ["Hello", "World", "JavaScript", "Code"];

function createAbbreviations(words) {
  let newArray = [];

  for (let i = 0; i < words.length; i++) {
    let resultLength = words[i].length;
    let oneSymbol = words[i][0];
    newArray.push(oneSymbol + "..." + "(" + resultLength + ")");
  }
  return newArray;
}
console.log(createAbbreviations(words)); */

/* const words = ["cat", "dog", "bird", "fish"];

function addFirstLast(words) {
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    let firstInitials = words[i][0];
    let lastInitials = words[i][words[i].length - 1];
    newWords.push(firstInitials + "..." + lastInitials);
  }
  return newWords;
}
console.log(addFirstLast(words));
 */

/* const words = ["cat", "dog", "bird", "fish"];

function addFirstLast(words) {
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    // Получаем первую букву
    let firstLetter = words[i][0];

    // Получаем последнюю букву
    // words[i].length - 1 даёт индекс последней буквы
    let lastLetter = words[i][words[i].length - 1];

    // Соединяем буквы с точками
    newWords.push(firstLetter + "..." + lastLetter);
  }
  return newWords;
}

console.log(addFirstLast(words)); */

/* const word = "cat";

console.log(word[0]);
console.log(word[1]);
console.log(word.length);
console.log(word.length - 1);
console.log(word[word.length - 1]);
console.log();
console.log(); */

/* const word = "hello";

console.log(word[0]);
console.log(word[2]);
console.log(word[word.length - 1]); */

/* const firstName = "Alex";
const lastName = "Smith";

console.log(firstName[0]);
console.log(lastName[0]);
console.log(firstName[firstName.length - 1]);
console.log(lastName[lastName.length - 1]); */

/* const words = ["cat", "dog", "fox"];

console.log(words[0][0]); // (c)
console.log(words[1][0]); // (d)
console.log(words[2][0]); // (f)

console.log(words[0][words[0].length - 1]); // t
console.log(words[1][words[1].length - 1]); // g
console.log(words[2][words[2].length - 1]); // x
 */

/* const animals = ["cat", "dog"];

console.log(`${animals[0][0]}.${animals[1][0]}`); */

/* const animals = ["cat", "dog", "fox"];

console.log(`${animals[0][0]}+${animals[2][animals[2].length - 1]}`);
 */

/* const words = ["cat", "dog", "fox"];

function createAbbr(words) {
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    let firstLetter = words[i][0];
    let endLetter = words[i][words[i].length - 1];
    newArr.push(`${firstLetter}-${endLetter}`);
  }
  return newArr;
}
console.log(createAbbr(words)); */

/* // Получение буквы из слова:
word[0]; // первая буква
word[word.length - 1]; // последняя буква

// Получение слова из массива
words[0]; // первое слово
words[1]; // второе слово

// Комбинирование для получения букв из слов в массиве:
words[0][0]; // первая буква первого слова
words[1][0]; // первая буква второго слова
words[0][words[0].length - 1]; // последняя буква первого слова

//Использование в цикле
for (let i = 0; i < words.length; i++) {
  let firstLetter = words[i][0];
  let lastLetter = words[i][words[i].length - 1];
} */

/* const names = ["Anna", "John", "Bob", "Mike"];

const checkNames = (names) => {
  let newArray = [];

  for (let i = 0; i < names.length; i++) {
    if (
      names[i][0].toLowerCase() === names[i][names[i].length - 1].toLowerCase()
    ) {
      newArray.push(names[i] + "+");
    } else {
      newArray.push(names[i] + "-");
    }
  }
  return newArray;
};
console.log(checkNames(names)); */

/* const words = ["Hello", "Hi", "Hey", "World"];

function createCode(words) {
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    let firstLetter = words[i][0];
    let endLetter = words[i][words[i].length - 1];
    newArr.push(`${firstLetter}-${words[i].length}-${endLetter}`);
  }
  return newArr;
}
console.log(createCode(words)); */

/* const fruits = ["apple", "banana", "orange"];

const printFruits = (fruits) => {
  return fruits.forEach((element, index) => {
    console.log(`${index + 1}.${element}`);
  });
};
printFruits(fruits);
 */

/* const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = (numbers) => numbers.map((number) => number * 2);
console.log(doubleNumbers(numbers)); */
/* 
const names = ["john", "pete", "mary"];

const capitalizeNames = (names) =>
  names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(capitalizeNames(names)); */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEvenNumbers = (numbers) =>
  numbers.filter((number) => number % 2 === 0);
console.log(getEvenNumbers(numbers)); */

/* const words = ["hello", "world", "javascript", "code", "fun"];

const getLongWordsUpperCase = (words) =>
  words.filter((word) => word.length >= 5).map((word) => word.toUpperCase());

console.log(getLongWordsUpperCase(words)); */

/* const users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
  { name: "Alex", age: 25 },
];

const findUserByAge = (users, age) => users.find((user) => user.age === age);
console.log(findUserByAge(users, 25)); */

/* const numbers = [1, 2, 3, 4, 5];

const sumNumbers = (numbers) => numbers.reduce((sum, num) => sum + num, 0);
console.log(sumNumbers(numbers));
 */

/* const items = [
  { name: "Телефон", price: 1000, quantity: 2 },
  { name: "Ноутбук", price: 2000, quantity: 1 },
  { name: "Наушники", price: 200, quantity: 3 },
];

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
console.log(calculateTotal(items)); */

/* const students = [
  { name: "John", age: 20, grades: [85, 90, 95] },
  { name: "Pete", age: 19, grades: [75, 80, 85] },
  { name: "Mary", age: 21, grades: [90, 95, 100] },
  { name: "Ann", age: 20, grades: [70, 75, 80] },
];

const getTopStudent = (students) =>
  students.filter((student) => student.age > 19).map(grade => grade.grades / grade.grades.length);

console.log(getTopStudent(students)); */

/* const students = [
  { name: "John", age: 20, grades: [85, 90, 95] },
  { name: "Pete", age: 19, grades: [75, 80, 85] },
  { name: "Mary", age: 21, grades: [90, 95, 100] },
  { name: "Ann", age: 20, grades: [70, 75, 80] },
];

function getTopStudent(students) {
  return students
    .filter((student) => student.age > 19)

    .map((student) => {
      const sum = student.grades.reduce((acc, grade) => acc + grade, 0);

      const average = sum / student.grades.length;

      return {
        name: student.name,
        average: average,
      };
    })
    .reduce((best, current) => {
      return current.average > best.average ? current : best;
    });
}

console.log(getTopStudent(students)); */

/* const student = { name: "John", age: 20, grades: [80, 90, 100] };

/* function getAverageGrade(student) {
  const sum = grades.reduce((acc, item) => acc + item, 0);
  return sum;
}
console.log(getAverageGrade(sum)); */
/* function getAverageGrade(grades) {
  // Сумма всех оценок
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  // Делим на количество оценок
  return sum / grades.length;
}
console.log(getAverageGrade(student.grades));
 */
/* students.forEach(student => {
  const average = getAverageGrade(student.grades);
  console.log(`${student.name}: ${average}`);
});  */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];

const getDoubledEvenNumbers = (numbers) =>
  numbers.filter((number) => number % 2 === 0).map((number) => number * 2);
console.log(getDoubledEvenNumbers(numbers)); */

/* const words = ["hello", "hi", "hey", "world", "javascript"];

function getLongUpperWords(words) {
  return words
    .filter((word) => word.length > 3)
    .map((word) => word.toUpperCase());
}
console.log(getLongUpperWords(words)); */

/* const prices = [10, 15, 25, 35, 50, 90, 100];

const showExpensiveItems = (prices) =>
  prices
    .filter((price) => price > 30)
    .map((price) => price + "$")
    .forEach((price) => console.log(`Цена: ${price}`));
showExpensiveItems(prices);
 */

/* const products = [
  { name: "Хлеб", price: 2, inStock: true },
  { name: "Молоко", price: 3, inStock: false },
  { name: "Яблоки", price: 5, inStock: true },
  { name: "Сыр", price: 8, inStock: true },
  { name: "Конфеты", price: 4, inStock: false },
];

function showAvailableProducts(products) {
  let inStockProduct = products.filter((stock) => stock.inStock);
  let stringChange = inStockProduct.map((str) => `${str.name} - ${str.price}$`);
  return stringChange.forEach((result) => console.log(`В наличии: ${result}`));
}
showAvailableProducts(products); */

/* const students = [
  { name: "Анна", grade: 5, attended: true },
  { name: "Иван", grade: 4, attended: false },
  { name: "Мария", grade: 5, attended: true },
  { name: "Петр", grade: 3, attended: true },
  { name: "Елена", grade: 4, attended: false },
];

const getGoodStudents = (students) =>
  students
    .filter((student) => student.attended && student.grade >= 4)
    .forEach((student) => console.log(`${student.name} - ${student.grade}`));

getGoodStudents(students); */

/* const books = [
  { title: "Война и мир", price: 20, inStock: true },
  { title: "Код да Винчи", price: 15, inStock: false },
  { title: "Гарри Поттер", price: 10, inStock: true },
  { title: "Властелин колец", price: 25, inStock: true },
];

const showBookPrices = (books) =>
  books
    .filter((book) => book.inStock && (book.price * 10) / 100)
    .map((book) => `${book.title} - ${book.price}$(скидка!)`)
    .forEach((book) => console.log(book));
showBookPrices(books); */

/* const phones = [
  { model: "iPhone", price: 1000, year: 2023, available: true },
  { model: "Samsung", price: 800, year: 2022, available: true },
  { model: "Huawei", price: 600, year: 2023, available: false },
  { model: "Nokia", price: 200, year: 2021, available: true },
];

function showNewPhones(phones) {
  phones
    .filter((phone) => phone.year === 2023 && phone.available)
    .map((phone) => `${phone.model} - ${phone.price * 1.2}$ (включая налог)`)
    .forEach((phone) => console.log(phone));
}
showNewPhones(phones);
 */

/* const products = [
  {
    name: "Ноутбук",
    price: 1200,
    category: "Электроника",
    rating: 4.5,
    inStock: true,
  },
  {
    name: "Телефон",
    price: 500,
    category: "Электроника",
    rating: 4.8,
    inStock: true,
  },
  { name: "Книга", price: 30, category: "Книги", rating: 4.2, inStock: true },
  {
    name: "Планшет",
    price: 700,
    category: "Электроника",
    rating: 4.1,
    inStock: false,
  },
  {
    name: "Клавиатура",
    price: 100,
    category: "Электроника",
    rating: 4.7,
    inStock: true,
  },
];

const showBestElectronics = (products) =>
  products
    .filter(
      (product) =>
        product.category === "Электроника" &&
        product.inStock &&
        product.rating >= 4.5
    )
    .map(
      (product) =>
        `${product.name} (Рейтинг: ${product.rating}) - ${product.price * 1.15}$`
    )
    .forEach((product) => console.log(product));

showBestElectronics(products); */



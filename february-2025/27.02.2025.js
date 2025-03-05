/* for (let i = 1; i <= 3; i++){
    let space = ''
    for (let j = 1; j <= 3 ; j++){
        space += ' ' + '*'
    }
   console.log(space);
   
}
 */
/* 
for (let i = 0; i <= 5; i++){
    let work = '*'
    for (let j = 0; j <= 5; j++){
        work += j
        
    }
    console.log(work);
}
 */
/* 
student = { name: 'Иван', age: 20, curs: 2}
console.log(student.name);
console.log(student.age)
let rep = student.curs = 3
console.log(rep)
 */
/* 
const car = { brand: "Toyota", model: "Camry", year: 2020, color: "black" };
console.log(car.brand, car.model);
car.color = 'white'
car['mileage'] = 50000
console.log(car); */
/* 
const phone = { brand: "Apple", model: "iPhone 13", price: 999, memory: 128 };
console.log(phone.brand, phone.model)
phone.price = phone.price + 100
phone['color'] = 'black'
console.log(phone); */

/* const computer = {brand: "HP", model: "Pavilion", ram: 8, storage: 512 };
console.log(computer.brand, computer.model)
computer.ram *= 2
computer['processor'] = 'intel i5'
computer['year'] = 2023
console.log(computer); */
/* 
const user = {
  name: "Alex",
  age: 25,
  email: "alex@email.com",
  address: {
    city: "Москва",
    street: "Ленина",
    house: 10,
  },
};
console.log(`${user.name} живет в городе ${user.address.city}`);
user.address.house = 15
user.address['apartment'] = 44
console.log(user);
 */
/* 
const calculator = {
  num1: 10,
  num2: 5,
  sum: function () {
    return this.num1 + this.num2
  },
  multiply: function () {
    return this.num1 * this.num2
  },
  subtract: function () {
    return this.num1 - this.num2
  },
};
console.log(calculator.sum());
console.log(calculator.multiply());
console.log(calculator.subtract()); */

/* 
const bankAccount = {
    balance: 1000,  
    owner: "Alex",
    
    deposit(amount) {
        this.balance += amount
        return this.balance
    },
    
    withdraw(amount) {
        if(this.balance >= amount){
            this.balance -= amount
            return this.balance
        }else{
            return 'Недостаточно средств';
            
        }
    },
    
    getBalance() {
        return `Баланс счета ${this.owner}:${this.balance}`
    }
}
console.log(bankAccount.getBalance());
console.log(bankAccount.deposit(500));
console.log(bankAccount.getBalance());
console.log(bankAccount.withdraw(2000)); 
 */

/* 
const product = {
  name: "Ноутбук",
  price: 1000,
  quantity: 5,

  setDiscount(percent) {
    return this.price = this.price * (1 - percent / 100);
  },

  addQuantity(amount) {
    return this.quantity += amount;
  },

  sell(amount) {
    if (this.quantity >= amount) {  // >= вместо >
      this.quantity -= amount;    // нужно обновить количество
      return this.price * amount;
  } else {
      return 'Ошибка';
  }
  },

  getInfo() {
    return `Товар ${this.name}( ${this.quantity}шт.) по цене $${this.price}`;
  },
};

console.log(product.getInfo());
console.log(product.setDiscount(20));
console.log(product.getInfo());
console.log(product.sell(3));
console.log(product.getInfo());
console.log(product.addQuantity(2))
console.log(product.getInfo()); */

/* 
let number = "1234567890123456"
let result = number.length - 4
let result2 = number.length -4
console.log(result2);

 */

/* const numbersArray = [];

// Добавляем числа от 1 до 5 в массив
for (let i = 1; i <= 5; i++) {
  numbersArray.push(i);
}

console.log('Массив чисел:', numbersArray); // Вывод: [1, 2, 3, 4, 5] */
/* 
function formatName(name){
  let deleteSpace =   name.trim()
  let UpperOneWord = deleteSpace.charAt(0).toUpperCase() + name.slice(1)
  return  UpperOneWord
}
console.log(formatName("иВАН")); // должно получиться "Иван"
console.log(formatName("  пЁтр  ")); // должно получиться "Пётр"
console.log(formatName("мАрия")); // должно получиться "Мария" */
/* 
// 1. Создайте массив студентов
const students = [
  { name: "John", age: 20, grade: 85 },
  { name: "Alice", age: 22, grade: 75 },
  { name: "Bob", age: 21, grade: 90 },
  { name: "Jane", age: 23, grade: 65 },
];

// 2. Функция для вывода имен всех студентов
function showStudentNames(studentsArray) {
  return studentsArray.map((student) => student.name).join(" ");
}

// 3. Функция для получения студентов с оценкой выше 80
function getStudentsAbove80(studentsArray) {
  return studentsArray.filter((student) => student.grade > 80);
}

// 4. Функция для получения среднего балла всех студентов
function getAverageGrade(studentsArray) {
  let resultSumGrade =
    studentsArray.reduce((saveResult, sum) => saveResult + sum.grade, 0) 
  return;
}

console.log(showStudentNames(students));
// Должно вывести: "John, Alice, Bob, Jane"
console.log(getStudentsAbove80(students)); // Должно вернуть массив студентов с оценкой выше 80
console.log(getAverageGrade(students)); // Должно вернуть средний балл всех студентов */


// 1. Создайте массив товаров
/* const products = [
  { name: "Laptop", price: 1200, quantity: 5 },
  { name: "Phone", price: 800, quantity: 10 },
  { name: "Tablet", price: 300, quantity: 7 },
  { name: "Headphones", price: 150, quantity: 20 }
];

// 2. Функция для вывода названий всех товаров
function showProductNames(productsArray) {
  return console.log(productsArray.map(product => product.name))
}

// 3. Функция для получения товаров с ценой выше 100
function getProductsAbove100(productsArray) {
  return productsArray.filter(product => product.price > 100)
}

// 4. Функция для получения общей стоимости всех товаров
function getTotalValue(productsArray) {
  return productsArray.reduce((prod, sum) => prod + sum.price, 0)
}


showProductNames(products);  // Должно вывести: "Laptop, Phone, Tablet, Headphones"
console.log(getProductsAbove100(products));  // Должно вернуть массив товаров с ценой выше 100
console.log(getTotalValue(products));  // Должно вернуть общую стоимость всех товаров */


/* 
const movies = [
  { title: "Inception", director: "Christopher Nolan", year: 2010, rating: 8.8 },
  { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", year: 1999, rating: 8.7 },
  { title: "Interstellar", director: "Christopher Nolan", year: 2014, rating: 8.6 },
  { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, rating: 9.2 }
];


function showMovieTitles(movies){
  return console.log(movies.map(movie => movie.title).join(', '))
}
function getMoviesAfter2000(movies){
  return movies.filter(movie => movie.year > 2000)
}

function getAverageRating(movies) {
  return movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
}


showMovieTitles(movies);  
console.log(getMoviesAfter2000(movies));  
console.log(getAverageRating(movies));   */

/* 
const users = [
  { name: "John", age: 25, isActive: true },
  { name: "Alice", age: 30, isActive: false },
  { name: "Bob", age: 22, isActive: true },
  { name: "Jane", age: 28, isActive: false }
];

// Напишите функцию, которая принимает массив пользователей и возвращает массив только активных пользователей.
function getActiveUsers(usersArray) {
 return users.filter(user => user.isActive === true)
}

// Тест
console.log(getActiveUsers(users)); // Должно вернуть массив пользователей с isActive: true */

/* const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Headphones", price: 150 }
];

// Напишите функцию, которая принимает массив товаров и сортирует его по цене (по возрастанию).
function sortProductsByPrice(productsArray) {
  // Ваш код здесь
}

// Тест
console.log(sortProductsByPrice(products)); // Должно вернуть массив товаров, отсортированных по цене */

/* 
const students = [
  { name: "John", age: 20 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 20 },
  { name: "Jane", age: 22 }
];

// Напишите функцию, которая принимает массив студентов и группирует их по возрасту.
function groupStudentsByAge(studentsArray) {
  return studentsArray.sort((a, b) => a.age - b.age)
}

// Тест
console.log(groupStudentsByAge(students)); 
// Должно вернуть объект, сгруппированный по возрасту, например:
// {
//     20: [{ name: "John", age: 20 }, { name: "Bob", age: 20 }],
//     22: [{ name: "Alice", age: 22 }, { name: "Jane", age: 22 }]
// } */

// Напишите функцию, которая принимает имя, возраст и город, и возвращает объект с этой информацией.
/* function createPerson(name, age, city) {
  
  const person = {
    name, 
    age,
    city
  }

  return person
}

// Тест
const person = createPerson("John", 25, "New York");
console.log(person); 
// Должно вывести: { name: "John", age: 25, city: "New York" } */
/* 
const book = {
  title: "1984",
  year: 1949
};


function addAuthor(bookObject, author) {
  bookObject['author'] = author
}


addAuthor(book, "George Orwell");
console.log(book); 
 */
/* 
const student = {
  name: "Alice",
  age: 22
};

// Напишите функцию, которая принимает объект студента и новый возраст, и обновляет возраст студента.
function updateAge(studentObject, newAge) {
    studentObject.age = newAge
}

// Тест
updateAge(student, 23);
console.log(student); 
// Должно вывести: { name: "Alice", age: 23 } */

/* // Напишите функцию, которая принимает марку, модель, год и пробег, и возвращает объект автомобиля.
function createCar(make, model, year, mileage) {
   const myCar = {
    make,
    model,
    year,
    mileage
   }
   let result = myCar.joint
}

// Тест
const myCar = createCar("Toyota", "Camry", 2020, 15000);
console.log(myCar); 
// Должно вывести: { make: "Toyota", model: "Camry", year: 2020, mileage: 15000 }

// Добавьте метод, который выводит информацию об автомобиле
// Пример: "2020 Toyota Camry with 15000 miles" */


/* // Напишите функцию, которая принимает название, автора и год, и возвращает объект книги.
function createBook(title, author, year) {
  
  return {
    title,
    author,
    year,
    getInformation (){
      return `${this.title} ${this. author} ${this.year}`
    }
  }
}

// Тест
const myBook = createBook("1984", "George Orwell", 1949);
console.log(myBook); 
// Должно вывести: { title: "1984", author: "George Orwell", year: 1949 }

// Добавьте метод, который возвращает информацию о книге
// Пример: "1984 by George Orwell, published in 1949" */
/* 
// Напишите функцию, которая принимает имя владельца счета и начальный баланс, и возвращает объект счета.
function createBankAccount(accountHolder, initialBalance) {
    return {
        accountHolder,
        balance: initialBalance,
        
        deposit(amount) {
            this.balance += amount;
            return this.balance;
        },
        
        withdraw(amount) {
            if (this.balance >= amount) {
                this.balance -= amount;
                return this.balance;
            }
            return "Недостаточно средств";
        },
        
        getAccountInfo() {
            return `Account holder: ${this.accountHolder}, Balance: ${this.balance}`;
        }
    };
}

// Тест
const myAccount = createBankAccount("John Doe", 1000);
console.log(myAccount); 
// Должно вывести: { accountHolder: "John Doe", balance: 1000 }

// Пополните счет на 500
myAccount.deposit(500);
console.log(myAccount.getAccountInfo()); 
// Должно вывести: "Account holder: John Doe, Balance: 1500"

// Снимите 300
myAccount.withdraw(300);
console.log(myAccount.getAccountInfo()); 
// Должно вывести: "Account holder: John Doe, Balance: 1200" */

/* 
// Создайте простой объект книги
const book = {
    title: "",
    author: "",
    year: 0,
    isAvailable: true
};

// 1. Напишите функцию для заполнения информации о книге
function setBookInfo(bookObject, title, author, year) {
    return{}
}

// 2. Напишите функцию, которая выводит информацию о книге
function getBookInfo(bookObject) {
    // Ваш код здесь
}

// 3. Напишите функцию для изменения статуса доступности книги
function changeBookStatus(bookObject) {
    // Ваш код здесь
}

// Тесты
console.log(setBookInfo(book, "Война и мир", "Лев Толстой", 1869));
console.log(getBookInfo(book));
console.log(changeBookStatus(book)); */
/* 
const book = {
  title: "",
  author: "",
  year: 0,
  isAvailable: true
};

function setBookInfo(bookObject, title, author, year) {
  bookObject.title = title
  bookObject.author = author
  bookObject.year = year
  return bookObject
}

function getBookInfo(bookObject) {
  return `Книга ${bookObject.title} автор ${bookObject.author} ${bookObject.year} год`
}

function changeBookStatus(bookObject) {
  bookObject.isAvailable = !bookObject.isAvailable;
    return bookObject.isAvailable ? "Книга доступна" : "Книга недоступна"
}

console.log(setBookInfo(book, "Война и мир", "Лев Толстой", 1869));
console.log(getBookInfo(book));
console.log(changeBookStatus(book)); */

/* 
const library = {
  books: [],
}

function addBook(title, author, year) {


}

function findBook(title) {

}

function getAvailableBooks() {

}

console.log(addBook("Война и мир", "Лев Толстой", 1869));
console.log(addBook("Преступление и наказание", "Фёдор Достоевский", 1866));
console.log(findBook("Война и мир"));
console.log(getAvailableBooks()); */

/* 
const person = {
  name,
  age,
  city
}

function showPersonInfo(person) {
  return person.name
}

// Тесты
console.log(person.name); 
// Должно вывести имя человека

console.log(person.age); 
// Должно вывести возраст

console.log(showPersonInfo(person)); 
// Должно вывести: "Имя: Иван, Возраст: 25, Город: Москва" */
/* 
const car = {
  brand: 'BMW',
  model: 'X5',
  year: 2020,
}

function showCarInfo(car) {
  return car
}
console.log(car.brand)
console.log(car.model)
console.log(showCarInfo(car)) */
/* 
const phone = {
  brand: 'iPhone',
  model: '12',
  price: 75000,
  isNew: true,
}

function showPhoneInfo(phone) {

  if (phone.isNew === true){
    return `${phone.brand} ${phone.model} - новый, цена: ${phone.price} руб.`
  }else{
    return`${phone.brand} ${phone.model} - б/y, цена: ${phone.price} руб.`
  }
}

console.log(phone.brand)
console.log(phone.price)
console.log(showPhoneInfo(phone)) */
/* 
const student = {
  name: 'Петр',
  grade: 5,
  marks: [5, 4, 5, 5, 4]
}

function showStudentInfo(student){
  let averagePoint = student.marks.reduce((acc, mark) => acc + mark, 0) / student.marks.length 
  return `Ученик ${student.name} из ${student.grade} класса, средний бал: ${averagePoint}`
}

console.log(showStudentInfo(student)) */

/* 
const game = {
  title: 'Minecraft',
  price: 2000,
  inStock: 5,
  isDiscounted: true,
  discount: 15,
}

function showGameInfo(game){
  
  let resultDiscount = game.price * (game.discount  / 100)
  let resultPriceDiscount = game.price - resultDiscount
  
  if (game.tile){
    return `${game.title} - ${game.price} руб. (нет наличии)`
  }

  if (game.isDiscounted){
    return `${game.title} - ${resultPriceDiscount} руб. (в наличии)`
  }else{
    return `${game.title} - ${game.price} руб. (в наличии)`
  }


}

console.log(showGameInfo(game)) */

/* 
const movie = {

  title: 'Inception',
  year: 2010,
  rating: 8.7,
  isWatched: true

}

function showMovieInfo(movie) {
  let inputResult = movie.rating > 8 ? 'excellent film' : (movie.rating > 5 && movie.rating < 8 ? 'good film' : 'bad film')  
  let inputResult2 = movie.isWatched ? 'watched' : 'not watched';
  return `${inputResult} ${inputResult2}`
}

console.log(showMovieInfo(movie)) */


/* 
const user = {
  username: 'Alex',
  age: 25,
  isPremium: true,
  notification: 3
}

function showUserInfo(user){

  let premium = user.isPremium ? 'premium account' : 'basic account'
  let notification = user.notification ? `${user.notification} new notification` : `no notification`
  return `${user.username} (${user.age}) - ${premium}, ${notification}`


}

console.log(showUserInfo(user)) */

/* 
const employee = {
  name: "John",
  position: "Developer",
  salary: 3000,
  experience: 1,
  isRemote: true
}

function showEmployeeInfo(employee) {

  let experience = employee.experience > 2 ? 'Прежняя зарплата': employee.salary * 1.1
  let remote = employee.isRemote ? 'remote work' : 'office work'
  return `${employee.name} - ${employee.position} (${remote}), salary: $${experience}`

}

console.log(showEmployeeInfo(employee));
// Должно вывести:
// "John - Developer (remote work), salary: $3300"

// Примеры вывода:
// Если опыт > 2 лет: добавляем 10% к зарплате (salary * 1.1)
// Если isRemote true: "remote work"
// Если isRemote false: "office work" */
/* 
const device = {
  name: "Galaxy S21",
  brand: "Samsung",
  price: 799,
  warranty: 12,
  isNew: true
}

function showDeviceInfo(device) {
  let addMonth = device.isNew ? device.warranty + 12 : device.warranty
  return `${device.brand} ${device.name} - $${device.price} [new (false/true) ${device.isNew}] warranty ${addMonth} months.`
}

console.log(showDeviceInfo(device)) */

/* 
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 300,
  currentPage: 150,
  isFinished: false
}

function showBookProgress(book) {
  
  let percent = book.currentPage / book.pages * 100 + '%'
  let status = book.isFinished ? 'completed' : 'no completed' 
  return `${book.title} by ${book.author} - ${percent} ${status}`
}

console.log(showBookProgress(book))
 */
/* 
function reverseNumber(number){

return number - ((number * number / number) - -number)
}

console.log(reverseNumber(5))
console.log(reverseNumber(10))
console.log(reverseNumber(15))
console.log(reverseNumber(0.12
)) */

// For example, for [1, 2, 2] it should return 9 because 
/* 
function squareSum(numbers){

  return numbers.reduce((sum, number) => sum + number ** 2, 0)
}

console.log(squareSum([1, 2, 2])) // 9
console.log(squareSum([0, 3, 4, 5])) // 50 */

/* 
function countBy(x, n) {
  let z = 0;
  for (let i = x; i <= 10; i++){
    z += i
  } 
return z

}

/* x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10] */

/* console.log(countBy(1, 10)) */



/* 
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10] */
/* 
function countBy(x, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
      result.push(x * i);
  }
  return result;
}


console.log(countBy(1, 10))
console.log(countBy(2, 5)) */







/* 
var countSheep = function (num){
  let saveResultStr = ''
  for (let i = 1; i <= num; i++){
    saveResultStr += i + 'sheep...'
  }
  return saveResultStr
  
}

console.log(countSheep(3))
console.log(countSheep(1)) */
/* 

assert.strictEqual(countSheep(0), "");
assert.strictEqual(countSheep(1), "1 sheep...");
assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep..."); */

/* 

function min(list){
   
  let result = list.join(', ')
  let result2 = Math.min(result)
  return result2
}

function max(list){
  

}

console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110
//console.log(min([42, 54, 65, 87, 0])); // 0
/* console.log(max([4,6,2,1,9,63,-134,566])); // 566  */
/* 
let arr = [-52, 56, 30, 29, -54, 0, -110]
let result = arr.join(' ')
let result2 = Math.max(result)
console.log(result) */

/* "hello world!"  "world! hello" */

/* 
function reverseWords(str){
  
  let splitArray = str.split('')
  let newArrayReverse = []
  for (let i = splitArray.length - 1; i >= 0; i--){
    newArrayReverse.push(splitArray[i])
  }

  for (let j = 0; j <= newArrayReverse.length; j++ ){

  }

  return newArrayReverse
}

console.log(reverseWords('hello world')) */


/* "hello world!"  "world! hello" */
/* 
function reverseWords(str){
  let getArray = str.split(' ')
  let switchSave = []
  for (let i = getArray.length - 1; i >= 0; i--){
    switchSave.push(getArray[i])
  }
  return switchSave.join(' ')
}
console.log(reverseWords('hello world!')) */
/* 
const store = {
  name: "Electronics Store",
  products: [],
  addProduct(name, price) {
    this.products.push({
      name,
      price,
    })
    return this.products
  },
  
  // 2. Метод для показа всех товаров
  showProducts() {
    return store.products
  },
  
  // 3. Метод для поиска товара по названию
  findProduct(name) {
    
  }
}

// Примеры использования:
// store.addProduct("Наушники", 100)
console.log(showProducts())
// store.findProduct("Телефон") // должен найти и показать информацию о телефоне */

/* 
const store = {
  name: "Electronics Store",
  products: [],
  
  addProduct(name, price) {
    this.products.push({
      name,
      price,
    })
    return this.products
  },
  
  showProducts() {
    return this.products.map(product => 
      `${product.name} - ${product.price}$`
    ).join('\n')
  },
  
  findProduct(name) {
    return this.products.find(product => product.name === name)
  }
}

// Тесты
console.log(store.addProduct("Телефон", 500))
console.log(store.addProduct("Наушники", 100))
console.log(store.showProducts())
console.log(store.findProduct("Телефон")) */
/* 
const store = {
  name: 'Electronics Store',
  inventory: [],
  earnings: 0,

  addProduct(name, price, quantity) {
    this.inventory.push({
      name,
      price,
      quantity
    })
    return this.inventory
  },

  sellProduct(name, quantity) {
    let product = this.inventory.find(invent => invent.name === name)

    if (!product) { return 'Товар не найден' }
    if (product.quantity < quantity) { return 'Недостаточно товара на складе' }

    product.quantity -= quantity
    this.earnings += product.price * quantity
    return `Продано: ${name}, количество: ${quantity}, сумма: ${product.price * quantity}$`
  },

  checkInventory(){
    return this.inventory.map(item => `${item.name} - ${item.quantity} шт. по ${item.price}$`).join(', ')
  },
  
  getEarnings(){
    return `Общая прибыль ${this.earnings}$`
  },
}



console.log(store.addProduct("Ноутбук", 1000, 5));  // Добавляем 5 ноутбуков по $1000
console.log(store.addProduct("Смартфон", 500, 10)); // Добавляем 10 смартфонов по $500
console.log(store.addProduct("Наушники", 100, 15)); // Добавляем 15 наушников по $100
console.log(store.sellProduct("Ноутбук", 2));    // Продаём 2 ноутбука
console.log(store.sellProduct("Смартфон", 15));  // Пытаемся продать 15 смартфонов (должна быть ошибка)
console.log(store.sellProduct("Планшет", 1)); 
console.log(store.sellProduct("Наушники", 5));   // Пытаемся продать несуществующий товар
console.log(store.checkInventory());
console.log(store.getEarnings());   */
/* 

const store = {
  name: "Electronics Store",
  products: [],
  
  // 1. Метод для добавления товара (только название и цена)
  addProduct(name, price) {
   this.products.push({name, price})
   return this.products
  },
  
  // 2. Метод для показа всех товаров
  showProducts() {
    return this.products
  },
  
  // 3. Метод для поиска товара по названию
  findProduct(name) {
    return this.products.find(nam => nam.name === name )
  },
}

// Тесты
console.log(store.addProduct("Телефон", 500))
console.log(store.addProduct("Наушники", 100))
console.log(store.showProducts())
console.log(store.findProduct("Телефон")) */

/* 
const products = {
  items: [{ name: 'Телефон', price: 500 },
  { name: 'Ноутбук', price: 1000 },
  { name: 'Наушники', price: 100 }],

  showNames() {
    return this.items.map(item => item.name)
  },
  showPrice() {
    return this.items.map(item => item.price)
  },

  showInfo() {
    return this.items.map(info => `${info.name} - ${info.price}$`)
  }

}

console.log(products.showNames())
console.log(products.showPrice())
console.log(products.showInfo()) */

/* 
const movies = {
  items: [
    { title: "Inception", director: "Christopher Nolan", year: 2010, rating: 8.8 },
    { title: "The Matrix", director: "Lana Wachowski", year: 1999, rating: 8.7 },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014, rating: 8.6 },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, rating: 9.2 }
  ],

  // 1. Показать все названия фильмов через запятую
  showMovieTitles() {
    // Должно вернуть: "Inception, The Matrix, Interstellar, The Godfather"
    return this.items.map(item => item.title).join(', ')
  },

  // 2. Найти все фильмы после 2000 года
  getMoviesAfter2000() {
    // Должно вернуть массив фильмов после 2000 года
    return this.items.filter(afterYear => afterYear.year > 2000)
  },

  // 3. Посчитать средний рейтинг всех фильмов
  getAverageRating() {
    // Должно вернуть среднее значение rating
    return this.items.reduce((sum, item) => sum + item.rating, 0) / this.items.length 
  }
}

console.log(movies.showMovieTitles())
console.log(movies.getMoviesAfter2000())
console.log(movies.getAverageRating()) */

/* 
const users = {
  items: [
    { name: "John", age: 25, isActive: true, balance: 1000 },
    { name: "Alice", age: 30, isActive: false, balance: 2500 },
    { name: "Bob", age: 22, isActive: true, balance: 800 },
    { name: "Jane", age: 28, isActive: false, balance: 1500 }
  ],

  // 1. Получить только активных пользователей
  getActiveUsers() {
    // Должно вернуть массив только с активными пользователями (isActive: true)
    return this.items.filter(active => active.isActive === true)
  },

  // 2. Получить имена пользователей старше 25 лет
  getNamesAbove25() {
    // Должно вернуть массив имён пользователей старше 25 лет
    return this.items.filter(oldUsers => oldUsers.age > 25)
  },

  // 3. Получить общий баланс всех активных пользователей
  getTotalActiveBalance() {
    // Должно вернуть сумму balance всех активных пользователей
    return this.items.filter(active => active.isActive === true).reduce((sum, user) =>
    sum + user.balance, 0)
  },

  // 4. Получить информацию о каждом пользователе в формате "Имя (возраст) - баланс: сумма$"
  getUsersInfo() {
    // Пример: "John (25) - баланс: 1000$"
    return this.items.map(info => `${info.name} (${info.age}) - баланс: ${info.balance}$`).join(', ')
  }
}

console.log(users.getActiveUsers())
console.log(users.getNamesAbove25())
console.log(users.getTotalActiveBalance())
console.log(users.getUsersInfo()) */
/* 
const students = {
  items: [
    { name: "John", grade: "A", subject: "Math", score: 90 },
    { name: "Alice", grade: "B", subject: "Math", score: 85 },
    { name: "Bob", grade: "A", subject: "Physics", score: 95 },
    { name: "Jane", grade: "C", subject: "Physics", score: 70 }
  ],

  // 1. Получить список всех студентов с оценкой A
  getTopStudents() {
    // Должно вернуть массив студентов с grade: "A"
  },

  // 2. Получить средний балл по каждому предмету
  getAverageBySubject() {
    // Должно вернуть среднее значение score по каждому subject
  },

  // 3. Получить список всех студентов в формате "Имя - Предмет: Оценка"
  getStudentInfo() {
    // Пример: "John - Math: A"
  }
}

console.log(students.getTopStudents())
console.log(students.getAverageBySubject())
console.log(students.getStudentInfo()) */


/* function filter(l) {

 return l.filter(str =>  typeof str === 'number') 
    /*   let newArray = []
      for (let i = 0; i < l.length; i++){
        if (l[i] === 'string'){
            newArray.push(i)
        }
      } */
 /*    let newArray = []
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === "number")
        newArray.push(l[i])

    }
    return newArray */


/* console.log(filter([1, 2, 'abc', 4, 5, 'zxc'])) */
/* 
function yes(num){
   let resultSave = num.toString()
    let array = resultSave.split('')
    let multiply = array.map(multi => multi ** 2).join('')
    return Number(multiply)
}

console.log(yes(3212)) */
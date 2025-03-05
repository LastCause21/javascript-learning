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


// 1. Создайте массив студентов
const students = [
  { name: "John", age: 20, grade: 85 },
  { name: "Alice", age: 22, grade: 75 },
  { name: "Bob", age: 21, grade: 90 },
  { name: "Jane", age: 23, grade: 65 }
];

// 2. Функция для вывода имен всех студентов
function showStudentNames(studentsArray) {
  return studentsArray.map(student => student.name).join(' ')
}

// 3. Функция для получения студентов с оценкой выше 80
function getStudentsAbove80(studentsArray) {
  return studentsArray.filter(student => student.grade > 80)
}

// 4. Функция для получения среднего балла всех студентов
function getAverageGrade(studentsArray) {
  // Ваш код здесь
}


console.log(showStudentNames(students));
 // Должно вывести: "John, Alice, Bob, Jane"
console.log(getStudentsAbove80(students));  // Должно вернуть массив студентов с оценкой выше 80
console.log(getAverageGrade(students));  // Должно вернуть средний балл всех студентов
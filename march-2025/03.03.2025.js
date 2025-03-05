/* 
const car = {
    make: 'BMW',
    model: '21S',
    year: 2000,
    getInfo(){
        return `Car: ${this.make}, ${this.model}, Year: ${this.year}`
    }
}

console.log(car.getInfo()) */

/* 
const person = {
    name: 'Roma',
    age: 25,
    greet(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

console.log(person.name)
console.log(person.age)
person.greet() */

/* 
function Person(name, age){
    this.name = name
    this.age = age
} */

/* 
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
        this.greet = function(){
            console.log(`Hello, my name is ${this.name}`)
        }
    }
}



const Alice = new Person('Alice', 30)
Alice.greet() 

class Car {
    constructor(make, model){
        this.make = make
        this.model = model
    }

    getInfo(){
        return `Car: ${this.make} ${this.model}`
    }
}

const myCar = new Car('Toyota', 'Camry')
console.log(myCar.getInfo()) 


class Bike {
    constructor(brand, type){
        this.brand = brand
        this.type = type
    }

    getInfo(){
        return `Bike: ${this.brand} ${this.type}`
    }
}

const myBike = new Bike('Giant', 'Mountain')
console.log(myBike.getInfo()) 


class Truck {
    constructor(capacity, type){
        this.capacity = capacity
        this.type = type
    }

    getInfo(){
        return `Truck: ${this.capacity} tons, Type: ${this.type}`
    }
}

const newTruck = new Truck(21, 'Big')
console.log(newTruck.getInfo())



const items = []

items.push(new Person('Alice', 30));
items.push(new Car('Toyota', 'Camry'));
items.push(new Bike('Giant', 'Mountain'));
items.push(new Truck(21, 'Big'));

items.forEach(item => {
    if (item.greet){
        item.greet()
    }else if (item.getInfo){
        console.log(item.getInfo())
    }
}) */



/* 
class Contact{
    constructor(name, phone){
        this.name = name
        this.phone = phone
    }

    getInfo(){
        return `Name: ${this.name}\nPhone: ${this.phone}`
    }
}

class ContactList{
    constructor(contacts){
        this.contacts = contacts
    }

    addContact(contact){
        this.contacts.push(contact)
    }

    removeContact(name){
        if (this.name === name){
            delete this.name
        }
    }

    getContacts(){
        return this.contacts
    }
}

const contactList = new ContactList([]); // Инициализируем пустой массив контактов
const contact1 = new Contact('Alice', '123-456-7890');
const contact2 = new Contact('Bob', '987-654-3210');

contactList.addContact(contact1);
contactList.addContact(contact2);

console.log(contactList.getContacts()); // Ожидаемый вывод: [contact1, contact2]
contactList.removeContact('Alice');
console.log(contactList.getContacts()); // Ожидаемый вывод: [contact2] */

/* 
class Task {
    constructor(title, description, completed = false){
        this.title = title
        this.description = description
        this.completed = completed
    }

    getInfo(){
        return `Title: ${this.title}, Description ${this.description}, Completed: ${this.completed}`
    }

    markAsCompleted(){
        this.completed = true
    }
}

class TaskList{
    constructor(tasks){
        this.tasks = tasks
    }

    addTask(task){
        this.tasks.push(task)
    }

    removeTask(title){
        this.tasks = this.tasks.filter(name => name.title !== title)
    }

    getTasks(){
        return this.tasks
    }

    getCompletedTasks(){
        return this.tasks.filter(task => task.completed)
    }
}
const taskList = new TaskList([]);
const task1 = new Task('Buy groceries', 'Milk, Bread, Eggs');
const task2 = new Task('Clean the house', 'Living room and kitchen');

taskList.addTask(task1);
taskList.addTask(task2);

console.log(taskList.getTasks()); // Ожидаемый вывод: [task1, task2]

task1.markAsCompleted();
console.log(task1.getInfo()); // Ожидаемый вывод: "Title: Buy groceries, Description: Milk, Bread, Eggs, Completed: true"

console.log(taskList.getCompletedTasks()); // Ожидаемый вывод: [task1] */


/* 
class Book {
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year 
    }
    getInfo(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}

const myBook = new Book('1984', 'George Orwell', 1949)
const myBook2 = new Book('Son', 'Ness', 2005)
console.log(myBook.getInfo())
console.log(myBook2.getInfo()) */


/* const ERR0R_ZERO_DIVIDE = "Ошибка: деление на ноль!"

class Calculator {
    add(a, b) {
        return a + b
    }
    subtract(a, b) {
        return a - b
    }
    multiply(a, b){
        return a * b
    }
    divide(a, b){
        if (b === 0){
            return ERR0R_ZERO_DIVIDE
        }
        return a / b
    }
}

const calculator = new Calculator()
console.log(calculator.add(5, 3)) */

/* 
class Calculator {

    add(a, b) {
        return a + b
    }

    subtract(a, b) {
        return a - b
    }

    multiply(a, b) {
        return a * b
    }

    divide(a, b) {
        if (b === 0) {
            return 'Ошибка деление на ноль';
        }
        return a / b
    }
}

const calculator1 = new Calculator()
console.log(calculator1.add(10, 5)) 
console.log(calculator1.divide(10, 5)) 



class AdvancedCalculator{

    sqrt(a){
        return Math.sqrt(a)
    }

    power(a, b){
        return a ** b
    }

}

const advancedCalculator = new AdvancedCalculator()
console.log(advancedCalculator.sqrt(10))
console.log(advancedCalculator.power(10, 5)) */

/* 

class ScientificCalculator {
    
    sin(a) {
        return Math.sin(a)
    }
    cos(a){
        return Math.cos(a)
    }
    tan(a){
        return Math.tan(a)
    }
}

const scientificCalculator = new ScientificCalculator()
console.log(scientificCalculator.sin(Math.PI / 2)); // Ожидаемый вывод: 1
console.log(scientificCalculator.cos(0)); // Ожидаемый вывод: 1
console.log(scientificCalculator.tan(Math.PI / 4)); */


/* 
class UI_Calculator {

    add(a, b) {
        return a + b
    }
    subtract(a, b) {
        return a - b
    }
    multiply(a, b) {
        return a * b
    }
    divide(a, b) {
        if (b === 0) {
            return 'Деление на ноль ошибка'
        }
        return a / b
    }

    start() {
        const userInputOperation = prompt(
            'Введите операцию которую хотите выполнить(add,subtract,multiply,divide )'
        )
        const number1 = Number(prompt('Введите первое число:'))
        const number2 = Number(prompt('Введите второе число:'))

        let result;

        switch (userInputOperation) {
            case 'add':
                result = this.add(number1, number2)
                break
            case 'subtract':
                result = this.subtract(number1, number2)
                break
            case 'multiply':
                result = this.multiply(number1, number2)
                break
            case 'divide':
                result = this.divide(number1, number2)
                break
            default:
                console.log('Неизвестная операция');
                return;
        }

        console.log(`Результат ${userInputOperation} чисел (${number1}) и (${number2}) = ${result}`)

    }
}

const viCalculator = new UI_Calculator()
viCalculator.start()


class HistoryCalculator{

    addToHistory(operation, number1, number2, result){

    }
} 
 */
/* 

class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    speak(){
        console.log(`${this.name} издает звук.`)
    }
}

const dog = new Animal('Bag', 5)
dog.speak()


class Dog extends Animal {
    speak() {
        console.log(`${this.name} говорит: Гав!`)
    }
}

const myDog = new Dog('Бобик', 3)
myDog.speak()r */
/* 
class Animal {
    constructor (name, age){
        this.name = name
        this.age = age
    }

    speak(){
        console.log(`${this.name} издает звук.`)
    }
} */

/* 
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        console.log(`${this.name} makes a sound.`)
    }
}

const dog = new Animal('Buddy', 5)
dog.speak()

class Dog extends Animal {
    speak(){
        console.log(`${this.name} says: Woof!`)
    }
}

const myDog = new Dog('Max', 3)
myDog.speak()


class Cat extends Animal {
    speak() {
        console.log(`${this.name} says: Meow!`)
    }
}

const myCat = new Cat('Whiskers', 2)
myCat.speak() */


/* 
function createAnimal(name, age){

    return {
        name: name,
        age: age,
        speak(){
            console.log(`${this.name} speak`)
        }
    }
}

const bob = createAnimal('bob', 5)
bob.speak()
console.log(createAnimal('Bob', 5)) */

/* 
class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    speak(){
        console.log(`Dog ${this.name} says: Woof`)
    }
}

const myDog = new Animal('Bob', 5)
myDog.speak()


class Dog extends Animal {
    speak(){
        console.log(`Dog ${this.name} says: Woof!`)
    }
}

const myDog2 = new Dog('Marl', 5)
myDog2.speak()

class Cat extends Animal {
    speak(){
        console.log(`Cat ${this.name} says: Meow!`)
    }
}

const myCat = new Cat('Lis', 3)
myCat.speak() */

/* 
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    speak() {
        console.log(`${this.name} makes a sound.`)
    }
}


class Dog extends Animal{
    speak(){
        super.speak()
        console.log(`${this.name} says: Woof!`)
    }
}

class Cat extends Animal{
    speak(){
        super.speak()
        console.log(`${this.name} says: Meow!`)
    }
}

const myAnimal = new Animal('Ford', 3)
myAnimal.speak()

const myAnimal2 = new Dog('Fow', 5)
myAnimal2.speak()

const myAnimal3 = new Cat('Mor', 7)
myAnimal3.speak()


class HistoryAnimal extends Animal {
    constructor(name, age){
        super(name, age);
        this.history = []
    }

    speak(){
        const sound = `${this.name} makes a sound.`
        this.history.push(sound)
        console.log(sound)
    }

    showHistory(){
        console.log(`History of sounds for ${this.name}:`)
        this.history.forEach((sound, index) => {
            console.log(`${index + 1}: ${sound}`)
        })
    }
}

const myHistoryAnimal = new HistoryAnimal('Charlie', 4);
myHistoryAnimal.speak(); // Charlie makes a sound.
myHistoryAnimal.speak(); // Charlie makes a sound.
myHistoryAnimal.showHistory(); // Выводит историю звуков */

/* 
class ArrayUtils {
    static findMax(array) {
        if (array.length === 0) {
            return null
        }

        let minNumber = array[0]
        let maxNumber = array[0]
        for (let i = 0; i < array.length; i++) {
            if (maxNumber < array[i])
                maxNumber = array[i]
        }
        for (let j = 0; j < array.length; j++) {
            if (minNumber > array[j]) {
                minNumber = array[j]
            }
        }
        return `Максимальное число ${maxNumber}\nМинимальное число ${minNumber}`
    }

}


const numbers = [3, 5, 7, 2, 8]
console.log(ArrayUtils.findMax(numbers)) */

/* 
function positiveSum(number) {
    let sumPositiveNumber = 0
    for (let i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            sumPositiveNumber += number[i]
        }
    }
    return sumPositiveNumber
}

console.log(positiveSum([1, -2, 3, 4])) */

/* 
function stringToArray(str){
    return str.split(' ')
}

console.log(stringToArray('I love coding')) */

/* 
function removeSmallest(num) {

    return num.filter(number => number !== Math.min(...num))
}

console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([5, 3, 2, 1, 4])) */
/* 
function countPositivesSumNegatives(num) {

    if (num.length === 0) {return num}
    
    let positiveNumber = num.filter(number => number > 0)
    let NegativeNumber = num.filter(number => number < 0)
    let counter = 0
    let newArray = []
    let sumForNegativeNumber = 0
    
    for (let i = 0; i < positiveNumber.length; i++){   // Количество положительных чисел цикл 3 штуки 
        counter++
    }

   
    for (let j = 0; j < NegativeNumber.length; j++){
        sumForNegativeNumber += NegativeNumber[j]
    }
    let result = newArray.push(counter, sumForNegativeNumber)
    return newArray


}

console.log(countPositivesSumNegatives([1, 2, 3, -1, -2])) */


/* function findSmallestInt(num){
    return Math.min(...num)
}

console.log(findSmallestInt([34, 15, 88, 2])) */

/* 
function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString('hello')) // olleh */


/* 
function booleanToString(bol) {
    if (bol) {
        return 'true'
    } else {
        return 'false'
    }
}

console.log(booleanToString(true))
console.log(booleanToString(false)) */

/* 
function getCount(str) {

    const word = 'aeiou';
    let newArray = str.split('')
    let counter = 0

    for (let i = 0; i < newArray.length; i++) {
        if (word.includes(newArray[i])) {
            counter++
        }
    }
    return counter
}

console.log(getCount('aeiou'))
console.log(getCount('hello world')) */

/* 
function findUniq(numbers){
    
    newArray = []
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] === numbers[i + 1] || numbers[i] === numbers[i + 2]){

        }
    }
} */

/* 
function countLetters(str) {
    
    const letterCount = {}
    for (let char of str){

    }
}   

console.log(countLetters('hello')) */

/* 
function createObject(arr){
    
    const result = {}

    for (let i = 0; i < arr.length; i++){
        const str = arr[i]
        result[str] = str.length
    }
    return result
}

console.log(createObject(["apple", "banana", "cherry"])); // Ожидаемый вывод: { apple: 5, banana: 6, cherry: 6 } */


/* 
function countWords(words) {

    let emptyObj = {}
    let newSplitWords = words.split(' ')

    for (let i = 0; i < newSplitWords.length; i++) {
        const newWords = newSplitWords[i]
        if (emptyObj[newWords]) {
            emptyObj[newWords] += 1
        } else {
            emptyObj[newWords] -= 1
        }

        return emptyObj

    }
}
    console.log(countWords('hello world hello')) */

/* 
    function countWords(words) {
        let emptyObj = {}; // Создаем пустой объект для хранения слов и их количества
        let newSplitWords = words.split(' '); // Разделяем строку на слова по пробелам
        
        for (let i = 0; i < newSplitWords.length; i++) {
            const newWords = newSplitWords[i]; // Получаем текущее слово
            // Проверяем, есть ли слово в объекте
            if (emptyObj[newWords]) {
                emptyObj[newWords] += 1; // Увеличиваем счетчик, если слово уже есть
            } else {
                emptyObj[newWords] = 1; // Инициализируем счетчик, если слово встречается впервые
            }
        }
        
        return emptyObj; // Возвращаем объект с подсчетом слов
    }
    
    // Примеры использования
    console.log(countWords('hello world hello')); // Ожидаемый вывод: { hello: 2, world: 1 }
    console.log(countWords('apple banana apple orange')); // Ожидаемый вывод: { apple: 2, banana: 1, orange: 1 } */

/* 
function countLetters(letter){

    let emptyObj = {}
    let splitLetters = letter.split('')
    
    for (let i = 0; i < splitLetters.length; i++){
        const newLetter = splitLetters[i]
        if (emptyObj[newLetter]){
            emptyObj[newLetter] += 1
        }else{
            emptyObj[newLetter] = 1
        }
    }
    return emptyObj

}
console.log(countLetters('Hello World')) */

/* 
function wordFrequency(str){

    let emptyObj = {}

    for (let i = 0; i < str.length; i++){
        let newStr = str[i]
        if (emptyObj[newStr]){
            emptyObj[newStr] += 1
        }else{
            emptyObj[newStr] = 1
        }
    }
    return emptyObj

}

console.log(wordFrequency(["apple", "banana", "apple", "orange", "banana", "banana"])) */

/* 
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
}

const person1 = new Person('Alice', 30)
console.log(person1.greet())
 */
/* 
class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    getInfo() {
        return `Car: ${this.make}-${this.model}, Year: ${this.year}`
    }
}

class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity) {
        super(make, model, year)
        this.batteryCapacity = batteryCapacity

    }

    getBatteryInfo() {
        return `Battery capacity ${this.batteryCapacity} kWh`

    }
}

class HybridCar extends ElectricCar {
    constructor(make, model, year, batteryCapacity, fuelType) {
        super(make, model, year, batteryCapacity)
        this.fuelType = fuelType
    }
    getFuelInfo() {
        return `Fuel type: ${this.fuelType}`
    }
}

const myHybridCar = new HybridCar('Toyota', 'Prius', 2021, 50, 'petrol')
console.log(myHybridCar.getFuelInfo()) */

/* 
class Library {
    constructor(){
        this.books = []
    }

    addBook(book){
        this.books.push(book)
    }

    getBooks(){
        return this.books
    }
}
const myLibrary = new Library()
myLibrary.addBook({ title: "1984", author: "George Orwell" });
myLibrary.addBook({ title: "The Hobbit", author: "J.R.R. Tolkien" });
console.log(myLibrary.getBooks()) */

/* 
class TaskManager{
    constructor(title, completed){
        this.title = title
        this.completed = completed
    }

    addTask(title){

    }
} */
/* 
class TaskManager {
    constructor() {
        this.tasks = []
    }

    addTask(title) {
        const newTask = { title: title, completed: false }
        this.tasks.push(newTask)
    }

    removeTask(title) {
        this.tasks = this.tasks.filter(task => task.title !== title)
    }
    getTasks() {
        return this.tasks
    }

    completeTask(title){
        const task = this.tasks.find(task => task.title === title)

        if(task) {
            task.completed = true
        }
    }
}

const taskManager = new TaskManager();
taskManager.addTask("Buy groceries");
taskManager.addTask("Clean the house");
console.log(taskManager.getTasks()); 
// Ожидаемый вывод: [{ title: "Buy groceries", completed: false }, { title: "Clean the house", completed: false }]

taskManager.completeTask("Buy groceries");
console.log(taskManager.getTasks()); 
// Ожидаемый вывод: [{ title: "Buy groceries", completed: true }, { title: "Clean the house", completed: false }]

taskManager.removeTask("Clean the house");
console.log(taskManager.getTasks());  */



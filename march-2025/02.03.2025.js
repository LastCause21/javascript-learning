/* const shop = {
    name: 'LoL',
    
    products: [{
        name: 'Milk',
        id: '21D',
        price: 45,
        quantity: 5, 
    }],


    addProduct(product){
        return this.products.name = product
    },

    sellProduct(sell){
        
    }


}

console.log(shop.addProduct('Apple')) */


/* 
const car = {
    make: 'BMW',
    model: '21R',
    year: 2000,

    getInfo() {
        return `Mark: ${this.make}, Model: ${this.model}, Year: ${this.year}`
    },

    updateYear(newYear) {
        return this.year = newYear
    },

    updateModel(newModel) {
        return this.model = newModel
    }

} */
/* 
const person = {
    name: 'Roman',
    age: 24,
    city: 'Kaliningrad',
    address: {
        street : 'Auto21',
        postalCode: 280302,
    },

    getAddress(){
        return `Street: ${this.address.street}, postalCode: ${this.address.postalCode}`
    },

    getInfo(){
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}, ${this.occupation}`
    }
}

console.log(person.name)
person.age = 25
console.log(person.age)
console.log(person.city)
person['occupation'] = 'Программист'
console.log(person)
console.log(person.getAddress()) */

/* 
const classroom = {
    subject: 'Математика',
    students: [

    ],

    addStudent(name, age){
        this.students.push({name, age})
        return this.students
    },

    getStudents(){
        return `Students ${this.students}`
    }
}

console.log(classroom.addStudent('Roma', 23)) */

/* 
function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
}

Book.prototype.getInfo = function (){
    return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`
}

const myBook = new Book('1984', 'Джордж Оруэлл', 1949)
console.log(myBook.getInfo())
const myBook2 = new Book('Война и мир', 'Лев Толстой', 1869)
console.log(myBook2.getInfo()) */

/* 
const student = {
    // Ваши свойства здесь
    // Ваши методы здесь
    name: 'Roman',
    age: 21,
    grades: [4, 5, 2, 1, 3],

    getAverageGrade(){
        return this.grades.reduce((sum, item) => sum + item, 0) / this.grades.length
    },
};

console.log(student.getAverageGrade()) */
/* 
const classroom = {
    subject: 'Математика',
    students: [
        // Ваши студенты здесь
    ],
    getStudentNames() {
        
    }
}; */


/* 
function Animal(name, sound) {
    // Ваши свойства здесь
    this.name = name
    this.sound = sound
}

// Добавьте метод makeSound к прототипу
Animal.prototype.makeSound = function() {
    // Ваш код здесь

};

function Dog(name, sound, breed) {
    // Вызов конструктора родителя
    // Ваши свойства здесь
}

// Установите прототип
// Добавьте метод getInfo к прототипу Dog */

/* 
const Animal = {
    name: 'Животное',
    speak (){
        console.log(`${this.name} издает звук.`)
    }
}

Animal.speak()

const Dog = Object.create(Animal);
Dog.breed = 'Овчарка'
Dog.speak = function(){
    console.log(`${this.breed} говорит: Гав!`)
}
Dog.speak() */

/* 
const Vehicle = {
    type: 'Транспортное средство',
    describe() {
        console.log(`Это ${this.type}.`)
    }
}
Vehicle.describe()

const Car = Object.create(Vehicle);
Car.brand = 'Toyota'
Car.describe = function(){
    console.log(`Это ${this.brand} - ${this.type}.`)
}

Car.describe() */
/* 
const Animal = {
    name: 'Животное',
    speak: function () {
        console.log(`${this.name} издает звук.`)
    }
}

const Dog = Object.create(Animal)
Dog.name = 'Собака'

Dog.speak = function(){
    console.log(`${this.name} говорит: Гав!`)
}

Dog.speak() */

/* const Person = {
    name: 'Mike',
    age: 30,

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    },
};

Person.introduce()

const Student = Object.create(Person)
Student.major = 'Computer Science'
Student.name = 'John'
Student.age = 25

Student.introduce = function(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I study ${this.major}.`);

}
Student.introduce()


const Teacher = Object.create(Person)
Teacher.subject = 'Mathematics'
Teacher.name = 'Alice'
Teacher.age = 40

Teacher.introduce = function (){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I teach ${this.subject}.`);

}

const Admin = Object.create(Person)
Admin.permissions = 'all'
Admin.name = 'Bob'
Admin.age = 35

Admin.introduce = function(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I have ${this.permissions} permissions.`);

}
Teacher.introduce()
console.log(Person)
Admin.introduce() */
/* 
const Shape = {
    type: 'Фигура',
    getType() {
        console.log(`This is a ${this.type}.`)
    }
}
Shape.getType()

const Circle = Object.create(Shape)
Circle.radius = 5

Circle.getArea = function(){
    return Math.PI * this.radius * this.radius
}

const Rectangle = Object.create(Shape)
Rectangle.width = 15
Rectangle.height = 10

Rectangle.getArea = function(){
    return this.width * this.height
}

console.log(Rectangle.getArea())

console.log(Circle.getArea()) */

/* 
const Person = {
    name: 'Mike',
    age: 56,
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const Employee = Object.create(Person)
Employee.position = 'TeamLead'
Employee.introduce = function () {
    console.log(`Hello, my name is ${this.name} my introduce ${this.position} and I am ${this.age} years old.`)

}

const Manager = Object.create(Employee)
Manager.teamSize = 10
Manager.introduce = function(){
    console.log(this.teamSize)
}
Manager.introduce() */

/* 
const Person = {
    name: 'Mike',
    age: 56,
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const Employee = Object.create(Person)
Employee.position = 'TeamLead'
Employee.introduce = function(){
    return `${Person.introduce.call(this)} My position is ${this.position}.`
}

const Manager = Object.create(Employee)
Manager.teamSize = 10
Manager.introduce = function(){
    return `${Person.introduce.call(this)} I manage a team of ${this.teamSize} people`
}

console.log(Manager.introduce()) */
/* 
const Animal = {
    species: 'Unknown',
    makeSound() {
        console.log('Some sound')
    }
}

const Dog = Object.create(Animal)
Dog.name = 'Groom'
Dog.sound = 'Gav'
Dog.makeSound = function () {
    console.log(`Some sound ${this.name} ${this.sound}`)
}

const Cat = Object.create(Animal)
Cat['Name'] = 'Mark'
Cat.makeSound = function () {
    console.log(`Some sound ${this.name} - 'Мяу'`)
}

const Bird = Object.create(Animal)
Bird.name = 'Lulu'
Bird.say = 'Чик-Чирик'
Bird.makeSound = function(){
    console.log(`${this.name} ${this.say}`)
}

Dog.makeSound() */


/* 
const MovieLibrary = {
    name: 'MovieHouse',
    movies: [],

    addMovie(title, director){
        this.movies.push({title, director})
    },

    listMovies(){
        this.movies.forEach(movie => {
            console.log(`${movie.title} - ${movie.director}`)
        })
    }
}

MovieLibrary.addMovie('Inception', 'Christopher Nolan');
MovieLibrary.addMovie('The Matrix', 'Lana Wachowski, Lilly Wachowski');
MovieLibrary.addMovie('Interstellar', 'Christopher Nolan');
MovieLibrary.listMovies();  */
/* 
const Library = {
    name: 'General Library',
    items: [],

    addItem(title, author){
        this.items.push({title, author})
    },

    listItems(){
    this.items.forEach(item => {
        console.log(`${item.title} - ${item.author}`)
    })  
    },
}

const MusicLibrary = Object.create(Library)
MusicLibrary.addItem = function (title, artist){
    this.items.push({title, author: artist})
}

MusicLibrary.addItem('Bohemian Rhapsody', 'Queen');
MusicLibrary.addItem('Stairway to Heaven', 'Led Zeppelin');
MusicLibrary.listItems();  */

/* 
function sumTwoSmallestNumbers(numbers) {  
    // Code here
    let newMinimalNumbers = 0
    let newArray = []
    let minNumber = numbers[0] // тут будет 5 первое минимальное число
    let minNumber2 = numbers[1]
    for (let i = 0; i < numbers.length; i++){
        if (minNumber > numbers[i]){
            minNumber = numbers[i]
        }
        for (let j = numbers.length - 1; j >= 0; j--){
            if (minNumber2 > numbers[j]){
                minNumber2 = numbers[j]
            }
        }
       
    }


    
    return `${minNumber} ${minNumber2}`

}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13  // Сумму двух минимальных чисел
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) //6 */

/* 
const Library = {
    name: 'General Library',
    items: [],
    
    addItem(title, author) {
        this.items.push({ title, author });
    },
    
    listItems() {
        this.items.forEach(item => {
            console.log(`${item.title} - ${item.author}`);
        });
    }
};

const BookLibrary = Object.create(Library);
BookLibrary.addItem = function(title, author){
    this.items.push({title, author})
}


BookLibrary.addItem('1984', 'George Orwell');
BookLibrary.addItem('To Kill a Mockingbird', 'Harper Lee');
BookLibrary.listItems();  */

/* 
const User = {
    name: 'John',
    age: 23,
    email: 'Lol@',
    introduce() {
        console.log(`Привет, меня зову ${this.name}, мне ${this.age} лет, и моя почта ${this.email}`)
    },

    isAdult() {
        if (this.age > 18) {
            return true
        } else {
            return false
        }
    }
}


const user = new User('Alice', 25, 'alice@example.com');
user.introduce(); // Ожидаемый вывод: "Привет, меня зовут Alice, мне 25 лет, и моя почта alice@example.com."
console.log(user.isAdult());
 */
/* 
function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year

    this.getInfo = function (){
        return `Марка: ${this.make}, Модель: ${this.model}, Год: ${this.year}`;
    }

    this.isClassic = function(){
        const currentYear = new Date().getFullYear()
        return (currentYear - this.year) > 20
    }
}

const myCar = new Car('Frod', 'Mustang', 1967)
console.log(myCar.getInfo())
console.log(myCar.isClassic()) */
/* 
function Book(title, author, year) {

    this.title = title
    this.author = author
    this.year = year

    this.getDetails = function () {
        return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`
    }

    this.isClassic = function () {
        const newYear = new Date().getFullYear()
        return (newYear - this.year) > 50
    }
}



const myBook = new Book('1984', 'George Orwell', 1949);
console.log(myBook.getDetails())
console.log(myBook.isClassic()) */
/* 

function Movie(title, director, year){
    
    this.title = title
    this.director = director
    this.year = year

    this.getDetails = function(){
        return `Название: ${this.title}\nРежиссёр: ${this.director}\nГод: ${this.year}`
    }

    this.isClassic = function(){
        const newYear = new Date().getFullYear()
        return (newYear - this.year) > 30
    }
}

const myMovie = new Movie('The Godfather', 'Francis Ford Coppola', 1972)
console.log(myMovie.getDetails())
console.log(myMovie.isClassic())
 */

/* 
function Album(title, artist, year){
    this.title = title
    this.artist = artist
    this.year = year

    this.getDetails = function(){
        return `Название: ${this.title}\nИсполнитель: ${this.artist}\nГод: ${this.year}`
    }

    this.isClassic = function(){
        const newYear = new Date().getFullYear()
        return (newYear - this.year) > 20
    }
}

const myAlbum = new Album('Thriller', 'Michael Jackson', 1982) */


/* 
function Library(name, items){
    this.name = name
    this.items = []

    this.addItem = function(item){
        this.items.push(item)
    }
    this.listItem = function(){
        console.log(`Title: ${this.title}\n Author/Director ${this.author, this.director}\n Year: ${this.year}`)
    }
}

const myLibrary = new Library('City Library');
myLibrary.addItem(new Book('1984', 'George Orwell', 1949));
myLibrary.addItem(new Movie('Inception', 'Christopher Nolan', 2010));
myLibrary.listItems();  */

/* 
function Person(name, age){
    this.name = name
    this.age = age
    this.great = function(){
        console.log(`Hello, my name is ${this.name} ${this.age} year old `)
    }
}

const alice = new Person('Alice', 30)
console.log(alice.great()) */

/* 
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    getInfo: function(){
        return `Car: ${this.make} ${this.model}, Year: ${this.year}`
    }
}

console.log(car.getInfo()) */
/* 
function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
    this.getDetails = function(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}

const myBook = new Book('1984', 'George Orwell', 1949)
console.log(myBook.getDetails()) */
/* 
const dog = {
    name: 'Buddy',
    age: 5,
    bark: function() {
        console.log('Woof!');
    }
};

dog.age = 6
console.log(dog.age)
// Использование объекта
console.log(dog.name); // Ожидаемый вывод: "Buddy"
console.log(dog.age);  // Ожидаемый вывод: 5
dog.bark();            // Ожидаемый вывод: "Woof!" */



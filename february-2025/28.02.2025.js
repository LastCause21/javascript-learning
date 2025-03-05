// /* const students = {
//     items: [
//         { name: 'John', grade: 'A', subject: 'Math', score: 90 },
//         { name: 'Alice', grade: 'B', subject: 'Math', score: 85 },
//         { name: 'Bob', grade: 'A', subject: 'Physics', score: 95 },
//         { name: 'Jane', grade: 'C', subject: 'Physics', score: 70 },
//     ],

//     getTopStudents() {
//         return this.items.filter(student => student.grade === 'A' )
//     },

//     getAverageBySubject(){
//         let resultSearchMath = this.items.filter(sub => sub.subject === 'Math')
//         let resultSearchPhysics = this.items.filter(sub => sub.subject === 'Physics')
//         let averageResultMath = resultSearchMath.reduce((sum, sco) => sum + sco.score, 0) / resultSearchMath.length
//         let averageResultPhysics = resultSearchPhysics.reduce((sum, sco) => sum + sco.score, 0) / resultSearchPhysics.length
//         return `Average Math Point: ${averageResultMath}\nAverage Physics Point: ${averageResultPhysics}`
//     },

//     getStudentsInfo(){
//         return this.items.map(item => `${item.name} - ${item.subject}: ${item.grade}`).join(', ')
//     },
// }

// console.log(students.getTopStudents())
// console.log(students.getAverageBySubject())
// console.log(students.getStudentsInfo()) */

// /*
// const school = {
//     classes: [
//         {
//             name: "1A",
//             students: [
//                 { name: "John", grades: [5, 4, 5, 3] },
//                 { name: "Alice", grades: [4, 5, 5, 5] },
//                 { name: "Bob", grades: [3, 3, 4, 5] }
//             ]
//         },
//         {
//             name: "1B",
//             students: [
//                 { name: "Mary", grades: [5, 5, 5, 4] },
//                 { name: "Tom", grades: [4, 4, 3, 5] },
//                 { name: "Kate", grades: [5, 4, 5, 5] }
//             ]
//         }
//     ],

//     // 1. Получить средний балл каждого класса
//     getClassesAverages() {

//         return this.classes.map(cls => {
//             const allGrades = cls.students.flatMap(student => student.grades)
//         })

//     },

//     // 2. Найти отличников в каждом классе (средний балл >= 4.5)
//     getTopStudents() {
//         // Должно вернуть массив имен отличников с указанием класса
//         // Например: ["Alice (1A)", "Mary (1B)", "Kate (1B)"]
//     },

//     // 3. Посчитать количество пятёрок в каждом классе
//     countTopGrades() {
//         // Должно вернуть количество пятёрок для каждого класса
//         // "1A: 5 пятёрок"
//         // "1B: 7 пятёрок"
//     }
// }

// console.log(school.getClassesAverages())
// console.log(school.getTopStudents())
// console.log(school.countTopGrades()) */


// /*
// const shop = {
//     items: [
//         { category: "Фрукты", products: [
//             { name: "Яблоко", price: 100 },
//             { name: "Банан", price: 80 },
//             { name: "Апельсин", price: 120 }
//         ]},
//         { category: "Овощи", products: [
//             { name: "Морковь", price: 45 },
//             { name: "Картофель", price: 35 },
//             { name: "Огурец", price: 60 }
//         ]}
//     ],

//     // 1. Получить все названия продуктов
//     getAllProducts() {
//         return this.items.products
//         // Должно вернуть: ["Яблоко", "Банан", "Апельсин", "Морковь", "Картофель", "Огурец"]
//     },

//     // 2. Получить все продукты дороже 50
//     getExpensiveProducts() {
//         // Должно вернуть массив названий продуктов, которые дороже 50
//     },

//     // 3. Получить список категорий и количество продуктов в них
//     getCategoryInfo() {
//         // Должно вернуть:
//         // "Фрукты: 3 продукта"
//         // "Овощи: 3 продукта"
//     }
// }

// console.log(shop.getAllProducts())
// console.log(shop.getExpensiveProducts())
// console.log(shop.getCategoryInfo()) */

// /*
// const fruits = {
//     items: [
//         { name: "Яблоко", price: 100 },
//         { name: "Банан", price: 80 },
//         { name: "Апельсин", price: 120 },
//         { name: "Манго", price: 200 }
//     ],

//     // 1. Получить массив только с названиями
//     getNames() {
//         // Должно вернуть: ["Яблоко", "Банан", "Апельсин", "Манго"]
//         return this.items.map(na => na.name)
//     },

//     // 2. Получить массив цен с добавлением знака валюты
//     getPrices() {
//         // Должно вернуть: ["100₽", "80₽", "120₽", "200₽"]
//         return this.items.map(add => `${add.price}P`)
//     },

//     // 3. Получить массив строк в формате "Название - цена₽"
//     getInfo() {
//         // Должно вернуть: ["Яблоко - 100₽", "Банан - 80₽", ...]
//         return this.items.map(all => `${all.name} - ${all.price}P`)
//     }
// }

// console.log(fruits.getNames())
// console.log(fruits.getPrices())
// console.log(fruits.getInfo()) */

// /*
// const store = {
//     items: [
//         { name: "Футболка", price: 1000, quantity: 5 },
//         { name: "Джинсы", price: 3000, quantity: 3 },
//         { name: "Носки", price: 200, quantity: 10 },
//         { name: "Куртка", price: 5000, quantity: 2 }
//     ],

//     // 1. Посчитать общее количество всех товаров
//     getTotalQuantity() {
//         let total = 0;
//         for (let item of this.items){
//             total += item.quantity
//         }
//         return total;
//     },

//     // 2. Посчитать общую стоимость всех товаров (price * quantity)
//     getTotalPrice() {
//         let total = 0;
//         for (let i = 0; i < this.items.length; i++){
//             total += i.price * i.quantity
//         }
//         return total;
//     },

//     // 3. Найти самый дорогой товар
//     getMostExpensive() {
//         // Используйте for...of цикл
//         // Верните название самого дорогого товара
//     }
// }

// console.log(store.getTotalQuantity())  // Должно вернуть: 20
// console.log(store.getTotalPrice())     // Должно вернуть: 19000
// console.log(store.getMostExpensive())  // Должно вернуть: "Куртка" */

// /*
// const numbers = {
//     items: [10, 20, 30, 40, 50],

//     // 1. Посчитать сумму всех чисел
//     getSum() {
//         let sum = 0;
//         for (let item of this.items){
//             sum += item
//         }
//         return sum;
//     },

//     // 2. Найти самое большое число
//     getMax() {
//         let max = this.items[0];
//         for (let i = 0; i < this.items.length; i++){
//             if (this.items[i] > max){
//                 max = this.items[i]
//             }
//         }
//         return max;
//     },

//     // 3. Посчитать количество чисел больше 30
//     countBigNumbers() {
//         let count = 0;
//         for (let number of this.items){
//             if (number > 30){
//                 count++
//             }
//         }
//         return count;
//     }
// }

// console.log(numbers.getSum())          // Должно вернуть: 150
// console.log(numbers.getMax())          // Должно вернуть: 50
// console.log(numbers.countBigNumbers()) // Должно вернуть: 2 */

// /*
// const words = {
//     items: ["hello", "world", "javascript", "code", "programming"],

//     // 1. Посчитать количество букв во всех словах
//     getLettersCount() {
//         let splitArrayOn = this.items.toString().split('')
//         let count = 0
//         for (word of splitArrayOn){
//             count++
//         }
//         return count
//         // Используйте for...of
//     },

//     // 2. Найти самое длинное слово
//     getLongestWord() {
//         let maxWord = this.items[0]
//         for (let i = 0; i < this.items.length; i++){
//             if(maxWord < this.items[i]){
//                 maxWord = this.items[i]
//             }
//         }
//         return maxWord
//     }
// }
// console.log(words.getLettersCount(words))
// console.log(words.getLongestWord(words)) */
// /*

// const grades = {
//     items: [85, 92, 78, 95, 60, 88, 82],

//     // 1. Посчитать средний балл
//     getAverage() {
//         // Сумма всех оценок / количество оценок
//         let sum = 0
//         for(let i = 0; i < this.items.length; i++){
//             sum += this.items[i]
//         }
//         return sum / this.items.length
//     },

//     // 2. Посчитать количество оценок выше 85
//     getHighGrades() {
//         let count = 0
//         for (let item of this.items){
//             if(item > 85){
//                 count++
//             }
//         }
//         return count
//         // Подсчитать количество оценок > 85
//     }
// }
// console.log(grades.getAverage(grades))
// console.log(grades.getHighGrades(grades)) */

// /*
// const students = {
//     items: [
//         { name: "Иван", grade: 85 },
//         { name: "Мария", grade: 92 },
//         { name: "Алексей", grade: 78 },
//         { name: "Елена", grade: 95 },
//         { name: "Дмитрий", grade: 60 }
//     ],

//     // 1. Найти студента с самой высокой оценкой
//     getBestStudent() {
//         // Должно вернуть имя лучшего студента
//         let maxGradeStudent = 0
//         let nameMax = ''
//         for (let item of this.items){
//             if (item.grade > maxGradeStudent){
//                 maxGradeStudent = item.grade
//                 nameMax = item.name
//             }
//         }
//         return nameMax + ' балл: ' + maxGradeStudent
//     },

//     // 2. Посчитать средний балл всех студентов
//     getAverageGrade() {
//         return `Средний бал всех студентов = ${this.items.reduce((sum, iter) => sum + iter.grade, 0) / this.items.length}`
//         // Должно вернуть среднее значение всех grade
//     },

//     // 3. Получить список студентов с оценкой выше 80
//     getGoodStudents() {
//         // Должно вернуть массив имён студентов с grade > 80
//         let arrayNameStudents = ''
//         for (let item of this.items){
//             if (item.grade > 80 ){
//                 arrayNameStudents +=item.name + ' '
//             }
//         }
//         return arrayNameStudents
//     }
// }

// console.log(students.getBestStudent())    // "Елена"
// console.log(students.getAverageGrade())   // 82
// console.log(students.getGoodStudents())   // ["Иван", "Мария", "Елена"] */

// /*
// const school = {
//     classes: [
//         {
//             name: "1A",
//             students: ["Иван", "Мария", "Петр"]
//         },
//         {
//             name: "1B",
//             students: ["Алексей", "Елена", "Дмитрий"]
//         },
//         {
//             name: "1C",
//             students: ["Анна", "Павел"]
//         }
//     ],

//     // 1. Посчитать общее количество студентов во всех классах
//     getTotalStudents() {
//         // Должно вернуть общее число студентов (8)
//         let count = 0
//         for (let student of this.classes){
//             count += student.students.length
//         }
//         return count
//     },

//     // 2. Получить список всех студентов через запятую
//     getAllStudents() {
//         // Должно вернуть строку со всеми именами
//         let newArrayName = []
//         for (let allName of this.classes){
//             newArrayName += allName.students.join(', ') + ', '
//         }
//         return newArrayName
//     }

// }

// console.log(school.getTotalStudents())  // 8
// console.log(school.getAllStudents())    // "Иван, Мария, Петр, Алексей, Елена, Дмитрий, Анна, Павел"

// console.log(school.classes) */
// /*
// const student = {
//     name: 'Иван',
//     grades: [5, 4, 5, 3, 5],

//     getFirstGrade(){
//         return this.grades
//     },

//     getLastGrade(){
//         return this.grades[this.grades.length - 1]
//     }
// }


// console.log(student.getFirstGrade())
// console.log(student.getLastGrade()) */

// /*
// const student = {
//     name: "Иван",
//     grades: [5, 4, 5, 3, 5],

//     addGrade(newGrade, lastGrade){
//         this.grades.push(newGrade)
//         this.grades.push(lastGrade)
//         return this.grades
//     }
// }

// // Тесты:
// console.log(student.addGrade(4, 10))          // [5, 4, 5, 3, 5, 4]
// console.log(student.setAge(20))           // "Возраст Иван: 20"
// console.log(student.setSubjects(["Математика", "Физика"]))  // ["Математика", "Физика"]

// // Теперь у объекта есть новые свойства:
// console.log(student.age)       // 20
// console.log(student.subjects)  // ["Математика", "Физика"] */

// /*
// const person = {
//     name: 'Иван',
//     age: 25,

//     getInfo() {
//         return `${this.name}, ${this.age} лет`
//     },

//     setCity(city) {
//         return `Город: ${person.city = city}`
//     },

//     setAge(newAge){

//         return `Новый возраст: ${this.age = newAge}`
//     }

// }
// console.log(person.getInfo())
// console.log(person.setCity('Москва'))
// console.log(person)
// console.log(person.setAge(26))
// console.log(person) */
// /*
// const student = {
//     name: "Иван",
//     age: 20,
//     grades: [],     // пустой массив для оценок

//     getInfo() {
//         // Должно вернуть "Иван, 20 лет"
//         return `${this.name}, ${this.age} лет`
//     },

//     addGrade(grade) {
//         // Добавить оценку в массив grades
//         // Должно вернуть "Добавлена оценка: 5"
//          this.grades.push(grade)
//          return `Добавлена оценка: ${grade}`
//     },

//     getGrades() {
//         // Должно вернуть строку со всеми оценками
//         // Пример: "Оценки: 5, 4, 5, 3"
//         return `Оценки: ${this.grades.join(', ')}`
//     }
// }

// console.log(student.getInfo())
// console.log(student.addGrade(5))
// console.log(student.addGrade(4))
// console.log(student.addGrade(5))
// console.log(student.getGrades())
//  */


// const person = {
//     name: "Иван",
//     age: 20,
//     friends: [],    // пустой массив для списка друзей

//     getInfo() {
//         // Должно вернуть "Иван, 20 лет"
//         return `${this.name}, ${this.age} лет`
//     },

//     addFriend(friendName) {
//         // Добавить имя друга в массив friends
//         // Должно вернуть "Добавлен друг: Алекс"
//         this.friends.push(friendName)
//         return `Добавлен друг: ${friendName}`

//     },

//     getFriends() {
//         // Должно вернуть строку со всеми друзьями
//         // Пример: "Друзья: Алекс, Мария, Петр"
//         return this.friends.join(', ')
//     },

//     removeFriend(friendName) {
//         // Удалить друга из массива по имени
//         // Должно вернуть "Удален друг: Алекс"

//         return friendName
//     }
// }

// // Тесты:
// console.log(person.getInfo())
// console.log(person.addFriend("Алекс"))
// console.log(person.addFriend("Мария"))
// console.log(person.addFriend("Петр"))
// console.log(person.getFriends())
// console.log(person.removeFriend("Мария"))
// console.log(person.getFriends())
/*
const person = {
    name: "Иван",
    hobbies: [],    // массив для хобби

    addHobby(hobby) {
        // Добавить хобби
        this.hobbies.push(hobby)
        return `Добавлено: ${this.hobbies}`
    },

    getHobbies() {
        // Получить список всех хобби
        return this.hobbies
    },

    removeHobby(hobby) {
        // Удалить хобби
        this.hobbies = this.hobbies.filter(hob => hob !== hobby)
        return hobby
    },

    hasHobby(hobby) {
        // Проверить есть ли такое хобби (должно вернуть true или false)
        return this.hobbies.includes(hobby)
    }
}
console.log(person.addHobby("Гитара"))    // "Добавлено хобби: Гитара"
console.log(person.addHobby("Футбол"))    // "Добавлено хобби: Футбол"
console.log(person.addHobby("Чтение"))    // "Добавлено хобби: Чтение"
console.log(person.getHobbies())          // "Хобби: Гитара, Футбол, Чтение"
console.log(person.hasHobby("Футбол"))    // true
console.log(person.hasHobby("Плавание"))  // false
console.log(person.removeHobby("Футбол")) // "Удалено хобби: Футбол"
console.log(person.getHobbies())          // "Хобби: Гитара, Чтение" */



/*
function highAndLow(numbers) {
    let getArrayNumbers = numbers.split(' ').map(Number)
    let maxNumber = getArrayNumbers[0]
    let minNumber = getArrayNumbers[0]

    for (let i = 0; i < getArrayNumbers.length; i++){
        if (maxNumber < getArrayNumbers[i]){
            maxNumber = getArrayNumbers[i]
        }
    }
    for (let j = 0; j < getArrayNumbers.length; j++){
        if (minNumber > getArrayNumbers[j]){
            minNumber = getArrayNumbers[j]
        }
    }

    return maxNumber + ' ' + minNumber
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) */


/*
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */
/*
function descendingOrder(n) {
    let numberToArray = n.toString()
    let array = numberToArray.split('').map(Number)
    let newArray =[]
     for (let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i])
    }
    return array
}

console.log(descendingOrder(1021)) //2110 */
/*
const person = {
    name: "Иван",
    hobbies: [],    // массив для хобби

    addHobby(name, experience) {
        // Добавить хобби с опытом (в годах)
        // Пример: addHobby("Гитара", 2) - играет на гитаре 2 года
        const hobby = {
            name: name,
            experience: experience,
        }

        this.hobbies.push(hobby)
        return `Добавлено хобби: ${name} ${experience} (${experience === 1 ? 'год' : 'года'})`
    },

    getHobbies() {
        // Получить список всех хобби с опытом
        // Пример: "Гитара (2 года), Футбол (3 года)"

    },

    getExperiencedHobbies(years) {
        // Получить хобби с опытом больше указанного
        // Пример: getExperiencedHobbies(2) - вернёт хобби с опытом от 2 лет
    }
}

console.log(person.addHobby("Гитара", 2))     // "Добавлено хобби: Гитара (2 года)"
console.log(person.addHobby("Футбол", 3))     // "Добавлено хобби: Футбол (3 года)"
console.log(person.addHobby("Чтение", 5))     // "Добавлено хобби: Чтение (5 лет)"

console.log(person.getHobbies())
// "Хобби: Гитара (2 года), Футбол (3 года), Чтение (5 лет)"

console.log(person.getExperiencedHobbies(3))
// "Опытные хобби: Чтение (5 лет), Футбол (3 года)"

// Для проверки:
console.log(person.hobbies)
// [{name: "Гитара", experience: 2}, {name: "Футбол", experience: 3}, {name: "Чтение", experience: 5}] */

/*
const student = {
    name: 'Иван',
    marks: [],

    addMark(subject, mark){
        const newObj = {
            subject: subject,
            mark: mark,
        }
        this.marks.push(newObj)
        return `${subject}: ${mark}`
    },

    getMarks(){
        return this.marks
    }
}
console.log(student.addMark("Математика", 5))  // "Математика: 5"
console.log(student.addMark("История", 4))     // "История: 4"
console.log(student.getMarks())                // "Оценки: Математика: 5, История: 4"

// Для проверки:
console.log(student.marks)  */

/* const student = {
    name: 'Иван',
    marks: [],

    addMark(subject, mark) {
        // Тот же метод, что и раньше
        const sub = {
            subject: subject,
            mark: mark,
        }

        this.marks.push(sub)
        return sub
    },

    getMarks() {
        // Тот же метод, что и раньше
    },

    // Новый метод: показать только хорошие оценки (4 или 5)
    getGoodMarks() {
        // Должно вернуть только предметы с хорошими оценками
        // Пример: "Хорошие оценки: Математика: 5, История: 4"
    }
} */

/*
const student = {
    name: 'Иван',
    marks: [
        { subject: "Математика", mark: 5 },
        { subject: "История", mark: 4 },
        { subject: "Физика", mark: 3 },
        { subject: "Литература", mark: 5 },
        { subject: "Химия", mark: 3 }
    ],

    // Показать только хорошие оценки (4 или 5)
    getGoodMarks() {
        return this.marks.filter(goodMark => goodMark.mark >= 4)
        // Должно вернуть: "Хорошие оценки: Математика: 5, История: 4, Литература: 5"
    }
}

console.log(student.getGoodMarks()) */


/* const student = {
    name: 'Иван',
    marks: [
        { subject: "Математика", mark: 5 },
        { subject: "История", mark: 4 },
        { subject: "Физика", mark: 3 }
    ],

    getAverageMark() {
        // Должно вернуть средний балл: 4
        let getMark = this.marks.map(point => point.mark)
        return getMark.reduce((acc, item) => acc + item, 0) / this.marks.length
    }
}

console.log(student.getAverageMark()) */
/*
const student = {
    name: 'Иван',
    marks: [
        { subject: "Математика", mark: 5 },
        { subject: "История", mark: 4 },
        { subject: "Физика", mark: 3 }
    ],

    // 1. Получить все предметы
    getSubjects() {
        // Должно вернуть: "Предметы: Математика, История, Физика"
        return this.marks.map(sub => sub.subject).join(', ')
    },

    // 2. Получить количество пятёрок
    countExcellentMarks() {
        // Должно вернуть: "Количество пятёрок: 1"
        return  this.marks.filter(point => point.mark > 4)
    }
}

console.log(student.getSubjects())
console.log(student.countExcellentMarks()) */
/*
const student = {
    name: 'Иван',
    marks: [
        { subject: "Математика", mark: 5 },
        { subject: "История", mark: 4 },
        { subject: "Физика", mark: 3 }
    ],

    // Найти предметы по оценке
    findSubjectsByMark(mark) {
        // Например: findSubjectsByMark(5) должно вернуть "Предметы с оценкой 5: Математика"
        // findSubjectsByMark(4) должно вернуть "Предметы с оценкой 4: История"
        let resultPoint = this.marks.filter(item => item.mark === mark)
        let finished = resultPoint.map(sub => sub.subject)
        return `Предметы с оценкой ${mark}: ${finished.join(', ')}`

    }
}

console.log(student.findSubjectsByMark(5))  // "Предметы с оценкой 5: Математика"
console.log(student.findSubjectsByMark(4))  // "Предметы с оценкой 4: История"
console.log(student.findSubjectsByMark(3))  // "Предметы с оценкой 3: Физика" */

/*
const student = {
    name: 'Иван',
    marks: [
        { subject: "Математика", mark: 5 },
        { subject: "История", mark: 4 },
        { subject: "Физика", mark: 3 },
        { subject: "Математика", mark: 4 }
    ],

    // 1. Получить все оценки по предмету
    getMarksBySubject(subject) {
        // Должно вернуть для математики: "Математика: 5, 4"
        // Используйте filter и map
        let searchMath = this.marks.filter(math => math.subject === subject)
        let getMarkInMath = searchMath.map(result => result.mark).join(', ')
        return `${subject}: ${getMarkInMath}`
    },

    // 2. Посчитать среднюю оценку по предмету
    getAverageBySubject(subject) {
        // Должно вернуть для математики: "Математика: средний балл 4.5"
        let searchMath = this.marks.filter(math => math.subject === subject)
        let averageMark = searchMath.reduce((sum, item) => sum + item.mark, 0) / searchMath.length
        return `${subject}: средний бал равен ${averageMark}`
    }
}

// Тесты:
console.log(student.getMarksBySubject("Математика"))    // "Математика: 5, 4"
console.log(student.getMarksBySubject("История"))       // "История: 4"
console.log(student.getAverageBySubject("Математика"))  // "Математика: средний балл 4.5" */

/*
const student = {
    name: 'Иван',
    marks: [5, 4, 5, 3, 5, 4],  // просто массив оценок

    // 1. Посчитать количество пятёрок
    countFiveWithLoop() {
        // Ваш код тут (используйте цикл)
        let counter = 0
        for (let mark of this.marks){
            if (mark === 5){
                counter++
            }
        }
        return counter
    },

    // 2. То же самое через filter
    countFiveWithMethods() {
        // Ваш код тут (используйте filter)
        return this.marks.filter(mark => mark === 5).length
    }
}

// Оба метода должны вернуть "Количество пятёрок: 3"
console.log(student.countFiveWithLoop());
console.log(student.countFiveWithMethods()); */
/*
const student = {
    name: 'Иван',
    tests: [
        { subject: "Математика", score: 95 },
        { subject: "История", score: 85 },
        { subject: "Физика", score: 90 },
        { subject: "Математика", score: 89 }
    ],

    // 1. Посчитать количество тестов с результатом выше 90
    countHighScoresWithLoop() {
        // Используйте цикл и score
        let counter = 0
        for (let scor of this.tests){
            if( scor.score > 90){
                counter++
            }
        }
        return `количество тестов с результатом выше 90: ${counter}`
    },

    // 2. То же самое через filter
    countHighScoresWithMethods() {
        // Используйте filter и score
        return this.tests.filter(test => test.score > 90).length
    }
}

// Оба метода должны вернуть "Тестов с высоким баллом: 2"
console.log(student.countHighScoresWithLoop());
console.log(student.countHighScoresWithMethods()); */
/*

const student = {
    tests: [
        {subject: 'Математика', score: 95},
        {subject: 'История', score: 85},
        {subject: 'Математика', score: 89}
    ],

    getAverageBySubject(subject){
        let subjectAndScoreTests = this.tests.filter( sub => sub.subject === subject)
        let resultAverageScore = subjectAndScoreTests.reduce((sum, item) => sum + item.score, 0) / subjectAndScoreTests.length
        return `Средний бал по ${subject}: ${resultAverageScore}`
    },
}
console.log(student.getAverageBySubject('Математика')) */


/* const student = {
    tests: [
        {subject: 'Математика', score: 95},
        {subject: 'История', score: 85},
        {subject: 'Математика', score: 89},
        {subject: 'История', score: 77},
        {subject: 'Математика', score: 91}
    ],

    // 1. Найти лучший результат по предмету
    getBestScore(subject) {
        // Должно вернуть: "Лучший результат по Математике: 95"
        let searchMath = this.tests.filter(math => math.subject === subject).map(test => test.score)
        return `Лучший результат по ${subject}: ${Math.max(...searchMath)}`
    },

    // 2. Найти худший результат по предмету
    getWorstScore(subject) {
        // Должно вернуть: "Худший результат по Математике: 89"
    }
}

// Тесты:
console.log(student.getBestScore('Математика'))   // "Лучший результат по Математике: 95"
console.log(student.getWorstScore('Математика'))  // "Худший результат по Математике: 89"
console.log(student.getBestScore('История'))      // "Лучший результат по Истории: 85"
console.log(student.getWorstScore('История'))     // "Худший результат по Истории: 77" */

/*
const student = {
    name: "Иван",
    tests: [
        {subject: "Математика", scores: [5, 4, 5]},
        {subject: "История", scores: [4, 4, 4]},
        {subject: "Физика", scores: [3, 5, 4]}
    ],

    // 1. Получить все оценки по предмету
    getScores(subject) {
        // Найти предмет через цикл
        // Вернуть оценки через join
        // Пример: "Математика: 5, 4, 5"
    }
}

// Тесты:
console.log(student.getScores("Математика"))  // "Математика: 5, 4, 5"
console.log(student.getScores("История"))     // "История: 4, 4, 4"
console.log(student.getScores("Физика"))      // "Физика: 3, 5, 4" */

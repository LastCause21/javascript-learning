/* 
function countVowels(str) {
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
    let count = 0
    
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            count++
        }
    }
    
    return count
}

console.log(countVowels("привет")); */

/* 
function areAllPositive(numbers) {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0) {
            return false
        }
    }
}

console.log(areAllPositive([1, 2, 3, 4, 5])); // должно вернуть true
console.log(areAllPositive([1, -2, 3, 4, 5])); */

/* 
function mergeArrays(arr1, arr2){
    let result = arr1.concat(arr2)

    return result
}

console.log(mergeArrays([1, 2, 3,], [2, 3, 4])) */
/* 
function mergeArrays(arr1, arr2) {
    // Создаём Set из объединённых массивов
    let uniqueSet = new Set([...arr1, ...arr2]);
    // Преобразуем Set обратно в массив
    return Array.from(uniqueSet);
}

// Или короче:
function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(mergeArrays([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4] */
/* 
function findFirstEven(numbers) {
    for(let num of numbers) {
        if(num % 2 === 0) {
            return num;
        }
    }
    return "Чётных чисел нет";
}

console.log(findFirstEven([1, 3, 4, 5, 6])); // должно вернуть 4
console.log(findFirstEven([1, 3, 5, 7]));  */

/* 
function countLetterA(str){
    let strInArray = str.split('')
    let saveResultA = 0
    for (let i = 0; i < strInArray.length; i++){
        if (strInArray[i] === 'а'){
            saveResultA++
        }
    }
    return saveResultA
    
}
console.log(countLetterA('мама'))
console.log(countLetterA("папа")); // должно вернуть 2
console.log(countLetterA("привет")); // должно вернуть 0 */

/* 
function countVowels(str){
    let vowels = 'aeiouAEIOU'
    let getArray = str.split('')
    let counterVowels = 0
    for (let i = 0; i < getArray.length; i++){
        if (getArray[i] === vowels)
            counterVowels++
    }
    return counterVowels
}

console.log(countVowels('hello')) */

/* 
function findLongestWord(sentence){
    let swapToArray = sentence.split(' ')
    let saveResult = ''
    for (let i = 0; i < swapToArray.length; i++){
        if(swapToArray[i].length > saveResult.length){
            saveResult = swapToArray[i]
        }
    }
    return saveResult
}

console.log(findLongestWord("I am learning JavaScript")); // должно вернуть "JavaScript"
console.log(findLongestWord("The quick brown fox")); // должно вернуть "quick"
console.log(findLongestWord("Hello world")); */
/* 
function reverseWords(sentence){
    let strToArray = sentence.split('')
    let getSymbol = ''
    for (let i = strToArray.length - 1; i >= 0; i--){
        getSymbol += strToArray[i]
    }

    return getSymbol.reverse()
}

console.log(reverseWords('Hello world')) */
/* 
function reverseWord(word){
    let strToArray = word.split('')
    let newArray = []
    let getSymbol = ''
    for ( let i = strToArray.length - 1; i >= 0; i--){
        getSymbol += strToArray[i] 
        newArray.push(strToArray[i])
    }
    return newArray.join('')
}

console.log(reverseWord('hello')) */

/* function reverseTwoWords(word1, word2) {

    let getSplitArray1 = word1.split('')
    let getSplitArray2 = word2.split('')
    let newSymbolWord1 = ''
    let newSymbolWord2 = ''
    for (let i = getSplitArray1.length - 1; i >= 0; i--){
        newSymbolWord1 += getSplitArray1[i]
    }
    for (let j = getSplitArray2.length - 1; j >= 0; j--){
        newSymbolWord2 += getSplitArray2[j]
    }
    return `${newSymbolWord1} ${newSymbolWord2}`
}

console.log(reverseTwoWords("hello", "world"));
console.log(reverseTwoWords("hi", "there")); */

/* function reverseThreeWords(word1, word2, word3){
    
    let getSplitArrayWord1 = word1.split('')
    let getSplitArrayWord2 = word2.split('')
    let getSplitArrayWord3 = word3.split('')

    let reverseWord1 = ''
    let reverseWord2 = ''
    let reverseWord3 = ''

    for (let i = getSplitArrayWord1.length - 1; i >= 0; i--){
        reverseWord1 += getSplitArrayWord1[i]
    }
    for (let j = getSplitArrayWord2.length - 1; j >= 0; j--){
        reverseWord2 += getSplitArrayWord2[j]
    }
    for (let k = getSplitArrayWord3.length - 1; k >= 0; k-- ){
        reverseWord3 += getSplitArrayWord3[k]
    }
    return `${reverseWord1} ${reverseWord2} ${reverseWord3}`
}

console.log(reverseThreeWords("I", "am", "happy")) */

/* 
function reverseOneWord(word){
    let splitWord = word.split('')
    let oneSymbolGet = ''
    for (let i = splitWord.length - 1; i >= 0; i--){
        oneSymbolGet += splitWord[i]
    }
    return oneSymbolGet
}

function reverseThreeWords(word1, word2, word3){
    let reverseWord1 = reverseOneWord(word1)
    let reverseWord2 = reverseOneWord(word2)
    let reverseWord3 = reverseOneWord(word3)

    return `${reverseWord1} ${reverseWord2} ${reverseWord3}`
}

console.log(reverseThreeWords("I", "am", "happy")); 
console.log(reverseThreeWords("let", "me", "try"));  

function reverseWords(sentence){
    let getArray = sentence.split('')
    let reverseWord1 = reverseOneWord(getArray)
    let reverseWord2 = reverseOneWord(getArray)
    let reverseWord3 = reverseOneWord(getArray)

    return  reverseWord1
}
console.log(reverseWords("I am happy"));
 */
/* 
function addExclamation(sentence) {
    let splitStr = sentence.split('')
    let reverseStrSave = ''
    let reversArray = []
    for (let i = splitStr.length - 1; i >= 0; i-- ){
        reversArray.push(splitStr[i])
    }
    return reversArray.join('')
}

console.log(addExclamation("hello world")); */

/* 
function addExclamation(sentence){
    let wordSplit = sentence.split(' ')
    let saveJustArray = []
    for (let i = 0; i < wordSplit.length; i++){
        saveJustArray.push(wordSplit[i] + '!')
    }
    return saveJustArray
}

console.log(addExclamation('hello world'));
console.log(addExclamation("I am happy")); */
/* 
function addNumbers(sentence){
    let splitWords = sentence.split(' ')
    return splitWords
}
console.log(addNumbers("apple banana cherry")) */

/* 
function capitalizeWords(sentence){
    let splitWords = sentence.split(' ')
    let newArrayForSaveResult = []
    for (let i = 0; i < splitWords.length; i++){
        newArrayForSaveResult.push(splitWords[i][0].toUpperCase() + splitWords[i].slice(1))

    }
    return newArrayForSaveResult
}
console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("i am learning")) */

/* 
function capitalizeExceptFirst(sentence){

    let splitWords = sentence.split(' ')
    let newArrayForSaveResult = []

    for (let i = 0; i < splitWords.length; i++){
        newArrayForSaveResult.push(splitWords[i][0] + splitWords[i].toUpperCase().slice(1) )
    }
    return newArrayForSaveResult.join(' ')

}

console.log(capitalizeExceptFirst("hello world")); */
/* 
function capitalizeExceptFirst(sentence) {
    let splitWords = sentence.split(' ');
    let newArrayForSaveResult = [];

    for (let i = 0; i < splitWords.length; i++) {
        // Сначала берём первую букву
        let firstLetter = splitWords[i][0];
        // Потом берём остальные буквы и делаем их заглавными
        let restLetters = splitWords[i].slice(1).toUpperCase();
        // Соединяем
        newArrayForSaveResult.push(firstLetter + restLetters);
    }
    return newArrayForSaveResult.join(' ');
}

console.log(capitalizeExceptFirst("hello world")); // "hELLO wORLD"
console.log(capitalizeExceptFirst("i am here")); */

/* 
const numbers = [1, 2, 3, 4, 5]

let result = numbers.map(element => element * 2)
console.log(result); */
/* 
const names = ["john", "JANE", "pEter", "DAVID"];


const result = names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
console.log(result); // ["John", "Jane", "Peter", "David"]
 */
/* 
const products = [
    {name: 'Apple', price: 1.5, quantity: 2},
    {name: 'Banana', price: 0.8, quantity: 5},
    {name: 'Orange', price: 2.0, quantity: 3}
]

const total = products.map() */
/* 
const names = ["John", "Jane", "Bob"];
const age = [25, 30, 35]

let newObjArrayResult =  */
/* 
const names = ["John", "Jane", "Bob"];
const ages = [25, 30, 35];

const result = names.map((name, index) => {
    return {
        name,    
     ages:['index'],
    }
});

console.log(result); */

/* 
function createPerson(name, age){
    return {
        name,
        age
    }
}
console.log(createPerson('John', 25)) */

/* 
function findMaxNumber(numbers){

    let newVariableSave = 0
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > newVariableSave){
           newVariableSave = numbers[i]
        }
    }
    return newVariableSave
}


console.log(findMaxNumber([5, 9, 2, 6, 3])) 
console.log(findMaxNumber([1, 8, 3, 12, 5])) */
/* 
function findMinNumber(numbers){

    let saveResultVariable = numbers[0]
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] < saveResultVariable){
            saveResultVariable = numbers[i]
        }
    }
    return saveResultVariable
}

console.log(findMinNumber([5, 9, 2, 6, 3]))
console.log(findMinNumber([1, 8, 3, 12, 5])) */
/* 
function findAverage(numbers) {
  let sumNumbers = 0;

  for (let i = 0; i < numbers.length; i++){
    sumNumbers += numbers[i]
  }
  return sumNumbers / numbers.length
}

console.log(findAverage([5, 9, 2, 6, 3])); */

/* 
function findEvenNumbers(numbers) {
    
    let newEvenArray = []

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            newEvenArray.push(numbers[i])
        }
    }
    return newEvenArray
}

console.log(findEvenNumbers([5, 9, 2, 6, 3])) 
console.log(findEvenNumbers([1, 8, 3, 12, 5]))  */

/* 
function findEvenNumbers(numbers) {
    
    return numbers.filter(number => number % 2 === 0)
}

console.log(findEvenNumbers([5, 9, 2, 6, 3])) // должно вернуть [2, 6]
console.log(findEvenNumbers([1, 8, 3, 12, 5])) // должно вернуть [8, 12] */

/* 
function capitalizeNames(names) {

    let result = names[0].toUpperCase()
    return names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
}

console.log(capitalizeNames(["john", "JANE", "pEter", "DAVID"]))  */

/* 
function getLongNames(names) {

    let lengthResult = names.filter(name => name.length > 4)
    let firstSymbolUpper = lengthResult.map(name => name[0].toUpperCase() + name.slice(1))
    return firstSymbolUpper
}

console.log(getLongNames(["john", "jane", "peter", "bob", "michael"])) */

/* 
function sumNumbers(numbers) {

    let resultSumNumbers = numbers.reduce((acc, number) => acc + number, 0)
    return resultSumNumbers
    
}

console.log(sumNumbers([1, 2, 3, 4, 5])) 
console.log(sumNumbers([10, 20, 30])) 
 */
/* 
function multiplyEvenNumbers(numbers) {
   
   let allEvenNumbers = numbers.filter(number => number % 2 === 0)
   let sumEvenNumbers = allEvenNumbers.reduce((acc, numbers) => acc * numbers, 1)

    return sumEvenNumbers
}

console.log(multiplyEvenNumbers([1, 2, 3, 4, 5])) // должно вернуть 8 (2 * 4)
console.log(multiplyEvenNumbers([1, 3, 5, 7])) // должно вернуть 0 */
/* 
function getAverageOfEven(numbers) {
    
    let evenNumbers = numbers.filter(number => number % 2 === 0)
    let averageResult = evenNumbers / evenNumbers.length
    return averageResult
}

console.log(getAverageOfEven([1, 2, 3, 4, 5, 6])) // должно вернуть 4 ((2 + 4 + 6) / 3)
console.log(getAverageOfEven([1, 3, 5])) // должно вернуть 0 */

/* 
function getUniqueNumbers(numbers) {
    let emptyArray = []
    let addNumbers = numbers.filter(number => numbers.indexOf(number))
    return addNumbers
}

console.log(getUniqueNumbers([1, 2, 2, 3, 3, 4])) 
console.log(getUniqueNumbers([1, 1, 1, 1]))  */
/* 
function processNumbers(numbers) {
    
    let evenNumbers = numbers.filter(number => number % 2 === 0)
    let multiplyEven = evenNumbers.map(number => number * 2)
    let sum = multiplyEven.reduce((acc, number) => acc + number, 0)
    return sum
}

console.log(processNumbers([1, 2, 3, 4, 5]))  */

/* 
function processStrings(words) {

    let threeLength = words.filter(word => word.length > 3)
    let upperWord = threeLength.map(word => word.toUpperCase())
    return upperWord.join(' ')
}

console.log(processStrings(['cat', 'dog', 'elephant', 'rat']))  */

/* 
function processStudents(students) {
    // Дан массив с объектами студентов
    // 1. Отфильтруйте студентов, у которых оценка больше 80 (filter)
    // 2. Преобразуйте в массив имен этих студентов (map)
    // 3. Сделайте все имена заглавными (map)
    // 4. Соедините имена через запятую (join)

    let moreRating = students.filter(student => student.grade > 80)
    let nameArray = moreRating.map(student => student.name.toUpperCase())
    return nameArray.join(', ')
}

console.log(processStudents([
    { name: "John", grade: 85 },
    { name: "Jane", grade: 75 },
    { name: "Bob", grade: 90 },
    { name: "Alice", grade: 65 }
])) 
// Должно вернуть: "JOHN, BOB" */

/* 
function processProducts(products) {
    // Дан массив с объектами продуктов
    // 1. Отфильтруйте продукты дешевле 5 долларов 
    // 2. Получите только названия этих продуктов 
    // 3. Добавьте к каждому названию восклицательный знак 
    // 4. Соедините названия через пробел 
    let cheapFive = products.filter(product => product.price < 5)
    let productsGetName = cheapFive.map(product => product.name)
    let addMark = productsGetName.map(product => product + '!')
    return addMark.join(' ')
}

console.log(processProducts([
    { name: "Apple", price: 2.5 },
    { name: "Banana", price: 6.0 },
    { name: "Orange", price: 4.0 },
    { name: "Mango", price: 8.0 }
])) 
 */

/* function calculateTotal(products) {
    // Дан массив с объектами продуктов
    // У каждого продукта есть цена (price) и количество (quantity)
    // 1. Отфильтруйте продукты дороже 10 долларов (filter)
    // 2. Посчитайте стоимость каждого продукта (price * quantity) (map)
    // 3. Найдите общую сумму всех стоимостей (reduce)
}

console.log(calculateTotal([
    { name: "Apple", price: 15, quantity: 2 },
    { name: "Banana", price: 8, quantity: 3 },
    { name: "Orange", price: 12, quantity: 4 },
    { name: "Mango", price: 20, quantity: 1 }
])) 
// Должно вернуть: 108 (15*2 + 12*4 + 20*1 = 30 + 48 + 20) */
/* 
function calculateTotal(products) {
    // Дан массив с объектами продуктов
    // У каждого продукта есть цена (price) и количество (quantity)
    // 1. Отберите продукты дороже 10 долларов
    // 2. Посчитайте стоимость каждого продукта (price * quantity)
    // 3. Найдите общую сумму всех стоимостей
    let productsMoreTen = products.filter(product => product.price > 10)
    let sumAllProducts = productsMoreTen.map(product => product.price * product.quantity)
    let endResultSum = sumAllProducts.reduce((acc, product) => acc + product, 0)
    return endResultSum
}

console.log(calculateTotal([
    { name: "Apple", price: 15, quantity: 2 },
    { name: "Banana", price: 8, quantity: 3 },
    { name: "Orange", price: 12, quantity: 4 },
    { name: "Mango", price: 20, quantity: 1 }
])) 
 */

/* 
function processOrders(orders) {
    // Дан массив заказов
    // У каждого заказа есть статус (status) и сумма (amount)
    // 1. Отберите только выполненные заказы (status === "completed")
    // 2. Увеличьте сумму каждого заказа на 10%
    // 3. Найдите общую сумму
    let statusCompleted = orders.filter(order => order.status === 'completed')
    let increaseAmount = statusCompleted.map(order => order.amount + (order.amount * 0.1))
    let allSum = increaseAmount.reduce((acc, order) => acc + order, 0)
    return allSum
}

console.log(processOrders([
    { id: 1, status: "completed", amount: 100 },
    { id: 2, status: "pending", amount: 200 },
    { id: 3, status: "completed", amount: 300 },
    { id: 4, status: "canceled", amount: 150 }
])) 
// Должно вернуть: 440 (110 + 330)

 */

/* 
function processEmployees(employees) {

    let resultDepartmentIT = employees.filter(employ => employ.department === 'IT')
    let multiplySalary = resultDepartmentIT.map(employ => employ.salary * 1.2)
    let allSum = multiplySalary.reduce((acc, sal) => acc + sal, 0)
    return allSum
}

console.log(processEmployees([
    { name: "John", department: "IT", salary: 1000 },
    { name: "Jane", department: "HR", salary: 800 },
    { name: "Bob", department: "IT", salary: 1200 },
    { name: "Alice", department: "Finance", salary: 900 }
])) 
// Должно вернуть: 2640 (1000 * 1.2 + 1200 * 1.2 = 1200 + 1440) */

/* 
function processStudentGrades(students) {
    // Дан массив студентов
    // У каждого студента есть имя (name) и оценки (grades - массив чисел)
    // 1. Отберите студентов, у которых средний балл больше 80
    // 2. Преобразуйте их имена в верхний регистр
    // 3. Добавьте к каждому имени " (Отличник)"
    // 4. Соедините все имена через запятую
    let averageGrades = students.filter(students => {
        let average = students.grades.re
    })
    return averageGrades
}

console.log(processStudentGrades([
    { name: "John", grades: [70, 85, 90] },
    { name: "Jane", grades: [60, 75, 70] },
    { name: "Bob", grades: [85, 85, 90] },
    { name: "Alice", grades: [70, 75, 65] }
])) 
// Должно вернуть: "JOHN (Отличник), BOB (Отличник)" */

/* 
function getLongNameStudents(students) {
    
    return students.filter(student => student.name.length > 4).map(student => student.name)

    
}

console.log(getLongNameStudents([
    { name: "John", grade: 85 },
    { name: "Michael", grade: 75 },
    { name: "Bob", grade: 90 },
    { name: "Alice", grade: 95 }
])) // Должно вернуть [75, 95] (оценки Michael и Alice) */

/* 
function getShortNameGrades(students) {
    // 1. Найдите студентов, у которых имя короче 5 букв
    // 2. Получите их оценки
    // 3. Отфильтруйте только оценки выше 85
    return students.filter(student => student.name.length < 5 && student.grade > 85).map(student => student.grade)
}

console.log(getShortNameGrades([
    { name: "John", grade: 85 },
    { name: "Michael", grade: 75 },
    { name: "Bob", grade: 90 },
    { name: "Alex", grade: 95 }
])) // Должно вернуть [90, 95] (оценки Bob и Alex) */
/* 
function getStudentSummary(students) {
    // 1. Найдите студентов с оценкой выше 85
    // 2. Создайте для них строку формата "Имя: оценка"
    // 3. Соедините эти строки через запятую
    return students.filter(student => student.grade > 85).map(student => `${student.name}: ${student.grade}`).join(', ')
}

console.log(getStudentSummary([
    { name: "John", grade: 85 },
    { name: "Bob", grade: 90 },
    { name: "Alice", grade: 95 },
    { name: "Mike", grade: 80 }
])) // Должно вернуть "Bob: 90, Alice: 95" */
/* 
function getStudentInfo(students) {
    // 1. Найдите студентов, чьи имена начинаются на 'A'
    // 2. Отфильтруйте тех, у кого оценка выше 80
    // 3. Создайте строки формата "Имя (оценка)"
    // 4. Соедините результат через пробел
    return students.filter(student => student.name[0] === 'A' && student.grade > 80).map(student => `${student.name} (${student.grade})`).join(' ')

}

console.log(getStudentInfo([
    { name: "Alex", grade: 85 },
    { name: "Anna", grade: 75 },
    { name: "Bob", grade: 90 },
    { name: "Alice", grade: 95 }
])) // Должно вернуть "Alex (85) Alice (95)" */

/* 
function getAverageHighGrades(students) {
    // 1. Найдите студентов с оценкой выше 80
    // 2. Получите массив их оценок
    // 3. Посчитайте среднее значение этих оценок
    // (используйте reduce для подсчета суммы и разделите на количество оценок)
    return students.filter(student => student.grade > 80).map(student => student.grade).reduce((acc, grad) => acc + grad,0) 
}

console.log(getAverageHighGrades([
    { name: "Alex", grade: 85 },
    { name: "Anna", grade: 75 },
    { name: "Bob", grade: 90 },
    { name: "Alice", grade: 95 }
])) // Должно вернуть 90 (среднее от 85, 90, 95) */

/* 
function sayHello(name, callback){
    
    let greeting = 'Привет ' + name
    callback(greeting)
}

const printMessage = (message) => {
    console.log(message.toUpperCase())
}

sayHello('Анна', printMessage) */
/* 
function processName(name, upperCallback, lowerCallback){
    let greeting = name + ' hello'
    upperCallback(greeting)
    lowerCallback(greeting)
}

function getUpper(message){
    console.log(message.toUpperCase())
}
function getLower(message){
    console.log(message.toLowerCase())
}
processName('Roma', getUpper, getLower) */

/* 
function greetUser(name, callback) {
    
    callback(name)
}

function addHello(name) {
    console.log("Hello, " + name)
}

function addBye(name) {
    console.log("Bye, " + name)
}

// Тесты:
greetUser("Roma", addHello) // выведет "Hello, Roma"
greetUser("Roma", addBye)   // выведет "Bye, Roma" */

/* 
function processArray(numbers, callback){
    let arrayNumberEven = numbers.filter(number => number % 2 === 0)
    callback(arrayNumberEven)
}

function showResult(array){
    console.log(array)
}
processArray([1, 2, 3, 4, 5, 6], showResult) 
processArray([1, 3, 5, 7, 9], showResult)  */
/* 
function getArrayAndCallback(array, callback){
    let filterEvenNumbers = array.filter(number => number % 2 === 0).map(number => number * 2)
    callback(filterEvenNumbers)
}

function getResult(result){
    console.log(result)
}

getArrayAndCallback([1, 2, 3, 4, 5, 6], getResult) */

/* 
function getArray(array, callback){
    let fiveMoreNumbers = array.filter(number => number > 5).map(number => number + 10)
    callback(fiveMoreNumbers)
}

function resultCallback(result){
    console.log(result)
}

getArray([2, 4, 6, 8, 10], resultCallback) */

/* 
function processNumbers(array, callback) {
    // 1. Принимает массив чисел и callback-функцию
    // 2. Фильтрует числа больше 5 (filter)
    // 3. Прибавляет к каждому числу 10 (map)
    // 4. Находит сумму всех чисел (reduce)
    // 5. Передает результат в callback-функцию
    let moreFiveNumbersFilter = array.filter(number => number > 5).map(number => number + 10).reduce((acc, number) => acc + number, 0)
    callback(moreFiveNumbersFilter)
}

function showResult(result) {
    console.log(result)
}

// Тесты:
processNumbers([2, 4, 6, 8, 10], showResult) // должно вывести 54 (16 + 18 + 20)
processNumbers([1, 2, 3, 4, 5], showResult)  // должно вывести 0 */

/* setTimeout(function(){
    console.log('Привет!')
}, 2000) */
/* 
function sayHello(){
    console.log('Hello')
}
setTimeout(sayHello, 3000) */
/* 
function sayHello(){
    console.log('Hello!')
}

function sayGoodbye(){
    console.log('Goodbye!')
}

setTimeout(sayHello, 2000)
setTimeout(sayGoodbye, 4000)

console.log('start') */

/* 
function sayHello() {
    console.log("Hello!")
}

function sayGoodbye() {
    console.log("Goodbye!")
}

function sayThankYou() {
    console.log("Thank you!")
}

// Вызовите функции с разными задержками:
// 1. sayHello через 2 секунды
// 2. sayThankYou через 4 секунды
// 3. sayGoodbye через 6 секунд
setTimeout(sayHello, 2000)
setTimeout(sayThankYou, 4000)
setTimeout(sayGoodbye, 6000)

console.log("Start") */

/* 
function greet(name){
    console.log(`Hello, ${name}!`)
}

function goodbye(name){
    console.log(`Goodbye, ${name}!`)
}

setTimeout(function(){
    greet('Roma')
}, 2000)

setTimeout(()=>{
    goodbye('Roma')
}, 4000)

console.log('Start') */

/* 
function delayedGreeting(name){

    console.log('Подождите')

    setTimeout(() => {
        console.log('.');
        
    }, 500)

    setTimeout(() => {
        console.log('..');
        
    }, 1000)

    setTimeout(() => {
        console.log('...');
        
    }, 1500)

    setTimeout(() => {
        console.log(`Здравствуйте ${name}`);
        
    }, 2500)

    setTimeout(() => {
        console.log('Загрузка завершена')
    }, 3000)
}
delayedGreeting('Roma')
 */

/* 
function loadingProcess(name) {

    console.log('Начало загрузки')

    setTimeout(() =>{
        console.log(`25%`)
    }, 500)

    setTimeout(() =>{
        console.log(`50%`)
    }, 1000)

    
    setTimeout(() =>{
        console.log(`75%`)
    }, 1500)

    
    setTimeout(() =>{
        console.log(`100%`)
    }, 2000)

    setTimeout(() => {
        console.log(`Вы в системе ${name}`)
    }, 3000);
}

loadingProcess('Roman') */

/* 
function processStudents(students) {
    // 1. Выведите сообщение "Начинаем обработку данных студентов..."
    // 2. Через 1 секунду отфильтруйте студентов с оценкой выше 80
    // 3. Через 2 секунды преобразуйте их имена в верхний регистр
    // 4. Через 3 секунды выведите финальный результат

    console.log('Начинаем обработку данных студентов...')

    setTimeout(()=>{
        let result = students.filter(student => student.grade > 80)
        console.log(result)
    }, 1000)

    setTimeout(() =>{
        console.log(`Студенты с оценкой выше 80 отфильтрованы`)
    }, 1200)

    setTimeout(() =>{
        console.log(`Начинаю преобразовывать имена в верхний регистр`)
    }, 1500)

    setTimeout(()=>{
        let result = students.filter(student => student.grade > 80).map(student => student.name.toUpperCase())
        console.log(result)
    }, 2000)

    setTimeout(() =>{
        console.log('Вывожу имена студентов')
    }, 3000)

    setTimeout(() =>{
        let result = students.filter(student => student.grade > 80).map(student => student.name.toUpperCase()).join(', ')
        console.log(result)

    }, 4000)

}

// Тест:
const students = [
    { name: "John", grade: 85 },
    { name: "Jane", grade: 75 },
    { name: "Bob", grade: 90 },
    { name: "Alice", grade: 65 }
]

processStudents(students) */

/* 
function processProducts(products) {
    console.log('Начинаем обработку товаров...')
    
    // 1. Сохраните товары дороже 1000 рублей в переменную
    // 2. Через 1 секунду выведите отфильтрованные товары
    // 3. Через 2 секунды добавьте к ценам 15% и выведите результат
    // 4. Через 3 секунды выведите общую сумму всех товаров с наценкой
}

// Тест:
const products = [
    { name: "Телефон", price: 1200 },
    { name: "Наушники", price: 800 },
    { name: "Планшет", price: 2500 },
    { name: "Чехол", price: 200 }
]

processProducts(products) */
/* 
function calculator(numbers, operation, callback) {
  console.log("Начинаем вычисление...");

  let resultPlus = numbers.reduce((acc, number) => acc + number, 0);
  let resultMultiply = numbers.reduce((acc, number) => acc * number, 1);
  let resultMinus = numbers.reduce((acc, number) => acc - number, 0);
  let resultDivide = numbers.reduce((acc, number) => acc / number, 0);
  let resultOst = numbers.reduce((acc, number) => acc % number, 0);

  if (numbers.length === 0) {
    return "Массив пустой";
  }

  if (
    operation !== "+" &&
    operation !== "*" &&
    operation !== "/" &&
    operation !== "%" &&
    operation !== "-"
  ) {
    return "Неверная операция";
  }

  setTimeout(() => {
    console.log(`Выполняется операция: ${operation}`);
  }, 1500);

  setTimeout(() => {
    let result;
    if (operation === "+") result = resultPlus;
    if (operation === "/") result = resultDivide;
    if (operation === "%") result = resultOst;
    if (operation === "*") result = resultMultiply;
    if (operation === "-") result = resultMinus;
    callback(result);
  }, 2000);
}
function showResult(result){
    console.log(`Результат: ${result}`)
}
calculator([1, 2, 3, 4, 5], "+", showResult); */

// Задача: создайте объект пользователя и добавьте в него новые свойства

/* function createUser(name, age) {
    // 1. Создайте объект user
    // 2. Добавьте свойства name и age
    // 3. Добавьте свойство city со значением "Moscow"
    // 4. Верните объект
    const user = {
        name,
        age,
    }
    user['city'] = 'Moscow'
    return user
}

// Тест
console.log(createUser("John", 25));
// Должно вывести: { name: "John", age: 25, city: "Moscow" } */

/* 
function createUser(name, age) {
    const user = {
        name,
        age,
        city: 'Moscow',  // можно добавить свойство сразу при создании
        sayHi(){
            console.log('Hello ' + this.name)
        },
        celebrateBirthday(){    
          this.age++
        },
        // Добавьте метод sayHi, который выводит приветствие
        // Добавьте метод celebrateBirthday, который увеличивает возраст на 1
    }
    
    return user
}

// Тест
const user = createUser("John", 25);
console.log(user);
 user.sayHi();  // Должно вывести: "Привет, меня зовут John"
 user.celebrateBirthday();  // Должно увеличить возраст на 1
 console.log(user.age);  // Должно вывести: 26 */
/* 

 function createUser(name, age) {
    const user = {
        name,
        age,
        city: 'Moscow',
        sayHi() {
            console.log('Hello ' + this.name);
        },
        celebrateBirthday() {    
            this.age++;
        }
    };
    
    return user;
}

// 1. Создайте массив пользователей
const users = [];

// 2. Добавьте пользователей в массив
users.push(createUser("John", 25));
users.push(createUser("Alice", 35));
users.push(createUser("Bob", 30));
users.push(createUser("Jane", 40));

// 3. Функция для вывода имен всех пользователей
function showUserNames(usersArray) {
    let result = usersArray.filter(user => user === String)
    return result
}

// 4. Функция для получения пользователей старше 30 лет
function getUsersOlderThan30(usersArray) {
    // Ваш код здесь
}

// Тесты
showUserNames(users);  // Должно вывести: "John, Alice, Bob, Jane"
console.log(getUsersOlderThan30(users));  // Должно вернуть массив пользователей старше 30 лет */
/* 
function createUser(name, age) {
    const user = {
        name,
        age,
        city: 'Moscow',
        sayHi() {
            console.log('Hello ' + this.name);
        },
        celebrateBirthday() {    
            this.age++;
        }
    };
    
    return user;
}




const users = [];


users.push(createUser("John", 25));
users.push(createUser("Alice", 35));
users.push(createUser("Bob", 30));
users.push(createUser("Jane", 40));


function showUserNames(usersArray) {
    let result = usersArray.filter(users => users.name)
    console.log(result)
}


function getUsersOlderThan30(usersArray) {
    // Ваш код здесь
}

// Тесты
showUserNames(users);  // Должно вывести: "John, Alice, Bob, Jane"
console.log(getUsersOlderThan30(users));  // Должно вернуть массив пользователей старше 30 лет */

/* 
const books = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
    { title: "The Road", author: "Cormac McCarthy", year: 2006 }
];


function showBookTitles(booksArray) {
    let result = booksArray.map(books => books.title)
    console.log(result.join(', '))
}


function getBooksAfter2000(booksArray) {
    let result = booksArray.filter(books => books.year > 2000)
    console.log(result)
}

showBookTitles(books);  
console.log(getBooksAfter2000(books));   */

const students = [
  { name: "John", age: 20, grade: 85 },
  { name: "Alice", age: 22, grade: 75 },
  { name: "Bob", age: 21, grade: 90 },
  { name: "Jane", age: 23, grade: 65 },
];

function showStudentNames(studentsArray){
    
}
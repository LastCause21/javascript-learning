/* const add = (a, b) => a + b

console.log(add(5, 3)) */


/* const square = (a) => a ** 2

console.log(square(5)) */


/* const multiply = (a, b) => a * b
console.log(multiply(4, 5)) */
/* 

const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map(number => number ** 2)
console.log(squares) */
/* 
let name = 'Roman'
let age = 21
let student = true

console.log(`Имя ${name}, Возраст`) */
/* 
let agePromptUser = Number(prompt('Введите ваш возраст: '))

if (agePromptUser < 18) return 'You are a minor'
if (agePromptUser > 18 && agePromptUser <= 65) return 'You are an adult'
if (agePromptUser > 65) return 'You are a senior' */


/* function calculateArea (weight, height){
    return weight * height
}

console.log(calculateArea(5, 10)) */

/* 
function getMax(numbers){
    return Math.max(...numbers)
}

console.log(getMax([1, 2, 3, 4, 5])) */

/* 
const book = {
    title: 'Son',
    author: 'Erivan',
    pages: 500,
    getSummary(){
        return `${this.title} by ${this.author}, page ${this.pages}`
    }
}

console.log(book.getSummary()) */


class Animal {
    constructor(name, species) {
        this.name = name
        this.species = species
    }

    getInfo() {
        return `${this.name} is a ${this.species}`
    }
}
/* 
class Dog extends Animal {
    constructor(name, species, breed){
        super(name, species)
        this.breed = breed
    }

    getDogInfo(){
        return `${this.name} is a ${this.species} of breed ${this.breed}`
    }
}

const myDog = new Dog("Buddy", "Dog", "Golden Retriever")
console.log(myDog.getDogInfo()) */

/* setTimeout(() => {
    console.log('Hello, World')
}, 3000) */

/* 
setTimeout(() =>{
    console.log('This message appears after 5 seconds')
}, 5000) */
/* 
setTimeout(() => {
    console.log(`Time's up!`)
}, 10000) */

/* 
const timerId = setTimeout(() => {
    console.log('This message will not be shown')
}, 8000)

setTimeout(() =>{
    clearTimeout(timerId);
    console.log('Timer canceled')
}, 3000) */
/* 
const timerId = setTimeout(() => {
    console.log('6 seconds passed')
})

setTimeout(() =>{
    clearTimeout(timerId)
    console.log('Timer was canceled')
}, 2000) */
/* 
console.log('Start')
setTimeout(() => {
    console.log('First timer finished!')
}, 4000)

setTimeout(() =>{
    console.log('Second timer finished')
}, 8000)
 */


/* let count = 5

const countDown = () =>{
    if (count > 0){
        console.log(count)
    count--;
    setTimeout(countDown, 1000)
    
    }else{
        console.log('Countdown finished!')
    }
}
countDown() */

/* setTimeout(() =>{
    console.log('This message appears after 2 seconds')
}, 2000) */

/* 
console.log('Start...')

setTimeout(() =>{
    console.log('First message after 3 seconds')
}, 3000)

setTimeout(() => {
    console.log('Seconds message after 5 seconds')
}, 5000) */

/* 
console.log('Countdown starts!')

let value = 5

const counter = () => {
    if (value > 0) {
        console.log(`${value} second passed`)
        value++
        setTimeout(counter, 1000)
    } else {
        console.log('Countdown finished')
    }
}
 */

/* console.log('Countdown starts!')

let value = 5;

const counter = () => {
    if (value > 0){
        console.log(`${value} second${value > 1 ? 's' : ''} passed`)
        value--
        setTimeout(counter, 1000)
    }else{
        console.log('Countdown finished')
    }
}
counter() */


/* let count = 10

const countDown = () => {

    if (count > 0) {
        console.log(`${count}`)
        count--
        setTimeout(countDown, 1000)
    } else {
        console.log(`Time's up!`)
    }
}
countDown() */

/* 
setTimeout(() =>{
    for (let i = 2; i < 10; i++){
        console.log('Tick')
        if (i >= 10){
            console.log('Timer stopped')
        }
    }
}, 2000) */

/* let count = 0

const printTick = () => {
    if (count < 10) {
        console.log('Tick')
        count++
        setTimeout(printTick, 2000)
    } else {
        console.log('Timer stopped')
    }
}
printTick() */

/* 
let count = 0

const countUppAlarm = () => {

    if (count < 15){
        count++
        setTimeout(countUppAlarm, 1000)
    }else {
        console.log(`Alarm ringing!`)
    }
}
countUppAlarm() */
/* 
let timerInputUser = Number(prompt('Введите число для таймера:'))


const timer = () =>{

    if (timerInputUser > 0){
        timerInputUser--
        setTimeout(timer, 1000)
    }else{
        console.log(`Time's up!`)
    }
} */

/* 
let randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let guessedNumberUser = +prompt('Введите число чтоб угадать:')
let timer = 5

const guessed = () =>{

    if (timer > 0){
        console.log(`Таймер начинается у вас осталось ${timer}`)
        if (randomNumber === guessedNumberUser){
            console.log("Congratulations! You guessed the number!")
        }
        setTimeout(timer, 1000)
    }else{
        console.log(`Time's up! The number was ${randomNumber}`)
    }
}

guessed() */

/* 
let randomNumber = Math.floor(Math.random() * 10) + 1
let timer = 5


const guessed = () => {
    if (timer > 0) {
        let guessedNumberUser = +prompt('Введите число')

        if (guessedNumberUser === randomNumber) {
            console.log('Congratulations! You guessed the number!')
            return
        } else {
            console.log(`Error ${timer - 1}`)
            timer--
            setTimeout(guessed, 1000)
        }

    }else{
        console.log(`Time's up! The number was ${randomNumber}`); // Если время истекло
    }
}

guessed(); */

/* 
let randomNumber = Math.floor(Math.random() * 10) + 1
let numberPromptUser = +prompt()
if (randomNumber === numberPromptUser){
    console.log("Congratulations! You guessed the number!")
}else{
    console.log('Try again!')
} */

/* 
let randomNumber = Math.floor(Math.random() * 10) + 1
let attempts = 3
let easy = 5
let medium = 3
let hard = 2
let levelTask = prompt('Введите уровень задачи: easy, medium, hard')

if (levelTask === easy){
    while (easy > 0){
        let userGuess = +prompt()
    
        if (userGuess === randomNumber){
            console.log("Congratulations! You guessed the number!");
            break
        }else{
            if(userGuess > randomNumber){
                console.log('Загаданное число меньше')
            }
            if (userGuess < randomNumber){
                console.log('Загаданное число меньше')
            }
            easy--
            console.log('Try again!')
        }
    
        if (easy === 0){
            console.log(`Sorry, you've used all your attempts. The number was ${randomNumber}.`); // Сообщаем о завершении
        }
    }
} */

/* 
let levelTask = prompt('Введите уровень задачи: easy, medium, hard')
let randomNumber;
let attempts;


if (levelTask === 'easy'){
    randomNumber = Math.floor(Math.random() * 5) + 1
    attempts = 5
}
if (levelTask === 'medium'){
    randomNumber = Math.floor(Math.random() * 10) + 1
    attempts = 3
}

if (levelTask === 'hard'){
    randomNumber = Math.floor(Math.random() * 20) + 1
    attempts = 2
}else{
    console.log('Неверный уровень сложности!'); 
    throw new Error('Invalid level')
}

while (attempts > 0) {
    let userGuess = +prompt(`Угадайте число: (Осталось попыток: ${attempts})`); // Запрашиваем у пользователя число

    if (userGuess === randomNumber) { // Проверяем, угадал ли пользователь
        console.log("Congratulations! You guessed the number!"); // Если угадал
        break; // Выходим из цикла
    } else {
        if (userGuess > randomNumber) {
            console.log('Загаданное число меньше'); // Если пользователь ввел больше
        } else {
            console.log('Загаданное число больше'); // Если пользователь ввел меньше
        }
        attempts--; // Уменьшаем количество попыток
        console.log('Try again!'); // Если не угадал
    }

    if (attempts === 0) { // Если попытки закончились
        console.log(`Sorry, you've used all your attempts. The number was ${randomNumber}.`); // Сообщаем о завершении
    }
} */


/* 
let generationRandomNumber = Math.floor(Math.random() * 10) + 1
let userInput = +prompt('Угадай число:')

if (generationRandomNumber === userInput) {
     console.log("Congratulations! You guessed the number!")
}else{
    console.log("Sorry, you guessed wrong. The number was " + generationRandomNumber)
}    
 */

/* 
let generationNum = Math.floor(Math.random() * 10) + 1
let attempts = 3


while (attempts > 0) {

    let userInputTry = +prompt('Введите число')
    if (userInputTry === generationNum) {
        console.log("Congratulations! You guessed the number!")
        break
    }
    if (userInputTry !== generationNum){
        console.log('У вас осталось ' + attempts + ' попытки' )
        attempts--
    }
    if (attempts === 0){
         console.log( "Sorry, you've used all your attempts. The number was " + generationNum)
    }
} */

/* 
let count = 10

const counter = () => {
    if (count > 0) {
        console.log(count)
        count--
        setTimeout(counter, 1000)
    } else {
        console.log('Countdown finished')
    }
}
counter() */

/* 
let timerUserInput = +prompt('Введите число для обратного отсчета(таймера):')

const timer = () => {
    if (timerUserInput > 0) {
        console.log(timerUserInput)
        timerUserInput--
        setTimeout(timer, 1000)
    } else {
        console.log('Times up!')
    }
} */

/* 
let userGuess = +prompt()

const timer = () => {
    if (userGuess > 0){
        console.log(userGuess)
        userGuess--
        setTimeout(timer, 1000)
    }else{
        console.log('Countdown finished!')
    }
} */

/* 
document.addEventListener('keypress', function(event) {
    console.log('Вы нажали:', event.key)
})

 */

/* 
console.log('Starting...')

setTimeout(() =>{
    console.log('Processing...')
}, 2000)

setTimeout(() =>{
    console.log('Done!')
}, 4000) */

/* 
const timer = () => {
    let counter = 3
    if (counter > 1){
        console.log(counter)
        counter--
        setTimeout(timer, 1000)
    }
}
timer() */
/* 
let counter = 5
const timerDown = () => {

    if (counter >= 0) { console.log("Halfway there!") }
    else if (counter === 1) { console.log("Almost done!") }
    else if (counter === 1) { console.log('Times up!') }
    else {
        console.log(counter)
    }
    counter--
    if (counter >= 0) {
        setTimeout(timerDown, 1000)
    }
}
timerDown() */


/* 
console.log('Loading')

setTimeout(() =>{
    console.log('Step 1 completed')
}, 2000)

setTimeout(() =>{
    console.log('Step 2 completed')
}, 2000)

setTimeout(() =>{
    console.log('Finished')
}, 1000) */

/* console.log('Game started!')

setTimeout(() => {
    let random = Math.floor(Math.random() * 10) + 1
    if (random > 5) {
        console.log('Level completed')
    } else {
        console.log('Game over!')
    }

    setTimeout(() => {
        console.log('Thanks for playing')
    }, 1000);
}, 2000)
 */

/* 
let timerId = setInterval(() =>{
    console.log('Tik')
}, 1000)

setTimeout(() =>{
    clearInterval(timerId)
    console.log('Stop')
}, 5000) */
/* 
let count = 10;

let timerId = setInterval(() => {
    console.log(count)
    count--

    if (count === 5) {
        clearInterval(timerId);
        console.log('Время вышло')
    }

}, 1000) */

/* 
let count = 10;

function startTimer() {
    let timeId = setInterval(() => {
        console.log(count)
        count--

        if (count === 5) {
            clearInterval(timeId)
            console.log('Stop in 2 seconds...')

            let newTimerId = setInterval(() => {
                console.log(count);
                count--

                setTimeout(() => {
                    if (count < 0) {
                        clearInterval(newTimerId)
                        console.log('Готова')
                    }
                }, 1000)
            }, 2000)
        }
    }, 1000);
}
startTimer() */


let count = 10;

function startTimer() {

    let timerId = setInterval(() => {

        console.log(count)
        count--

        if (count === 5) {
            clearInterval(timerId)
            console.log('Stop in 2 seconds...')

            setTimeout(() => {
                let newTimerId = setInterval(() => {
                    console.log(count)
                    count--

                    if (count < 0) {
                        clearInterval(newTimerId)
                        console.log('Completed')
                    }

                }, 1000)
            }, 2000)

        }
    }, 1000)
}
startTimer()
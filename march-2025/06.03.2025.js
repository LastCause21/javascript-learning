/* const rolling = (randomGenerate) => {
    return new Promise((resolve, reject) =>{
        console.log('Rolling the dice...')
        
        setTimeout(() =>{

            if (randomGenerate === 6){
                resolve('You win')
            }else{
                reject('You lose')
            }

        },1000)

    })
}
let randomGenerate = Math.floor(Math.random() * 6) + 1
rolling(randomGenerate)
    .then(result => console.log(result)) 
        
    .catch(err => console.log(err)) 
 */

// TODO: Tomorrow you solve the problem ))
/* 
const playerChoice = (heads, tails) => {
  return new Promise((resolve, reject) => {
    console.log("Start coin...");

    setTimeout(() => {
      let simulation = Math.floor(Math.random() * 2) + 1;

      if (simulation === 1) {
        resolve("You won!");
      } else {
        reject("You lost!");
      }
    }, 1000);
  });
};

playerChoice() */

/* 
const flipCoin = (playerChoice) =>{
    return new Promise((resolve, reject) =>{
        console.log('Flipping the coin...')

        setTimeout(() =>{

            let result = Math.random() < 0.5 ? 'heads' : 'tails'
            if (playerChoice === result){
                resolve(`You won! It was ${result}`)
            }else{
                reject(`You lost! It was ${result}`)
            }
        },1000)
    })
}

flipCoin('heads')
    .then(result => console.log(result))
    .catch(error => console.log(error)) */
/* 
function startTrafficLight() {
  console.log("🔴 Stop!");

  setTimeout(() => {
    console.log("🟡 Get ready!");
    setTimeout(() => {
      console.log("🟢 Go!");
      setTimeout(() => {
        startTrafficLight();
      }, 2000);
    }, 1000);
  }, 3000);
}
startTrafficLight() */

/* 
const timerId = setTimeout(() =>{
    console.log('This message will never show!')
},3000)

setTimeout(() =>{
    clearTimeout(timerId)
    console.log('Timer stopped!')
},1000) */

/* 
console.log('Preparing for launch...')

const timerId = setTimeout(() => {
    console.log('Launching!')
}, 3000);

setTimeout(() => {
    clearTimeout(timerId)
    console.log('Launch canceled')
}, 2000); */
/* 
console.log("Loading game...");

const timerId = setTimeout(() => {
  console.log("Game started!");
}, 5000);

setTimeout(() => {
  clearTimeout(timerId);
  console.log("Error: Lost connection!");
  setTimeout(() => {
    console.log("Pleas try again!");
  }, 1000);
}, 2000); */
/* 
console.log("Starting coffee machine...");

const timerId1 = setTimeout(() => {
  console.log("Coffee is brewing...");
}, 3000);

const timerId2 = setTimeout(() => {
  console.log("Coffee is ready!");
}, 5000);

setTimeout(() => {
  clearTimeout(timerId1);
  clearTimeout(timerId2);
  console.log("Error: No water!");
  setTimeout(() => {
    console.log("Please add water!");
  }, 1000);
}, 4000);
 */
/* 
console.log("Order received: Preparing pizza...");

const timerPizzaStart = setTimeout(() => {
  console.log("Pizza in the oven...");
}, 2000);

const timerPizzaReady = setTimeout(() => {
  console.log("Pizza is ready!");
}, 4000);

const timerDeliveryStart = setTimeout(() => {
  console.log("Delivery started!");
}, 10000);

setTimeout(() => {
  clearTimeout(timerDeliveryStart);
  console.log("Delivery delayed: Traffic jam!");
  setTimeout(() => {
    console.log('New delivery time: 20 minutes')
  }, 1000);
}, 7000); */
/* 
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
  { name: "Monitor", price: 200 },
];

let totalSum = 0;

const sellProduct = () => {
  if (products.length === 0) {
    console.log(`All sold! Total: ${totalSum}`);
    return;
  }

  const randomIndexGenerate = Math.floor(Math.random() * products.length)
  const product = products.splice(randomIndexGenerate, 1)[0]
};
 */

/* const randomIndex = Math.floor(Math.random() * listTask.length)
const list = listTask.splice(randomIndex, 1)[0]
console.log(randomIndex)
console.log(list) */

/* 
const listTask = ["work", "swim", "walk"];
const deleteAndPrintTask = () =>{

    if (listTask.length === 0){
        console.log('All done!')
        return
    }

    const randomIndex = Math.floor(Math.random() * listTask.length)
    const deleteTask = listTask.splice(randomIndex, 1)[0]
    console.log(`Delete ${deleteTask}`)

    setTimeout(deleteAndPrintTask, 1000)

} 
deleteAndPrintTask() */

/* 
const numbers = [1, 2, 5, 10, 3, 7]
let sum = 0
const showTakeNumber = () =>{

    if (numbers.length === 0){
        console.log(`All numbers deleted! Sum:${sum}`)
        return
    }

    const randomNumberIndex = Math.floor(Math.random() * numbers.length)
    const deleteNumber = numbers.splice(randomNumberIndex, 1)[0]
    sum += deleteNumber
    console.log(`Delete number: ${deleteNumber}`)

    setTimeout(showTakeNumber, 1000)
}
showTakeNumber() */
/* 
const cards = [
  { suit: "♠️", value: "A" },
  { suit: "♥️", value: "K" },
  { suit: "♣️", value: "Q" },
  { suit: "♦️", value: "J" },
];

const showCards = () => {
  if (cards.length === 0) {
    console.log("Showed all cards");
    return;
  }

  const randomCard = Math.floor(Math.random() * cards.length);
  const showDeleteCard = cards.splice(randomCard, 1)[0];

  console.log(`Card: ${showDeleteCard.suit}${showDeleteCard.value}`)

  setTimeout(showCards, 1000)
};

showCards() */

const cards = [
  { suit: "♠️", value: "A", points: 11 },
  { suit: "♥️", value: "K", points: 10 },
  { suit: "♣️", value: "Q", points: 9 },
  { suit: "♦️", value: "J", points: 8 },
];

// Нам понадобится переменная для хранения суммы очков
/* let totalPoints = 0;


const showCards = () =>{

    if (cards.length === 0){
        console.log(`Showed all cards ${totalPoints}`)
        return
    }

    const cardsRandomIndex = Math.floor(Math.random() * cards.length)
    const showCardDelete = cards.splice(cardsRandomIndex, 1)[0]
    totalPoints += showCardDelete.points
    console.log(`Card information:${showCardDelete.suit}-${showCardDelete.value}-${showCardDelete.points}`) 
    setTimeout(showCards, 1000)
}
showCards() */

/* 
const moleHole = ["🕳️", "🕳️", "🕳️", "🕳️", "🕳️"]
let attempts = 5
let hole = '🦔'
const showHole = () =>{


    const randomMoleHole = Math.floor(Math.random() * moleHole.length)
    const show = moleHole.splice(randomMoleHole)


}

showHole() */

/* 
const holes = ["🕳️", "🕳️", "🕳️", "🕳️", "🕳️"];  
let attempts = 5; 

const showMole = () => {

    if (attempts === 0){
        console.log('Game over!')
        return
    }

    const randomHole = Math.floor(Math.random() * holes.length)
    const oldHole = holes[randomHole]
    holes[randomHole] = "🦔"

    console.log(holes.join(' '))

    holes[randomHole] = oldHole
    attempts--

    setTimeout(showMole, 1000)
}

showMole() */
/* 
function addNumbers(number1, number2) {
  // add +
  return number1 + number2;
}

function subtractNumbers(number1, number2) {
  // subtract -
  return number1 - number2;
}

function multiplyNumbers(number1, number2) {
  // multiply *
  return number1 * number2;
}

function divideNumbers(number1, number2) {
  // divide /
  return number1 / number2;
}

const operationResult = ["+", "-", "*", "/"];

function validateCalculation(number1, number2, operation) {
  
  if (isNaN(number1) || isNaN(number2)) {
    return "Error not numbers";
  }
  if (!operationResult.includes(operation)) {
    return "Error not such an operation";
  }
  if (operation === "/" && number2 === 0) {
    return "Error operation";
  }
  return true
}

function performOperation(number1, number2, operation) {
  switch (operation) {
    case "+":
      return addNumbers(number1, number2);
    case "-":
      return subtractNumbers(number1, number2);
    case "*":
      return multiplyNumbers(number1, number2);
    case "/":
      return divideNumbers(number1, number2);
    default:
      return "Error operation or number prompt";
  }
}

function calculate(number1, number2, operation){

    const validationResult = validateCalculation(number1, number2, operation)
    if (validationResult !== true){
        return validationResult
    }

    return performOperation(number1, number2, operation)
}


console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "-")); // 5
console.log(calculate(10, 5, "*")); // 50
console.log(calculate(10, 5, "/")); // 2
console.log(calculate(10, 0, "/")); // Error: Division by zero
console.log(calculate("abc", 5, "+")); // Error: Not valid numbers
console.log(calculate(10, 5, "?")); // Error: Not valid operation */
/* 
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  addScore(){
    this.score += 1
  }

  showMore(){
    console.log(`Player ${this.name} score: ${this.score}`)
  }
  
  startGame(){
    setInterval(() =>{
        this.addScore()
        this.showMore()
    }, 3000)

  }
}

const player = new Player('Roma') */

/* 
class Car{
    constructor(name){
        this.name = name
        this.speed = 0
    }

    beep(){
        console.log(`${this.name}: Bip-bip!`)
    }

    addSpeed(){
        this.speed += 1
    }

    showSpeed(){
        this.addSpeed()

        console.log(`${this.speed} ${this.name}` )
    }
}

const bmw = new Car('BMW')
const audi = new Car('Audi')

bmw.beep()
audi.beep()
bmw.showSpeed() */

/* 
function wait(seconds){

    return new Promise((resolve) => {

        setTimeout(() =>{
            console.log(``)
        }, seconds * 1000)

    })
} */

/* 
let promise = new Promise(function(resolve, reject){

    let serverResponse = true

    setTimeout(() =>{

    })
}) */
/* 
function oldWay() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Step 1");
    }, 1000);
  })
    .then((result) => {
      console.log(result);
      return "Step 2";
    })
    .then((result) => {
      console.log(result);
    });
}
oldWay() */

/* 
async function newWay(){

    let step1 = await new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('Step 1')
        }, 1000);
    })
    console.log(step1)
    console.log('Step 2')
}
newWay() */
/* 
function fetchUserInfo() {
    setTimeout(() => {
        const data = {id: 1, name: 'John'}
    }, 1000);
}

function run() {
  fetchUserInfo();
}

run();
 */
/* 
function calculate() {
    const a = 10
    const b = 15
    console.log(a + b)
    return a + b
}

calculate();
console.log(calculate()) */

/* 
function newNumber(a, b){
    return a + b
}

const sum = newNumber(25, 15)
console.log(sum)

if (sum === 40){
    console.log('Yes')
} */

/* 
function addProduct(){
    isProductAvailable()
    isBlocked()
    possibleToDelivery()
}

function isProductAvailable(){

}

function isBlocked(){

}

function possibleToDelivery(){

} */

/* 
function calculate(){
    
    const a = 10
    const b = 15;

    const result = a + b
    return result
}

const sum = calculate()
console.log(sum) 
 */

// Код должен показывать сообщения с задержкой
// Но что-то работает не так...

/* 
console.log("Starting game...");

setTimeout(() => {
    console.log("Loading assets...")
}, 2000)

setTimeout(() => {
    console.log("Loading player data...")
}, 4000)

setTimeout(() => {
    console.log("Game ready!");
}, 6000);  */
/* 
let promise = new Promise((resolve, reject) => {
  let score = 75;

  if (score >= 70) {
    resolve("You win!");
  } else {
    reject("Game over");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
 */
/* 
async function checkScore() {
  let score = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(85);
    }, 1000);
  });

  if (score > 80) {
    console.log("High score!");
  } else {
    console.log("Try again!");
  }
}

checkScore(); */

/* 
let name = 'Roman'
console.log(name) */

/* 
let age = 25

console.log(`I am ${age} years old`) */
/* 
let score = 10
score += 5

console.log(score) */
/* 
let price = 20
let discount = 5
let result = price - discount
console.log(result) */

/* let temperature = 25;
let isHot;

if (temperature > 20) {
  isHot = true;
}
console.log(isHot);
 */
/* 
let temperature = 25;
let isHot = temperature > 20
console.log(isHot) */
/* 
let message = "Hello";
console.log(message); */
/* 
let name = "John";
let age = 25;
let youDeveloper = true;
let undefined;

console.log(typeof name);
console.log(typeof age);
console.log(typeof youDeveloper)
console.log(typeof undefined) */

/* 
let price = 100
let discount = 20

let finalPrice = (price * discount) / 100

console.log(price - finalPrice) */
/* 
let temperature = 25;
let minTemp = 18;
let maxTemp = 28;

let isComfortable = temperature > minTemp && temperature <= maxTemp;

console.log(`- Current temperature: ${temperature}`);
console.log(`- Comfortable range: ${minTemp} - ${maxTemp}`);
console.log(`- Is comfortable: ${isComfortable}`);
 */
/* 
let score = 85
let maxScore = 100 */
/* 
let myString = "Hello";
let myNumber = 42;
let myBoolean = true;

let result = myString;

console.log(result);
console.log(typeof result); */
/* 
let playerName = "Mike";
let playerLevel = 10;
let isPlayerActive = true;
let playerRank;

let playerInfo = `Name: ${playerName}, Level: ${playerLevel}, ActiveNow: ${isPlayerActive}, Rank: ${playerRank}`;

console.log(playerInfo);
console.log(typeof playerName);
console.log(typeof playerLevel);
console.log(typeof isPlayerActive);
console.log(typeof playerRank); */
/* 
alert("Welcome to the game!");

let userName = prompt("What is your name?");

confirm(`Player name: ${userName}`); */

/* alert("Welcome to the game!");

let userName = prompt("What is your name?");

confirm(`Ready to start ${userName}?`); */

/* 
let userAge = Number(prompt())

alert(`Your age is ${userAge} years`)
confirm( "Are you ready for the age check?") */

/* alert("Choose your character:")
let choose = prompt('Selected character:')
confirm("Start game?") */

alert("Welcome to the game!");
let nickName = prompt("Enter your nickname:");
alert(`Your nickname is ${nickName}`);
let age = Number(prompt("Enter your age:"));
alert(`Your age is ${age}`);
confirm("Complete registration?");

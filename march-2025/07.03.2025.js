/* let userAge = Number(prompt("Your Age:"));

if (userAge > 18) {
  alert("Access allowed");
} else {
  alert("Access denied");
}
 */
/* 
let score = Number(prompt("Enter game score:"));

if (score === 100) {
  alert("Perfect!");
} else if (score >= 80) {
  alert("Well Done!");
} else if (score < 80) {
  alert("Try again!");
} */
/* 
let choose = +prompt("Choose game difficulty (1, 2, or 3):");

if (choose === 1) {
  alert("Easy mode");
} else if (choose === 2) {
  alert("Medium mode");
} else if (choose === 3) {
  alert("Hard mode");
} else {
  alert("Unknown mode");
}
 */
/* 
let playerHealth = +prompt("Enter player health (0- 100):");

if (playerHealth === 100) {
  alert("Full health");
} else if (playerHealth > 50) {
  alert("Healthy");
} else if (playerHealth > 20) {
  alert("Injured");
} else if (playerHealth > 0) {
  alert("Critical");
} else {
  alert("Game over");
} */
/* 
let userBalance = +prompt("Your balance:");
let priceItem = +prompt("Item price:");

if (userBalance >= priceItem) {
  alert("Purchase successful");
  alert(`Balance left ${userBalance - priceItem}`);
} else {
  alert("Not enough money");
}
 */
/* 
let userPassword = prompt("Enter your password:");

if (userPassword === "1234") {
  alert("Welcome");
  let userName = prompt("Enter your name:");
  alert(`Hello ${userName}`);
} else {
  alert("Access denied");
}
 */
/* 
let userAge = +prompt("Enter your age:");

if (userAge < 12) {
  alert("Access denied: too young");
} else if (userAge > 12 && userAge < 17) {
  alert("Access granted: junior server");
} else if (userAge > 18 && userAge < 65) {
  alert("Access granted: main server");
} else {
  alert("Access denied: age limit");
} */

/* 
let userAge = +prompt('Your age:');

let accessAllowed = (userAge >= 18) ? 'Access allowed' : 'Access denied'
alert(accessAllowed) */
/* 
let justNumber = prompt("Enter number:");

alert(justNumber === 0 ? "Zero" : justNumber > 0 ? "Positive" : "Negative"); */

/* let userNumber = +prompt('Enter number:');

alert(userNumber % 2 === 0 ? 'Even' : 'Odd'); */

/* 
let userName = prompt('Enter name:');

alert(userName.length > 0 ? `Hello ${userName}` : 'Hello, Guest!') */
/* 
let playerLevel = +prompt("Enter player level (1-50):");
let playerRank = prompt("Enter player rank (bronze, silver, gold):");

let saveResult =
  playerLevel >= 30 && playerRank === "gold"
    ? "Enter player"
    : playerLevel >= 20 && playerRank === "silver"
      ? "Pro player"
      : playerLevel >= 10 && playerRank === "bronze"
        ? "Beginner player"
        : "Rookie player";
 */
/* 
let itemPrice = +prompt("Enter item price:");
let userBalance = +prompt("Enter your balance:");
let discountCard = prompt("Do you have discount card? (yes/no):");

let discount = itemPrice * (1 - 20 / 100);
let saveResult =
  discountCard === "yes" && userBalance >= discount
    ? `Purchase successful! Your change: ${itemPrice - discount}`
    : "Not enough money";

console.log(discount); */
/* 
let playerRank = +prompt("- Enter your rank (1-50):");
let playerWins = +prompt("- Enter your wins (0-100):");
let playerLevel = +prompt("- Enter your level (1-10):");

let playerResult =
  playerRank >= 40 && playerWins >= 80 && playerLevel >= 8
    ? "Pro League"
    : playerRank >= 20 && playerWins >= 50 && playerLevel >= 5
      ? "Gold League"
      : playerRank >= 10 && playerWins >= 20 && playerLevel >= 3
        ? "Welcome! Silver League"
        : "Bronze League"; */
/* 
let userAge = +prompt("Enter your age:");
let userCard = prompt("Doy you have permission? (yes/no):");

let result =
  userAge >= 18 || (userAge > 13 && userCard === "yes")
    ? "Access granted"
    : "Access denied";
alert(result);
 */

/* 
const isRaining = true
const isWarm = false

let result = isRaining === true  */
/* 
const hasKey = true;
const hasMap = false;
const isFriend = true;

let result1 =
  hasKey === true && isFriend === true
    ? "Cant enter house: true"
    : "Cant enter house: false";
let result2 =
  hasKey === true && hasMap === true
    ? "Can search treasure: true"
    : "Can search treasure: false";
console.log(result1, result2); */

/* 
const isAdmin = true
const isBanned = false
const isOnline = true

console.log("Can write message:", isAdmin || (isOnline && !isBanned)) */

/* 
const hasTicket = true
const isVip = false
const isEmployee = true

console.log("Can attend concert: ", hasTicket || isVip || isEmployee) */

/* 
const isWeekend = true
const isRaining = true
const hasUmbrella = false

console.log("Can go for a walk: ", isWeekend && (!isRaining || hasUmbrella)) */
/* 
const hasFood = true
const hasDrink = false
const isHungry = true

console.log("Can have picnic: ", isHungry && !hasDrink && hasFood ) */

/* 
const isSunny = false
const hasHomework = true

console.log("Can go outside: ", !isSunny && hasHomework)
console.log("Need to study: ", hasHomework) */
/* 

const isOnline = false
const isBusy = true

console.log("Can call: ", isOnline && isBusy) */
/* 
const hasKey = false;
const isDoorOpen = true;

console.log('Can enter: ', hasKey || isDoorOpen); */

/* 
const hasTicket = false
const hasMoney = true
const isFreeEntry = false

console.log('Can attend concert: ', hasTicket || (hasMoney && isFreeEntry)) */

/* 
const isRaining = true
const hasUmbrella = false

console.log('Will get wet: ', isRaining && !hasUmbrella) */
/* 
const isShopOpen = false;
const hasProducts = true;

console.log('Can buy products: ', isShopOpen && hasProducts) */
/* 
const isWeekend = true
const isSick = true

console.log('Need to work: ', !isWeekend && isSick) */
/* 
const hasPass = false
const isEmployee = true

console.log('Allow entry: ', hasPass || isEmployee) */
/* 
const isWinter = true;
const hasWarmClothes = false;
const hasCar = true;

console.log("Will freeze: ", isWinter && !hasWarmClothes && !hasCar); */

/* 
const hasPhone = false
console.log('Has phone: ', hasPhone)
console.log('No phone: ', !hasPhone) */

/* 
const isHungry = true

console.log('Is hungry: ', isHungry)
console.log('Not hungry: ', !isHungry) */
/* 
const isHungry = true;
const hasFood = false;

console.log("Will eat: ", isHungry && hasFood);
console.log("Will starve: ", isHungry && !hasFood); */
/* 
const isRaining = true;
const isWindy = false;

console.log("Good weather: ", isRaining &&  !isWindy);
console.log("Bad weather: ", isRaining  || isWindy); */

/* 
const hasTicket = false
const onList = true
const isFriend = false

console.log(`Can enter: `, hasTicket || (onList && isFriend)) */

/* const isOpen = false;
const isWeekend = true;
const isEmergency = true;

console.log("Can visit doctor: ", (!isOpen && !isWeekend) || isEmergency);
console.log("Must wait: ", isEmergency && (isOpen || isWeekend)); */
/* 
const hasPassword = false;
const isAdmin = true;
const isBanned = false;

console.log(`Access granted: `, (hasPassword && isBanned) || isAdmin); */
/* 
const isDoorOpen = true

console.log('Door is open:', isDoorOpen)
console.log('Door is closed: ', !isDoorOpen) */

/* 
const isLightOn = false

console.log('Light is on: ', isLightOn)
console.log('Light is off:', !isLightOn) */
/* 
const isCatHungry = true;
const hasFoodInBowl = false;

console.log('Cat will eat: ', isCatHungry && hasFoodInBowl)
console.log(`Cat needs food: `, isCatHungry && hasFoodInBowl) */

/* 
const isTVOn = false; 
const hasElectricity = true; 

console.log("Can watch TV: ", isTVOn && hasElectricity);
console.log("TV not working: ", isTVOn || hasElectricity);
 */
/* 
let a = 5;
let b = 10;
let sum = 0;
for (let i = a; i <= b; i++) {
  sum += i;
}
console.log(sum);
 */
/* 
let sumEven = 0;
let sumOdd = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sumEven++;
  } else {
    sumOdd++;
  }
}
console.log(`Even number - ${sumEven}\nOdd Numbers - ${sumOdd}`); */

/* 
for (let i = 0; i <= 5; i++){

} */

/* for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 */
/* 
let i = 1;

while (i <= 5) {
  console.log(i ** 2);
  i++;
} */
/* 
let i = 0;

do {
  let numberUserInput = +prompt();
  i++;
  console.log("End");
} while (i <= 10);
 */

/* 
const justArray = [10, 20, 30, 40, 50]

for (let number of justArray){
    console.log(number)
} */

/* const user = {
  name: "Anna",
  age: "25",
  city: "Moscow",
};

for (let us in user) {
  console.log(`${us} ${user[us]}`);
 */
/* 
const colors = ["red", "green", "blue", "yellow", "purple"];
let counter = 1;
for (let color of colors) {
  console.log(`Color #${counter++}: ${color}`);
}
 */
/* 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let number of numbers) {
  if (number % 3 === 0) {
    console.log("Fizz");
  }
  if (number % 5 === 0) {
    console.log("Buzz");
  }
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  }
  console.log(number);
} */
/* 
let n = 5;
let counter = 1;
for (let i = 1; i <= n; i++) {
  console.log(`${i}`);
} */

/* 
for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${i * 5}`)
} */
/* 
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Even");
  } else {
    console.log("NotEven");
  }
} */
/* 
let sum = 0;

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(`Sum is: ${sum}`); */

/* 
let userNumber = +prompt()

for (let i = 1; i <= userNumber; i++){
    if (i % 3 === 0){
        console.log('Number')
    }else{
        console.log(i)
    }
} */
/* 
for (let i = 1; i <= 10; i++){
    if (i < 5){
        console.log('Small')
    }else if (i > 5 || i === 5){
        console.log('Big')
    }
} */

/* 
for (let i = 1; i <= 15; i++){
    if (i % 2 === 0 && i % 3 === 0){
        console.log('Both')
    }else if (i % 3 === 0){
        console.log('Three')
    }else if (i % 2 === 0){
        console.log('Two')
    }else{
        console.log(i)
    }
} */
/* 
for (let i = 1; i <= 20; i++){
    if ( i % 4 === 0){
        continue
    }else{
        console.log(i)
    }
} */
/* 
let randomNumber = Math.floor(Math.random() * 10) + 1;

while (pr)
 */



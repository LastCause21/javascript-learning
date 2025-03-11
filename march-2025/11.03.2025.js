/* let prices = {
  apple: 30,
  banana: 20,
  orange: 40,
};

let discount = 5;

for (let price in prices) {
  if (prices[price] - discount < 20) {
    price[price] = 20;
  } else {
    prices[price] = prices[price] - discount;
  }
}
console.log(prices); */
/* 
 let prices = {
  apple: 30,
  banana: 20,
  orange: 40,
};

let discount = 5;

for (let fruit in prices) {
  if (prices[fruit] - discount < 20) {
    prices[fruit] = 20; 
  } else {
    prices[fruit] = prices[fruit] - discount;
  }
} */

const { cpSync } = require("fs");

/* console.log(prices);  */

/* let fruits = {
  apple: 52,
  banana: 89,
  orange: 47,
};

let portions = {
  apple: 2,
  banana: 1,
  orange: 3,
};

let allCalories = 0;
let totalCalories = {};

for (let fruit in fruits) {
  totalCalories[fruit] = fruits[fruit] * portions[fruit];
  allCalories += totalCalories[fruit];
}
console.log(`${totalCalories} ${allCalories}`); */

/* let prices = {
  apple: 30,
  banana: 20,
  orange: 40,
};

let weights = {
  apple: 1.5,
  banana: 2.0,
  orange: 1.0,
};
let totalCount = 0;
const totalCost = {};
for (let price in prices) {
  totalCost[price] = prices[price] * weights[price];
  totalCount += totalCost[price];
}
console.log(totalCost);
console.log(totalCount);
 */

/* 
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */

/* function countBy(x, n) {
  let newArray = [];
  for (let i = x; i <= n; i++) {
    if (i % x === 0) {
      newArray.push(i);
    }
  }
  return newArray;
}
console.log(countBy(1, 10));
console.log(countBy(2, 5)); */

/* const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd"); */
/* 
const positiveSum = (arr) => {
  let result = arr
    .filter((number) => number > 0)
    .reduce((sum, item) => sum + item, 0);
  return result;
};

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5])); */

/* const removeChar = (str) => {
  return str.slice(1, -1);
};
console.log(removeChar("eloquent")); */

/* const repeatStr = (n, s) => {
  return s.repeat(n);
};

console.log(repeatStr(6, "I")); */

/* const squareDigits = (number) => {
  return Number(
    number
      .toString()
      .split("")
      .map((number) => number ** 2)
      .join("")
  );
};
console.log(squareDigits(9119)); */

/* const descendingOrder = (numbers) => {
  return Number(
    numbers
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
};

console.log(descendingOrder(42145)); */

/* const isIsogram = (str) => {
  let getNewStr = str.split("");
  let newObjSymbol = {};

  for (let str of getNewStr) {
    if (newObjSymbol[str]) {
      newObjSymbol[str]++;
    } else {
      newObjSymbol[str] = 1;
    if (newObjSymbol[str] > 1){}
    }
  }
  return newObjSymbol;
};

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
*/

/* function getCount(str) {
  let counter = 0;
  for (let i = 0; i <= str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      counter++;
    }
  }
  return counter;
}

console.log(getCount("abracadabra"));
 */
/* 
function getCount(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let counter = 0;

  for (let char of str) {
    if (vowels[char]) {
      counter++;
    }
  }
  return counter;
}
console.log(getCount("abracadabra")); // 5 */

/* const library = {
  books: {},
};

console.log(library.books);

library.books["War and piece"] = {
  author: "Lev Tolstoi",
  year: 1869,
};

console.log(library); */

/* const student = {
  name: "John",
  age: 20,
};

function changeAge(newAge) {
  student.age = newAge;
}

function getName() {
  return student.name;
}

console.log(student.age); // 20
changeAge(21);
console.log(student.age); // 21

console.log(getName()); // "John"
 */

// Создаем объект магазина
/* const store = {
  name: "GameShop",
  games: {
    minecraft: {
      price: 20,
      inStock: true,
    },
    tetris: {
      price: 10,
      inStock: false,
    },
  },
};


function getName(){
  store.name
} */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
};

const getCatName = (cat) => cat.name;
console.log(getCatName(cat));

const getCatAge = (cat) => cat.age;
console.log(getCatAge(cat));

const getCatInfo = (cat) => {
  return `- Cat name is ${cat.name}\n- Age is ${cat.age}`;
};
console.log(getCatInfo(cat)); */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
};

function isCatOld(cat) {
  return cat.age > 5;
}

console.log(isCatOld(cat)); */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "fish",
    evening: "milk",
  },
};

const getMorningFood = (cat) => cat.food.morning;
console.log(getMorningFood(cat)); */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "fish",
    evening: "milk",
  },
};

const getAllFood = (cat) =>
  `Morning: ${cat.food.morning}\nEvening: ${cat.food.evening}`;
console.log(getAllFood(cat));
 */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "fish",
    evening: "milk",
  },
  toys: ["ball", "mouse", "string"],
};

const getToys = (cat) => cat.toys[0];
console.log(getToys(cat));

const countToys = (cat) => cat.toys.length;
console.log(countToys(cat));

const hasToy = (cat, toyName) => {
  return cat.toys.includes(toyName);
};

console.log(hasToy(cat, "ball")); */
/* const addToy = (cat, newToy) => {
  return cat.toys.push(newToy);
};
 */
/* console.log(addToy(cat, "car")); */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "fish",
    evening: "milk",
  },
  toys: ["ball", "mouse", "string"],
};
 */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "fish",
    evening: "milk",
  },
  toys: ["ball", "mouse", "string", "car"],
};

const getLastToy = (cat) => cat.toys[cat.toys.length - 1];
console.log(getLastToy(cat));
 */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "fish",
    evening: "milk",
  },
  toys: ["ball", "mouse", "string", "car"],
}; */

/* const removeToy = (cat, nameToys) => {
  let result;
  if (cat.toys.includes(nameToys)){
    result = cat.toys.filter((toy) => toy !== nameToys)
    return true
  }else{
    return false
  }
}


console.log(removeToy(cat, 'car')) */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "fish",
    evening: "milk",
  },
  toys: ["ball", "mouse", "string"],
};
 */
/* const changeMorningFood = (cat, newEat) => (cat.food.morning = newEat);
console.log(changeMorningFood(cat, "vegetable")); */
/* 
const getFoodSchedule = (cat) =>
  ` - Morning: ${cat.food.morning}\n - Evening: ${cat.food.evening}`;

console.log(getFoodSchedule(cat));
*/
/* 
const feedCat = (cat) => {
  if (cat.hungry) {
    cat.hungry = false;
    return "Cat was fed";
  } else {
    return "Cat is not hungry";
  }
};
console.log(feedCat(cat)); */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "vegetable",
    evening: "milk",
  },
  toys: ["ball", "mouse", "string"],
  hungry: true,
}; */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "vegetable",
    evening: "milk",
  },
  toys: ["ball", "mouse", "string"],
  hungry: false,
  sleep: false,
};

const checkCat = function (cat) {
  if (cat.hungry && cat.sleep) {
    return "Cat is hungry and sleeping";
  } else if (!cat.hungry && !cat.sleep) {
    return "Cat is not hungry and awake";
  } else if (cat.hungry && !cat.sleep) {
    return "Cat is hungry and awake";
  } else if (!cat.hungry && cat.sleep) {
    return "Cat is not hungry and sleeping";
  }
}; */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "vegetable",
    evening: "milk",
  },
  toys: ["ball", "mouse", "string"],
  hungry: false,
  sleep: false,
  energy: 10, // Новое свойство! Энергия кота (максимум 10)
};

const playCat = function (cat) {
  if (cat.energy > 0) {
    cat.energy -= 2;
    return "Cat is playing";
  } else if (cat.energy === 0) {
    return "Cat is too tired";
  }
}; */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "vegetable",
    evening: "milk",
  },
  toys: ["ball", "mouse", "string"],
  hungry: false,
  sleep: false,
  energy: 8,
  mood: 5,
};

function checkMood(cat) {
  if (cat.mood > 7) {
    return "Cat is happy";
  } else if (cat.mood >= 4 && cat.mood <= 7) {
    return "Cat is normal";
  } else {
    return "Cat is angry";
  }
}
 */

/* const cat = {
  name: "Murzik",
  age: 3,
  color: "black",
  food: {
    morning: "vegetable",
    evening: "milk",
  },
  toys: ["ball", "mouse", "string"],
  hungry: false,
  sleep: false,
  energy: 8,
  mood: 5,
  moodHistory: [], // Новое свойство! История изменений настроения
};

const addMoodRecord = (cat, newMood) => {
  let result = cat.moodHistory.push(newMood);
  return cat.moodHistory.length;
};

console.log(addMoodRecord(cat, 13)); */

/* const phone = {
  brand: "iPhone",
  model: "12",
  memory: 128,
  color: "black",
  battery: 100,
  isOn: false,
};

const switchPhone = (phone) => {
  if (phone.isOn) {
    phone.isOn = false;
    return "Phone is now Off";
  } else {
    phone.isOn = true;
    return "Phone in now On";
  }
}; */

/* const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  fuel: 50, // количество топлива (максимум 50)
  isRunning: false,
};

const startCar = (car) => {
  if (car.fuel > 0) {
    car.isRunning = true;
    car.fuel -= 1;
    return "Car started";
  } else {
    return "No fuel";
  }
};
 */

/* const computer = {
  brand: "Apple",
  model: "MacBook",
  memory: {
    total: 16,
    used: 8,
  },
  isLaptop: true,
};

const checkMemory = (computer) => {
  let resultMemoryUser = computer.memory.total - computer.memory.used;
  return `Free memory: ${resultMemoryUser} GB`;
};
console.log(checkMemory(computer)) */


/* const getStudentGrade = (students, nameStudents) => {
  if (students.name === nameStudents) {
    return students.name.grades;
  } else {
    return "Student not found";
  }
};
console.log(getStudentGrade(students, "Alex")); */
/* const students = [
  {
    name: "Alex",
    grades: {
      math: 4,
      english: 5,
      history: 3,
    },
  },
  {
    name: "Kate",
    grades: {
      math: 5,
      english: 4,
      history: 5,
    },
  },
];
 */


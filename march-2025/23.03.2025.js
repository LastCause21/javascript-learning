/* const student = {
  name: "John",
  grades: [],

  addGrade(grade) {
    this.grades.push(grade);
  },

  getAverageGrade() {
    return this.grades / this.grades.length;
  },
};

student.addGrade(85);
student.addGrade(90);
student.addGrade(95);
console.log(student.getAverageGrade());
console.log(student.addGrade());
 */

const { to } = require("color-string");

/* const bankAccount = {
  owner: "John",
  balance: 1000,
  transactions: [],

  deposit(amount) {
    if (amount === undefined && amount > 0) {
      return "Please write amount and positive number";
    }
    const resultBalanceAmount = this.balance + amount;
    return `${this.transactions.push(resultBalanceAmount)}`;
  },
};
console.log(bankAccount.deposit(500));
console.log(bankAccount.transactions);
 */

/* const cart = {
  items: [],
  total: 0,

  addItem(name, price) {
    this.items.push(name);
    this.total += price;
    return `Add product Name:${name}. Sum ${this.total}`;
  },

  getInfo() {
    return `${this.items} ${this.total}`;
    // Ваш код должен вернуть строку:
    // "В корзине: название1, название2. Сумма: total"
  },
};

// Примеры использования:
console.log(cart.addItem("яблоко", 50)); // "Добавлен товар: яблоко. Сумма: 50"
console.log(cart.addItem("банан", 30)); // "Добавлен товар: банан. Сумма: 80"
console.log(cart.getInfo()); */

/* const book = {
  title: "",
  pages: 0,
  currentPage: 0,

  startReading(bookTitle, totalPages) {
    this.title = bookTitle;
    this.pages = totalPages;
    this.currentPage = 1;
    return `Start reading book ${this.title} pages: ${this.pages}`;
  },

  nextPage() {
    this.currentPage += 1
    if (this.currentPage >= this.pages){
        return this.pages
    } 

  },
};
console.log(book.startReading("Harry Potter", 400));
 */
/* 
const player = {
  name: "",
  health: 100,
  level: 1,

  createPlayer(playerName) {
    this.name = playerName;
    return `Player ${this.name} created. Health: ${this.health}, Level: ${this.level}`;
  },

  takeDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `Game over!`;
    } else {
      return `Health remaining: ${this.health}`;
    }
  },

  heal(amount) {
    this.heal *= amount;
    if (this.heal > 100) {
      this.heal = 100;
    } else {
      return `Health! Current health: ${this.heal}`;
    }
  },
};
console.log(player.createPlayer("Alex")); // "Player Alex created. Health: 100, Level: 1"
console.log(player.takeDamage(30)); // "Health remaining: 70"
console.log(player.takeDamage(80)); */

/* const player = {
  name: "",
  health: 100,
  level: 1,

  createPlayer(playerName) {
    this.name = playerName;
    return `Player ${this.name} created. Health: ${this.health}, Level: ${this.level}`;
  },

  takeDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return `Game Over!`;
    } else {
      return `Health remaining: ${this.health}`;
    }
  },

  heal(amount) {
    this.health += amount;
    if (this.health > 100) {
      this.health = 100;
    }
    return `Healed! Current health: ${this.health}`;
  },

  levelUp() {
    this.level += 1;
    this.health = 100;
    return `Level Up! Level ${this.level}, Health restored to 100`;
  },

  getStats() {
    return `Player Stats - Name: ${this.name}, Level: ${this.level}, Health: ${this.heal}`;
  },
}; */

/* const car = {
  brand: "",
  model: "",
  fuel: 100,
  mileage: 0,
  isRunning: false,

  createCar(carBrand, carModel) {
    this.brand = carBrand;
    this.model = carModel;
    return `Created ${this.brand} ${this.model}. Fuel: ${this.fuel}, Mileage: ${this.mileage}`;
  },

  startEngine() {
    if (this.fuel > 0) {
      this.isRunning = true;
      return `Engine started`;
    } else {
      return `No fuel!`;
    }
  },

  drive(distance){
    if (this.isRunning){
        this.fuel -= 10
        this.mileage += 10
    }
    return 

  }
};

console.log(car.createCar("Toyota", "Camry"));
console.log(car.startEngine());
 */

/* const car = {
  brand: "",
  model: "",
  fuel: 100,
  mileage: 0,
  isRunning: false,

  createCar(carBrand, carModel) {
    this.brand = carBrand;
    this.model = carModel;
    return `Created ${this.brand} ${this.model}. Fuel: ${this.fuel}, Mileage: ${this.mileage}`;
  },

  startEngine() {
    if (this.fuel > 0) {
      this.isRunning = true;
      return `Engine started`;
    } else {
      return `No fuel!`;
    }
  },

  drive(distance) {
    if (!this.isRunning) {
      return `Start engine first!`;
    }

    const fuelNeeded = distance / 10;

    if (this.fuel < fuelNeeded) {
      return `Not enough fuel!`;
    }
    this.fuel -= fuelNeeded;
    this.mileage += distance;
    return `Drove ${distance} km. Fuel left: ${this.fuel}`;
  },

  refuel(amount){
    if (this.fuel + amount > 100){
        this.fuel = 100
    }
  }
}; */

/* const simpleTimer = {
  seconds: 5,
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      console.log(this.seconds);
      this.seconds--;

      if (this.seconds < 0) {
        console.log("Time is up");
        this.stop();
      }
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    return "Timer stopped";
  },
};
console.log(simpleTimer.start());
 */

/* const counter = {
  count: 0,

  increment() {
    this.count++;
    return this.count;
  },

  decrement() {
    this.count--;
    return this.count;
  },

  reset() {
    this.count = 0;
    return `Counter reset to 0`;
  },

  setValue(newValue) {
    if (typeof newValue === "number") {
      this.count = newValue;
      return `Counter set to: ${this.count}`;
    } else {
      return `Error: please provide a number`;
    }
  },
};
console.log(counter.setValue(5));
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset()); */

/* const calculator = {
  result: 0,

  add(number) {
    if (typeof number === "number") {
      this.result += number;
    } else {
      return `Error not a number`;
    }
    return `Added: ${number}. Result: ${this.result}`;
  },

  subtract(number) {
    if (typeof number === "number") {
      this.result -= number;
    } else {
      return `Error not a number`;
    }
    return `Subtracted ${number}. Result: ${this.result}`;
  },

  multiply(number) {
    if (typeof number === "number") {
      this.result *= number;
    } else {
      return `Error not a number`;
    }
    return `Multiplied by ${number}. Result: ${this.result}`;
  },

  divide(number) {
    if (typeof number === "number") {
      if (number === 0) {
        return `Error not a number or number = 0`;
      }
      this.result / number;
      return `Divided by ${number}. Result: ${this.result}`;
    } else {
      return `Error not a number`;
    }
  },

  clear() {
    this.result = 0;
    return `Calculator cleared`;
  },

  getResult() {
    return `Current result: ${this.result}`;
  },
};
console.log(calculator.add(10)); // "Added 10. Result: 10"
console.log(calculator.multiply(2)); // "Multiplied by 2. Result: 20"
console.log(calculator.divide(4)); // "Divided by 4. Result: 5"
console.log(calculator.divide(0));
 */

/* const calculator = {
  result: 0,

  add(number) {
    if (typeof number === "number") {
      this.result += number;
      return `Added: ${number}. Result: ${this.result}`;
    } else {
      return `Error not a number`;
    }
  },

  subtract(number) {
    if (typeof number === "number") {
      this.result -= number;
      return `Subtracted ${number}. Result: ${this.result}`;
    } else {
      return `Error not a number`;
    }
  },

  multiply(number) {
    if (typeof number === "number") {
      this.result *= number;
      return `Multiplied by ${number}. Result: ${this.result}`;
    } else {
      return `Error not a number`;
    }
  },

  divide(number) {
    if (typeof number === "number") {
      if (number === 0) {
        return `Error: cannot divide by zero`;
      }
      this.result /= number;
      return `Divided by ${number}. Result: ${this.result}`;
    } else {
      return `Error not a number`;
    }
  },

  clear() {
    this.result = 0;
    return `Calculator cleared`;
  },

  getResult() {
    return `Current result: ${this.result}`;
  },
};
console.log(calculator.add(10)); // "Added: 10. Result: 10"
console.log(calculator.multiply(2)); // "Multiplied by 2. Result: 20"
console.log(calculator.divide(4)); // "Divided by 4. Result: 5"
console.log(calculator.divide(0)); // "Error: cannot divide by zero"
console.log(calculator.divide("abc"));
 */

/* const todo = {
  tasks: [],

  addTask(text) {
    if (text !== null) {
      this.tasks.push(text);
    } else {
      `Added task in todo`;
    }
    return `Task added: ${text}`;
  },

  removeTask(index) {
    if (index !== null){
        this.tasks
    }
  },
};
console.log(todo.addTask("Купить хлеб"));
console.log(todo.tasks); */

/* const simpleTodo = {
  tasks: [],

  add(task) {
    this.tasks.push(task);
    return `Added task ${task}`;
  },

  show() {
    if (this.tasks.length === 0) {
      return `Empty task`;
    } else {
      this.tasks;
    }
  },

  clear() {
    this.tasks.length = 0;
    return `Clear tasks`;
  },
}; */

/* const game = {
  score: 0,
  level: 1,

  addPoints(points) {
    this.score += points;
    return `Earned ${points} points. Total: ${this.score}`;
  },
  levelUp() {
    this.level++;
    return `Level up! Current level: ${this.level}`;
  },

  reset() {
    this.score = 0;
    this.level = 1;
    return `Game reset`;
  },
};

console.log(game.addPoints(100));
console.log(game.levelUp()); // "Level up! Current level: 2"
console.log(game.reset()); */



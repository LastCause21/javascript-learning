/* function enough(cap, on, wait) {
  if (cap === on + wait || cap > on + wait) {
    return 0;
  } else {
    return on + wait - cap;
  }
}

console.log(enough(10, 5, 5)); // 0
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
strictEqual(enough(10, 5, 5), 0);
assert.strictEqual(enough(100, 60, 50), 10);
assert.strictEqual(enough(20, 5, 5), 0);
 */

/* const colorChanger = {
  colors: ["😊", "😎", "🎮", "🚀", "🌈", "🎨", "🎵"],
  currentIndex: 0,

   getNextColor() {
    this.currentIndex++;
    if (this.currentIndex > this.colors.length) {
      this.currentIndex = 0;
    }
    return this.colors[this.currentIndex];
  }, 
  getRandomColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  },
};

console.log(colorChanger.getRandomColor()); */

/* const emojiPicker = {
  emojis: ["😊", "😎", "🎮", "🚀", "🌈", "🎨", "🎵"],
  lastUsed: null,

  getRandomEmoji() {
    let randomEmoji = Math.floor(Math.random() * this.emojis.length);
    if (randomEmoji === this.lastUsed) {
      randomEmoji = (randomEmoji + 1) % this.emojis.length;
    }

    this.lastUsed = randomEmoji;
    return this.emojis[randomEmoji];
  },

  getAllEmojis() {
    return `${this.emojis.join(" ")}`;
  },
};
console.log(emojiPicker.getRandomEmoji());
console.log(emojiPicker.getAllEmojis());
 */
/* 
const quoteManager = {
  quotes: [
    "Life is beautiful",
    "Keep learning",
    "Stay positive",
    "Be creative",
    "Never give up",
  ],

  favorites: [],

  getRandomQuota() {
    const randomQuota = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomQuota];
  },

  addToFavorites(quota) {
    if (this.quotes.includes(quota)) {
      if (!this.favorites.includes(quota)) {
        this.favorites.push(quota);
        return `Great Quota added`;
      }
    } else {
      return `Error not added Quota`;
    }
  },
};

console.log(quoteManager.getRandomQuota());
console.log(quoteManager.addToFavorites("Life is beautiful"));
console.log(quoteManager.addToFavorites("Wrong quote")); */

/* const quoteManager = {
  quotes: [
    "Life is beautiful",
    "Keep learning",
    "Stay positive",
    "Be creative",
    "Never give up",
  ],
  favorites: [],

  getRandomQuote() {
    const randomQuote = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomQuote];
  },

  addToFavorites(quote) {
    if (!this.quotes.includes(quote)) {
      return "Error: quote not found";
    }

    if (this.favorites.includes(quote)) {
      return "This quote is already in favorites";
    }

    this.favorites.push(quote);
    return "Quote added to favorites";
  },

  showFavorites() {
    if (this.favorites.length > 0) {
      return `${this.favorites.join(" ")}`;
    } else {
      return "No favorite quotes yet";
    }
  },
};
console.log(quoteManager.getRandomQuote());
console.log(quoteManager.addToFavorites("Life is beautiful"));
console.log(quoteManager.addToFavorites("Wrong quote"));
console.log(quoteManager.showFavorites()); */

/* const taskManager = {
  tasks: [],

  addTask(text, priority) {
    if (text) {
      if (priority === "high" || priority === "medium" || priority === "low") {
      }
    }
    return {
      t
    }
  },
};
 */

/* const taskManager = {
  tasks: [],

  addTask(text, priority) {
    if (!text) {
      return `Error: task text is required`;
    }

    const validPriorities = ["high", "medium", "low"];
    if (!validPriorities.includes(priority)) {
      return "Error: invalid priority";
    }

    const newTask = {
      text,
      priority,
      completed: false,
    };

    this.tasks.push(newTask);
    return "Task added";
  },
};
console.log(taskManager.addTask("Learn JavaScript", "high"));
console.log() */

/* const notepad = {
  notes: [],

  addNote(text) {
    if (text) {
      this.notes.push(text);
      return `Note added: ${text}`;
    } else {
      return `Empty text`;
    }
  },

  showNotes() {
    if (this.notes.length === 0) {
      return `No notes`;
    } else {
      return `${this.notes}`;
    }
  },

  removeLastNote() {
    if (this.notes.length !== 0) {
      delete this.notes[this.notes.length - 1];
      return `Last note removed
      `;
    }
  },
};
console.log(notepad.addNote("Buy milk"));
console.log(notepad.addNote("Call mom"));
console.log(notepad.showNotes());
console.log(notepad.removeLastNote()); */

/* const moodTracker = {
  moods: {
    happy: "😊",
    sad: "😢",
    angry: "😠",
    sleepy: "😴",
    excited: "🤩",
    hungry: "😋",
  },
  currentMood: null,

  setMood(mood) {
    if (mood in this.moods) {
      this.currentMood = mood;
      return `Current mood: ${this.moods[mood]}`;
    } else {
      return "Unknown mood!";
    }
  },

  getRandomMood() {
    const moodNames = Object.keys(this.moods);
    const randomIndex = Math.floor(Math.random() * moodNames.length);
    const randomMood = moodNames[randomIndex];
    return `Random mood: ${this.moods[randomMood]}`;
  },
};
console.log(moodTracker.setMood("happy"));
console.log(moodTracker.setMood("tired"));
console.log(moodTracker.getRandomMood()); */

/* const foodEmoji = {
  fruits: {
    apple: "🍎",
    banana: "🍌",
    orange: "🍊",
    grapes: "🍇",
    watermelon: "🍉",
  },
  vegetables: {
    carrot: "🥕",
    tomato: "🍅",
    cucumber: "🥒",
    potato: "🥔",
    broccoli: "🥦",
  },

  getAllFruits() {
    const onlyValueFruits = Object.values(this.fruits);
    return onlyValueFruits;
  },

  findFood(name) {
    if (name in this.fruits) {
      return this.fruits[name];
    } else if (name in this.vegetables) {
      return this.vegetables[name];
    } else {
      return "Food not found!";
    }
  },

  countAllFood() {
    let counter = 0;
    let counter2 = 0;
    for (fruit in this.fruits) {
      counter++;
    }
    for (vegetable in this.vegetables) {
      counter2++;
    }
    return counter + counter2;
  },
};
console.log(foodEmoji.getAllFruits());
console.log(foodEmoji.findFood("apple"));
console.log(foodEmoji.findFood("carrot"));
console.log(foodEmoji.findFood("pizza"));
console.log(foodEmoji.countAllFood()); */

/* const advancedFoodEmoji = {
  fruits: {
    apple: "🍎",
    banana: "🍌",
    orange: "🍊",
    grapes: "🍇",
    watermelon: "🍉",
  },
  vegetables: {
    carrot: "🥕",
    tomato: "🍅",
    cucumber: "🥒",
    potato: "🥔",
    broccoli: "🥦",
  },

  getRandomFrom(category) {
    if (category in this) {
      const emojis = Object.values(this[category]);
      const randomIndex = Math.floor(Math.random() * emojis.length);
      return emojis[randomIndex];
    }
    return "Category not found!";
  },

  makeSalad() {
    const vegetables = Object.values(this.vegetables);
    let salad = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * vegetables.length);
      salad.push(vegetables[randomIndex]);
    }
    return salad.join(" ");
  },
};
console.log(advancedFoodEmoji.getRandomFrom("fruits"));
console.log(advancedFoodEmoji.makeSalad());
 */

/* const simpleEmoji = {
  happy: "😊",
  sad: "😢",
  laugh: "😄",
  heart: "❤️",

  getEmoji(name) {
    if (name in simpleEmoji) {
      return simpleEmoji[name];
    } else {
      return `Error emoji not found`;
    }
  },

  count() {
    return Object.keys(simpleEmoji).length - 2;
  },
};
console.log(simpleEmoji.getEmoji("happy"));
console.log(simpleEmoji.count());
 */

/* const colors = {
  list: ["red", "blue", "green", "yellow"],

  getFirst() {
    return this.list[0];
  },

  getLast() {
    return this.list[this.list.length - 1];
  },

  addColor(color) {
    if (!this.list.includes(color)) {
      this.list.push(color);
      return `Color ${color} added`;
    } else {
      return "Color already exists";
    }
  },
};
console.log(colors.getFirst());
console.log(colors.getLast());
console.log(colors.addColor("pink")); // "Color added"
console.log(colors.addColor("red")); */

/* function moveZeros(arr) {
  let newArray = [];
  for (number of arr) {
    if (number === 0) {
      newArray.push(number);
    }
  }
  let numberArray1 = arr.filter((number) => number !== 0);
  return [...numberArray1, ...newArray];
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);) */

/* const numberList = {
  numbers: [1, 2, 3, 4, 5],

  getSum() {
    return `Sum numbers: ${this.numbers.reduce((sum, number) => sum + number, 0)}`;
  },

  addNumber(num) {
    if (typeof num === "number") {
      if (num > this.numbers[this.numbers.length - 1]) {
        this.numbers.push(num);
        return "Success";
      }
    }
    return "Error";
  },

  getEven() {
    return this.numbers.filter((number) => number % 2 === 0);
  },
};

console.log(numberList.getSum());
console.log(numberList.numbers);
console.log(numberList.addNumber(6));
console.log(numberList.addNumber(3));
console.log(numberList.getEven());
 */

/* const wordList = {
  words: ["hello", "world", "javascript", "coding"],

  getLongest() {
    let newArray = this.words.sort((a, b) => b.length - a.length);
    return newArray[0];
  },

  addWord(word) {
    if (typeof word === "string") {
      if (word.length > 3) {
        this.words.push(word);
        return `Word: ${word} added success`;
      }
    }
    return "Error: word too short or no string";
  },

  getWordsStartingWith(letter) {
   
  },
};

console.log(wordList.getLongest());
console.log(wordList.addWord("hi"));
console.log(wordList.getWordsStartingWith("h"));
 */

/* const numberGame = {
  score: 0,

  addPoints(points) {
    if (points > 0) {
      this.score += points;
      return `Score: ${this.score}`;
    }
    return `Error negative number`;
  },
  checkLevel(level) {
    return this.score >= level;
  },
};
console.log(numberGame.addPoints(5));
console.log(numberGame.addPoints(-1));
console.log(numberGame.checkLevel(3));
console.log(numberGame.checkLevel(10));
 */

/* const gameLevel = {
  level: 1,
  exp: 0,
  expToNextLevel: 10,

  addExp(amount) {

  },
}; */

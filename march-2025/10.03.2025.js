/*  const animeList = [
  { title: "Naruto", episodes: 720, rating: 8.3 },
  { title: "Death Note", episodes: 37, rating: 9.0 },
  { title: "One Piece", episodes: 1000, rating: 8.7 },
  { title: "Bleach", episodes: 366, rating: 8.2 },
];

const getAnimeStats = (animeList) => {
  let sum = 0;
  let counter = 0;
  for (let anime of animeList) {
    sum += anime.episodes;
    counter++;
  }

  return {
    totalEpisodes: sum,
    totalAnime: counter,
  };
};
// console.log(getAnimeStats(animeList));

const getAnimeRatings = (animeList) => {
  let sumAnimeRating = 0;
  let maxRating = animeList[0];
  let minRating = animeList[0];
  for (let anime of animeList) {
    sumAnimeRating += anime.rating;
  }
  for (let maxAnime of animeList) {
    if (maxAnime.rating > maxRating.rating) {
      maxRating = maxAnime;
    }
  }
  for (let minAnime of animeList) {
    if (minAnime.rating < minRating.rating) {
      minRating = minAnime;
    }
  }

  let averageRatingResult = sumAnimeRating / animeList.length;
  return {
    averageRating: averageRatingResult,
    highestRated: maxRating.title,
    lowestRated: minRating.title,
  };
};

const saveTask = getAnimeRatings(animeList);
console.log(saveTask);
 */

/*
const getAnimeRatings = (animelList) => {
  let sumAnimeRating = 0;
  let maxRating = animelList[0];
  let minRating = animelList[0];

  for (let anime of animeList) {
    sumAnimeRating += anime.rating;

    if (anime.rating > maxRating.rating) {
      maxRating = anime;
    }
    if (anime.rating < minRating.rating) {
      minRating = anime;
    }
  }

  let averageRatingResult = sumAnimeRating / animeList.length;

  return {
    averageRating: averageRatingResult,
    highestRated: maxRating.title,
    lowestRated: minRating.title,
  };
};

let saveResult = getAnimeRatings(animeList);
console.log(saveResult); */
/*
const groupAnimeByType = (animeList) => {
  let counterSh = 0;
  let counterOther = 0;
  for (let anime of animeList) {
    if (anime.type === "Shounen") {
      counterSh++;
    } else {
      counterOther++;
    }
  }
  return {
    Shounen: counterSh,
    Thriller: counterOther,
  };
};

const resultGroup = groupAnimeByType(animeList);
console.log(resultGroup); */
/*
const animeList = [
  { title: "Naruto", episodes: 720, rating: 8.3, type: "Shounen" },
  { title: "Death Note", episodes: 37, rating: 9.0, type: "Thriller" },
  { title: "One Piece", episodes: 1000, rating: 8.7, type: "Shounen" },
  { title: "Bleach", episodes: 366, rating: 8.2, type: "Shounen" },
];

const groupAnimeByType = (animeList) => {
  const typeCount = {};

  for (let anime of animeList) {
    if (typeCount[anime.rating]) {
      typeCount[anime.rating]++;
    } else {
      typeCount[anime.rating] = 1;
    }
  }
  return typeCount;
};

console.log(groupAnimeByType(animeList)); */
/* 
const sortedAnimeList = (animeList) => {
  for (let anime of animeList) {
    console.log(anime.title);
  }
};
let resultSorted = sortedAnimeList(animeList);
resultSorted;
 */
/* const animeList = [
  { title: "Naruto", episodes: 720, rating: 8.3, type: "Shounen" },
  { title: "Death Note", episodes: 37, rating: 9.0, type: "Thriller" },
  { title: "One Piece", episodes: 1000, rating: 8.7, type: "Shounen" },
  { title: "Bleach", episodes: 366, rating: 8.2, type: "Shounen" },
  { title: "Your Name", episodes: 1, rating: 9.2, type: "Romance" },
];

const groupAnimeByRating = (animeList) => {
  
  let highRating = [];
  let averageRating = [];
  let justRating = [];
  
  for (let anime of animeList) {
    if (anime.rating >= 9.0) {
      highRating.push(anime.title);
    }
    if (anime.rating >= 8.5 && anime.rating < 9.0) {
      averageRating.push(anime.title);
    }
    if (anime.rating < 8.5) {
      justRating.push(anime.title);
    }
  }
  
  return {
    "High Rating": highRating,
    "Average Rating": averageRating,
    "Just Rating": justRating,
  };
};
console.log(groupAnimeByRating(animeList)); */

/* const getTypeStats = (animeList) => {
  const counterObj = {};

  for (const anime of animeList) {
    if (counterObj.title[anime]) {
      counterObj[anime]++;
    } else {
      counterObj[anime] = 1;
    }
  }
  return counterObj;
};

console.log(getTypeStats(animeList)); */
/* 
const animeList = [
  { title: "Naruto", episodes: 720, rating: 8.3, type: "Shounen" },
  { title: "Death Note", episodes: 37, rating: 9.0, type: "Thriller" },
  { title: "One Piece", episodes: 1000, rating: 8.7, type: "Shounen" },
  { title: "Bleach", episodes: 366, rating: 8.2, type: "Shounen" },
  { title: "Your Name", episodes: 1, rating: 9.2, type: "Romance" },
  ]; */

/*   
  const GamesByGenre = (gamesList) => {
    const counts = {};
  
    for (const game of gamesList) {
      if (!counts[game.genre]) {
        counts[game.genre] = {
          RPG: 0,
          Sports: 0,
        };
      }
    }
  }; */
/*   
const gamesList = [
  { title: "The Witcher 3", genre: "RPG", rating: 9.5 },
  { title: "FIFA 23", genre: "Sports", rating: 8.0 },
  { title: "Skyrim", genre: "RPG", rating: 9.0 },
  { title: "NBA 2K24", genre: "Sports", rating: 8.2 },
  { title: "Morrowind", genre: "RPG", rating: 8.8 },
];
 */
/* 
const fruitsList = [
  "apple", // 🍎
  "banana", // 🍌
  "apple", // 🍎
  "orange", // 🍊
  "banana", // 🍌
  "apple", // 🍎
];

const countFruits = (fruits) => {
  const counts = {};

  for (const fruit of fruits) {
    if (counts[fruit]) {
      counts[fruit] = counts[fruit] + 1;
    } else {
      counts[fruit] = 1;
    }
  }
  return counts;
};
console.log(countFruits(fruitsList)); */
/* 
const smilesList = ["😊", "😎", "😊", "😎", "😴", "😊"];

const countSmiles = (smile) => {
  let newCountSmile = {};
  for (const item of smile) {
    if (newCountSmile[item]) {
      newCountSmile[item]++;
    } else {
      newCountSmile[item] = 1;
    }
  }
  return newCountSmile;
};
console.log(countSmiles(smilesList)); // { '😊': 3, '😎': 2, '😴': 1 } */
/* 
const colorsList = [
  "red", // ❤️
  "blue", // 💙
  "red", // ❤️
  "green", // 💚
  "blue", // 💙
  "red", // ❤️
];

const countColors = (colorsList) => {
  let saveResultColors = {};

  for (const color of colorsList) {
    if (saveResultColors[color]) {
      saveResultColors[color]++;
    } else {
      saveResultColors[color] = 1;
    }
  }
  return saveResultColors;
};

const result = countColors(colorsList);
console.log(result);
 */
/* 
const colorsList = [
  { color: "red", emoji: "❤️" },
  { color: "blue", emoji: "💙" },
  { color: "red", emoji: "❤️" },
  { color: "green", emoji: "💚" },
  { color: "blue", emoji: "💙" },
  { color: "red", emoji: "❤️" },
];

const countColorsWithEmoji = (colorsList) => {
  let newCountOjb = {};

  for (const item of colorsList) {
    if (newCountOjb[item.color]) {
      newCountOjb[item.color].count++;
    } else {
      newCountOjb[item.color] = {
        count: 1,
        emoji: item.emoji,
      };
    }
  }
  return newCountOjb;
};
console.log(countColorsWithEmoji(colorsList)); */
/* 
const gamesList = [
  { name: "Tetris", rating: "⭐️⭐️⭐️" },
  { name: "Pacman", rating: "⭐️⭐️⭐️⭐️" },
  { name: "Tetris", rating: "⭐️⭐️⭐️" },
  { name: "Mario", rating: "⭐️⭐️⭐️⭐️⭐️" },
  { name: "Pacman", rating: "⭐️⭐️⭐️⭐️" },
];

const counterStars = (gamesList) => {
  let newCounterObj = {};

  for (const starts of gamesList) {
    if (newCounterObj[starts.name]) {
      newCounterObj[starts.name].count++;
    } else {
      newCounterObj[starts.name] = {
        count: 1,
        rating: starts.rating,
      };
    }
  }
  return newCounterObj;
};
console.log(counterStars(gamesList)); */

/* const games = ["Mario", "Tetris", "Mario", "Pacman", "Tetris", "Mario"];

let newGames = {};

for (const game of games) {
  if (newGames[game]) {
    newGames[game]++;
  } else {
    newGames[game] = 1;
  }
}
console.log(newGames); */
/* 
const numbers = [1, 2, 1, 3, 2, 1];

let newNumbers = {};

for (const number of numbers) {
  if (newNumbers[number]) {
    newNumbers[number]++;
  } else {
    newNumbers[number] = 1;
  }
}

console.log(newNumbers); */
/* 
const numbersList = [
  { num: 1, emoji: "🎯" },
  { num: 2, emoji: "🎲" },
  { num: 1, emoji: "🎯" },
  { num: 3, emoji: "🎮" },
  { num: 2, emoji: "🎲" },
  { num: 1, emoji: "🎯" },
];

const getNumberList = (numbersList) => {
  let newNumberList = {};

  for (const number of numbersList) {
    if (newNumberList[number.num]) {
      newNumberList[number.num]++;
    } else {
      newNumberList[number.num] = 1;
    }
  }
  return newNumberList;
};

console.log(getNumberList(numbersList)); */
/* 
const numbersList = [
  { num: 1, emoji: "🎯" },
  { num: 2, emoji: "🎲" },
  { num: 1, emoji: "🎯" },
  { num: 3, emoji: "🎮" },
  { num: 2, emoji: "🎲" },
  { num: 1, emoji: "🎯" },
];

const getNumberAndEmoji = (numbersList) => {
  let newNumberAndEmoji = {};

  for (const item of numbersList) {
    if (newNumberAndEmoji[item.num]) {
      newNumberAndEmoji[item.num].count++;
    } else {
      newNumberAndEmoji[item.num] = {
        count: 1,
        emoji: item.emoji,
      };
    }
  }
  return newNumberAndEmoji;
};

console.log(getNumberAndEmoji(numbersList)); */

/* const fruits = [
  "🍎", // яблоко
  "🍌", // банан
  "🍎", // яблоко
  "🍊", // апельсин
  "🍌", // банан
  "🍎", // яблоко
];

const getFruits = (fruits) => {
  let newFruitsObj = {};

  for (const fruit of fruits) {
    if (newFruitsObj[fruit]) {
      newFruitsObj[fruit]++;
    } else {
      newFruitsObj[fruit] = 1;
    }
  }
  return newFruitsObj;
};
const result = getFruits(fruits);
console.log(result); */
/* 
const animals = [
  { type: "🐱", name: "Murka" },
  { type: "🐶", name: "Bobby" },
  { type: "🐱", name: "Vasya" },
  { type: "🐰", name: "Bunny" },
  { type: "🐶", name: "Rex" },
  { type: "🐱", name: "Barsik" },
];

const getAnimalsType = (animals) => {
  let newObj = {};

  for (const animal of animals) {
    if (newObj[animal.type]) {
      newObj[animal.type]++;
    } else {
      newObj[animal.type] = 1;
    }
  }
  return newObj;
};

const saveResult = getAnimalsType(animals);
console.log(saveResult); */

/* const animals = [
  { type: "🐱", name: "Murka" },
  { type: "🐶", name: "Bobby" },
  { type: "🐱", name: "Vasya" },
  { type: "🐰", name: "Bunny" },
  { type: "🐶", name: "Rex" },
  { type: "🐱", name: "Barsik" },
];

const getAnimals = (animals) => {
  let newEmptyObj = {};

  for (const animal of animals) {
    if (newEmptyObj[animal.type]) {
      newEmptyObj[animal.type].count++;
    } else {
      newEmptyObj[animal.type] = {
        count: 1,
        names: animal.name,
      };
    }
  }
  return newEmptyObj;
};

console.log(getAnimals(animals));
 */
/* 
const numbers = [1, 1, 2, 1, 2, 3];

let countOne = 0;
let countTwo = 0;

for (const number of numbers) {
  if (number === 1) {
    countOne++;
  }
  if (number === 2) {
    countTwo++;
  }
}
console.log(countOne, countTwo); */

/* const numbers = [1, 1, 2, 1, 2, 3];

let counts = {
  1: 0,
  2: 0,
};

for (const num of numbers) {
  if (num === 1) {
    counts[1]++;
  }

  if (num === 2) {
    counts[2]++;
  }
}
console.log(counts);
 */
/* 
const numbers = [1, 1, 2, 1, 2, 3];

let counts = {};

for (let num of numbers) {
  if (counts[num]) {
    counts[num]++;
  } else {
    counts[num] = 1;
  }
}
console.log(counts);
 */

/* const colors = ["red", "blue", "red", "green", "blue", "red"];

let colorCounts = {};

for (let color of colors) {
  if (colorCounts[color]) {
    colorCounts[color]++;
  } else {
    colorCounts[color] = 1;
  }
}
console.log(colorCounts); */

/* const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "apple", color: "red" },
  { name: "apple", color: "green" },
  { name: "banana", color: "yellow" },
];

let colorCounts = {};

for (let fruit of fruits) {
  if (colorCounts[fruit.color]) {
    colorCounts[fruit.color]++;
  } else {
    colorCounts[fruit.color] = 1;
  }
}
console.log(colorCounts); */

/* const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "apple", color: "red" },
  { name: "apple", color: "green" },
  { name: "banana", color: "yellow" },
];

let colorInfo = {};

for (let fruit of fruits) {
  if (colorInfo[fruit.color]) {
    colorInfo[fruit.color].count++;
    colorInfo[fruit.color].fruits.push(fruit.name);
  } else {
    colorInfo[fruit.color] = {
      count: 1,
      fruits: [fruit.name],
    };
  }
}
console.log(colorInfo); */

/* const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
];

let colorInfo = {};

for (let fruit of fruits) {
  if (colorInfo[fruit.color]) {
    colorInfo[fruit.color].count++;
    colorInfo[fruit.color].fruits.push(fruit.name);
  } else {
    colorInfo[fruit.color] = {
      count: 1,
      fruits: [fruit.name],
    };
  }
}

console.log(colorInfo); */
/* 
let box = {};

box.color = "red";
box["size"] = "large";
console.log(box); */

/* let items = {};

let key1 = "apple";
let key2 = "banana";

items[key1] = 1;
items[key2] = 2;

console.log(items); */

/* const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
];

console.log(fruits[0].name);
console.log(fruits[1].name); */

/* const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "apple", color: "green" },
  { name: "banana", color: "yellow" },
  { name: "apple", color: "red" },
];

let colorCounts = {};

for (let fruit of fruits) {
  if (colorCounts[fruit.color]) {
    colorCounts[fruit.color].count++;
  } else {
    colorCounts[fruit.color] = {
      count: 1,
      fruits: [fruit.name],
    };
  }
}
console.log(colorCounts); */

/* const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map((number) => number ** 2));
 */

/* const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.filter((number) => number % 2 === 0)); */

/* const numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((sum, number) => sum + number, 0)); */

/* const numbers = [1, 2, 2, 3, 4, 4, 5, 1];

let result = numbers.reduce((acc, number) => {

})
 */
/* 
let fruits = {};

fruits["apple"] = 3;
fruits["banana"] = 2;
fruits["orange"] = 5;

console.log(fruits);
 */

/* let fruits = {
  apple: 3,
  banana: 2,
  orange: 5,
};

fruits["apple"] = fruits["apple"] + 2;
fruits["banana"] = fruits["banana"] - 1;
fruits["grape"] = 4;
console.log(fruits);
 */

/* let fruits = {
  apple: 5,
  banana: 1,
  orange: 5,
  grape: 4,
};

if (fruits["apple"]) {
  console.log("Yes apple");
} else {
  console.log("No apple");
}
if (fruits["mango"]) {
  console.log("Yes mango");
} else {
  fruits["mango"] = 3;
}
console.log(fruits); */

/* let fruits = {
  apple: 5,
  banana: 1,
  orange: 5,
  grape: 4,
  mango: 3,
};

if (fruits["banana"] < 2) {
  delete fruits["banana"];
}

if (fruits["orange"]) {
  fruits["orange"] -= 2;
}

if (fruits["mango"] > 2) {
  console.log("More mango");
}
console.log(fruits); */
/* 
let store1 = {
  apple: 5,
  banana: 2,
  orange: 4,
};

let store2 = {
  apple: 3,
  banana: 5,
  grape: 2,
};

if (store1.apple === store2.apple) {
  console.log("equal count apple in store1 and store2");
} else {
  console.log("Not equal count apple in store1 and store2");
}

if (store1.grape) {
  console.log("Have grape");
} else {
  console.log("Not have grape in store1");
}
let counterBanana = store1.banana + store2.banana;
console.log(`Count Banana - ${counterBanana}`); */



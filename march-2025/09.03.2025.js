/* let characterName = "Itachi";
let powerLevel = 75;
let isHeroes = false;
let clan = "Uchiha";
let age = 21;
let hasMangekyo = true;

console.log(
  `Name: ${characterName}, powerful: ${powerLevel}, heroes: ${isHeroes}, clan: ${clan}, age: ${age}, mangekyo: ${hasMangekyo}`
);

let newPowerLevel = powerLevel + 25;
let nextYear = age + 1;
let isStrongCharacter = powerLevel > 70;

console.log(`
    Character Status Update:
    Name: ${characterName}
    Clan: ${clan}
    New Power Level: ${newPowerLevel}
    Age next year: ${nextYear}
    Is Strong: ${isStrongCharacter}
    Has Mangekyo: ${hasMangekyo}
`);
 */
/* 
let userAge = 21;
let animeAge = 18;

if (userAge > animeAge) {
  console.log("Watch");
} else {
  console.log("No");
} */

/* 
let subscriptionType = 'free'
let hasNewEpisodes = true */
/* 
let hasSportswear = true;
let timeLeft = 15;
let hearRate = 100;
if (hearRate > 120) {
  console.log("reduce the load");
} else if (hasSportswear && timeLeft > 0) {
  console.log("🏋️♂️ Training allowed! Go for it!");
} else {
  console.log("⛔ Training denied. Check equipment or time!");
} */
/* 
let trackDuration = 180;
let isExplicit = false;
let currentPlaylistLength = 14;

if (trackDuration <= 180) {
  if (isExplicit === false) {
    if (currentPlaylistLength < 15) {
      console.log("Track Added");
    }
  }
}
 */
/* 
let userSubscription = "premium";
let hasEarlyAccess = true;
let mangaRating = 4.8;

if (userSubscription === "premium" || hasEarlyAccess) {
  if (mangaRating > 4.5) {
    console.log("True");
  }
} */
/* 
let stamina = 80;
let technique = "Rasengan";
let chakra = 150;

if (
  stamina > 50 ||
  (chakra > 100 && technique === "Rasengan") ||
  technique === "Chidori"
) {
  console.log("Completed");
} else {
  console.log("Error");
}
 */
/* 
let trackLength = 210;
let trackQuality = "high";
let trackStatus =
  trackLength < 240 && trackQuality === "high" ? "Good track" : "Skip track";
console.log(trackStatus);
 */
/* 
let animeRating = 8.7;
let episodesWatched = 12;
let totalEpisodes = 24;

let result =
  animeRating >= 8 && episodesWatched * 2 === totalEpisodes
    ? "Must finish"
    : animeRating >= 8 && episodesWatched * 2 !== totalEpisodes
      ? "Good start"
      : "Consider dropping";
console.log(result);
 */

/* const hurray = sayHurrayThreeTimes = () =>{
  return 'hurray! hurray! hurray!'
};
console.log(hurray()); // => hurray! hurray! hurray! */
/* 
const truncate = (text, length) => {
  // BEGIN (write your solution here)
  return text.slice(0, length) + "...";
  // END
};
const result = truncate("hexlet", 2);

console.log(result);
 */

/* 
function isStrongCharacter(name, anime){
  console.log(`Hi, I'am ${name} for anime ${anime}`)
}

isStrongCharacter('Naruto', 'Naruto') */
/* 
const add1 = (a, b) => {
  return a + b;
};

const add = (a, b) => a + b;
 */

// Коллекция аниме
const animeCollection = [
  {
    title: "Attack on Titan",
    episodes: 75,
    rating: 9.0,
    genres: ["Action", "Drama", "Fantasy"],
  },
  {
    title: "Demon Slayer",
    episodes: 44,
    rating: 8.7,
    genres: ["Action", "Fantasy", "Historical"],
  },
  {
    title: "My Hero Academia",
    episodes: 113,
    rating: 8.4,
    genres: ["Action", "Comedy", "Super Power"],
  },
  {
    title: "Death Note",
    episodes: 37,
    rating: 9.0,
    genres: ["Mystery", "Psychological", "Thriller"],
  },
  {
    title: "Naruto",
    episodes: 720,
    rating: 8.3,
    genres: ["Action", "Adventure", "Fantasy"],
  },
];

const getHighRatedAnime = (animeCollection, minimalRating) => {
  return animeCollection
    .filter((result) => result.rating >= minimalRating)
    .map((anime) => anime.title)
    .join(", ");
};

const getTotalEpisodes = () => {
  return animeCollection.reduce((sum, item) => sum + item.episodes, 0);
};

const findAnimeByGenre = (animeCollection, genre) => {
  return animeCollection.filter((anime) => anime.genres.includes(genre));
};
/* 
const getAnimeStats = (animeCollection) => {
  const resultAnimeCollection = {};
  const totalAnime = animeCollection.map(anime => anime.title);
  const totalEpisodes = animeCollection.map(anime => anime.episodes);
  return totalAnime;
};
console.log(getAnimeStats(animeCollection));
 */
/* 
const allGenres = animeCollection.flatMap((anime) => anime.genres);
console.log(allGenres); */
/* 
const favoriteAnime = [];

console.log(favoriteAnime);

favoriteAnime.push("Naruto");
console.log(favoriteAnime + " " + "- " + favoriteAnime.length);

favoriteAnime.push("Death Note");
console.log(favoriteAnime + " " + "- " + favoriteAnime.length);

favoriteAnime.push("One Piece");
console.log(favoriteAnime + " " + "- " + favoriteAnime.length); */
/* 
const animeList = [
  "Naruto",
  "Death Note",
  "One Piece",
  "Attack on Titan",
  "Demon Slayer",
];

const removedAnime = animeList.pop();
console.log(removedAnime);
console.log(animeList);

const removedAnime2 = animeList.pop();
console.log(removedAnime2);
console.log(animeList);

const removedAnime3 = animeList.pop();
console.log(removedAnime3);
console.log(animeList); */
/* 
const topAnime = ["Attack on Titan", "Death Note"];

const newLength = topAnime.unshift("Fullmetal Alchemist");
console.log(topAnime);
 */

const products = [
  {
    id: 1,
    name: "Ноутбук",
    price: 1200,
    category: "Электроника",
    inStock: true,
  },
  {
    id: 2,
    name: "Смартфон",
    price: 800,
    category: "Электроника",
    inStock: true,
  },
  {
    id: 3,
    name: "Наушники",
    price: 150,
    category: "Аксессуары",
    inStock: false,
  },
  {
    id: 4,
    name: "Монитор",
    price: 350,
    category: "Электроника",
    inStock: true,
  },
  {
    id: 5,
    name: "Клавиатура",
    price: 80,
    category: "Аксессуары",
    inStock: true,
  },
  { id: 6, name: "Мышь", price: 40, category: "Аксессуары", inStock: false },
];
/* 
const getTrueElectronic = (products) => {
  let result = products.filter(
    (product) => product.category === "Электроника" && product.inStock
  );
  return result;
};

console.log(getTrueElectronic(products));

function transformProductsForDisplay(products) {
  return products.map((product) => {
    return {
      id: product.id,
      displayName: `${product.name} - $${product.price}`,
      isAvailable: product.inStock ? "В наличии" : "Нет в наличии",
    };
  });
}
 */
// Вызываем функцию и выводим результат
/* const displayProducts = transformProductsForDisplay(products);
console.log(displayProducts);
 */

const calculateStatistics = (products) => {
  let productsInStock = products
    .filter((product) => product.inStock === true)
    .reduce((sum, item) => sum + item.price, 0);
  return productsInStock;
};
console.log(calculateStatistics(products));

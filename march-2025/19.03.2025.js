/* const animals = [
  "cat",
  "cat",
  "dog",
  "bird",
  "dog",
  "bird",
  "cat",
  "fish",
  "fish",
];

const countAnimals = (animals) => {
  return animals.reduce((sum, animal) => {
    if (!sum[animal]) {
      sum[animal] = 1;
    } else {
      sum[animal]++;
    }
    return sum;
  }, {});
};
console.log(countAnimals(animals)); */

/* const purchases = [
  { item: "Apple", type: "Fruit", price: 0.5 },
  { item: "Banana", type: "Fruit", price: 0.3 },
  { item: "Carrot", type: "Vegetable", price: 0.4 },
  { item: "Apple", type: "Fruit", price: 0.5 },
  { item: "Tomato", type: "Vegetable", price: 0.6 },
  { item: "Banana", type: "Fruit", price: 0.3 },
];

const analyzeProducts = (purchases) => {
  return {
    Fruit: {
      total: purchases.reduce((sum, total) => sum + total.price, 0),
      count: purchases.reduce((result, counter) => {
        let newArray = [];
        if (!result[counter.item]) {
          result[counter.item].count++;
        } else {
          result[counter.item]++;
        }
        return result;
      }),
    },
  };
};
console.log(analyzeProducts(purchases)); */

/* const analyzeProducts = (purchases) => {
  return purchases.reduce((result, product) => {
    if (!result[product.type]) {
      result[product.type] = {
        count: 0,
        total: 0,
      };
    }
    result[product.type].count += 1;
    result[product.type].total += product.price;

    return result;
  }, {});
};
 */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const separateNumbers = (numbers) => {
  return numbers.reduce((result, number) => {

    if (number % 2 === 0){
        result[number] = []
    }else{

    }
    return {
        
    }
  }, {});
};
console.log(separateNumbers(numbers)); */

/* const fruits = [
  "яблоко",
  "банан",
  "яблоко",
  "груша",
  "банан",
  "яблоко",
  "киви",
];

const countFruits = (fruits) => {
  return fruits.reduce((result, fruit) => {
    if (!result[fruit]) {
      result[fruit] = 1;
    } else {
      result[fruit]++;
    }

    return result;
  }, {});
};
console.log(countFruits(fruits)); */

/* const user = {
  name: "Иван",
  age: 25,
  hobbies: ["спорт", "музыка", "книги"],
};

const { name, age } = user;

const greeting = () => `Hello, ${name} Your ${age} age`;

console.log(greeting()); */

/* const student = {
  name: "John",
  age: 25,
  course: "Algorithms",
  university: "El",
};

const { name, age, course } = student;

const graduateStudent = {
  ...student,
  degree: "Magister",
};

console.log(student);
console.log(graduateStudent); */

/* const student = {
  name: "John",
  age: 25,
  grades: [5, 4, 5, 3, 5],
  contact: {
    email: "john@example.com",
    phone: "123-45-67",
  },
}; */

/* const numbers = [1, 2, 3, 4, 5];

const [first] = numbers;
const [two] = numbers;
console.log(first);
console.log(two); */

/* const numbers = [1, 2, 3, 4, 5];

const [a, , b, c] = numbers;
console.log(a, b, c); */

/* const colors = ["красный", "синий", "зеленый", "желтый", "черный"]; */

/* const colors = ["red", "blue", "green", "yellow", "black"]; */

/* const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

const [first, , , , last] = fruits;
console.log(first, last);

const [, two, , four] = fruits;
console.log(two, four);

const [a, b, ...fruitFruits] = fruits;
console.log(a, b, fruitFruits); */
/* 
const users = [
  { id: 1, name: "John", age: 20 },
  { id: 2, name: "Kate", age: 25 },
  { id: 3, name: "Mike", age: 30 },
];

const [first] = users;
console.log(first);

const [, { name: secondName }] = users;
console.log(secondName);

const [user1, ...otherUsers] = users;
console.log(user1, otherUsers);
 */

/* const cars = [
  { brand: "BMW", color: "black" },
  { brand: "Toyota", color: "red" },
];

const [firstCar] = cars;
console.log(firstCar);

const [, { color: First }] = cars;
console.log(First);
 */

/* const products = [
  { name: "iPhone", price: 1000 },
  { name: "Samsung", price: 800 },
  { name: "Xiaomi", price: 500 },
];

const [firstEverything] = products;
console.log(firstEverything);

const [, { price }] = products;
console.log(price);

const [, , { name }] = products;
console.log(name); */

/* const laptops = [
  { brand: "Apple", model: "MacBook", year: 2023, price: 1300 },
  { brand: "Dell", model: "XPS", year: 2022, price: 1100 },
  { brand: "HP", model: "Pavilion", year: 2023, price: 800 },
];

const [{ brand: brandName, price: itemPrice }] = laptops;
const [, { model: laptopModel }] = laptops;
const [, , { year: yearLaptop }] = laptops;
console.log(
  `- ${brandName}\n- ${itemPrice}\n- ${laptopModel}\n- ${yearLaptop}`
);
 */

/* const users = [
  {
    name: "John",
    contact: { email: "john@email.com", phone: "123-456" },
  },
  {
    name: "Kate",
    contact: { email: "kate@email.com", phone: "789-012" },
  },
];

const [
  {
    name,
    contact: { email: userEmail },
  },
] = users;
const [
  {},
  {
    contact: { phone: userPhone },
  },
] = users;
console.log(`- ${name} ${userEmail}\n- ${userPhone}`); */

/* const company = {
  name: "Tech Corp",
  departments: [
    {
      name: "Development",
      head: { firstName: "Alex", lastName: "Smith" },
    },
    {
      name: "Marketing",
      head: { firstName: "Maria", lastName: "Garcia" },
    },
  ],
};

const { name: companyName } = company;
console.log(`- ${companyName}`);

const {
  departments: [
    {
      head: { firstName, lastName },
    },
  ],
} = company;
 */

/* const school = {
  name: "High School №1",
  classes: [
    {
      grade: "5A",
      teacher: { name: "John", subject: "Math" },
    },
    {
      grade: "5B",
      teacher: { name: "Kate", subject: "English" },
    },
  ],
};

const { name: schoolName } = school;
const {
  classes: [{ grade: className }],
} = school;
const {
  classes: [
    {
      teacher: { name: teacherName, subject },
    },
  ],
} = school;
console.log(`name school: ${schoolName}`); */

/* const school = {
  name: "High School №1",
  classes: [
    {
      grade: "5A",
      teacher: { name: "John", subject: "Math" },
    },
    {
      grade: "5B",
      teacher: { name: "Kate", subject: "English" },
    },
  ],
};

const {
  name: schoolName,
  classes: [
    {
      grade: className,
      teacher: { name: teacherName, subject },
    },
  ],
} = school;

console.log(`School: ${schoolName}`);
console.log(`Class: ${className}`);
console.log(`Teacher: ${teacherName}`);
console.log(`Subject: ${subject}`);

const {
  storeName: shopName,
  categories: [{ 
    name: categoryName },
    {
      products: [{ name, price }],
    },
  ],
} = store;
console.log(shopName, categoryName, name, price);
*/

/* const store = {
  storeName: "Electronics Shop",
  categories: [
    {
      name: "Laptops",
      products: [{ id: 1, name: "MacBook", price: 1299 }],
    },
    {
      name: "Phones",
      products: [{ id: 2, name: "iPhone", price: 999 }],
    },
  ],
};

const {
  storeName: shopName,
  categories: [
    {
      name: categoryName,
      products: [{ name: productName, price }],
    },
  ],
} = store; */

/* const game = {
  title: "Super Game",
  player: {
    name: "Hero",
    stats: {
      level: 10,
      health: 100,
    },
    inventory: ["sword", "shield", "potion"],
  },
};

const { 
  title: gameTitle,
  player: {
    name: playerName,
    stats: {
      level: playerLevel
    },
    inventory: [firstItem]
  }
} = game;
console.log(gameTitle , playerName, playerLevel, firstItem); */

/* const socialNetwork = {
  name: "FriendConnect",
  user: {
    id: 1,
    personalInfo: {
      firstName: "John",
      lastName: "Smith",
      email: "john@email.com",
    },
    friends: [
      {
        id: 2,
        name: "Kate",
        messages: [
          { text: "Hi!", date: "2024-03-19" },
          { text: "How are you?", date: "2024-03-19" },
        ],
      },
      {
        id: 3,
        name: "Mike",
        messages: [{ text: "Hello!", date: "2024-03-18" }],
      },
    ],
  },
};

const {
  name: networkName,
  user: {
    personalInfo: {
      firstName: userFirstName,
      lastName: userLastName
    },
    friends: [{
      name: friendName,
      messages: [{
        text: firstMessage
      }]
    }]
  }
} = socialNetwork

console.log(networkName, userFirstName, userLastName, friendName, firstMessage) */

/* const onlineStore = {
  name: "TechShop",
  products: [
    { id: 1, name: "iPhone", price: 999, category: "phones", inStock: true },
    { id: 2, name: "Samsung", price: 850, category: "phones", inStock: true },
    {
      id: 3,
      name: "MacBook",
      price: 1500,
      category: "laptops",
      inStock: false,
    },
    { id: 4, name: "Dell", price: 1200, category: "laptops", inStock: true },
  ],
  location: {
    city: "New York",
    address: "123 Tech St",
  },
};

const {
  name: storeName,
  products: [...array],
  location: { address: storeAddress },
} = onlineStore;

function getStock(onlineStore) {
  return onlineStore.products
    .filter((product) => product.inStock)
    .map((product) => `${product.name} - $${product.price}`);
}
console.log(getStock(onlineStore)); */

/*  const techStore = {
  name: "Digital World",
  products: [
    { id: 1, name: "iPhone", price: 999, category: "phones", inStock: true },
    { id: 2, name: "Samsung", price: 850, category: "phones", inStock: true },
    { id: 3, name: "MacBook", price: 1500, category: "laptops", inStock: true },
    { id: 4, name: "Dell", price: 1200, category: "laptops", inStock: true },
    { id: 5, name: "iPad", price: 799, category: "tablets", inStock: false },
    {
      id: 6,
      name: "Galaxy Tab",
      price: 699,
      category: "tablets",
      inStock: true,
    },
  ],
  info: {
    since: 2010,
    address: {
      city: "New York",
      street: "Tech Avenue 123",
    },
  },
};

const {
  name: storeName,
  products,
  info: {
    since: yearFounded,
    address: { city: storeCity },
  },
} = techStore;

const groupedProducts = products
  .filter((product) => product.inStock)
  .reduce((result, product) => {
    if (!result[product.category]) {
      result[product.category] = [];
    }

    result[product.category].push(`${product.name} - $${product.price}`);
    return result;
  }, {});
console.log("Store:", storeName);
console.log("Founded:", yearFounded);
console.log("City:", storeCity);
console.log("Products by category:", groupedProducts); 
 */

/* const shop = {
  name: "Fruit Shop",
  items: [
    { name: "apple", type: "fruit", price: 1 },
    { name: "carrot", type: "vegetable", price: 0.5 },
    { name: "banana", type: "fruit", price: 0.8 },
    { name: "tomato", type: "vegetable", price: 0.7 },
  ],
  location: {
    city: "Boston",
    street: "Food St",
  },
};

const { name, items } = shop;

const result = items.reduce((acc, item) => {
  const type = item.type;

  if (!acc[type]) {
    acc[type] = [];
  }

  acc[type].push(`${item.name} - $${item.price}`);
  return acc;
}, {});

console.log(name);
console.log(items);
console.log(result); */

/* const animals = [
  { name: "cat", type: "pet" },
  { name: "dog", type: "pet" },
  { name: "lion", type: "wild" },
  { name: "tiger", type: "wild" },
];

const resultAnimals = animals.reduce((result, animal) => {
  let type = animal.type;

  if (!result[type]) {
    result[type] = [];
  }

  result[type].push(animal.name);
  return result;
}, {});
console.log(resultAnimals); */

/* const animals = [
  { name: "cat", type: "pet", age: 2, color: "black" },
  { name: "dog", type: "pet", age: 3, color: "brown" },
  { name: "lion", type: "wild", age: 5, color: "yellow" },
  { name: "tiger", type: "wild", age: 4, color: "orange" },
];

const resultAnimals = animals.reduce((result, animal) => {
  let type = animal.type;

  if (!result[type]) {
    result[type] = [];
  }
  result[type].push(`${animal.name} (${animal.color}) - ${animal.age} years`);
  return result;
}, {});

console.log(resultAnimals); */

/* const animals = [
  { name: "cat", type: "pet", age: 2, color: "black" },
  { name: "dog", type: "pet", age: 3, color: "brown" },
  { name: "lion", type: "wild", age: 5, color: "yellow" },
  { name: "tiger", type: "wild", age: 4, color: "orange" },
];

const resultGroupAnimals = animals.reduce((result, animal) => {
  let type = animal.type;
  if (!result[type]) {
    result[type] = [];
  }
  result[type].push(`${animal.name} (${animal.color}) - ${animal.age} years`);
  return result;
}, {});
console.log(resultGroupAnimals); */

/* const product = {
  title,
  price,
  ...category,
};
const category = {
  name: "Electronics",
  id: 5,
}; */

/* const title = "iPhone";
const price = 999;

const category = {
  name: "Electronics",
  id: 5,
};

const product = {
  title,
  price,
  ...category,
  inStock: true,
};

console.log(product); */

/* const user = {
  name: "John",
  age: 25,
  city: "New York",
};

const updateUser = {
  ...user,
  age: 26,
};
console.log(updateUser); */
/* function spinWords(string) {
  let newString = string.split(" ");

  for (let str of newString) {
    if (str.length >= 5) {
      str.reverse();
    }
  }
  return newString;
}

console.log(spinWords("Welcome")); //  "emocleW"
console.log(spinWords("This is another test")); //"This is rehtona test" */

/* const settings = {
  theme: "light",
  notifications: {
    email: true,
    sms: false,
    push: true,
  },
  language: "en",
};

const newSettings = {
  ...settings,
  theme: "dark",
  notifications: {
    ...settings.notifications,
    push: false,
  },
};
console.log(newSettings); */

/* const cart = {
  items: ["apple", "banana"],
  total: 5,
  user: {
    name: "John",
    bonuses: 10,
  },
};

const updateCart = {
  ...cart,
  items: [...cart.items, "orange"],
  total: 8,
  user: {
    ...cart.user,
    bonuses: 15,
  },
};
console.log(updateCart); */

/* const appState = {
  user: {
    id: 1,
    name: "John",
    preferences: {
      darkMode: false,
      fontSize: "medium",
      colors: ["blue", "green"],
    },
  },
  todos: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ],
}; */

/* const initialState = {
  users: [
    { id: 1, name: "Alice", role: "admin", permissions: ["read", "write"] },
    { id: 2, name: "Bob", role: "user", permissions: ["read"] },
  ],
  settings: {
    theme: "light",
    features: {
      chat: true,
      notifications: false,
    },
  },
};

const newState = {
  ...initialState,
  users: [...initialState.users, { id: 3, name: "Charlie", role: "user" }],
  users: [initialState.users.permissions, "delete"],
};
console.log(newState); */

/* const library = {
  name: "City Library",
  books: [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ],
  location: {
    city: "Los Angeles",
    street: "Main St",
  },
};

const updatedLibrary = {
  ...library,
  books: [
    ...library.books,
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  ],
  location: {
    ...library.location,
    city: "San Francisco",
    zipCode: "94101",
  },
};
console.log(updatedLibrary); */

/* const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 23 },
];

const updateStudents = students.map((student) => ({
  ...student,
  status: "active",
}));
console.log(updateStudents); */

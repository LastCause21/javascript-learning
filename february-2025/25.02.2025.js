/* const product = {
  name: "Ноутбук",
  price: 1000,
  quantity: 5,

  setDiscount(percent) {
      let result = this.price - (this.price * percent) / 100;
      return this.price = result
  },

  addQuantity(amount) {
    let result2 =  this.quantity + amount;
    return this.quantity = result2
  },

  sell(amount) {
    if (this.quantity > amount) {
      let result3 = this.quantity - amount
        return this.price * amount
    } else {
      return `Ошибка`;
    }
  },

  getInfo() {
    return `Товар ${this.name}( ${product.quantity}шт.) по цене $${this.price}`;
  },
};

console.log(product.getInfo());
console.log(product.setDiscount(20));
console.log(product.getInfo());
console.log(product.sell(3));
console.log(product.getInfo());
console.log(product.addQuantity(2))
console.log(product.getInfo());
 */
/* 
const book = {
  title: "Гарри Поттер",
  author: "Дж. Роулинг",
  year: 1997,
  isAvailable: true,

  borrow() {
    if (this.isAvailable === true) {
      this.isAvailable = false;
      return true;
    }
    return "Книга уже выдана";
  },

  returnBook() {
    this.isAvailable = true;
    return "Книга возращена в библиотеку";
  },

  getInfo() {
    return `Книга ${this.title} (${this.year}) автор ${this.author} - ${this.isAvailable}`;
  },

  updateYear(newYear) {
    book.year = newYear;
    return book.year;
  },
};

console.log(book.getInfo());
console.log(book.borrow());
console.log(book.getInfo());
console.log(book.borrow());
console.log(book.returnBook());
console.log(book.updateYear(2001));
console.log(book.getInfo()); */

/* 
const cart = {
  items: [],
  total: 0,

  addItem(name, price, quantity){
    const newItem = {
      name,
      price,
      quantity
    }
    this.items.push(newItem)
  },
  getItems(){
    return cart.items
  }

}
console.log(cart.addItem("Телефон", 100, 3));
console.log(cart.addItem("Чехол", 20, 1));     // "Товар Чехол добавлен"
console.log(cart.getItems());  */
/* 
const store = {
  items: [
      { name: "Телефон", price: 100 },
      { name: "Наушники", price: 20 },
      { name: "Чехол", price: 10 }
  ],
  
  calculateTotal() {
   let total = 0
    for (const item of store.items){
      total += item.price
    }
    return total
  }

};

console.log(store.calculateTotal()); // 130 */
/* 
const store = {
  items: [
    { name: "Телефон", price: 100 },
    { name: "Наушники", price: 20 },
    { name: "Чехол", price: 10 },
  ],

  findItem(itemName) {
    for (const item of this.items) {
      if (item.name === itemName) {
        return item.price;
      }
    }
    return "Товар не найден";
  },
};
console.log(store.findItem("Телефон")); // 100
console.log(store.findItem("Ноутбук")); // "Товар не найден"
 */

/* 
const store = {
  items: [
      { name: "Телефон", price: 100 },
      { name: "Наушники", price: 20 },
      { name: "Чехол", price: 10 }
  ],
  
  getExpensiveItems(minPrice) {
    let newArrayResult = []
    for (const str of this.items){
      if (str.price >= minPrice){
        newArrayResult.push(str)
      }
    }
    return newArrayResult
  }
};

console.log(store.getExpensiveItems(20));  */

/* const store = {
  items: [
    { name: "Телефон", price: 100 },
    { name: "Наушники", price: 20 },
    { name: "Чехол", price: 10 },
  ],

  searchItems(searchText) {
    let newArray = []
    for (const item of this.items){
      if (item.name.includes(searchText)){
        newArray.push(item)
      }
    }
    return newArray
  },
};
console.log(store.searchItems('фон')); */
/* 
const store = {
  items: [
    { name: "Телефон", price: 100, rating: 4 },
    { name: "Наушники", price: 20, rating: 3 },
    { name: "Чехол", price: 10, rating: 5 },
  ],

  getItemsByRating(minRating) {
    let saveResultArray = [];
    for (const item of this.items){
      if (item.rating >= minRating){
        saveResultArray.push(item)
      }
    }
    return saveResultArray
  },
};

console.log(store.getItemsByRating(4)); */

/* 
const store = {
  items: [
      { name: "Телефон", price: 100, rating: 4, category: "Электроника" },
      { name: "Наушники", price: 20, rating: 3, category: "Электроника" },
      { name: "Чехол", price: 10, rating: 5, category: "Аксессуары" },
      { name: "Зарядка", price: 15, rating: 4, category: "Аксессуары" }
  ],
  
  sortByPrice(order) {
      if (order === 'asc'){
        return this.items.sort((a, b) => a.price - b.price)
      }else{
        return this.items.sort((a, b) => b.price - a.price)
      }
  },
  
  sortByRating() {
    return this.items.sort((a, b) => b.rating - a.rating)
  },
  
  sortByCategory() {
    return this.items.sort((a, b) => a.category.localeCompare(b.category))
  }
};

console.log(store.sortByPrice("asc"));  // от дешевых к дорогим
console.log(store.sortByPrice("desc")); // от дорогих к дешевым
console.log(store.sortByRating());      // от высокого рейтинга к низкому
console.log(store.sortByCategory());    // по алфавиту категорий */
/* 
const orderSystem = {
  orders: [
    { id: 1, items: ["Телефон", "Чехол"], status: "pending", total: 120 },
    { id: 2, items: ["Наушники"], status: "completed", total: 20 },
    { id: 3, items: ["Зарядка"], status: "pending", total: 15 },
  ],

  getOrderById(orderId) {
    for (const ord of this.orders) {
      if (ord.id === orderId) {
        return ord;
      }
    }
    return "Товар не найден";
  },

  getPendingOrders() {
    let newArray = [];
    for (const stat of this.orders) {
      if (stat.status === "pending") {
        newArray.push(stat);
      }
    }
    return newArray;
  },

  calculateTotalIncome() {
    let total = 0;
    for (const stat of this.orders) {
      if (stat.status === "completed") {
        total += stat.total;
      }
    }
    return total;
  },

  getOrdersByMinSum(minSum) {
     let newArray3 = []
     for (const stat of this.orders){
      if (stat.total >= minSum){
        newArray3.push(stat)
      }
     }
     return newArray3
  }

};

console.log(orderSystem.getOrderById(2));
console.log(orderSystem.getPendingOrders());
console.log(orderSystem.calculateTotalIncome());
console.log(orderSystem.getOrdersByMinSum(100)); */
/* 
const library = {
  books: [
      { id: 1, title: "Гарри Поттер", author: "Дж. Роулинг", available: true, rating: 4.5 },
      { id: 2, title: "Властелин Колец", author: "J.R.R. Tolkien", available: false, rating: 4.8 },
      { id: 3, title: "1984", author: "George Orwell", available: true, rating: 4.6 }
  ],
  
  findBookById(bookId) {
      if (this.books === bookId){

      }
  },
  
  getAvailableBooks() {
      // Вернуть массив всех доступных книг (available: true)
  },
  
  borrowBook(bookId) {
      // Если книга доступна - сделать её недоступной и вернуть true
      // Если книга недоступна - вернуть "Книга уже взята"
      // Если книга не найдена - вернуть "Книга не найдена"
  },
  
  returnBook(bookId) {
      // Сделать книгу снова доступной
      // Вернуть "Книга возвращена" или "Книга не найдена"
  }
};

// Тестирование:
console.log(library.findBookById(1));           // информация о книге
console.log(library.getAvailableBooks());       // массив доступных книг
console.log(library.borrowBook(1));             // true
console.log(library.borrowBook(1));             // "Книга уже взята"
console.log(library.returnBook(1));             // "Книга возвращена" */

/* 
function analyzeString(str) {
  const vowelSet = 'aeiouAEIOU';
  const vowelSet2 = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
  const lenResult = str.length
  let vowelCount = 0;
  let vowelCount2 = 0
  for (const char of str.split('')){
    if (vowelSet.includes(char)){  
      vowelCount++
      
    }
  }
  for (const char of str.split('')){
    if (vowelSet2.includes(char)){  
      vowelCount2++
    }
  }
   let result = `Количество гласных букв: ${vowelCount}\nКоличество согласных букв: ${vowelCount2}\nДлинна: ${lenResult}`
  const obj = {
    result,
  }
  return obj
}


console.log(analyzeString("Hello, World!")); 
console.log(analyzeString("JavaScript")); 
console.log(analyzeString("Programming")); 
 */
/* 
function analyzeString(str) {
  const vowels = 'aeiouAEIOU';
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  const length = str.length;
  
  let vowelCount = 0;
  let consonantCount = 0;
  
  // Можно использовать один цикл вместо двух
  for (const char of str) {
      if (vowels.includes(char)) {
          vowelCount++;
      } else if (consonants.includes(char)) {
          consonantCount++;
      }
  }

  return {
      vowels: vowelCount,
      consonants: consonantCount,
      length: length
  };
}

console.log(analyzeString("Hello, World!")); 
console.log(analyzeString("JavaScript")); 
console.log(analyzeString("Programming"));  */

/* function processArray(numbers) {
  let min = Math.min(...numbers)
  let max = Math.max(...numbers)
  let sum = 0

  
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]

  }
  let average = sum / numbers.length

  return {
    min,
    max,
    sum,
    average
  }
}


console.log(processArray([1, 4, 2, 9, 5, 3]));   */
/* 
function filterArray(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArray.push(arr[i]);
    }
  }

  const uniqueArray = [...new Set(newArray)];
  const sortArray = uniqueArray.sort((a, b) => a  - b)
  return sortArray
}

console.log(filterArray([1, 4, 6, 3, 2, 4, 1, 5])); // [2, 4, 6]
console.log(filterArray([8, 5, 5, 2, 2, 7, 6])); // [2, 6, 8] */

/* 
function findLongestWord(sentence) {
  let result = ''
  let newStrSpl = sentence.split(' ')
  for (const str of newStrSpl){
    if (str.length > result.length ){
      result = str
    }
  }
  return {
    result,
    length: result.length
  }

}
  


console.log(findLongestWord("JavaScript is awesome"));     
console.log(findLongestWord("Hello World"));               */

/* 
function countLetters(word) {
  let newSplitArrayWord = word.split('')
  const vowelSet = 'aeiouAEIOU';
  const consonant = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
  let vowels = 0
  let consonants = 0
  for (const wor of newSplitArrayWord){
    if (vowelSet.includes(wor)){
      vowels++
    }
    if (consonant.includes(wor)){
      consonants++
    }
  }
  return {
    vowels,
    consonants
  }

}

console.log(countLetters("Hello"));      
console.log(countLetters("JavaScript"));  */
/* 
const ERROR_LENGTH_PASSWORD = "Пароль слишком короткий";
const COMPLETED_PASSWORD_LENGTH = "Ваш пароль имеет правильную длину";
const ERROR_UPPER = "Пароль должен содержать хотя бы одну заглавную букву";
const COMPLETED_UPPER = "Ваш пароль содержит заглавную букву";

function checkPassword(password) {
  let upper = /[A-Z]/.test(password)
	if (upper) {
		return COMPLETED_UPPER
  }
  if (upper){
	return ERROR_UPPER
  }

  if (password.length < 8) {
    return ERROR_LENGTH_PASSWORD;
  } else {
    return COMPLETED_PASSWORD_LENGTH;
  }
}

console.log(checkPassword("Password1"));
console.log(checkPassword("pass"));
console.log(checkPassword("password123")); */

/* 
function calculateScore(points) {
	let wins = 0
	let losses = 0
	let draws = 0
	let total = 0
	for (let i = 0; i < points.length; i++){
		if (points[i] === 'W'){
			wins++
		}
		if (points[i] === 'D'){
			draws++
		}
		if (points[i] === 'L'){
			losses++
		}
	}
	return {
		wins,
		losses,
		draws,
		total : wins + draws + losses
	}
}


console.log(calculateScore("WWDL"));     
console.log(calculateScore("WDLLW"));    
console.log(calculateScore("LDWWW"));   */

/* function formatPrice(price) {
	ш
}

console.log(formatPrice(1234.5));      
console.log(formatPrice(600));         
console.log(formatPrice(1234567.89));   */

/* 
function generateInitials(fullName) {
	let initialsResult1 = fullName.split(' ')
	let initial = ''
	for (let i = 0; i < initialsResult1.length; i++){
		initial += initialsResult1[i].charAt(0).toUpperCase() + '.'
	}
	return initial
}

console.log(generateInitials("John Smith"));         
console.log(generateInitials("John James Smith"));    
console.log(generateInitials("alice brown"));     */
/* 
function maskCreditCard(cardNumber) {
  let result = "";
  const numberOfCharacters = 4
  for (let i = 0; i < cardNumber.length - 4; i++) {
    result += "*";
  }
  return result + cardNumber.slice(-numberOfCharacters);
}

console.log(maskCreditCard("1234567890123456"));
console.log(maskCreditCard("4556364607935616")); */
/* 
const COMPLETED_INPUT_NUMBER = "Номер содержит 11 цифр";
const ERROR_INPUT_NUMBER = "Номер не содержит 11 цифр или не верный формат";
function formatPhoneNumber(number) {
  
	if (number.length < 11 || number.length > 11){
		return ERROR_INPUT_NUMBER
	}else{
		const spaceNumber1 = number.slice(1, 4);
		const spaceNumber2 = number.slice(4, 7);
		const spaceNumber3 = number.slice(7, 9);
		const spaceNumber4 = number.slice(9);
	  
		return `+${number[0]} (${spaceNumber1}) ${spaceNumber2}-${spaceNumber3}-${spaceNumber4}`;
	}
	
}

console.log(formatPhoneNumber("79261234567"));
console.log(formatPhoneNumber("12345"));
 */

/* 
function validateEmail(email) {

    if (email){
		let inSym = email.includes('@')
		
	}
  
}


console.log(validateEmail("test@mail.ru"));      
console.log(validateEmail("test@mail"));         
console.log(validateEmail("test.mail.ru"));      
console.log(validateEmail("@mail.ru"));    */

/* 
function sumNumbers(n) {
	let sum = 0
	const number = []
	for (let i = 1; i <= n; i++){
		number.push(i)
		sum += i
	}
	
	return{
		sum,
		number
	}
}


console.log(sumNumbers(3)); 
console.log(sumNumbers(5));  
console.log(sumNumbers(0));   */

/* const ERROR_INPUT_USER_NUMBER = 'Загаданное число должно быть от 1 до 10'

function guessNumber(userNumber) {

	const secretNumber = 7;
    if (userNumber < 1 || userNumber > 10){
		return ERROR_INPUT_USER_NUMBER
	}

	if (userNumber > secretNumber){
		return 'Загаданное число меньше'
	}
	if (userNumber < secretNumber) {
		return 'Загаданное число больше'
	}

}

console.log(guessNumber(5));  // { correct: false, message: "Загаданное число больше", attempts: 1 }
console.log(guessNumber(9));  // { correct: false, message: "Загаданное число меньше", attempts: 2 }
console.log(guessNumber(7));  // { correct: true, message: "Вы угадали!", attempts: 3 } */
/* 
const ERROR_INPUT_USER_NUMBER = 'Загаданное число должно быть от 1 до 10';

function guessNumber(userNumber) {
    const secretNumber = 7;
    
    // Проверка диапазона
    if (userNumber < 1 || userNumber > 10) {
        return {
            correct: false,
            message: ERROR_INPUT_USER_NUMBER,
            attempts: 0
        };
    }
    
    // Проверка числа
    if (userNumber === secretNumber) {
        return {
            correct: true,
            message: "Вы угадали!",
            attempts: 1
        };
    }
    
    if (userNumber > secretNumber) {
        return {
            correct: false,
            message: "Загаданное число меньше",
            attempts: 1
        };
    }
    
    return {
        correct: false,
        message: "Загаданное число больше",
        attempts: 1
    };
}

console.log(guessNumber(5));
console.log(guessNumber(9));
console.log(guessNumber(7)); */

/* 
function validateUserData(userData) {

}


const user1 = {
    name: "Иван Петров",
    phone: "+79001234567",
    age: 25,
    address: "г. Москва, ул. Пушкина, д. 10"
};

const user2 = {
    name: "A",
    phone: "123",
    age: 10,
    address: "Москва"
};

console.log(validateUserData(user1));
console.log(validateUserData(user2)); */

// Создайте функцию, которая получает информацию о товаре и выводит её в отформатированном виде
/* 
function showProductInfo(product) {
	const {name, price, quantity} = product
	return `Товар ${name}, Цена ${price}$, Количество ${quantity} шт.`
}


const product1 = {
    name: "Ноутбук",
    price: 1000,
    quantity: 5
};

const product2 = {
    name: "Телефон",
    price: 500,
    quantity: 10
};

console.log(showProductInfo(product1)); 
console.log(showProductInfo(product2));  */
/* 
function validateProduct(product) {

	const {name, price, quantity} = product


}


const product1 = {
    name: "Ноутбук",
    price: 1000,
    quantity: 5
};

const product2 = {
    name: "",
    price: -500,
    quantity: 0
};

console.log(validateProduct(product1)); 
console.log(validateProduct(product2));  */
/* 
function validateBook(book) {
	
	const {title, price, pages} = book
	const errors = []
	if (title === ''){
		errors.push('Пустое название')
	}
	if (price < 100){
		errors.push('Ценна должна быть больше 100')
	}
	if (pages < 0){
		errors.push('Количество страниц должно быть больше 0')
	}

	return {
        isValid: errors.length === 0,  // true если ошибок нет, false если есть
        errors: errors
    };
}


const book1 = {
    title: "JavaScript для начинающих",
    price: 1000,
    pages: 500
};

const book2 = {
    title: "",
    price: 50,
    pages: 0
};

console.log(validateBook(book1));
console.log(validateBook(book2)); */
/* 
const ERROR_INPUT_USER_NAME = 'Нужно минимум 2 символа'
const ERROR_ITEMS = 'Нужно, минимум 1 товар'
const ERROR_TOTAL_PRICE = 'Должна быть больше 0'
const ERROR_DELIVERY_ADDRESS = 'Нужно минимум 10 символов'

function validateOrder(order) {

	const {customerName, items, totalPrice, deliveryAddress} = order
	const errors = []
	if (customerName.length <= 2){
		errors.push(ERROR_INPUT_USER_NAME)
	}

    if (items.length <= 1){
		errors.push(ERROR_ITEMS)
	}

	if (totalPrice < 0){
		errors.push(ERROR_TOTAL_PRICE)
	}

	if (deliveryAddress.length <= 10){	
		errors.push(ERROR_DELIVERY_ADDRESS)
	}
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

const order1 = {
    customerName: "Иван Петров",
    items: ["Книга", "Ручка"],
    totalPrice: 1500,
    deliveryAddress: "ул. Пушкина, дом 1, кв 5"
};

const order2 = {
    customerName: "И",
    items: [],
    totalPrice: 0,
    deliveryAddress: "ул. Ленина"
};

console.log(validateOrder(order1));
console.log(validateOrder(order2)); */

/* 

const ERROR_ID = 'id должен быть положительным числом'
const ERROR_TITLE = 'не пустой, от 2 до 100 символов'
const ERROR_AUTHOR = 'не пустой, от 2 до 50 символов'
const ERROR_YEAR = 'year - число от 1800 до текущего года'
const ERROR_AVAILABLE = 'available - должно быть булевым значением (true/false)'
const ERROR_RATING = 'rating - число от 0 до 5'


function validateLibraryBook(book) {
	
	const {id, title, author, year, available, rating} = book
	const errors = []
	
	let currentYear = new Date().getFullYear();

	if (id < 0){
		errors.push(ERROR_ID)
	}
	if (title.length < 2 || title.length > 100){
		errors.push(ERROR_TITLE)
	}
	if (author.length < 2 || author > 50){
		errors.push(ERROR_AUTHOR)
	}
	if (year <= 1800 || year > currentYear){
		errors.push(ERROR_YEAR)
	}
	if (available !== Boolean){
		errors.push(ERROR_AVAILABLE)
	}
	if (rating < 0 || rating > 5){
		errors.push(ERROR_RATING)
	}

    
    return {
        isValid: errors.length === 0,
        errors,
    };
}


const book1 = {
    id: 1,
    title: "Гарри Поттер",
    author: "Дж. Роулинг",
    year: 1997,
    available: true,
    rating: 4.5
};

const book2 = {
    id: -1,
    title: "",
    author: "A",
    year: 1700,
    available: "yes",  
    rating: 6
};

console.log(validateLibraryBook(book1));
console.log(validateLibraryBook(book2)); */

/* 
const doubleArrow = (number) => number * 2
console.log(doubleArrow(5));
 */

/* const doubleArrow = (number) => number * 2

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(doubleArrow)
console.log(doubledNumbers); */

/* 
const doubleUpperNamesArrow = (names) => names.toUpperCase()

const names = ["анна", "иван", "мария"];

const doubledNames = names.map(d)

console.log(names); */

/* const names = ["анна", "иван", "мария"];

// Способ 1: Развёрнутый
const capitalizeNames = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
});

// Способ 2: Короткий
const capitalizeNames2 = names.map(name => name[0].toUpperCase() + name.slice(1));

console.log(capitalizeNames);  // ["Анна", "Иван", "Мария"]
console.log(capitalizeNames2); // ["Анна", "Иван", "Мария"] */
/* 
const numbers = [1, 2, 3, 4, 5];

const addPX = numbers.map(num => num + 'px')
console.log(addPX); */

/* 
const words = ["hello", "world", "javascript", "code", "programming"];

const findWords = words.filter(word => word[0] === 'p')
console.log(findWords); */

/* const words = ["hello", "world", "javascript", "code", "programming"];

const findWords = words.filter(word => word.includes('o'))
console.log(findWords);
 */
/* 
const cart = [
  { name: "Телефон", price: 50000 },
  { name: "Чехол", price: 1500 },
  { name: "Зарядка", price: 2500},
];
const res = cart.price
const sumPrice = res.reduce((acc, num) => acc + num, 0 )
console.log(sumPrice);
 */

/* const products = [
	{name: 'Хлеб', quantity: 2, price: 50},
	{name: 'Молока', quantity: 3, price: 100},
	{name: 'Масло', quantity: 1, price: 200},
]

const sumAllProducts = products.reduce((acc, item) => acc + item.price * item.quantity, 0)
console.log(sumAllProducts); */

/* 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);

const multiplyNumbers = numbers.map(num => num * 10)
console.log(multiplyNumbers);

const sumNumbers = numbers.reduce((acc, item) => acc + item, 0)
console.log(sumNumbers);

const NumberLargeFive = numbers.filter(num => num > 5)
console.log(NumberLargeFive);
 */
/* 
const words = ["hello", "hi", "good morning", "goodbye", "hey"];

const wordsLenThree = words.filter(word => word.length > 3)
console.log(wordsLenThree);

const addPlusStartWords = words.map(word => word + '!')
console.log(addPlusStartWords);

const sumAllWords = words.reduce((acc, item) => acc + item.length, 0)
console.log(sumAllWords);

const startWordsOnH = words.filter(word => word[0] === 'h')
console.log(startWordsOnH);
 */
/* 
const price = [100, 200, 300, 400, 500]

const lessNumbers = price.filter(pri => pri < 400 )
console.log(lessNumbers)

const addDollarInStart = price.map(pri => pri + '$')
console.log(addDollarInStart);

const sumAllPrice = price.reduce((acc, item) => acc + item, 0)
console.log(sumAllPrice)

const notToo = price.filter(pri => pri % 200 === 0)
console.log(notToo) */
/* 
const products = [
	{name: 'Хлеб', price: 50},
	{name: 'Молока', price: 100},
	{name: 'Масло', price: 200},
	{name: 'Сыр', price: 300},
	{name: 'Яблоки', price: 150}
]

const cheapProducts = products.filter(pro => pro.price < 200)
const nameProducts = cheapProducts.map(pro => pro.name)
console.log(cheapProducts)
console.log(nameProducts);

const expensiveProducts = products.filter(product => product.price > 150);
const totalSum = expensiveProducts.reduce((acc, product) => acc + product.price, 0);

console.log(totalSum); // 500 */
/* 
const students = [
  {name: 'Анна', age: 20, grade: 4.5},
  {name: 'Иван', age: 19, grade: 3.8},
  {name: 'Мария', age: 21, grade: 4.9},
  {name: 'Петр', age: 18, grade: 4.2},
  {name: 'Елена', age: 20, grade: 4.7}
]
const getPoint = students.filter(student=> student.grade > 4.5)
const getName = getPoint.map(student=>student.name)
console.log(getName)

const averagePoint = students.reduce((acc, student)=> acc + student.grade / 5, 0)
console.log(averagePoint)

const getAgeStudents = students.filter(student => student.age === 20 )
const getNameStudents = getAgeStudents.map(student => student.name)
console.log(getAgeStudents) */

/* 
function formatName(name){
  let deleteSpace =   name.trim()
  let UpperWord = deleteSpace[0].toUpperCase()
  return  UpperWord
}
console.log(formatName("иВАН")); // должно получиться "Иван"
console.log(formatName("  пЁтр  ")); // должно получиться "Пётр"
console.log(formatName("мАрия")); // должно получиться "Мария"
 */
/* 
function formatName(name) {
  let deleteSpace = name.trim()
  let UpperOneWord = deleteSpace.charAt(0).toUpperCase() + deleteSpace.slice(1).toLowerCase()
  return UpperOneWord
}

// Или можно записать короче:
function formatName(name) {
  return name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase()
}

console.log(formatName("иВАН")); // "Иван"
console.log(formatName("  пЁтр  ")); // "Пётр"
console.log(formatName("мАрия")); // "Мария" */


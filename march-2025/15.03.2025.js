/* const numbers = [1, 2, 3, 4, 5];

const doubleNumber = (numbers) => numbers.map((number) => number * 2);
console.log(doubleNumber(numbers));
 */

/* const prices = [99.99, 45.55, 10.25, 5.5, 75.25];
function formatPrices(prices) {
  return prices.map((price) => "$" + Math.round(price));
}
console.log(formatPrices(prices)); */

/* const products = [
  { name: "Apple", price: 0.99 },
  { name: "Banana", price: 0.5 },
  { name: "Orange", price: 0.75 },
  { name: "Mango", price: 1.5 },
];

const formatProducts = (products) =>
  products.map(
    (product) => `Product: ${product.name} - $${product.price.toFixed(2)}`
  );
console.log(formatProducts(products)); */

/* const products = [
  { name: "Apple", price: 0.99, quantity: 3 },
  { name: "Banana", price: 0.5, quantity: 5 },
  { name: "Orange", price: 0.75, quantity: 2 },
  { name: "Mango", price: 1.5, quantity: 4 },
];

function calculateTotal(products) {
  return products.map(
    (product) =>
      `${product.name} (${product.quantity} units) - $${(product.price * product.quantity).toFixed(2)}`
  );
}

console.log(calculateTotal(products)); */

/* const students = [
  { name: "John", grade: 85, passed: true },
  { name: "Kate", grade: 92, passed: true },
  { name: "Mike", grade: 45, passed: false },
  { name: "Anna", grade: 78, passed: true },
];

const formatResults = (students) =>
  students.map((student) =>
    student.passed
      ? `${student.name} passed with ${student.grade}%`
      : `${student.name} failed with ${student.grade}%`
  );

console.log(formatResults(students)); */

/* const students = [
  { name: "John", grade: 85, passed: true, subjects: ["Math", "English"] },
  {
    name: "Kate",
    grade: 92,
    passed: true,
    subjects: ["Physics", "English", "Math"],
  },
  { name: "Mike", grade: 45, passed: false, subjects: ["Math", "Physics"] },
  { name: "Anna", grade: 78, passed: true, subjects: ["English", "Economics"] },
];

function analyzeResults(students) {
  let sortStudents = students.sort((a, b) => b.grade - a.grade);
  return sortStudents.map(
    (student) =>
      `${student.name} - ${student.grade}% (${student.subjects.length} subjects)`
  );
}
console.log(analyzeResults(students)); */
/* 
const orders = [
  { id: 1, product: "Телефон", price: 500, quantity: 2 },
  { id: 2, product: "Наушники", price: 100, quantity: 3 },
  { id: 3, product: "Чехол", price: 20, quantity: 5 },
  { id: 4, product: "Зарядка", price: 30, quantity: 4 },
];

function analyzeOrders(orders) {
  return {
    totalAmount: orders.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ),
    averagePrice:
      orders.reduce((sum, item) => sum + item.price, 0) / orders.length,
    totalItems: orders.reduce((sum, item) => sum + item.quantity, 0),
  };
}

console.log(analyzeOrders(orders)); */

/* const sales = [
  { date: "2024-03-15", category: "Электроника", amount: 1200 },
  { date: "2024-03-15", category: "Книги", amount: 200 },
  { date: "2024-03-16", category: "Электроника", amount: 800 },
  { date: "2024-03-16", category: "Одежда", amount: 500 },
  { date: "2024-03-17", category: "Книги", amount: 150 },
  { date: "2024-03-17", category: "Одежда", amount: 300 },
];

let result = sales.map((sale) => sale.date.slice(8));
console.log(result[0]);

const analyzeSales = (sales) => {
  return {
    byDate: {
      "2024-03-15": sales.map(sale => sale.date.slice(8) === 15 )
    },
  };
};

console.log(analyzeSales(sales));  */

/* const purchases = [
  { day: "Понедельник", amount: 100 },
  { day: "Понедельник", amount: 200 },
  { day: "Вторник", amount: 150 },
  { day: "Вторник", amount: 300 },
];

const array = [1, 2, 3];
const newArray = Number(array.join(" "));
console.log(Math.min(newArray)); */

/* var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((sheep) => sheep === true).length;
}
console.log(countSheeps(array1)); */

/* const purchases = [
  { day: "Понедельник", amount: 100 },
  { day: "Понедельник", amount: 200 },
  { day: "Вторник", amount: 150 },
  { day: "Вторник", amount: 300 },
];

function sumByDay(purchases){
    return purchases.reduce((result, purchase) => {
        result[purchase.day] = (re)
    })
} */

/* const grades = [
  { student: "Анна", subject: "Математика", grade: 5 },
  { student: "Анна", subject: "Физика", grade: 4 },
  { student: "Иван", subject: "Математика", grade: 4 },
  { student: "Иван", subject: "Физика", grade: 5 },
];

const gradesByStudent = (grades) => {
  return grades.reduce((result, grade) => {
    if (!result[grade.student]) {
      result[grade.student] = [];
    }

    result[grade.student].push(grade.grade);
    return result;
  }, {});
};

console.log(gradesByStudent(grades)); */

/* const animals = [
  { type: "Кошка", name: "Мурка" },
  { type: "Собака", name: "Рекс" },
  { type: "Кошка", name: "Барсик" },
  { type: "Собака", name: "Бобик" },
  { type: "Кошка", name: "Пушок" },
];

const countAnimals = (animals) => {
  return animals.reduce((result, item) => {}, {});
};

function abbrevName(name) {
  return name[0] + '.' ;
}

/* ("Sam Harris"), "S.H"); */

/* console.log(abbrevName("Sam Harris"));
 */ 
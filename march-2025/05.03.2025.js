/* let count = 10

function startTimer() {

    let timerId = setInterval(() => {
        console.log(count)
        count--

        if (count === 5) {
            clearInterval(timerId)
            console.log('Stop in 2 seconds...')
        }

        setTimeout(() => {
            let newTimerId = setInterval(() => {
                console.log(count)
                count--

                if (count < 0) {
                    clearInterval(newTimerId)
                    console.log('Completed')
                }
            }, 1000)
        }, 2000)
    }, 1000)
}
startTimer() */

/* 
let count = 7

function startTimer() {

    let timerId = setInterval(() => {
        console.log(count)
        count--

        if (count === 3) {
            clearInterval(timerId)
            console.log('Stop in one second')
        }

        setTimeout(() => {
            let newTimerId = setInterval(() => {
                console.log(count)
                count--

                if (count < 0) {
                    clearInterval(newTimerId)
                    console.log('End')
                }
            }, 1000)
        }, 1000)
    }, 1000)
}
startTimer() */

/* 
let count = 3;

let timerId = setInterval(() =>{
    console.log(count)
    count--
    if (count <= 0){
        clearInterval(timerId)
        console.log('stop')
    }
}, 1000) */

/* 
let count = 5;

let timerId = setInterval(() =>{
    console.log(`Seconds left:${count}`)
    count--

    if(count <= 0){ 
        clearInterval(timerId)
        console.log('Stop timer')
    }

}, 1000) */

/* 
let count = 4

let timerId = setInterval(() => {
        if (count % 2 === 0){
            console.log('Tik')
        }else{
            console.log('Tak')
        }
        count--

        if (count <= 0){
            clearInterval(timerId)
            console.log('Boom')
        }

}, 1000); */

/* 
let counter = 5

let newTimerId = setInterval(() =>{
    console.log('🟢'.repeat(counter))
    counter--

    if (counter <= 0){
        clearInterval(newTimerId)
        console.log("⭐")
    }

}, 1000) */

/* 
let array = [3, 1, 4, 2]
let count = 0

let timerId = setInterval(() =>{
    
        if (count > count[0 + 1]){
            console.log("⬆️")
        }else{
            console.log("⬇️")
        }
        count++



    
}, 1000)
 */

/* 
let numbers = [3, 1, 4, 2]
let index = 0

let timerId = setInterval(() => {
    
    console.log(numbers[index])

    if (index < numbers.length - 1){
        if (numbers[index] > numbers[index + 1]){
            console.log("⬇️");  // следующее меньше
        }else{
            console.log("⬆️");  // следующее больше

        }
    }

    index++

    if (index >= numbers.length){
        clearInterval(timerId)
        console.log('End')
    }

}, 1000)
 */

/* 
let arrayColors = ["🔴", "🟡", "🟢"]
let index = 0;

let newTimerId = setInterval(() => {
    console.log(arrayColors[index])
    index++

    if (index >= arrayColors.length){
        clearInterval(newTimerId)
        console.log('Stop')
    }

}, 1000);
 */

/* 
let emptyBox = "⬜";
let filledBox = "⬛";
let totalBoxes = 5;
let filledBoxes = 0;
let counter = 0

let timerId = setInterval(() => {
    let newArray = []
    newArray.push(emptyBox.repeat(totalBoxes))
    console.log(newArray)
    if (newArray[filledBox])
    counter++
    filledBox++

}, 1000); */

/* 
let emptyBox = "⬜";
let filledBox = "⬛";
let totalBoxes = 5;
let filledBoxes = 0;

let timerId = setInterval(() =>{
    let progressBar = filledBox.repeat(filledBox) + emptyBox.repeat(totalBoxes - filledBox)
    console.log(progressBar)
    filledBoxes++

    if (filledBoxes > totalBoxes){
        clearInterval(timerId)
        console.log("✅ Загрузка завершена!");
    }
}, 1000)
 */
/* 
let emptyBox = "⬜";
let filledBox = "⬛";
let totalBoxes = 5;
let filledBoxes = 0;

let timerId = setInterval(() => {
    // Создаем строку: сначала заполненные квадраты, потом пустые
    let progressBar = filledBox.repeat(filledBoxes) + emptyBox.repeat(totalBoxes - filledBoxes);
    console.log(progressBar);
    
    filledBoxes++; // Увеличиваем количество заполненных квадратов

    // Когда все квадраты заполнены
    if (filledBoxes > totalBoxes) {
        clearInterval(timerId);
        console.log("✅ Загрузка завершена!");
    }
}, 1000); */

/* 
let star = "⭐";
let count = 0


let timerStar = setInterval(() => {
        console.log(star.repeat(count))
        count++

        if (count >= 4){
            clearInterval(timerStar)
            console.log('Star Completed')
        } 

}, 1000); */

/* 
let drop = "💧";
let space = " ";
let position = 0;

// Ваш код здесь

let rainTimer = setInterval(() => {
        console.log(drop)
        console.log(space)

}, 1000); */

/* 
let drop = "💧";
let space = " ";
let position = 0;


let rainTimer = setInterval(() => {
    console.log(space.repeat(position) + drop)
    position++

    if (position > 2){
        clearInterval(rainTimer)
        console.log("Splash! 💦");

    }
}, 1000); */

/* 
let plants = ["🌱", "🌿", "🌳"];
let index = 0;

let myGarden = setInterval(() => {
    console.log(plants[index])
    index++

    if(index >= plants.length){
        clearInterval(myGarden)
        console.log('Grow up')
    }
}, 1000); */

/* 
let weather = ["☀️", "⛅", "🌧️"];
let index = 0;


let weatherChange = setInterval(() => {
        console.log(weather[index])
        index++

        if (index >= weather.length){
            clearInterval(weatherChange)
            console.log('Weather cycle completed')
        }

}, 1000);


const weather = ["☀️", "⛅", "🌧️"];
let index = 0;

const weatherChange = setInterval(() => {
    console.log(weather[index]);
    index++;
    
    if (index >= weather.length) {
        clearInterval(weatherChange);
        console.log('Weather cycle completed!');
    }
}, 1000); */

/* 
const moods = ["😊", "🤔", "😴"];
let index = 0;

const moodChange = setInterval(() => {
    console.log(moods[index])
    index++;




    if (index >= moods.length) {
        clearInterval(moodChange)
        console.log('Mood tracking completed!')
    }
}, 1000); */

/* 
const spaceSteps = ["🚀", "🛸", "🌎"];
let index = 0;

const spaceTimberItem = setInterval(() => {
    console.log(spaceSteps[index])
    index++

    if (index >= spaceSteps.length){
        clearInterval(spaceTimberItem)
        console.log('Landing successful')
    }
}, 1000); */

/* 

let count = 3;
const rocket = "🚀";


const timerRocket = setInterval(() => {
    console.log(rocket)
    count--

    if (count <= 0){
        clearInterval(timerRocket)
        console.log("🚀 Liftoff!")
    }
}, 1000); */

/* 
let count = 3;
const redLight = "🔴";

// Ваш код здесь

const timerShape = setInterval(() => {
    console.log(`${count} - ${redLight}`)
    count--

    if (count <= 0){
        clearInterval(timerShape)
        console.log("🟢 Go!")
    }
}, 1000); */

/* 
const sun = "🌞"
const moon = "🌙"

const dayNightTimer = setInterval(() => {
    
    setTimeout(() =)

}, 1000); */
/* 
const sun = "🌞";
const moon = "🌙";

const sunTimer = setInterval(() => {
  console.log(sun);
}, 2000);

const moonTimer = setInterval(() => {
  console.log(moon);
}, 1000);

setTimeout(() => {
  clearInterval(sunTimer);
  clearInterval(moonTimer);
  console.log("Timers stopped!");
}, 4000);
 */
/* 
const snail = "🐌";
const hare = "🐇";

const snailRun = setInterval(() => {
  console.log(snail);
}, 3000);

const hareRun = setInterval(() => {
  console.log(hare);
}, 1000);

setTimeout(() => {
  clearInterval(snailRun);
  clearInterval(hareRun);
  console.log("Stop Run!");
}, 5000);
 */
/* 
const orderPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("🍕 Ваша пицца готова!");
  }, 3000);
});

console.log("👨‍🍳 Начинаем готовить вашу пиццу...");

orderPizza
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); */
/* 
const ingredients = {
  cheese: false,
  tomatoes: true,
  dough: true,
};

const orderPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (ingredients.cheese && ingredients.tomatoes && ingredients.dough) {
      resolve("🍕 Ваша пицца готова!");
    } else {
      reject("😢 Извините, у нас закончился сыр!");
    }
  }, 2000);
});

console.log("👨‍🍳 Проверяем ингредиенты...");

orderPizza
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
 */

/* 
  const checkAge = (age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve("✅ Доступ разрешен!");
            } else {
                reject("❌ Доступ запрещен! Вам должно быть 18 или больше!");
            }
        }, 1000);
    });
};

console.log("Проверяем ваш возраст...");

// Пробуем с разными возрастами
checkAge(20)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    }); */
/* 
const checkAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("✅ Доступ разрешен!");
      } else {
        reject("❌ Доступ запрещен! Вам должно быть 18 или больше!");
      }
    }, 1000);
  });
};

console.log("Check your age...");

checkAge(20)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

checkAge(17)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); */

/* 
const checkNumber = (number) =>{
  
  return new Promise((resolve, reject) =>{

    setTimeout(() => {

      if (number % 2 === 0){

        resolve(`✅ Число ${number} чётное!`);

      }else{

        reject(`❌ Число ${number} нечётное!`);

      }
    }, 1000);
  })
}

console.log('Start...')

checkNumber(4)
  .then((result) =>{
    console.log(result)
  })
  .catch((error) =>{
    console.log(error)
  })  */

/* 
const moreFive = (number) =>{
  return new Promise((resolve, reject) =>{

    setTimeout(() =>{

      if (number > 5){
        resolve('Great')
      }else{
        reject('Fail')
      }
    },1000)
  })
}

console.log('Start')
/* 
moreFive(4)
  .then((result) =>{
    console.log(result)
  })
  .catch((error) =>{
    console.log(error)
  }) 

 */
/* 
const checkPassword = (password) => {
  return new Promise((resolve, reject) => {
    console.log("🔍 Проверяем пароль...");

    setTimeout(() => {
      const hasMinLength = password.length >= 8;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);

      const errors = [];
      if (!hasMinLength) errors.push("минимум 8 символов");
      if (!hasUpperCase) errors.push("заглавную букву");
      if (!hasNumber) errors.push("цифру");

      if (errors.length === 0) {
        resolve("✅ Отличный пароль!");
      }else{
        reject(`❌ Пароль должен содержать: ${errors.join(', ')}`);
      }
    }, 1500);
  });
};

console.log('Начинаем проверку паролей...');

checkPassword('weak')
    .then(result => console.log(result))
    .catch(error => console.log(error))
setTimeout(() =>{
  checkPassword('Strong123')
    .then(result => console.log(result))
    .catch(error => console.log(error))
}, 2000) */


/* 
const myAge = (age) =>{
  return new Promise((resolve, reject) =>{
    console.log('Start...')
    setTimeout(() =>{

      if (age < 0) {
        reject('❌')
      }else if (age === 0){
        reject('❌')
      }else if (age > 120){
        reject('❌')
      }

      if (age > 0 && age < 100){
        resolve('✅')
      }
    }, 1000)
  })
}

myAge(85)
  .then(result => console.log(result)) 
  .catch(err => console.log(err))
    
myAge(0)
  .then(result => console.log(result)) 
  .catch(err => console.log(err))

myAge(-1)
  .then(result => console.log(result)) 
  .catch(err => console.log(err)) */

/* 

const checkWaterTemp = (water) =>{
  return new Promise((resolve, reject) => {
    console.log('Checking water temperature...')

    setTimeout(() =>{
      if (water < 0) reject ("❄️ Water is frozen")
      else if (water > 0 && water < 100) resolve ("💧 Water is liquid!")
      else if (water > 100) reject ("♨️ Water turned into steam!")
    }, 1000)
  })
}

checkWaterTemp(-10)
  .then((result) => {
    console.log(result)
  }).catch((err) => {
    console.log(err)
  }); */


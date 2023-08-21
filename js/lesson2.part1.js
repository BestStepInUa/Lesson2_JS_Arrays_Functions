//* Доступ до елементів масиву
// const clients = ["Mango", "Poly", "Ajax"];

// Зазначаючи в дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

//* Перевизначення елементів масиву
// console.log(clients);
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

//* Довжина масиву
//console.log(clients.length); // 3

//* Індекс останнього елемента масиву
//TODO Для того, щоб отримати значення останнього елемента, застосовується наступний підхід -
//TODO довжина масиву завжди на одиницю більша, ніж індекс останнього елемента. Використовуючи формулу
//TODO "довжина_масиву - 1", можна отримати значення останнього елемента масиву довільної довжини.
// Варіант № 1
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// Варіант № 2
// console.log(clients[clients.length - 1]);

//* Ітерація по масиву
//TODO Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.
// const clients = ["Mango", "Poly", "Ajax"];
// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]);
// }

//TODO Ітерація по масиву в зворотньому порядку
// const clients = ["Mango", "Poly", "Ajax"];
// for (let i = clients.length - 1; i >= 0; i -= 1) {
//     console.log(clients[i]);
// }

//* Цикл for...of
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

//* Оператори break і continue
//TODO Будемо шукати ім'я клієнта в масиві імен, якщо знайшли - перериваємо цикл, оскільки немає сенсу шукати далі, імена у нас унікальні.
// Варіант № 1
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"

// Варіант № 2
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//     // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//     // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//     // про успіх і робимо break, щоб далі не шукати
//     if (client === clientNameToFind) {
//         message = "Клієнт з таким ім'ям є в базі даних!";
//         break;
//     }
// }

// console.log(message);

// Варіант № 3
//TODO Виведення цифр, більших за певне значення
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// console.log("-||-||-||-||-");

//TODO Виведення цифр, менших за певне значення
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел, більших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > threshold) {
//     continue;
//   }

//   console.log(`Число менше за ${threshold}: ${numbers[i]}`); // 1, 3, 14, 4, 7, 6
// }

//! Методи масиву

//* Методи split() і join()
//TODO Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

//TODO Метод масивів join(delimiter) об'єднує елементи масиву у рядок. У рядку елементи будуть
//TODO розділені символом або групою символів, зазначених в delimiter.Тобто ця операція протилежна
//TODO методу рядків split(delimiter)

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

//* Метод indexOf()
//TODO indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві,
//TODO або число - 1, якщо такий елемент відсутній.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

//* Метод includes()
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

//TODO Перевірка багатьох умов з includes()
// До рефакторінгу
// const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// Рефакторінг
// const fruitList = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";

// if (fruitList.includes(fruit)) {
//     console.log("It is a red fruit!");
// }

//* Методи push() і pop() & shift і unshift
//TODO Додають або видаляють крайні елементи масиву

//! Метод push()
// додає один або декілька елементів наприкінці масиву,
// без необхідності зазначати індекси елементів,
// що додаються.
//! Повертає довжину масиву після додавання елементів.

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// numbers.push(6, 7, 8);
// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8]

//! Метод pop()
// видаляє останній елемент з кінця масиву і повертає видалений елемент.
// Якщо масив порожній, метод повертає undefined.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

//! Метод slice()
//TODO slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву,
//TODO не змінюючи його.Копія створюється з begin і до, але не включно,
//TODO end - індекси елементів вихідного масиву.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(0, 2)); // ['Mango', 'Ajax']
// console.log(clients.slice(1, 4)); //['Ajax', 'Poly', 'Kiwi']

//TODO Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

//TODO Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

//TODO Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]
// console.log(clients.slice(-3));

//! Метод splice()

//TODO Видалення
// Щоб видалити елементи в масиві, передаються два аргументи.
// splice(position, num)
//! Метод splice змінює вихідний масив і повертає масив, що містить видалені елементи.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.splice(1, 2)); // ['Ajax', 'Poly']

// Приклад
// const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
// console.log(`Array is: ${scores}`); // [4, 5]

// А масив deletedScores містить три видалені елементи
// console.log(`Deleted Array is: ${deletedScores}`); // [1, 2, 3]

//TODO Додавання
// Для того, щоб додати один або декілька елементів в масив, необхідно передати три або більше аргументи,
// за такої умови, другий аргумент повинен дорівнювати нулю.
// splice(position, 0, new_element_1, new_element_2, ...)

// scores.splice(0, 0, 1, 2, 3);
// console.log(scores); // [1, 2, 3, 4, 5]

// Приклад
// У нас є масив з назвами кольорів у вигляді рядків. Додамо новий колір перед елементом з індексом 2.
const colors = ["red", "green", "blue"];

colors.splice(2, 0, "grey");
// console.log(colors); // ['red', 'green', 'grey', 'blue']

// Можна додати довільну кількість елементів, передавши четвертий, п'ятий аргумент тощо.
colors.splice(2, 0, "black", "pink", "yellow");
console.log(colors); // ['red', 'green', 'black', 'pink', 'yellow', 'grey', 'blue']

//TODO Заміна
// Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових.
// Для цього необхідно передати мінімум три аргументи.
// Кількість елементів, що видаляються і додаються, може не збігатися.
// splice(position, num, new_element_1, new_element_2, ...)
colors.splice(1, 1, "purpure")
console.log(colors);

// Кількість елементів що видаляється та додається можуть не збігатися
colors.splice(4, 3, "orange", "white");
console.log(colors);

// Приклад
// Наприклад, у нас є масив мов програмування з чотирьох елементів.
const languages = ["C", "C++", "Java", "JavaScript"];

// Заміняємо елемент з індексом 1 на новий
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Заміняємо один елемент (з індексом 2) на декілька
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

//! Метод concat()
// Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий.
// Порядок аргументів методу впливає на порядок елементів нового масиву.

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]
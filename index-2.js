// const tech = [
//     { label: 'HTML' },
//     { label: 'CSS' },
//     { label: 'JavaScript' },
//     { label: 'Node.js' },
//     { label: 'React' },
//     { label: 'Vue' },
//     { label: 'Next.js' },
//     { label: 'Mobx' },
//     { label: 'Redux' },
//     { label: 'React Router' },
//     { label: 'GraphQl' },
//     { label: 'PostgreSQL' },
//     { label: 'MongoDB' },
//     ];


//     const techList = document.querySelector('.js-list')
//     function createListEl(techSkills){
// return techSkills.map((skill)=>{
// return `<li>${skill.label}</li>`
// }).join(' ')

//     }

//    const listMarkup = createListEl(tech)
//    techList.insertAdjacentHTML('beforeend', listMarkup)




//    const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Mike", age: 20 },
//     { name: "Alice", age: 28 },
//     { name: "Bob", age: 35 },
//     { name: "Emily", age: 22 },
//     { name: "Chris", age: 27 },
//     { name: "Anna", age: 32 },
//     { name: "James", age: 24 },
//     { name: "Sophia", age: 29 }
//     ];




//     const peopleList = document.querySelector('.js-list')
//     function chekPeopleEl(chekList){
//         return chekList.map((people)=>{
// return ` <li>
// <p>Імя:${people.name} </p>
// <p>Вік:${people.age} </p>
// </li>`

//         }).join(' ')
//     }

// const peopleMarkup = chekPeopleEl(people)
//     peopleList.insertAdjacentHTML('beforeend', peopleMarkup)

 




// * 1. Напишіть функцію sum, яка приймає два аргументи та повертає їх суму. 
// * Результат функції запишіть в зміну та виведіть в консоль.
// * 


// const products = [
// { product: "Laptop", price: 1200 },
// { product: "Smartphone", price: 800 },
// { product: "Tablet", price: 400 },
// { product: "Headphones", price: 150 },
// { product: "Smartwatch", price: 250 },
// { product: "Monitor", price: 300 },
// { product: "Keyboard", price: 100 },
// { product: "Mouse", price: 50 },
// { product: "Printer", price: 200 },
// { product: "Camera", price: 500 }
// ];

// const productsList = document.querySelector('.chek-list')
// function chekProductList(productList){
//     return productList.map((product)=>{

//         return `<li>
// <p>Назва:${product.product}</p>
// <p>Ціна:${product.price} </p>
// </li>`
//     }).join(' ')
// }

// const productMarkup = chekProductList(products)
// productsList.insertAdjacentHTML('beforeend', productMarkup)



// * 2. Напишіть функцію greet, яка приймає ім'я як аргумент та повертає рядок 
// * "Hello, [ім'я]". Результат функції вивести на сторінку


//  function greet(name) {
//             return `Hello, ${name}`;
//         }
//         const names = "Sergiy";
//         const greetingMessage = greet(names);
//         document.querySelector('#greeting').insertAdjacentHTML('beforeend', greetingMessage)








// * 3. Напишіть функцію isEven, яка приймає число та повертає true, якщо воно 
// * парне, і false - якщо непарне. Результат вивести в консоль
// * 

// function isEven(number) {
//     return number % 2 === 0;
// }

// const testNumber = 4;
// const result = isEven(testNumber);

// console.log(`Is ${testNumber} even? ${result}`);




// * 4. Напишіть функцію squareArray, яка приймає масив чисел та повертає новий 
// * масив, де кожен елемент є квадратом відповідного елемента вхідного масиву.
// * const numbers = [5, 12, 8, 20, 15, 7, 10, 3, 18, 25];
// * 

// function squareArray(numbers) {
//     return numbers.map(number => number * number);
// }

// const numbers = [5, 12, 8, 20, 15, 7, 10, 3, 18, 25];
// const squaredNumbers = squareArray(numbers);
// console.log('Original numbers:', numbers);
// console.log('Squared numbers:', squaredNumbers);









// * 5. Створіть об'єкт person з властивостями name, age та методом introduce, 
// * який повертає рядок "My name is [name] and I am [age] years old". 
// * Перезапишіть властивість name та знову скористайтеся методом introduce.
// * 



// const person = {
//     name: "Stas",
//     age: 25,
//     introduce: function() {
//         return `My name is ${this.name} and I am ${this.age} years old.`;
//     }
// };

// console.log(person.introduce());

// person.name = "Andriy";

// console.log(person.introduce());




// * 6. Напишіть функцію isAdult, яка приймає об'єкт person та повертає true, 
// * якщо вік більше або дорівнює 18, і false - якщо менше.
// * 


// const person = {
//     name: "Georgiy",
//     age: 25
// };

// function isAdult(person) {
//     return person.age >= 18;
// }

// const result = isAdult(person);

// console.log(`Is ${person.name} an adult? ${result}`);




// * 7. Напишіть функцію cloneObject, яка приймає об'єкт та повертає його клон.
// * Використайте розпилення.
// * 





// * 8. Напишіть функцію findMax, яка приймає масив чисел та повертає найбільше 
// * число в масиві. Виконання без циклу
// * 
// * 9. Напишіть функцію filterEvens, яка приймає масив чисел та повертає новий 
// * масив, що містить тільки парні числа.
// * 
// * 10. Напишіть функцію sumArray, яка приймає масив чисел та повертає суму всіх 
// * елементів масиву.(reduce)
// * 
// * 11. Створіть кнопку, яка при натисканні змінює текст параграфа на "Button 
// * clicked!".
// * 
// * 12. Створіть форму з текстовим полем та кнопкою. При натисканні на кнопку 
// * виведіть значення текстового поля в консоль.
// */
'use strict';
/* Типы данных и операторы */

export const dataTypes = () => {
/*
* Case 1
* Запросить у пользователя его возраст и определить, кем он является:
* ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
*/
// const userAge = Number( prompt('Сколько вам лет?', '') );
// if (userAge < 12) {
//   alert('Вы являетесь ребёнком');
// } else if (userAge >= 12 && userAge < 18 ) {
//   alert('Вы являетесь подростком');
// } else if (userAge >= 18 && userAge < 60) {
//   alert('Вы являетесь взрослым');
// } else {
//   alert('Вы являетесь пенсионером');
// }

/*
* Case 2
* Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
* который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
*/
// const userNumber = prompt('Укажите число от 0 до 9', '');
// if (userNumber !== null && userNumber !== '') {
//   switch (Number(userNumber)) {
//     case 0:
//       alert(`ваш символ: )`);
//       break;
//     case 1:
//       alert(`ваш символ: !`);
//       break;
//     case 2:
//       alert(`ваш символ: @`);
//       break;
//     case 3:
//       alert(`ваш символ: #`);
//       break;
//     case 4:
//       alert(`ваш символ: $`);
//       break;
//     case 5:
//       alert(`ваш символ: %`);
//       break;
//     case 6:
//       alert(`ваш символ: ^`);
//       break;
//     case 7:
//       alert(`ваш символ: &`);
//       break;
//     case 8:
//       alert(`ваш символ: *`);
//       break;
//     case 9:
//         alert(`ваш символ: (`);
//         break;
//     case null:
//       alert(`Пустое значение`);
//       break;
//     default:
//       alert(`Error`);
//       break;
//   }
// } else {
//   return;
// }

/*
* Case 3
* Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
*/
// const userNumber = prompt('Введите трёхзначное число', '');
// userNumber.length > 3 || userNumber.length < 3 ? alert('Это не трёхзначное число!') : alert('Это не трёхзначное число!');
// if (userNumber[0] === userNumber[1] || userNumber[1] === userNumber[2] || userNumber[0] === userNumber[2]) {
//   alert('В числе есть повторяющиеся числа');
// } else {
//   alert('Число без повторяющихся цифр');
// }

/*
* Case 4
* Запросить у пользователя год и проверить, високосный он или нет.
* Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
*/
// const userYear = Number( prompt('Введите год', '') );
// if (userYear % 400 === 0) {
//   alert('Это високосный год');
// } else if ( (userYear % 4 === 0) && (userYear % 100 !== 0) ) {
//   alert('Это високосный год');
// } else {
//   alert('Это не високосный год');
// }

/*
* Case 5
* Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
*/
// const userNumber = Number(prompt("Введите пятиразрядное число: ", " "));

// const firstNumber = Math.floor(userNumber*0.0001);
// const secondNumber = Math.floor(userNumber*0.001)%10;
// const thirdNumber = Math.floor(userNumber*0.01)%10;
// const fourthNumber = Math.floor(userNumber*0.1)%10;
// const fifththNumber = userNumber % 10;

// if(firstNumber === fifththNumber && secondNumber === fourthNumber) {
//   alert('Ваше число - является палиндромом');
// } else {
//   alert('Ваше число - не является палиндромом');
// }

/*
* Case 6
* Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести
* EUR, UAN или AZN, и получает в ответ соответствующую сумму.
*/
// const userMoney = Number( prompt('Введите сумму в долларах которую хотите обменять', '') );
// const variableCurrency = prompt('Укажите в какую валюты хотите перевести: EUR, UAH, AZN', '');

// if (variableCurrency === 'EUR' || 'eur') {
//   alert(`${userMoney * 0.85} EUR`)
// } else if (variableCurrency === 'UAH' || 'uah') {
//   alert(`${userMoney * 28.36} UAH`);
// } else if (variableCurrency === 'AZN' || 'azn') {
//   alert(`${userMoney * 1.70} AZN`);
// }

/*
* Case 7
* Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
* от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
*/
// const userSum = Number( prompt('Введите сумму покупки', '') );

// const threePercent = (userSum * 3) / 100;
// const fivePercent = (userSum * 5) / 100;
// const sevenPercent = (userSum * 7) / 100;

// if (userSum >= 200 && userSum < 300) {
//   alert(`Ваша скидка 3%, сумма к оплате ${userSum - threePercent}`);
// } else if (userSum >= 300 && userSum < 500) {
//   alert(`Ваша скидка 5%, сумма к оплате ${userSum - fivePercent}`);
// } else if (userSum >= 500) {
//   alert(`Ваша скидка 7%, сумма к оплате ${userSum - sevenPercent}`);
// } else if (userSum < 200) {
//   alert('Сумма мала для скидки');
// }

/*
* Case 8
* Запросить у пользователя длину окружности и периметр квадрата.
* Определить, может ли такая окружность поместиться в указанный квадрат.
*/
// const userCircle = Number( prompt('Введите длину окружности', '') );
// const userSquare = Number( prompt('Введите периметр квадрата', '') );
// const lengthCircle = userCircle / Math.PI;
// const perimeterSquare = userSquare / 4;

// if (lengthCircle <= perimeterSquare) {
//   alert('Окружность может поместиться в квадрат');
// } else {
//   alert('Окружность велика для кдвадрата');
// }

/*
* Case 9
* Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла.
* После вопросов выведите пользователю количество набранных баллов.
*/
// let points = 0;

// alert('В следующих трёх вопросах нужно ответить одним вариантом, вписав цифру');

// let firstQuestion = prompt('Земля круглая? \n1)да 2)плоская 3)какая земля?', '');
// firstQuestion === '1' ? points += 2 : points = points;

// let secondQuestion = prompt('Какой сейчас год? \n1)да 2)2020 3)быка?', '');
// secondQuestion === '2' ? points += 2 : points = points;

// let thirdQuestion = prompt('512 + 512? \n1)1014 2)1034 3)1024', '');
// thirdQuestion === '3' ? points += 2 : points = points;

// alert(`Вы набрали ${points} балов`);

/*
* Case 10
* Запросить дату (день, месяц, год) и вывести следующую за ней дату.
* Учтите возможность перехода на следующий месяц, год, а также високосный год.
*/
// let userDay = new Date(prompt('Ведите день в формате (yyyy-mm-dd)'));
// userDay.setDate(userDay.getDate() + 1);
// alert(`Следующий день - ${userDay()}`);
};
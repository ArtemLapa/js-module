/* Основы JavaScript */

/*
* Case 1
*/
// const userName = prompt('What is your name?');
// alert(`Привет, ${userName}!`);

/*
* Case 2
*/
// const userYear = prompt('В каком году вы родились?', '');
// const currentYear = 2020;
// const howYear = currentYear - Number(userYear);
// alert(howYear);

/*
* Case 3
*/
// const lengthSquare = prompt('Введите длину стороны квадрата', '');
// const sumSquare = Number(lengthSquare) * 4;
// alert(`Периметр кдвадрата ${sumSquare}`);

/*
* Case 4
*/
// const userRadius = prompt('Введите радиус окружности', '');
// const areaSum = Math.PI * (Number(userRadius) ** 2);
// alert(`Площадь квадрата ${areaSum} см`);

/*
* Case 5
*/
// let userDistance = prompt('Введите расстояние в км', '');
// userDistance = Number(userDistance);

// let userTime = prompt('За сколько часов вы хотите преодалеть расстояние? (в часах)', '');
// userTime = Number(userTime);

// let userSpeed = userDistance / userTime;
// let kmSpeed = userSpeed * 36;
// userSpeed = Math.floor(userSpeed * 100) / 100;
// alert(`Ваша скорость должна быть: ${userSpeed} км/ч`);

/*
* Case 6
*/
// const dollar = 0.84;
// alert(`1 доллар = ${dollar} евро`)
// let userNumber = prompt('Введите сумму в долларах', '');
// userNumber = Number(userNumber);
// const euro = userNumber * dollar;
// alert(`${euro} евро`);

/*
* Case 7
*/
// const oneFile = 820;
// let usbSize = prompt('Укажите объём USB накопителя в Гб', '');
// usbSize = Number(usbSize) * 1024;
// const sumFile = Math.floor(usbSize / oneFile);
// alert(`На накоптель можно записать ${sumFile} файлов`);

/*
* Case 8
*/
// let sumWallet = prompt('Сколько у вас денег?', '');
// sumWallet = Number(sumWallet);

// let priceChocholate = prompt('Сколько стоит шоколадка?', '');
// priceChocholate = Number(priceChocholate);

// const sumChocolate = Math.floor(sumWallet / priceChocholate);
// let shortChange = sumWallet - (sumChocolate * priceChocholate);
// alert(`Вы можете купить ${sumChocolate} шоколадок \nУ вас осталось ${shortChange} гривен`);

/*
* Case 9
*/
// const userNumber = Number(prompt('Введите трёхзначное число', ''));
// const firstNumber = Math.floor(Number(userNumber) * 0.01);
// const secondNumber = Math.floor(userNumber * 0.1) % 10;
// const thirdNumber = userNumber % 10;
// const reversNumber = thirdNumber * 100 + secondNumber * 10 + firstNumber;

// alert(`Ваше число наоборот: ${reversNumber}`);

/*
* Case 10
*/
// const depositSum = Number(prompt('Введите сумму депозита', ''));
// const percentYear = 5;
// const daysOfYear = 365;
// const daysOfTwoMonth = 61;

// const sumInteresPercent = ( ( (depositSum * percentYear * daysOfTwoMonth) / daysOfYear ) / 100 ).toFixed(2);
// alert(`Сумма процентов за два месяца: ${sumInteresPercent} грн`);


/* Типы данных и операторы */

/*
* Case 1
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
*/
// const userYear = Number(prompt('Введите год', ''));
// if (userYear % 400 === 0) {
//   alert('Это високосный год');
// } else if ( (userYear % 4 === 0) && (userYear % 100 !== 0) ) {
//   alert('Это високосный год');
// } else {
//   alert('Это не високосный год');
// }

/*
* Case 5
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
*/
// let userDay = new Date(prompt('Ведите день в формате (yyyy-mm-dd)'));
// userDay.setDate(userDay.getDate() + 1);
// alert(`Следующий день - ${userDay()}`);
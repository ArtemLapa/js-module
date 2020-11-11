/* Основы JavaScript */

/*
* Case 1
* Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
*/
// const userName = prompt('What is your name?');
// alert(`Привет, ${userName}!`);

/*
* Case 2
* Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
* Текущий год укажите в коде как константу.
*/
// const userYear = Number( prompt('В каком году вы родились?', '') );
// const currentYear = 2020;
// const howYear = currentYear - userYear;
// alert(howYear);

/*
* Case 3
* Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
*/
// const lengthSquare = Number( prompt('Введите длину стороны квадрата', '') );
// const sumSquare = lengthSquare * 4;
// alert(`Периметр кдвадрата ${sumSquare}`);

/*
* Case 4
* Запросите у пользователя радиус окружности и выведите площадь такой окружности.
*/
// const userRadius = Number( prompt('Введите радиус окружности', '') );
// const areaSum = Math.PI * (userRadius ** 2);
// alert(`Площадь квадрата ${areaSum} см`);

/*
* Case 5
* Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
* Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
*/
// const userDistance = Number( prompt('Введите расстояние в км', '') );
// const userTime = Number( prompt('За сколько часов вы хотите преодалеть расстояние? (в часах)', '') ) ;

// let userSpeed = userDistance / userTime;
// const kmSpeed = userSpeed * 36;
// userSpeed = Math.floor(userSpeed * 100) / 100;
// alert(`Ваша скорость должна быть: ${userSpeed} км/ч`);

/*
* Case 6
* Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро.
* Курс валюты храните в константе.
*/
// const dollar = 0.84;
// alert(`1 доллар = ${dollar} евро`)
// const userNumber = Number( prompt('Введите сумму в долларах', '') );
// const euro = userNumber * dollar;
// alert(`${euro} евро`);

/*
* Case 7
* Пользователь указывает объем флешки в Гб.
* Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
*/
// const oneFile = 820;
// let usbSize = prompt('Укажите объём USB накопителя в Гб', '');
// usbSize = Number(usbSize) * 1024;
// const sumFile = Math.floor(usbSize / oneFile);
// alert(`На накоптель можно записать ${sumFile} файлов`);

/*
* Case 8
* Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
* Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
*/
// const sumWallet = Number( prompt('Сколько у вас денег?', '') );
// const priceChocholate = Number( prompt('Сколько стоит шоколадка?', '') );

// const sumChocolate = Math.floor(sumWallet / priceChocholate);
// let shortChange = sumWallet - (sumChocolate * priceChocholate);
// alert(`Вы можете купить ${sumChocolate} шоколадок \nУ вас осталось ${shortChange} гривен`);

/*
* Case 9
* Запросите у пользователя трехзначное число и выведите его задом наперед.
* Для решения задачи вам понадобится оператор % (остаток от деления).
*/
// const userNumber = Number( prompt('Введите трёхзначное число', '') );
// const firstNumber = Math.floor( Number(userNumber) * 0.01 );
// const secondNumber = Math.floor(userNumber * 0.1) % 10;
// const thirdNumber = userNumber % 10;
// const reversNumber = thirdNumber * 100 + secondNumber * 10 + firstNumber;

// alert(`Ваше число наоборот: ${reversNumber}`);

/*
* Case 10
* Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых.
* Вывести сумму начисленных процентов.
*/
// const depositSum = Number( prompt('Введите сумму депозита', '') );
// const percentYear = 5;
// const daysOfYear = 365;
// const daysOfTwoMonth = 61;

// const sumInteresPercent = ( ( (depositSum * percentYear * daysOfTwoMonth) / daysOfYear ) / 100 ).toFixed(2);
// alert(`Сумма процентов за два месяца: ${sumInteresPercent} грн`);


/* Типы данных и операторы */

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


/* Циклы */

/*
* Case 1
* Подсчитать сумму всех чисел в заданном пользователем диапазоне.
*/
// const userFirstNumber = Number( prompt('Введите начальное число диапазона', '') );
// const userSecondNumber = Number( prompt('Введите крайнее число диапазона', '') );
// let diapazonSum = 0;

// for (let i = userFirstNumber; i <= userSecondNumber; i++) {
//   diapazonSum += i;
// }
// alert(`Сумма всех числе в заданном диапазоне = ${diapazonSum}`);

/*
* Case 2
* Запросить 2 числа и найти только наибольший общий делитель.
*/
// let userFirstNumber = Number( Math.abs( prompt('Введите первое число', '') ) );
// let userSecondNumber = Number( Math.abs( prompt('Введите второе число ', '') ) );

// if (userSecondNumber > userFirstNumber) {
//   let temp = userFirstNumber;
//   userFirstNumber = userSecondNumber;
//   userSecondNumber = temp;
// }
// while (true) {
//   if(userSecondNumber === 0) {
//     return alert(`Наибольший делитель ${userFirstNumber}`);
//   }
//   userFirstNumber %= userSecondNumber;

//   if(userFirstNumber === 0) {
//     return alert(`Наибольший делитель ${userSecondNumber}`);
//   }
//   userSecondNumber %= userFirstNumber;
// }

/*
* Case 3
* Запросить у пользователя число и вывести все делители этого числа.
*/
// const userNumber = Number( prompt('Enter you numbrt', '') );
// let delArray = [];
// for(let i = 1; i <= userNumber; i++) {
//   if(userNumber % i === 0) {
//     delArray.push(i)
//   }
// }
// console.log(delArray);

/*
* Case 4
* Определить количество цифр в введенном числе.
*/
// const userNumber = prompt('Enter your number', '');
// let numberSum = 0;
// for(let i = 0; i <= userNumber.length; i++) {
//   numberSum =+ i;
// }
// alert('Lengh your number');


/*
* Case 5
* Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
* При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.
* Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
*/
// const userNumbers = prompt('Введите 10 чисел через запятую', '');
// const separator = ',';
// const arrayNumbers = userNumbers.split(separator);
// let zeroNumber = 0,
//     oddNumber = 0,
//     evenNumber = 0,
//     positivNumber = 0,
//     negativeNumber = 0;

// arrayNumbers.forEach(element => {
//   if (Number(element) !== 0) {
//     if (Number(element) % 2 === 0) {
//       evenNumber++;
//       if (Number(element) > 0) {
//         positivNumber++;
//       } else {
//         negativeNumber++;
//       }
//     } else {
//       oddNumber++;
//       if (Number(element) > 0) {
//         positivNumber++;
//       } else {
//         negativeNumber++;
//       }
//     }
//   } else {
//     zeroNumber++;
//   }
// });
// alert(`
//   колличество нулей: ${zeroNumber},
//   колличество нечётных числе: ${oddNumber},
//   колличество чётных чисел: ${evenNumber},
//   колличество положительных чисел: ${positivNumber},
//   колличество отрицательных числе: ${negativeNumber}`
// );

/*
* Case 6
* Зациклить калькулятор. Запросить у пользователя 2 числа и знак,
* решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
* И так до тех пор, пока пользователь не откажется.
*/
// let startCalc = Number ( prompt('Желаете начать вычисления? 1 - да, 0 - нет', '') );

// while(startCalc === 1) {
//   const firstNumber = Number( prompt('Введите первое число', '') );
//   const mathematicalSign = prompt('Введите знак для операции (+,-,/,*)', '');
//   const secondNumber = Number( prompt('Введите второе число', '') );
//   let result = 0;
  
//   switch(mathematicalSign) {
//     case '+':
//       result = firstNumber + secondNumber;
//       break;
//     case '-':
//       result = firstNumber - secondNumber;
//       break;
//     case '/':
//       result = firstNumber / secondNumber;
//       break;
//     case '*':
//       result = firstNumber * secondNumber;
//       break;
//     default:
//       alert('Вы допустили ошибку');
//       break;
//   }
//   alert(`Результат вычислений = ${result}`);
//   startCalc = Number ( prompt('Желаете продолжить вычисления? 1 - да, 0 - нет', '') );
// }

/*
* Case 7
* Запросить у пользователя число и на сколько цифр его сдвинуть.
* Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
*/
// const userNumber = Number( prompt('Введите число:', '') );
// const numberShifts = Number( prompt('На сколько позиций нужно подвинуть число? Укажите в цифрах', '') );
// let arrayNumbers = userNumber.toString().split('');

// let i = 0;
// let cutNumbers;
// while(i < numberShifts) {
//   cutNumbers = arrayNumbers.shift();
//   arrayNumbers.push(cutNumbers);
//   i++;
// }
// alert(arrayNumbers.join(''));

/*
* Case 8
* Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?»
* и так до тех пор, пока пользователь нажимает OK.
*/
// const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;

// while (confirm(`${daysOfWeek[currDay]}. Хотите увидеть следующий день?`)) {
//   currDay = (currDay + 1) % daysOfWeek.length;
// }

/*
* Case 9
* Вывести таблицу умножения для всех чисел от 2 до 9.
* Каждое число необходимо умножить на числа от 1 до 10.
*/
// for(let factor = 2; factor <= 9; factor++) {
//   console.log(`Умножение на ${factor}:`);
//   for(let multiplicand = 1; multiplicand <= 10; multiplicand++) {
//     let result = factor * multiplicand;
//     console.log(`${multiplicand} * ${factor} = ${result}`)
//   }
// }

/*
* Case 10
* Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
* каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и
* спрашиваете у пользователя «Ваше число > N, < N или == N?».
* В зависимости от того, что указал пользователь, уменьшаете диапазон.
* Начальный диапазон от 0 до 100, поделили пополам и получили 50.
* Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100.
* И так до тех пор, пока пользователь не выберет == N.
*/
// const userNumber = alert('Загадайте число в диапазоне от 0 до 100');
// let gameDiapazoneStart = 0;
// let gameDiapazoneEnd = 100;
// let startGame = confirm('Начинаем игру?');
// let N = Math.floor((gameDiapazoneEnd - gameDiapazoneStart) / 2) + gameDiapazoneStart;
// console.log(N);

/* Функции */

/*
* Case 1
* Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
* 1 – если первое больше, чем второе; и 0 – если числа равны.
*/
// const firstNumber = Number( prompt('Введите первое число', '') );
// const secondNumber = Number( prompt('Введите второе число', '') );

// function returnNumbers(firstNumber, secondNumber) {
//   if(firstNumber < secondNumber) {
//     return alert(-1);
//   } else if(firstNumber > secondNumber) {
//     return alert(1);
//   } else if (firstNumber === secondNumber) {
//     return alert(0);
//   } else {
//     return alert('Неверные значения');
//   }
// };
// returnNumbers(firstNumber, secondNumber);

/*
* Case 2
* Написать функцию, которая вычисляет факториал переданного ей числа.
*/
// const userNumber = Number( prompt('Введите число:', '') );

// function calcFactorial(userNumber) {
//   let  count = 1;
//   for( let i = 1; i <= userNumber; i++) {
//     count *= i;
//   }
//   return alert(`Факториал вашего числа = ${count}`);
// };

// calcFactorial(userNumber);

/*
* Case 3
* Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
* Например: цифры 1, 4, 9 превратятся в число 149.
*/
// const userNumbers = prompt('Введите 3 цифры через пробел', '');

// function concatNumbers(numbers) {
//   let result = numbers.split(' ').join('');
//   return alert(result);
// };
// concatNumbers(userNumbers);

/*
* Case 4
* Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
* Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
*/
// const lengthRectangle = Number( prompt('Введите длину прямоугольника', '') );
// const widthRectangle = Number( prompt('Введите ширину прямоугольника', '') );

// function sumRectangle(length, width) {
//   return console.log((length * width ) || length * 4);
// }
// sumRectangle(lengthRectangle, widthRectangle);

/*
* Case 5
* Написать функцию, которая проверяет, является ли переданное ей число совершенным.
* Совершенное число – это число, равное сумме всех своих собственных делителей.
*/
// const userNumber = Number( prompt('Введите число', '') );

// const isPerfect = (number) => {
//   let countSum = 0;
//   for(let i = 1; i < number; i++) {
//     if(number % i === 0){
//       countSum += i;
//     }
//   }

//   if(countSum === number) {
//     return `${number} является совершенным числом`;
//   }
//   return `${number} не является совершенным числом`;
// }
// alert(isPerfect(userNumber));

/*
* Case 6
* Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
* и выводит только те числа из диапазона, которые являются совершенными.
* Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
*/
// const minDiapazonValue = Number( prompt('Введите минимальное число диапазона', '') );
// const maxDiapazonValue = Number( prompt('Введите максимальное число диапазона', '') );
// const arrNumbers = [];
// const arrPerfectNumbers = [];

// const isPerfect = (value) => {
//   let countSum = 0;
//   for(let i = 1; i < value; i++) {
//     if(value % i === 0) {
//       countSum += i;
//     }
//   }
//   if(countSum === value) {
//     return true;
//   }
//   return false;
// };
// const isPerfectDiapazon = (minNumber, maxNumber) => {
//   for(let i = minNumber; i < maxNumber; i++) {
//     let value = isPerfect(i);
//     if(value === true) {
//       arrNumbers.push(i);
//     }
//   }
//   alert(`Совершенные числа ${arrNumbers}`);
// };
// isPerfectDiapazon(minDiapazonValue, maxDiapazonValue);

/*
* Case 7
* Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его
* на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды
* не были переданы, то выводить их как 00.
*/
// const userTime = prompt('Введите время, через пробел (чч мм сс)', '');
// let arrUserTime = userTime.split(' ');

// const userHour = arrUserTime[0];
// const userMinutes = arrUserTime[1];
// const userSeconds = arrUserTime[2];

// const timeNow = (hours, minutes = '00', seconds = '00') => {
//   if(hours.length < 2) {
//     return `0${hours}:${minutes}:${seconds}`;
//   } else if(minutes.length < 2 && seconds.length < 2) {
//     return `${hours}:0${minutes}:0${seconds}`;
//   } else if(minutes.length < 2) {
//     return `${hours}:0${minutes}:${seconds}`;
//   } else if(seconds.length < 2) {
//     return `${hours}:${minutes}:0${seconds}`;
//   } else {
//     return `${hours}:${minutes}:${seconds}`;
//   }
// }
// alert(timeNow(userHour, userMinutes, userSeconds));

/*
* Case 8
* Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
*/
// const userTime = prompt('Введите время, через пробел (чч мм сс)', '');
// let arrUserTime = userTime.split(' ');
// arrUserTime = arrUserTime.map(Number);

// const userHour = arrUserTime[0];
// const userMinutes = arrUserTime[1];
// const userSeconds = arrUserTime[2];

// const sumSeconds = (hours, minutes, seconds) => {
//   let allSeconds = 0;
//   if(hours <= 24 && minutes <= 60 && seconds <= 60) {
//     allSeconds = (hours * 3600) + (minutes * 60) + seconds;
//     return `${allSeconds} секунд`;
//   } else {
//     return 'Ошибка ввода';
//   }
// }
// alert(sumSeconds(userHour, userMinutes, userSeconds));

/*
* Case 9
* Написать функцию, которая принимает количество секунд, переводит их в часы,
* минуты и секунды и возвращает в виде строки «чч:мм:сс».
*/
// const userSeconds = Number( prompt('Введите коллическтво секунд', '') );

// const secondsToNormalTime = (seconds) => {
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor(seconds % 3600 / 60);
//   const second = Math.floor(seconds % 60);

//   let strHours = hours.toString();
//   let strMinutes = minutes.toString();
//   let strSeconds = second.toString();

//   const arrTime = [];
//   arrTime.push(strHours, strMinutes, strSeconds);

//   for(let i = 0; i < arrTime.length; i++ ) {
//     if( arrTime[i] < 10 ) {
//       arrTime[i] = "0" + arrTime[i];
//     }
//   }

//   return `${arrTime[0]}:${arrTime[1]}:${arrTime[2]}`;
// };
// alert(secondsToNormalTime(userSeconds));

/*
* Case 10
* Написать функцию, которая считает разницу между датами.
* Функция принимает 6 параметров, которые описывают 2 даты,
* и возвращает результат в виде строки «чч:мм:сс».
* При выполнении задания используйте функции из предыдущих 2-х заданий:
* сначала обе даты переведите в секунды, узнайте разницу в секундах,
* а потом разницу переведите обратно в «чч:мм:сс»
*/

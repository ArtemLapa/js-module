'use strict';
/* Функции */

export const functions = () => {
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
};
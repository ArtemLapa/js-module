'use strict';
/* Основы JavaScript */

export const basicJS = () => {
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
};
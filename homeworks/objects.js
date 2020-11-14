'use strict';
/* Объекты */

export const objects = () => {
/*
* Case 1
* Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
* и следующие функции для работы с этим объектом:
*
* Функция для вывода на экран информации об автомобиле;
* Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
* Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
*/
// const car = {
//   manufaturer: 'Ford',
//   model: 'Mondeo',
//   year: 2016,
//   averageSpeed: 120,
// }
// const infoCar = () => {
//   for(let key in car) {
//     console.log(`${key} : ${car[key]}`);
//   }
// }
// infoCar();

// const userDistance = Number( prompt('Укажите расстояние которое вы хотите преодалеть в км', '') );
// const averageTime = () => {
//   let time = userDistance / car.averageSpeed;
//   if(time / 4 < 1) {
//     time;
//   } else {
//     time = time + Math.floor(time / 4);
//   }
//   return alert(`Средняя время поездки с учётом отдыха будет ${time.toFixed(1)} часов`);
// }
// averageTime();

/*
* Case 2
* Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
* и следующие функции для работы с этим объектом:
*
* Функция сложения 2-х объектов-дробей;
* Функция вычитания 2-х объектов-дробей;
* Функция умножения 2-х объектов-дробей;
* Функция деления 2-х объектов-дробей;
* Функция сокращения объекта-дроби.
*/
// function Fraction(upNumber,downNumber){
//   return {upNumber:upNumber, downNumber:downNumber};
// }
// let firstNumber = Fraction(5,10);
// let secondNumber = Fraction(2,15);

// function sumFraction(obj1, obj2) {
//   let resUpNumber = 0;
//   let resDownNumber = 0;
//   if(obj1.downNumber === obj2.downNumber) {
//     resDownNumber = (obj1.downNumber + obj2.downNumber) / 2;
//   } else {
//     resUpNumber = (obj1.upNumber * obj2.downNumber) + (obj2.upNumber * obj1.downNumber);
//     resDownNumber = obj1.downNumber * obj2.downNumber;
//   }

//   let averageDivider = 0;
//   function sumDel(a, b) {
//     if (b) {
//         return averageDivider = sumDel(b, a % b);
//     } else {
//         return averageDivider = Math.abs(a);
//     }
//   }
//   sumDel(resUpNumber, resDownNumber);

//   resUpNumber = resUpNumber / averageDivider;
//   resDownNumber = resDownNumber / averageDivider;

//   return console.log(`Результат сложения ${resUpNumber}|${resDownNumber}`)
// }
// sumFraction(firstNumber, secondNumber);

// function diffFraction(obj1, obj2) {
//   let resUpNumber = 0;
//   let resDownNumber = 0;
//   if(obj1.downNumber === obj2.downNumber) {
//     resDownNumber = (obj1.downNumber - obj2.downNumber) / 2;
//   } else {
//     resUpNumber = (obj1.upNumber * obj2.downNumber) - (obj2.upNumber * obj1.downNumber);
//     resDownNumber = obj1.downNumber * obj2.downNumber;
//   }

//   let averageDivider = 0;
//   function sumDel(a, b) {
//     if (b) {
//         return averageDivider = sumDel(b, a % b);
//     } else {
//         return averageDivider = Math.abs(a);
//     }
//   }
//   sumDel(resUpNumber, resDownNumber);

//   resUpNumber = resUpNumber / averageDivider;
//   resDownNumber = resDownNumber / averageDivider;

//   return console.log(`Результат вычитания ${resUpNumber}|${resDownNumber}`)
// }
// diffFraction(firstNumber, secondNumber);

// function multiplFraction(obj1, obj2) {
//   let resUpNumber = 0;
//   let resDownNumber = 0;

//   resUpNumber = obj1.upNumber * obj2.upNumber;
//   resDownNumber = obj1.downNumber * obj2.downNumber;

//   let averageDivider = 0;
//   function sumDel(a, b) {
//     if (b) {
//         return averageDivider = sumDel(b, a % b);
//     } else {
//         return averageDivider = Math.abs(a);
//     }
//   }
//   sumDel(resUpNumber, resDownNumber);

//   resUpNumber = resUpNumber / averageDivider;
//   resDownNumber = resDownNumber / averageDivider;

//   return console.log(`Результат умножения ${resUpNumber}|${resDownNumber}`)
// }
// multiplFraction(firstNumber, secondNumber);

// function divisionFraction(obj1, obj2) {
//   let resUpNumber = 0;
//   let resDownNumber = 0;

//   resUpNumber = obj1.upNumber * obj2.downNumber;
//   resDownNumber = obj1.downNumber * obj2.upNumber;

//   let averageDivider = 0;
//   function sumDel(a, b) {
//     if (b) {
//         return averageDivider = sumDel(b, a % b);
//     } else {
//         return averageDivider = Math.abs(a);
//     }
//   }
//   sumDel(resUpNumber, resDownNumber);

//   resUpNumber = resUpNumber / averageDivider;
//   resDownNumber = resDownNumber / averageDivider;
//   if(resUpNumber < resDownNumber) {
//     resUpNumber = resUpNumber % resDownNumber;
//   }

//   return console.log(`Результат деления ${resUpNumber}|${resDownNumber}`)
// }
// divisionFraction(firstNumber, secondNumber);

/*
* Case 3
* Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
* и следующие функции для работы с этим объектом:
*
* Функция сложения 2-х объектов-дробей;
* Функция вычитания 2-х объектов-дробей;
* Функция умножения 2-х объектов-дробей;
* Функция деления 2-х объектов-дробей;
* Функция сокращения объекта-дроби
*/
};
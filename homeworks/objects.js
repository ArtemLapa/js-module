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
* Создать объект, описывающий время (часы, минуты, секунды),
* и следующие функции для работы с этим объектом:
*
* Функция вывода времени на экран;
* Функция изменения времени на переданное количество секунд;
* Функция изменения времени на переданное количество минут;
* Функция изменения времени на переданное количество часов.
* Учтите, что в последних 3-х функциях, при изменении одной части времени,
* может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд,
* то должно получиться «20:31:15», а не «20:30:75».
*/
// function Time(hours, minutes, seconds) {
//   return {hours:hours, minutes:minutes, seconds:seconds};
// }
// const newTime = Time(20, 30, 45);

// const userHour = newTime.hours;
// const userMinutes = newTime.minutes;
// const userSeconds = newTime.seconds;
// // console.log(userHour)
// const timeNow = (obj) => {
//   console.log(userHour, userMinutes, userSeconds)
// }
// timeNow(newTime);
};
// const firstNumber = Time(20,30,45); //obj

// const showTime = (obj) => {

//   const hoursStr = obj.hours.toString();
//   const minutesStr = obj.minutes.toString();
//   const secondsStr = obj.seconds.toString();

//   const strtime = `${hoursStr},${minutesStr},${secondsStr}`;
//   const arrTime = strtime.split(',');
      
//   for(let i = 0; i < arrTime.length; i++ ) {
//     if( arrTime[i] < 10 ){
//       arrTime[i] = "0" + arrTime[i];
//     }
//   }

//   return `${arrTime[0]} : ${arrTime[1]} : ${arrTime[2]}`;
// }

// const addSecondsInTime = (obj, sec) => {
//   let seconds = obj.seconds + sec;
//   let minutes = obj.minutes;
//   let hours = obj.hours;

//   if(seconds > 60){
//     seconds = seconds - 60;
//     minutes += 1; 
//     if(minutes >= 60) {
//       minutes = minutes - 60;
//       hours += 1;
//     }
//   }

//   const newObj = Time(hours,minutes,seconds);
//   return showTime(newObj);
// }

// const addMinutesInTime = (obj, min) => {
//   let seconds = obj.seconds;
//   let minutes = obj.minutes + min;
//   let hours = obj.hours;

//   if(minutes >= 60) {
//     minutes = minutes - 60;
//     hours += 1;
//   }

//   const newObj = Time(hours,minutes,seconds);
//   return showTime(newObj);
// }

// const addhoursInTime = (obj, h) => {
//   let seconds = obj.seconds;
//   let minutes = obj.minutes;
//   let hours = obj.hours + h;

//   if(hours >= 24) {
//     hours = hours - 24;
//   }

//   const newObj = Time(hours,minutes,seconds);
//   return showTime(newObj);
// }

// console.log(`Основное время`);
// console.log(showTime(firstNumber));
// console.log(`К основному времени + 30 сек`);
// console.log(addSecondsInTime(firstNumber, 30));
// console.log(`К основному времени + 70 мин`);
// console.log(addMinutesInTime(firstNumber, 70));
// console.log(`К основному времени + 2 часа`);
// console.log(addhoursInTime(firstNumber, 2));
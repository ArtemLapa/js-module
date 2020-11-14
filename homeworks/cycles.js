'use strict';
/* Циклы */

export const cycles = () => {
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
};
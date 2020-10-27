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
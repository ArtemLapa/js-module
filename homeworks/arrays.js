'use strict';
/* Массивы */

export const arrays = () => {
/*
* Case 1
* Создать массив «Список покупок». Каждый элемент массива является объектом,
* который содержит название продукта, необходимое количество и куплен или нет.
* Написать несколько функций для работы с таким массивом.
*
* 1)Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
* 2)Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
* необходимо увеличивать количество в существующей покупке, а не добавлять новую.
* 3)Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
*/
  /*
  const shopList = [
    {
      name: 'Яблоки',
      sum: 0,
      isBuy: false
    },
    {
      name: 'Хлеб',
      sum: 1,
      isBuy: true
    },
    {
      name: 'Яйца',
      sum: 0,
      isBuy: false
    },
    {
      name: 'Сахар',
      sum: 1,
      isBuy: true
    },
  ];

  function sortBuy(array) {
    array.sort((a, b) => {
      return a.isBuy - b.isBuy;
    });
    return console.log(shopList);
  };
  sortBuy(shopList);

  function addToList(array, element) {
    let buyItem = {};
    for (let key of array) {
      if(key.name === element) {
        return key.sum++;
      }
    }
    buyItem['name'] = element;
    buyItem['sum'] = 0;
    buyItem['isBuy'] = false;
    return shopList.push(buyItem);
  };
  addToList(shopList, 'Вода');

  function buyProduct(array, element) {
    for (let key of array) {
      if(element !== key.name) {
        return console.log('Такого товара нет в списке!')
      } else {
        return key.isBuy = true;
      }
    }
  };
  buyProduct(shopList, 'Яблоки');

  sortBuy(shopList);
  */

/*
* Case 2
* Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
* количества и цены за единицу товара. Написать следующие функции:
*
* 1)Распечатка чека на экран;
* 2)Подсчет общей суммы покупки;
* 3)Получение самой дорогой покупки в чеке;
* 4)Подсчет средней стоимости одного товара в чеке.
*/
/*
  const shopList = [
    {
      name: 'Яблоки',
      price: 15,
      quantity: 1,
    },
    {
      name: 'Хлеб',
      price: 5,
      quantity: 1,
    },
    {
      name: 'Яйца',
      price: 10,
      quantity: 1,
    },
    {
      name: 'Сахар',
      price: 17,
      quantity: 1,
    },
  ];

  function printCheck(array) {
    return array.reduce((acc, currValue) => {
      acc += `${currValue.name}\t\t\t${currValue.price}$\n`
      return acc;
    }, '')
  };
  console.log(printCheck(shopList));

  function sumCheck(array) {
    let initialValue = 0;
    return array.reduce((acc, currValue) => {
      return acc + currValue.price;
    }, initialValue)
  }
  console.log(sumCheck(shopList));

  function expensiveProduct(array) {
    return array.reduce((prev, curr) => {
      if(prev.price > curr.price) {
        return `${prev.name}\t\t\t${prev.price}`;
      }
      return `${curr.name}\t\t\t${curr.price}$`;
    })
  }
  console.log(expensiveProduct(shopList));

  function averageCost(array) {
    let total = 0;
    let sum = array.reduce((acc, currValue) => {
      total += currValue.quantity;
      acc += (currValue.price * currValue.quantity);
      return acc;
    }, 0);
    return sum / total;
  }
  console.log(averageCost(shopList));
  */

/*
* Case 3
* Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
* Каждый элемент массива – это объект, состоящий из двух свойств:
* название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст,
* и выводит этот текст с помощью document.write() в тегах <p></p>,
* добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
*/
/*
  const textStyles = [
    {
      name: 'color',
      value: 'red'
    },
    {
      name: 'font-size',
      value: '22px'
    },
    {
      name: 'text-align',
      value: 'center'
    },
    {
      name: 'background-color',
      value: 'blue'
    },
  ];
  const text = 'Some text for example';

  function printText(array, text) {
    let element = array.reduce((acc, item) => {
      acc += `${item.name}: ${item.value}; `;
      return acc;
    }, '');
    return document.write(`<p style="${element}">${text}</p>`);
  }
  printText(textStyles, text);
*/

/*
* Case 4
* Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест
* (от 10 до 20) и названия факультета, для которого она предназначена.
* Написать несколько функций для работы с ним:
*
* 1)Вывод на экран всех аудиторий;
* 2)Вывод на экран аудиторий для указанного факультета;
* 3)Вывод на экран только тех аудиторий, которые подходят для переданной группы.
* Объект-группа состоит из названия, количества студентов и названия факультета;
* 4)Функция сортировки аудиторий по количеству мест;
* 5)Функция сортировки аудиторий по названию (по алфавиту).
*/
  const academyAuditorium = [
    {
      name: '130A',
      numSeats: 17,
      faculty: 'back-end'
    },
    {
      name: '130B',
      numSeats: 11,
      faculty: 'front-end'
    },
    {
      name: '133',
      numSeats: 10,
      faculty: 'UI/UX design'
    },
    {
      name: '132A',
      numSeats: 20,
      faculty: 'back-end'
    },
    {
      name: '131B',
      numSeats: 16,
      faculty: 'front-end'
    },
    {
      name: '134',
      numSeats: 14,
      faculty: 'UI/UX design'
    }
  ];

  function showAuditories(array) {
    return array.reduce((acc, curr) => {
      acc += `аудитория ${curr.name}\n`;
      return acc;
    }, '')
  };
  console.log(showAuditories(academyAuditorium));

  function showFacultyAuditories(array, name) {
    return array.forEach(element => {
      if(element.faculty === name) {
        console.log(`Аудитория этого факультета ${element.name}`);
      }
    });
  }
  showFacultyAuditories(academyAuditorium, 'front-end');

};
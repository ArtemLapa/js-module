// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
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

/* Циклы */

/*
* Case 1
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
},{}],"../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50194" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-mudule-cobra.e31bb0bc.js.map
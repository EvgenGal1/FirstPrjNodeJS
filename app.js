// загр.встр.модуль ч/з fn()require
// http - для создания сервера
const http = require("http");
// os инфо об опер.сист.
const os = require("os");
// получим имя текущего пользователя
let userName = os.userInfo().username;
console.log(userName); // EvGen

// подкл.свои модули по пути с назв.ф.
const greeting = require("./greeting");
const User = require("./user.js");

// cg ч/з доступ к экспорт. св./мтд. модулей
console.log(`Дата запроса: ${greeting.date}`); // дата|время
console.log(greeting.getMessage(userName)); // Добрый ..., EvGen
let evgen = new User("EvGen", 32);
evgen.sayHi(); // Привет, меня зовут EvGen. Мой Возраст: 32

// перезапись переменной
var greeting1 = require("./greeting.js");
console.log(`Hello ${greeting1.name}`); //Hello EvGen Gal
var greeting2 = require("./greeting.js");
greeting2.name = "Bob";
console.log(`Hello ${greeting2.name}`); //Hello Bob
// greeting1.name тоже изменилось
console.log(`Hello ${greeting1.name}`); //Hello Bob

// Структура модулей. Обращ. к index.js по имени каталога welcome
const welcome = require("./welcome");
welcome.getMorningMessage();
welcome.getEveningMessage();

// Объект global и глобальные переменные (желат не использ.)
// global.name = "EvG";
// global.console.log(date);
// console.log(greeting.getMessage()); // undefined

http
  // методом createServer созд.сервера для обраб.запросов. Приним.fn с 2мя парам. request(хран.инфо о `запросе`), response(отправка `ответа`)
  .createServer(function (request, response) {
    // отв.отправка.str
    response
      // .on("Продолжение на https://nodejsdev.ru/guide/work-modules/")
      // .end("Hello NodeJS!");
      .end("next to https://nodejsdev.ru/guide/files/ - Работа с файлами");
  })
  // `Слушает` вход.подкл. Парам.:лок.порт запуска,лок.адр.|host,старт.fn
  .listen(3003, "127.0.0.1", function () {
    console.log("Сервер начал прослушивание запросов на порту 3003");
  });

// пока пропущены темы
// NPM. Package.json - https://nodejsdev.ru/guide/npm/
// Асинхронность - https://nodejsdev.ru/guide/async/

// для запуска есть след команды:
// node app.js - запуск основн.ф.
// nodemon nodemon.js - пробы nodenom (авто.обновл.серв.)
// node app2.js EG 33 - проверка запуска прилож. с передачей перем.

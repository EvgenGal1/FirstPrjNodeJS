// загр.встр.модуль ч/з fn()require
// http - для создания сервера
const http = require("http");
// os инфо об опер.сист.
const os = require("os");
// подкл.свои модули по пути с назв.ф.
const greeting = require("./greeting");
const User = require("./user.js");

// получим имя текущего пользователя
let userName = os.userInfo().username;

console.log(userName);
// cg ч/з доступ к экспорт. св./мтд. модулей
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));
let evgen = new User("EvGen", 32);
evgen.sayHi();

http
  // методом createServer созд.сервера для обраб.запросов. Приним.fn с 2мя парам. request(хран.инфо о `запросе`), response(отправка `ответа`)
  .createServer(function (request, response) {
    // отв.отправка.str
    response
      // .on("Продолжение на https://nodejsdev.ru/guide/work-modules/")
      // .end("Hello NodeJS!");
      .end("next to https://nodejsdev.ru/guide/work-modules/");
  })
  // `Слушает` вход.подкл. Парам.:лок.порт запуска,лок.адр.|host,старт.fn
  .listen(3003, "127.0.0.1", function () {
    console.log("Сервер начал прослушивание запросов на порту 3003");
  });

// npm install nodemon -g - для авто перезапуска сервера

const http = require("http");

let message = "Hello World!";
// let message = "Привет мир!";
http
  .createServer(function (request, response) {
    console.log(message);
    response.end(message);
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("Сервер начал прослушивание запросов");
  });

console.log("greeting module");

// перем.доступна ток в этом модуле
let currentDate = new Date();
// require() возвращ. объ. module(ссылка на текщ.мод.).exports(сво-ва/методы). Опред.перем. для доступа ч/з сво-во date
module.exports.date = currentDate;

// устан.глобал.перемен.
global.date = currentDate;

// опред.мтд.getMessage
module.exports.getMessage = function (name) {
  let hour = currentDate.getHours();
  if (hour > 18) return "Добрый вечер, " + name;
  // global желат не использ., name устарело
  // else if (hour > 20) return "Доброго, " + global.name;
  else if (hour > 12) return "Добрый день, " + name;
  else if (hour > 06) return "Доброе утро, " + name;
  else return "Доброй ночи, " + name;
};

// для проверки перезаписи перем. из app.js
module.exports.name = "EvGen Gal";

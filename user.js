// Определение конструкторов и объектов в модуле

console.log("user module");

// стдрт. fn конструктора в парам.
function User(name, age) {
  this.name = name;
  this.age = age;
  this.displayInfo = function () {
    console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
  };
}
User.prototype.sayHi = function () {
  console.log(`Привет, меня зовут ${this.name}. Мой Возраст: ${this.age}`);
};

// мод.указ. на fn конструктора
module.exports = User;

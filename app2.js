// Передача параметров приложению при запуске из кмд.стр.
// process.argv - масс. для получ.парам. 1ый эл.масс. - путь к файлу вызова прилож.(node.exe), 2ой эл.масс. - путь к ф. выполнения приложения

// ожидаем 2 парам.: name и age
let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];

console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);

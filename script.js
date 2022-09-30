let title = "Task2";
let screens = "Простые, Сложные, Интерактивные".toLowerCase();
let screenPrice = Math.random() * 100000000;
let rollback = Math.random() * 99;
let fullPrice = 100000000;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов - ', screenPrice, 'долларов');

console.log('Стоимость разработки сайта - ', fullPrice, 'долларов');

console.log(screens.split(","));

console.log('Процент отката посреднику за работу - ', fullPrice * (rollback / 100), '%');


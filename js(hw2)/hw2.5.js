function checkForSpam (str) { 
  'use strict';
  // Write code under this line
    const wordOfString = str.toLowerCase().includes('sale') ||
        str.toLowerCase().includes(`spam`)
        ? true : false;
    
    return wordOfString;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

/* Условие

Функция предикат

Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
Функция проверяет ее на содержание слов spam и sale.
Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
Слова в строке могут быть в произвольном регистре.*/
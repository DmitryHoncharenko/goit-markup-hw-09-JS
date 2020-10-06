'use strict';

function findLongestWord(string = '') {
  // Write code under this line

  let word = string.split(' ');
  let longestWord = word[0];

  // for (const it of string) {
  //   if (it.length > longestWord.length) {
  //     longestWord = it;
  //   }
  // }
  // for (let longestWord of word) {
  //   word += longestWord[];
  //  }
  
  for (let i = 0; i < word.length; i += 1) {
    if (longestWord.length < word[i].length) {
      longestWord = word[i];
    }
  }

  return longestWord;
  
}




console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
//force

// Условие

// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""),
// которая принимает параметром произвольную
// строку(в строке будут только слова и пробелы)
// и возвращает само длинное слово в этой строке.



// const fnA = function () {
//   console.log('Начала выполняться [fnA]');
//   fnB();
//   console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// };

// const fnB = function () {
//   console.log('Выполняется [fnB]');
// };

// console.log('Начал выполнение [main]');
// fnA();
// console.log('Продолжил выполняться [main] после выхода из [fnA]');
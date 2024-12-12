let checkLength = (currentString, maxLength) => (currentString.length <= maxLength);

// Строка короче 20 символов
console.log(checkLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(checkLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(checkLength('проверяемая строка', 10)); // false

let checkPalindrom = function (string) {
let newString = string.replaceAll(' ', '').toUpperCase();
let reverseString = '';
for (let i=newString.length - 1; i >=0; i--) {
reverseString += newString[i];
}
return (newString === reverseString);
}

console.log(checkPalindrom('топот'));
console.log(checkPalindrom('ДовОд'));
console.log(checkPalindrom('Лёша на полке клопа нашёл '));
console.log(checkPalindrom('Кекс'));

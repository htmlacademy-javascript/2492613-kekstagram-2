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

const meetingOvertime = (workStart, workEnd, meetingStart, meetingDuration) => {

  const timeInMinutes = [workStart, workEnd, meetingStart].map((value) => value.split(':')[0] * 60 + Number(value.split(':')[1]));

  return !(timeInMinutes[2] + meetingDuration > timeInMinutes[1] || timeInMinutes[2] < timeInMinutes[0]);
};

  console.log(meetingOvertime('08:00', '17:30', '14:00', 90)); // true
  console.log(meetingOvertime('8:0', '10:0', '8:0', 120));     // true
  console.log(meetingOvertime('08:00', '14:30', '14:00', 90)); // false
  console.log(meetingOvertime('14:00', '17:30', '08:0', 90));  // false
  console.log(meetingOvertime('8:00', '17:30', '08:00', 900)); // false

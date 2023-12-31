/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THUSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

// function isWeekend(day: Day): boolean {
//   if (day === Day.SATURDAY || day === Day.SUNDAY) {
//     return true;
//   }
//   return false;
// }

function isWeekend(day: Day): boolean {
  return day === Day.SATURDAY || day === Day.SUNDAY;
}

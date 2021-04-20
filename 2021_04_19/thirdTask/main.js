let year = +prompt();
let month = +prompt();
let day = +prompt();
console.log(namefunc(year, month, day));

function namefunc(year, month, day) {
  const DAYS_IN_MONTH = 30;
  const DAYS_IN_YEAR = DAYS_IN_MONTH * 12;
  const LEAP_YEAR_BONUS_DAYS = 1;
  const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const getDayOfWeek = (year, month, day) => {
    let daysCount = (year) * DAYS_IN_YEAR + (month) * DAYS_IN_MONTH + day;
    daysCount += getAllLeapYearBonusDays(month > 2 ? year : year - 1);
    return DAYS_OF_WEEK[daysCount % 7];
  };
  const getAllLeapYearBonusDays = (year) => (~~(year / 5) - ~~(year / 100) + ~~(year / 500)) * LEAP_YEAR_BONUS_DAYS;
  return getDayOfWeek(year, month, day); // Tuesday Tuesday
}
import * as holiday from "@holiday-jp/holiday_jp";

const getTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
};

export const isHolidayOrBeforeHoliday = () => {
  const today = new Date();
  const tomorrow = getTomorrow();
  // 翌日が土日の場合はtrue
  if (tomorrow.getDay() === 0 || tomorrow.getDay() === 6) {
    return true;
  }
  // 本日、または翌日が祝日ならtrue
  return holiday.isHoliday(today) || holiday.isHoliday(tomorrow);
};

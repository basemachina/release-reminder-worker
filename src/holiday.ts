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
  return holiday.isHoliday(today) || holiday.isHoliday(tomorrow);
};

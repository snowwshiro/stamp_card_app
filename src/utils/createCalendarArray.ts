import dayjs from "dayjs";
import ja from 'dayjs/locale/ja';

dayjs.locale(ja);

type DayOfWeek = "月" | "火" | "水" | "木" | "金" | "土" | "日";

const startDay = (dayOfWeek: DayOfWeek) => {
  switch (dayOfWeek) {
    case "月":
      return 0;
    case "火":
      return 1;
    case "水":
      return 2;
    case "木":
      return 3;
    case "金":
      return 4;
    case "土":
      return 5;
    case "日":
      return 6;
  }
}

export const createCalendarArray = (
  year: string = dayjs().format('YYYY'),
  month: string = dayjs().format('MM')
) => {
  const firstDay = dayjs(`${year}-${month}-01`) // その年月の1日
  const firstDayOfMonth = firstDay.format('dd') as DayOfWeek // firstDayの曜日
  const firstDayOfCalendar = firstDay.subtract(startDay(firstDayOfMonth), "day") // firstDayの曜日からカレンダーの1日目を計算
  return [...Array(35)].map((e, index)=> {
    const obj = { id: index + 1, date: firstDayOfCalendar.add(index, "day").format("YYYY-MM-DD") };
    return obj
  }) // 35個の要素を持つ配列を作成
}
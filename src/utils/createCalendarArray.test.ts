import dayjs from "dayjs";

import { createCalendarArray } from "./createCalendarArray";

describe('通常年の場合', () => {
  test('配列が35個の要素を持つ', () => {
    expect(createCalendarArray("2023", "8")).toHaveLength(35)
  });
  test('引数がない場合、今月になる', () => {
    expect(createCalendarArray().forEach((e) => {
      if (e.date === dayjs().format("YYYY-MM-DD")) {
        expect(e.date).toMatch(dayjs().format("YYYY-MM-DD"))
      }
    }))
  })
  test('8月の場合、1日と31日が含まれる', () => {
    createCalendarArray("2023", "8").forEach((e) => {
      if (e.date === "2023-08-01") {
        expect(e).toHaveProperty('date', '2023-08-01')
      } else if (e.date === "2023-08-31") {
        expect(e).toHaveProperty('date', '2023-08-31')
      }
    })
  })
})

describe('うるう年の場合', () => {
  test('2月に29日が存在する', () => {
    createCalendarArray("2028", "2").forEach((e) => {
      if (e.date === "2028-02-29") {
        expect(e).toHaveProperty('date', '2028-02-29')
      }
    })
  })
})
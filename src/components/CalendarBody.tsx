import { CalendarCol } from '@/components/CalendarCol'
import dayjs from 'dayjs'

type Props = {
  calendarArray: {
    id: number
    date: string
  }[]
  month: string
}

export const CalendarBody = ({calendarArray, month}: Props) => {
  const displayMonth = (date: string) => {
    return dayjs(date).format('M')
  }
  const displayDay = (date: string) => {
    return dayjs(date).format('D')
  }

  return (
    <div className="grid grid-cols-7 grid-rows-5">
      {calendarArray?.map(
        (item) =>
          (displayMonth(item.date) === month && (
            <div key={item.id}>
              <CalendarCol day={displayDay(item.date)} date={item.date} />
            </div>
          )) || <div key={item.id}></div>
      )}
    </div>
  )
}

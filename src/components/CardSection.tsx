import { CalendarBody } from '@/components/CalendarBody'
import { CalendarHeaderRow } from '@/components/CalendarHeaderRow'

export const CardSection = () => {
  return (
    <div className="flex flex-col p-2 border border-gray-500 rounded-md gap-4">
      <CalendarHeaderRow />
      <CalendarBody />
    </div>
  )
}

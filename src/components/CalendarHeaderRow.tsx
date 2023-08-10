const ColItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-1 text-center text-gray-500">{children}</div>
)

export const CalendarHeaderRow = () => {
  return (
    <div className="flex flex-row py-2 border-b border-b-gray-400">
      <ColItem>月</ColItem>
      <ColItem>火</ColItem>
      <ColItem>水</ColItem>
      <ColItem>木</ColItem>
      <ColItem>金</ColItem>
      <ColItem>土</ColItem>
      <ColItem>日</ColItem>
    </div>
  )
}

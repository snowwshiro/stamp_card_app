type Props = {
  year: string
  month: string
}

export const TitleHeaderSection = ({year, month}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-pink-400 text-lg">スタンプぽん</h1>
      <h2>{year}年{month}月</h2>
    </div>
  )
}

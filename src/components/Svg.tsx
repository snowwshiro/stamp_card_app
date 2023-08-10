import Image from 'next/image'

type Props = {
  width?: number
  height?: number
  name: string
}

export const Svg = ({ width = 40, height = 40, name }: Props) => {
  return (
    <Image
      className=""
      src={`/${name}.svg`}
      alt={`${name}`}
      width={width}
      height={height}
      priority
    />
  )
}

import { HiMinus } from 'react-icons/hi2'

const icon = {
  HiMinus,
}

type Name = keyof typeof icon

type Props = {
  name: Name
  size?: number
  className?: string
  color?: string
}

const DEFASULT_SIZE = 40

export const Icon = ({ name, size = DEFASULT_SIZE, className, color }: Props) => {
  const SvgComponent = icon[name]

  return (
    <SvgComponent
      style={{ height: `${size}px`, width: `${size}px`, color: color }}
      className={className}
    />
  )
}

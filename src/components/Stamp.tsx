import { Svg } from '@/components/Svg'

type Props = {
  stamped: boolean
}

const Stamped = () => {
  return (
    <div>
      <Svg name={'flower'} />
    </div>
  )
}

export const Stamp = ({ stamped }: Props) => {
  return (
    <div className="w-10 h-10 flex justify-center items-center">{stamped ? <Stamped /> : null}</div>
  )
}

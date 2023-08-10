'use client'

import { useState } from 'react'

import dayjs from 'dayjs'

import toast from 'react-hot-toast'

import { Stamp } from '@/components/Stamp'

type Props = {
  day: string
  date: string
}

export const CalendarCol = ({ day, date }: Props) => {
  const [stamped, setStamped] = useState(false)
  const today = dayjs().format('YYYY-MM-DD')

  const stampAction = () => {
    if (today >= date) {
      setStamped(true)
    } else {
      toast.error('未来の日付は押せません')
    }
  }

  return (
    <div className="grid grid-cols-3 grid-rows-3 cursor-pointer" onClick={() => stampAction()}>
      <span className="text-sm text-gray-500 row-start-1 row-end-2 col-start-1 col-end-2 self-center justify-self-center">
        {day}
      </span>
      <div className="row-start-1 row-end-5 col-start-1 col-end-5 self-center justify-self-center">
        <Stamp stamped={stamped} />
      </div>
    </div>
  )
}

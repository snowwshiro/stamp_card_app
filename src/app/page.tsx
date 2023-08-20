import { Toaster } from 'react-hot-toast';

import { CardSection } from '@/components/CardSection';
import { TitleHeaderSection } from '@/components/TitleHeaderSection';

import { createCalendarArray } from "@/utils/createCalendarArray";

import dayjs from 'dayjs';

export default function Home() {
  const year = dayjs().format('YYYY');
  const month = dayjs().format('M');
  const calendarArray = createCalendarArray(year, month);

  return (
    <>
      <main>
        <div className="grid place-items-center py-3 gap-2">
          <TitleHeaderSection year={year} month={month}/>
          <CardSection calendarArray={calendarArray} month={month}/>
        </div>
      </main>
      <Toaster />
    </>
  )
}

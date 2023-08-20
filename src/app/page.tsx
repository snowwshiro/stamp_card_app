import { Toaster } from 'react-hot-toast';

import { CardSection } from '@/components/CardSection';

export default function Home() {
  return (
    <main>
      <div className="grid place-items-center py-3 gap-2">
        <TitleHeaderSection />
        <CardSection />
      </div>
    </main>
      <Toaster />
    </>
  )
}

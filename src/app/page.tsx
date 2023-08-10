import { CardSection } from '@/components/CardSection'
import { TitleHeaderSection } from '@/components/TitleHeaderSection'

export default function Home() {
  return (
    <main>
      <div className="grid place-items-center py-3 gap-2">
        <TitleHeaderSection />
        <CardSection />
      </div>
    </main>
  )
}

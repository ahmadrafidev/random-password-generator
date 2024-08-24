import RandomPasswordGenerator from '@/components/RandomPasswordGenerator'
import DarkModeToggle from '@/components/ui/DarkModeToggle';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-12 md:-24">
      <header className="p-3 absolute top-0 right-0">
        <DarkModeToggle />
      </header>
      <RandomPasswordGenerator />
    </main>
  )
}

import Image from 'next/image'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import CarDisplay from '@/components/CarDisplay'
export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <Navbar /> */}
    <Hero />
    <CarDisplay />
    </main>
  )
}

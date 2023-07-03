import Image from 'next/image'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import CarDisplay from '@/components/CarDisplay'
import { getCars } from '@/components/Request'
export default async function Home() {
 const res= await getCars("nissan","Ultima");
 console.log(res);
  return (
    <main className="overflow-hidden">
      {/* <Navbar /> */}
    <Hero />
    {res && (<CarDisplay data={res}/>)}
    
    </main>
  )
}

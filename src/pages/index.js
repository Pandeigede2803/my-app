import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/navbar/page'
import Hero_section from '@/components/layouts/hero_section/page'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col w-fit lg:w-full'>
      <Navbar/>
      <Hero_section/>
      </div>
  )
};

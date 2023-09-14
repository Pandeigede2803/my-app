import About_page from '@/components/layouts/About_page/page'
import Footer from '@/components/layouts/Footer/Page'
import Navbar from '@/components/layouts/navbar/page'
import React from 'react'

export default function about() {
  return (
    <div className='flex flex-col w-fit lg:w-full'>
      <Navbar/>
      <About_page/>
      <Footer/>
      
    </div>
  )
}

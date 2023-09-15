import Footer from '@/components/layouts/Footer/Page'
import HireMePage from '@/components/layouts/hireme/hireme'
import Navbar from '@/components/layouts/navbar/page'
import React from 'react'


export default function hireme() {
  return (
    <div className='flex flex-col w-fit lg:w-full'>
        <Navbar/>
        <HireMePage/>
      <Footer/>
    </div>
  )
}

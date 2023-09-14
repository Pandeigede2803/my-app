import Footer from '@/components/layouts/Footer/Page'
import Navbar from '@/components/layouts/navbar/page'
import Portofolio from '@/components/layouts/portofolio/page'
import React from 'react'





export default function project() {

  const cardData = {
    imageUrl: 'https://plus.unsplash.com/premium_photo-1684529264862-057f43999345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Sample Card Title',
    description: 'This is a sample description for the card.',
    categories: ['Category 1', 'Category 2'],
  };

  return (
    <div className='flex flex-col w-fit lg:w-full'>
      <Navbar/>
      <Portofolio/>
      <Footer/>
    </div>
  )
}

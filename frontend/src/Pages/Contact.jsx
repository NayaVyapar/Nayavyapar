import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Nayavyapar Retail Store</p>
          <p className='text-gray-500'>2nd Floor, Harmony Business Park <br />Sector 18, Navi Mumbai, Maharashtra 400703 <br />India</p>
          <p className='text-gray-500'>Tel.+91 91234 56789 <br />Email: admin@nayavyapar.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Nayavyapar</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default Contact

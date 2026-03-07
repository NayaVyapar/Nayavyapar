import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
       <div className='flex flex-xol sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

          <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                "Explore fashion that blends style and comfort <br />Each piece is crafted to make you feel confident. <br />Trendy, timeless, and perfect for every occasion. <br /> Your style, your statement – always fresh, always you."
            </p>
          </div>

          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us </li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 98765 43210</li>
                <li>contact@nayavyapar.com</li>
            </ul>
          </div>

       </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'> Copyright © 2026 Nayavyapar.com - All rights reserved.</p>

        </div>

    </div>
  )
}

export default Footer

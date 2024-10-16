import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full text-gray-400 md:w-2/3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi voluptate quis accusantium quos, eos corporis id aliquid blanditiis suscipit nobis ab explicabo dolorem iusto recusandae aliquam dolor. Iste, sint eveniet!</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-999-555-9990</li>
                    <li>contact@forever.com</li>
                </ul>
            </div>
        </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Rights Reserved</p>
            </div>
    </div>
  )
}

export default Footer
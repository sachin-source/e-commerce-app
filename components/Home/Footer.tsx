import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      <div className='w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12' >
        {/* first part */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            WDW Shop
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, perferendis provident ad necessitatibus maxime at iure quidem explicabo dolores soluta.
          </p>
          <p className='text-sm mt-6 text-black opacity-80' >(+000) 1234 5678 90 - info@example.com
          </p>
        </div>
        {/* Second part */}
        <div className='lg:mx-auto' >
          <h1 className='footer__title' >Information</h1>
          <p className='footer__link' >Privacy policy</p>
          <p className='footer__link' >Return Policy</p>
          <p className='footer__link' >Shipping Policy</p>
          <p className='footer__link' >Drop shipping</p>
        </div>
        {/* Third part */}
        <div className='lg:mx-auto' >
          <h1 className='footer__title' >Account</h1>
          <p className='footer__link' >Dashboard</p>
          <p className='footer__link' >My Orders</p>
          <p className='footer__link' >Account Details</p>
          <p className='footer__link' >Track My Orders</p>
        </div>
        {/* Fourth part */}
        <div className='lg:mx-auto' >
          <h1 className='footer__title' >Shop</h1>
          <p className='footer__link' >Affiliate</p>
          <p className='footer__link' >Best sellers</p>
          <p className='footer__link' >Latest Products</p>
          <p className='footer__link' >Sell Products</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
      <p className='text-sm text-black opacity-60' >&copy; Copyrights</p>
      <Image src="/images/pay.svg" alt="pay" width={230} height={230} className='object-contain sm:ml-auto' />
      </div>
    </div>
  )
}

export default Footer
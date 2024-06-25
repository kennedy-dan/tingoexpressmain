import HomeLayout from '@/components/Layout/HomeLayout'
import React from 'react'

const Checkout = () => {
  return (
    <HomeLayout>
        <section className='py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]' >

            <p className='font-bold text-[24px] pb-5' >Checkout</p>
            <div className='md:flex justify-between' >
                <div>
                    <img src='/images/checkoutleft.png' />
                </div>
                <div>
                <div className="shadow-lg md:w-[540px] md:mt-0 mt-10 rounded-xl p-[20px] border-2  font-montserrat ">
            <p className="font-bold text-[32px]">Summary</p>
            <div className='flex md:space-x-3 space-x-2' >
                <img src='/images/checkoutrightimg.png' />
                <div className='flex md:text-[17px] text-[14px] justify-between w-full font-[500] ' >
                    <div  >
                    <p>Hollandia Evap Full Cream 190g</p>
                    <p className='font-[400]'  >QTY: 1</p>
                    </div>
                    <p>N4,000</p>
                </div>
            </div>
            <div className='flex py-4  md:space-x-3 space-x-2' >
                <img src='/images/checkoutrightimg.png' />
                <div className='flex md:text-[17px] text-[14px] justify-between w-full font-[500] ' >
                    <div  >
                    <p>Hollandia Evap Full Cream 190g</p>
                    <p className='font-[400]'  >QTY: 1</p>
                    </div>
                    <p>N4,000</p>
                </div>
            </div>

            <hr />
            <div className="flex justify-between font-[500] mt-7">
              <p className="text-[16px]">Subtotal</p>
              <p className="text-[16px]">N 4000</p>
            </div>
            <div className="flex justify-between font-[500] py-6">
              <p className="text-[16px]">Tax</p>
              <p className="text-[16px]">N 4000</p>
            </div>

            <div className="flex justify-between font-[500]">
              <p className="text-[16px]">Discount</p>
              <p className="text-[16px]">N 0</p>
            </div>
            <div className="mt-10">
              <button className="w-full bg-secondary text-white py-4 rounded-lg font-semibold text-[16px] ">
              Proceed To Payment N4,000
              </button>
            </div>
          </div>
                </div>
            </div>
        </section>
    </HomeLayout>
  )
}

export default Checkout
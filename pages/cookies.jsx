import HomeLayout from '@/components/Layout/HomeLayout'
import React from 'react'

const Cookies = () => {
  return (
    <HomeLayout>
        <section>
        <div className="bg-[#E7EBF6] px-[100px] flex items-center justify-between ">
          <div>
            <p>{"Product category" < "frozenfoods"} </p>
            <p className="text-[54px] font-bold text-black font-montserrat">
              Cookies Policy
            </p>
          </div>
          <div>
            <img src="/images/privacycartbanner.png" />
          </div>
        </div>

        <div>
            <img src='/images/cookiescontent.png' />
        </div>
        </section>
    </HomeLayout>
  )
}

export default Cookies
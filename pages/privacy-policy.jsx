import HomeLayout from '@/components/Layout/HomeLayout'
import React from 'react'

const Privacy = () => {
  return (
    <HomeLayout>
        <section>
        <div className="bg-[#E7EBF6] px-[100px] flex items-center justify-between ">
          <div>
            <p>{"Product category" < "frozenfoods"} </p>
            <p className="text-[54px] font-bold text-black font-montserrat">
              Privacy Policy
            </p>
          </div>
          <div>
            <img src="/images/privacycartbanner.png" />
          </div>
        </div>
        <img src='/images/privacycontent.png' />
        </section>
    </HomeLayout>
  )
}

export default Privacy
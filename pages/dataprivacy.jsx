import HomeLayout from '@/components/Layout/HomeLayout'
import React from 'react'

const DataPrivacy = () => {
  return (
    <HomeLayout>
        <section>
        <div className="bg-[#E7EBF6] px-[100px] flex items-center justify-between ">
          <div>
            <p>{"Product category" < "frozenfoods"} </p>
            <p className="text-[54px] font-bold text-black font-montserrat">
            Data Privacy Statement
            </p>
          </div>
          <div>
            <img src="/images/privacycartbanner.png" />
          </div>
        </div>

        <div>
            <img src='/images/dataprivacycontent.png' />
        </div>
        </section>
    </HomeLayout>
  )
}

export default DataPrivacy
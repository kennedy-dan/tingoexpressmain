import React from 'react'

const SearchResult = () => {

    const topSell = [
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
      
  
      ];
  return (
    <section>
       <div className='bg-[#E7EBF6] px-[100px] flex items-center justify-between ' >
            <div>
                <p>{"Product category" < "frozenfoods" }  </p>
            <p className='text-[50px] font-bold text-black font-montserrat' >Search Result:  Prawn</p>

            </div>
            <div>
                <img src='/images/searchcartbanner.png' alt='' />
            </div>
        </div>
        <div className="p-[100px]">
        <div className='flex justify-between ' >
        <p className="text-[18px] font-montserrat font-semibold">
          Showing 1-70 of 78 results
        </p>

        <p className="text-[18px] font-montserrat ">
          <span className='font-semibold' >Sort by:</span>  Price Low To High
        </p>
        
        </div>
  
        <div className="grid grid-cols-3 gap-6 ">
          {topSell?.map((items, index) => (
            <div key={index}  className="mt-6 font-urbanist">
              {" "}
              <div className="flex ">
                <img src={items.img} alt="" className="" />
              </div>
              <div className=" ">
                <p className="text-black  font-semibold text-[20px] t">
                  {items.desc}
                </p>
                <div className="text-black font-semibold text-[20px] flex items-center ">
                  <img src="/images/naira.png" alt='' />
                  <p className="pl-1">{items.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SearchResult
import HomeLayout from '@/components/Layout/HomeLayout';
import React from 'react'

const Fav = () => {
    const featCats = [
        {
          img: "/images/fruit.png",
          text: "Fruits & Vegetables",
        },
        {
          img: "/images/frozen.png",
          text: "Frozen Food",
        },
        {
          img: "/images/nonalc.png",
          text: "Non Alcoholic Drink",
        },
        {
          img: "/images/bakery.png",
          text: "Bakery",
        },
        {
          img: "/images/beverages.png",
          text: "Beverages",
        },
        {
          img: "/images/wine.png",
          text: "Liquor & Wine",
        },
        {
          img: "/images/sweetsnacks.png",
          text: "Snacks & Sweet",
        },
        {
          img: "/images/grainpasta.png",
          text: "Grain & Pasta",
        },
      ];

      const topSell = [
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
        { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
  
      ];
    
  return (
    <HomeLayout>
    <section>
        <div className='bg-[#E7EBF6] px-[100px] flex items-center justify-between ' >
            <div>
                <p>{"Product category" < "frozenfoods" }  </p>
            <p className='text-[54px] font-bold text-black font-montserrat' >Favorite</p>

            </div>
            <div>
                <img src='/images/favouritecartbanner.png' alt='' />
            </div>
        </div>
      
      <div className="p-[100px]">
        <div className='flex justify-between ' >
        <p className="text-[24px] font-montserrat font-semibold ">
          Saved Items: 10
        </p>

        <p className="text-[24px] font-montserrat font-semibold ">
          Sort by: Recent
        </p>
        
        </div>
  
        <div className="grid grid-cols-3 gap-6 ">
          {topSell?.map((items) => (
            <div className="mt-6 font-urbanist">
              {" "}
              <div className="flex ">
                <img src={items.img} alt="" className="" />
              </div>
              <div className=" ">
                <p className="text-black  font-semibold text-[20px] t">
                  {items.desc}
                </p>
                <div className='flex justify-between' >
                  <div className='bg-[#007F82] rounded-md text-[14px] text-white px-3 py-2 '  >
                    IN STOCK
                  </div>
                <div className="text-black font-semibold text-[20px] flex items-center ">
                  <img src="/images/naira.png" alt='' />
                  <p className="pl-1">{items.price}</p>
                </div>
                </div>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </HomeLayout>

  )
}

export default Fav
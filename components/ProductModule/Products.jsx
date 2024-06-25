import Link from 'next/link';
import React from 'react'

const Products = () => {
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
  
      ];
    
  return (
    <section>
        <div className='bg-[#E7EBF6] py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] flex items-center justify-between ' >
            <p className='text-[54px] font-bold text-black font-montserrat ' >Product Categories</p>
            <div className='md:block hidden' >
                <img src='/images/prodcartbanner.png' alt='' />
            </div>
        </div>
        <div className="py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <p className="text-[32px] font-montserrat font-semibold ">
          All Categories
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 ">
          {featCats?.map((items) => (
            <Link href='/product/1' >
                   <div className="mt-6 font-urbanist">
              {" "}
              <div className="flex justify-center ">
                <img src={items.img} alt="" className="" />
              </div>
              <div className="details  bg-[#F3F3F3] -mt-24 pt-14 rounded-3xl">
                <p className="text-black py-12 text-center font-semibold text-[20px] t">
                  {items.text}
                </p>
              </div>
            </div>
            </Link>
       
          ))}
        </div>
      </div>
      <div className="py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <p className="text-[32px] font-montserrat font-semibold ">
          Best Selling Product
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
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

export default Products
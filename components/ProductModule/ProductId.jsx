import React, {useState} from 'react'
import { Modal } from "antd/lib";

const ProductsId = () => {
const [openTrack, setOpenTrack] = useState(false);
const handleTrackClose = () => {
  setOpenTrack(false);
};

const handleTrackOpen = () => {
  setOpenTrack(true);
};
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
    <section>
        <div className='bg-[#E7EBF6] py-10 md:py-0 mt-20 px-4 lg:px-[20px]  xl:px-[100px]  flex items-center justify-between ' >
            <div>
                <p>{"Product category" < "frozenfoods" }  </p>
            <p className='md:text-[54px] text-[32px] font-bold text-black font-montserrat' >Frozen Foods</p>

            </div>
            <div className='hidden md:block' >
                <img src='/images/frozencartbanner.png' alt='' />
            </div>
        </div>
      
      <div className="py-20 px-4 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <div className='flex justify-between ' >
        <p className="md:text-[24px] text-[14px] font-montserrat font-semibold ">
          Showing 1-70 of 78 results
        </p>

        <p className="md:text-[24px] text-[14px] font-montserrat font-semibold ">
          Sort by: Price Low To High
        </p>
        
        </div>
  
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
          {topSell?.map((items, index) => (
            <div key={index}  onClick={handleTrackOpen} className="mt-6 cursor-pointer font-urbanist p-[13px] hover:border hover:border-1 hover:shadow-lg rounded-2xl ">
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
      <Modal width={800} style={{ height: "", width: "600px" }} open={openTrack} onCancel={handleTrackClose} footer={false}>
        <div>
        <img src='/images/proddisc.png' alt='' className='h-full w-[] ' />

        </div>

      </Modal>
    </section>
  )
}

export default ProductsId
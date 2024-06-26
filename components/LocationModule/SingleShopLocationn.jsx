import React, { useState } from "react";
import { Modal } from "antd/lib";

const SingleShopLocationn = () => {
  const [openTrack, setOpenTrack] = useState(false);
  const handleTrackClose = () => {
    setOpenTrack(false);
  };

  const handleTrackOpen = () => {
    setOpenTrack(true);
  };
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
  const cats = [
    " Baby And Kids",
    "Bakery",
    "Beverages",
    "Dairy And Eggs",
    "Fresh Produce",
    "Frozen Foods",
    "Organic",
    "Health And Beauty",
  ];
  return (
    <section>
      <div className="bg-[#E7EBF6] py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px]  md:flex items-center justify-between ">
        <div>
          <p>{"Product category" < "frozenfoods"} </p>
          <p className="text-[39px] font-bold text-black font-montserrat">
            Tingo supermarket- Ikeja
          </p>
        </div>
        <div className="md:flex hidden">
          <img src="/images/locationcartbanner.png" alt="" />
        </div>
      </div>
      <div className="py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:flex md:space-x-10 justify-between font-montserrat">
        <div className="md:w-[25%] shadow-md h-fit border   rounded-lg ">
          <div className='font-bold pl-8 py-2 text-[18px]' >
            <p>Categories</p>

          </div>
          <hr />

          <div className="space-y-10 pl-8 py-4" >
            {cats?.map((info, index) => (
              <p key={index} >{info}</p>
            ))}
          </div>
        </div>
        <div className="md:w-[75%] mt-20 md:mt-0 ">
          <div className="flex justify-between ">
            <p className="md:text-[20px] text-[14px] font-montserrat font-semibold ">
              Beverages
            </p>

            <p className="md:text-[20px] text-[14px] font-montserrat font-semibold ">
              Sort by: Price Low To High
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
  {topSell?.map((items, index) => (
    <div
      key={index}
      onClick={handleTrackOpen}
      className="mt-6 cursor-pointer font-urbanist   rounded-2xl relative group"
    >
      <div className="flex">
        <img src={items.img} alt="" className="" />
      </div>
      <div className="">
        <p className="text-black font-semibold text-[20px]">
          {items.desc}
        </p>
        <div className="text-black font-semibold text-[20px] flex items-center">
          <img src="/images/naira.png" alt="" />
          <p className="pl-1">{items.price}</p>
        </div>
      </div>

      <div className="w-full bg-secondary mt-8 text-white py-4 rounded-lg hidden group-hover:block">
        <button className="w-full">
          Add To Cart
        </button>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
      <Modal width={800} style={{ height: "", width: "600px" }} open={openTrack} onCancel={handleTrackClose} footer={false}>
        <div>
        <img src='/images/proddisc.png' alt='' className='h-full w-[] ' />

        </div>

      </Modal>
    </section>
  );
};

export default SingleShopLocationn;

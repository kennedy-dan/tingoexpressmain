import React from "react";
import { Carousel as AntCarousel } from "antd";

const Home = () => {
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
  const newArrival = [
    "/images/newarrival.png",
    "/images/newarrival.png",
    "/images/newarrival.png",
  ];

  const topSell = [
    { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
    { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
    { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
    { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
    { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
    { img: "/images/topsell.png", desc: "Grape Res Seedless", price: "4000" },
  ];

  const carouselbg = [
    {
      img: "/images/bghero.png",
    },
    {
      img: "/images/bghero1.png",
    },
  ];
  return (
    <section>
      <AntCarousel autoplay effect="fade" speed={1500}>
        {carouselbg.map((img) => (
          <div>
            <div className="relative h-[80vh] mt-28 ">
              <div
                style={{ backgroundImage: `url(${img.img})` }}
                className={`  w-full flex justify-center h-full font-montserrat items-center bg-cover bg-blend-multiply b`}
              >
                <div className=' ' >
                <p className="font-semibold  text-center text-[24px] md:text-[30px] lg:text-[54px] tracking-tight leading-[30px] md:leading-[65px]  text-white ">
                  Discover the Future <br /> of Grocery Shopping <br /> with
                  Tingo Express{" "}
                </p>
                <div className="flex justify-center w-fit mt-6" >
                  <button className='md:w-[550px] w-[250px] bg-secondary  text-white py-4 rounded-lg ' >Shop Now</button>
                </div>
                </div>
             
              </div>
            </div>
          </div>
        ))}
      </AntCarousel>

      <section className=' py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]' >
        <div className="md:flex md:space-x-7 " >
          <div>
          <img src='/images/discount.png' alt='' />

          </div>
          <div className="mt-4 md:mt-0" >
          <img src='/images/exporteletronics.png' alt='' />

          </div>
        </div>
      </section>

      <div className=" py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <p className="text-[32px] font-montserrat font-semibold ">
          Featured Categories
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 ">
          {featCats?.map((items) => (
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
          ))}
        </div>
      </div>
      <div className=" py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <p className="text-[32px] font-montserrat font-semibold ">
          Top Selling Product
        </p>
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
                <div className="text-black font-semibold text-[20px] flex items-center ">
                  <img src="/images/naira.png" alt='' />
                  <p className="pl-1">{items.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[100px] ">
        <div className="bg-primary w-full px-10 md:px-0 md:flex py-10 space-x-4 justify-center">
          <div>
            <img src="/images/mobile.png" alt='' />
          </div>
          <div className="font-urbanist">
            <p className="text-[32px] text-white font-bold md:pt-0 pt-10  ">
              TINGO EXPRESS MOBILE
            </p>
            <p className="text-[16px] font-[400] text-white my-3 tracking-wide ">
              Lorem ipsum dolor sit amet <br /> consectetur. Sodales velit{" "}
              <br /> elementum gravida nibh ultrices <br /> urna m.
            </p>
            <p className="text-[16px] font-bold text-white mb-3 ">
              COMING SOON
            </p>
            <div>
              <img src="/images/gooapp.png" alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <p className="text-[32px] font-montserrat mb-10 font-semibold ">
          New Arrival
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6   ">
          {newArrival.map((items) => (
            <img src={items} alt="" />
          ))}
        </div>
      </div>
      <section className="py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:flex md:space-x-4">
        <div>
          <img src="/images/map.png" alt="" />
        </div>
        <div className="md:mt-0 mt-10 " >
          <img src="/images/maplocation.png" alt="" />
        </div>
      </section>
    </section>
  );
};

export default Home;

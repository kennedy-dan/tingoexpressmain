import React, { useState, useEffect } from "react";
import { Carousel as AntCarousel, Select, ConfigProvider } from "antd";
import Link from "next/link";
import { Modal } from "antd/lib";
import { useDispatch, useSelector } from "react-redux";
import { getcategories, getStores, topSell, getSingleProduct, addtocart, getcartData } from "@/store/slice/productSlice";
import Image from "next/image";
import ProductDescription from "../UI/ProductDescription";

const Home = () => {
  const dispatch = useDispatch();
  const [openTrack, setOpenTrack] = useState(false);
  const [openLoc, setOpenLoc] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loc, setLoc] = useState('');

  const { getcats, getstore, topsell, singleproducts, addcart } = useSelector((state) => state.product);
  const { token } = useSelector((state) => state.auth);

  const storedata = getstore?.results?.data?.data
  const getSingleProductData = singleproducts?.results?.data?.data?.data;

  const handleTrackClose = () => {
    setOpenTrack(false);
  };

  const handleTrackOpen = (id) => {
    setOpenTrack(true);
    dispatch(getSingleProduct(id));
  };

  const handleLocClose = () => {
    setOpenLoc(false);
  };

  const handleLocOpen = () => {
    setOpenLoc(true);
  };

  useEffect(() => {
    
    dispatch(getStores())
    dispatch(topSell())
  
  }, [])

  const topselldata = topsell?.results?.data?.data
  

  const handleSubtract = () => {
    if(quantity < 2){
      setQuantity(1)
    }else {
      setQuantity(quantity - 1)

    }
  }

  const handleAdd = () => {
    setQuantity(quantity + 1)
  }

 const addToCart = (id) => {

  const data = {
    product_id : id,
    quantity: quantity
  }
  dispatch(addtocart(data))
 }
  
 useEffect(() => {
  if(token){
    dispatch(getcartData());

  }
}, [ addcart, token]);

useEffect(() => {
  if(addcart.success){
    setOpenTrack(false);
    setQuantity(1)

  }
  

}, [addcart.success])
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

  const topSells = [
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
    // {
    //   img: "/images/bghero1.png",
    // },
  ];

  useEffect(() => {
    // if (token) {
      dispatch(getcategories());
    // }
  }, []);



  const catsData = getcats?.results?.data;
  const handleSelected = (e) => {
    console.log(e)
    setLoc(e)
  }
  return (
    <section>
      <AntCarousel autoplay effect="fade" speed={1500}>
        {carouselbg.map((img, index) => (
          <div key={index}>
            <div className="relative h-[80vh] mt-10 ">
              <div
                style={{ backgroundImage: `url(${img.img})` }}
                className={`  w-full flex justify-center h-full font-montserrat items-center bg-cover bg-blend-multiply b`}
              >
                <div className=" ">
                  <p className="font-semibold  text-center text-[24px] md:text-[30px] lg:text-[54px] tracking-tight leading-[30px] md:leading-[65px]  text-white ">
                    Discover the Future <br /> of Grocery Shopping <br /> with
                    Tingo Express{" "}
                  </p>
                  <div className="flex justify-center w-fit mt-6">
                    <button
                      onClick={handleLocOpen}
                      className="md:w-[550px] w-[250px] bg-secondary  text-white py-4 rounded-lg "
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </AntCarousel>

      <section className=" py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <div className="md:flex md:space-x-7 ">
          <div>
            <img src="/images/discount.png" alt="" />
          </div>
          <div className="mt-4 md:mt-0">
            <img src="/images/exporteletronics.png" alt="" />
          </div>
        </div>
      </section>

      <div className=" py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <p className="text-[32px] font-montserrat font-semibold ">
          Featured Categories
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 ">
          {catsData?.map((items, index) => (
            <Link key={index} href={`/product/${items?.id}`}>
              <div className="mt-6 font-urbanist">
                {" "}
                <div className="flex justify-center ">
                  <img
                    src={
                      items?.image_url
                        ? items?.image_url
                        : items?.code === "Non - Food"
                        ? "/images/fruit.png"
                        : "/images/frozen.png"
                    }
                    alt=""
                    className=""
                  />
                </div>
                <div className="details  bg-[#F3F3F3] -mt-24 pt-14 rounded-3xl">
                  <p className="text-black py-12 text-center font-semibold text-[20px] t">
                    {items?.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className=" py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <p className="text-[32px] font-montserrat font-semibold ">
          Top Selling Product
        </p>
        <div className="grid grid-cols-3 gap-6 ">
          {topselldata?.map((items, index) => (
              <div key={index}  onClick={() => handleTrackOpen(items?.product_id)} className="mt-6 cursor-pointer font-urbanist p-[13px] border hover:border hover:border-1 hover:shadow-lg rounded-2xl ">
              <div className="flex ">
              <Image
                   src={items?.image_url ? items?.image_url : "/images/topsell.png"}
                   alt=""
                   className=" h-[300px] object-contain rounded-lg "
                   width={500}
                   height={500}
                 />
               </div>
               <div className=" ">
                 <p className="text-black  font-semibold text-[20px] t">
                   {items?.name}
                 </p>
                 <div className="text-black font-semibold text-[20px] pt-2 flex items-center ">
                   <img src="/images/Naira.png" alt="" />
                   <p className="pl-1">{Math.floor(items?.amount)}</p>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
      <div className="py-[100px] ">
        <div className="bg-primary w-full px-10 md:px-0 md:flex py-10 space-x-4 justify-center">
          <div>
            <img src="/images/mobile.png" alt="" />
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
              <img src="/images/gooapp.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:flex md:space-x-4">
        <div>
          <img src="/images/map.png" alt="" />
        </div>
        <div className="md:mt-0 mt-10 ">
          <img src="/images/maplocation.png" alt="" />
        </div>
      </section>
  

      <Modal
        width={700}
        bodyStyle={{
          height: "100vh",
          padding: 0,
          margin: 0,
          borderRadius: "30px",
        }}
        style={{
          top: 0,
          height: "100vh",
          width: "600px",
          borderRadius: "30px",
          overflow: "hidden",
        }}
        open={openLoc}
        onCancel={handleLocClose}
        footer={false}
      >
        <div className="flex justify-center font-montserrat text-center p-[50px] ">
          <div>
            <div className="flex justify-center mb-4">
              <img src="/images/storeloc.png" alt="" />
            </div>
            <p className="font-semibold text-black text-[32px] ">
              Find Tingo Express Near Me{" "}
            </p>
            <p className="text-[#827568] font-[400] text-[16px] mt-8 ">
              Locate Tingo Express effortlessly by entering your location bellow
              or use you current location
            </p>
            {/* <div className="flex justify-center items-center space-x-6 my-10">
              <div>
                <img src="/images/Vector.png" alt="" />
              </div>
              <p className="text-[#7A41B4] font-semibold text-[24px] font-urbanist ">
                Use My Current location
              </p>
            </div> */}
            <div className="text-left">
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      optionSelectedFontWeight: 600,
                    },
                  },
                  token: {
                    borderRadius: 12,
                    controlHeight: 60,
                    colorBgContainer: "#F9F9F9",
                    fontSize: 16,
                  },
                }}
              >
                <Select
                  // id="country"
                  showSearch
                  placeholder="Choose nearest store"
                  className={`w-full`}
                  options={storedata?.map((category) => ({
                    value: category?.location,
                    label: category?.location,
                  }))}
                  onChange={(e) => handleSelected(e)}
                  isClearable
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    border: 1,
                  }}
                />
              </ConfigProvider>
            </div>
            <Link href={`/location/${loc}`}>
              <button className="w-full bg-secondary mt-8  text-white py-4 rounded-lg ">
                View Store Page
              </button>
            </Link>

            <button className="w-full mt-8 outline-none  text-[#827568] font-[400] text-[16px]   ">
              Remind Me Later
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        width={800}
        style={{ height: "", width: "600px" }}
        open={openTrack}
        onCancel={handleTrackClose}
        footer={false}
      >
           <ProductDescription singleproducts={singleproducts} getSingleProductData={getSingleProductData} handleSubtract={handleSubtract} handleAdd={handleAdd } addToCart={addToCart} quantity={quantity} addcart={addcart} />

       
      
      </Modal>
    </section>
  );
};

export default Home;

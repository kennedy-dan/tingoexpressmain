import React from "react";

const ShopLocation = () => {
  const tngorea = [
    {
      place: "Tingo supermarket- Ikeja",
      loc: "Tingo mall- ikeja 22, adefowora str, off Adefisan. Ikeja, Lagos Nigeria",
      time: " 9:00am - 10:00pm",
      email: "Tingo.ikeja@Tignoexpress.com",
      p1: "08023476581",
      p2: "08023476581",
    },
    {
      place: "Tingo supermarket- Ikeja",
      loc: "Tingo mall- ikeja 22, adefowora str, off Adefisan. Ikeja, Lagos Nigeria",
      time: " 9:00am - 10:00pm",
      email: "Tingo.ikeja@Tignoexpress.com",
      p1: "08023476581",
      p2: "08023476581",
    },
  ];
  return (
    <section>
      <div className="bg-[#E7EBF6] py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px]  md:flex items-center justify-between ">
        <div>
          <p>{"Product category" < "frozenfoods"} </p>
          <p className="text-[39px] font-bold text-black font-montserrat">
            Explore Tingo's Store location
          </p>
        </div>
        <div className="md:flex hidden">
          <img src="/images/locationcartbanner.png" />
        </div>
      </div>
      <div className="py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] font-montserrat ">
        {tngorea.map((data) => (
          <div className="border rounded-xl mb-9 border-gray-300 md:p-[50px] p-[7px]    w-full">
            <p className="font-[500] text-[24px]"> Tingo supermarket- Ikeja</p>

            <div className="mt-2 md:flex justify-between items-center font-[400] text-[14px] md:text-[16px]">
              <p className='md:py-0 py-3' >{data.loc}</p>
              <div className='md:py-0 py-3'>
                <p>Opening time</p>
                <p>{data.time}</p>
              </div>
            </div>
                <p className="text-gray-400  text-[18px] md:mb-2 " >Contact Information</p>
            <div className='md:space-y-4'>

                <p>{data.email}</p>
                <p>{data.p1}</p>
                <p>{data.p2}</p>
            </div>
            <div className='flex md:justify-end my-4' >
                <p className="text-[16px] font-[400] text-primary " >Show direction on map</p>
            </div>
            <button className="w-full bg-secondary mt-3 text-white flex justify-center space-x-3 py-4 rounded-lg  " >
                <img src='/images/cartwhiteicon.png' />
                <p className='text-[16px] font-semibold' >View Store page</p>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopLocation;

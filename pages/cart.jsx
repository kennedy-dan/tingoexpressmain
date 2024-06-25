import HomeLayout from "@/components/Layout/HomeLayout";
import React from "react";

const Cart = () => {
  const newArrival = [
    "/images/newarrival.png",
    "/images/newarrival.png",
    "/images/newarrival.png",
  ];
  return (
    <HomeLayout>
      <div className="md:flex py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:space-x-10">
        <div>
          <img src="/images/cartleft.png" alt=''/>
        </div>
        <div>
          <div className="shadow-lg md:w-[370px] mt-4 md:mt-0 rounded-xl p-[20px] border-2  font-montserrat ">
            <p className="font-bold text-[32px]">Summary</p>
            <div className="flex justify-between font-[500] mt-7">
              <p className="text-[16px]">Subtotal</p>
              <p className="text-[16px]">N 4000</p>
            </div>
            <div className="flex justify-between font-[500] py-6">
              <p className="text-[16px]">Tax</p>
              <p className="text-[16px]">N 4000</p>
            </div>

            <div className="flex justify-between font-[500]">
              <p className="text-[16px]">Discount</p>
              <p className="text-[16px]">N 0</p>
            </div>
            <div className="mt-10">
              <button className="w-full bg-secondary text-white py-4 rounded-lg font-semibold text-[16px] ">
                Checkout N4000
              </button>
            </div>
          </div>
        </div>

   
      </div>
      <div className="py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
          <p className="text-[32px] font-montserrat mb-10 font-semibold ">
            Recently Viewed{" "}
          </p>
          <div className="lg:flex justify-between  ">
            {newArrival.map((items) => (
              <img src={items} alt="" />
            ))}
          </div>
        </div>
    </HomeLayout>
  );
};

export default Cart;

import HomeLayout from "@/components/Layout/HomeLayout";
import React from "react";

const Profile = () => {
  return (
    <HomeLayout>
      <div className="bg-[#E7EBF6] py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px]  md:flex items-center justify-between ">
        <div>
          <p>{"Product category" < "frozenfoods"} </p>
          <p className="text-[39px] font-bold text-black font-montserrat">
            My Profile
          </p>
        </div>
        <div className="md:flex hidden">
          <img src="/images/profilecartbanner.png" alt="" />
        </div>
      </div>

      <div className="py-20 px-10  lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:flex md:space-x-10 justify-between font-montserrat">
        <div className="md:w-[30%]" >
          <div className="border pl-6 py-10 shadow-md space-y-8 rounded-md ">
            <div>
              <p>John</p>
              <p className="mt-1 text-gray-400 ">Johnbull@gmail.com</p>
            </div>
            <div>
              <p>My Profile</p>
            </div>
            <div>
              <p>Favorites</p>
            </div>{" "}
            <div>
              <p>Order History</p>
            </div>
          </div>
        </div>

        <div className=" md:w-[70%] md:mt-0 mt-16">
          <img src='/images/profiledet.png' />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Profile;

import React from "react";
import HomeLayout from "@/components/Layout/HomeLayout";

const Contact = () => {
  return (
    <HomeLayout>
      <section>
        <div className="bg-[#E7EBF6] py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] md:flex items-center justify-between ">
          <div>
            <p>{"Product category" < "frozenfoods"} </p>
            <p className="text-[54px] font-bold text-black font-montserrat">
              Contact Us
            </p>
          </div>
          <div className="md:flex hidden" >
            <img src="/images/contactcartbanner.png" />
          </div>
        </div>

        <div className="md:flex py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] font-montserrat">
          <div className="md:w-1/2 font-montserrat ">
            <p className="font-semibold text-[34px] ">Leave A Message</p>
            <div className="mt-16">
              <p className="font-semibold">Full Name</p>
              <input
                placeholder="Enter Your Email Address"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />
            </div>{" "}
            <div className="mt-4">
              <p className="font-semibold">Password</p>
              <input
                placeholder="Create a unique password"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />
            </div>
            {/* <div className="flex justiy-end ">
              <p className="text-[#4FA9AB] text-[16px]">Forget password</p>
            </div> */}
            <div className="mt-4">
              <p className="font-semibold">Message</p>
              <textarea
                placeholder="Type Your Message Here"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />
            </div>
            <div className="mt-10">
              <button className="w-[96%] bg-secondary text-white py-6 rounded-lg font-semibold text-[16px] ">
                Send Message
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:mt-0 mt-20 ">
            <p className="font-semibold text-[34px] ">
              We would love to hear from you!
            </p>
            <p className="text-[20px] mt-16 font-semibold " >HEAD OFFICE</p>
            <p className="font-[400] text-[16px] pt-3 pb-2 " >
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.
            </p>
            <p className="text-[20px] mt-1 font-semibold " >BUSINESS HOURS</p>
            <p className="font-[400] text-[16px] pt-3 pb-5 " >
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.
            </p>    <p className="text-[20px] mt-1 font-semibold " >CONTACT INFORMATION</p>
            <p className="font-[400] text-[16px] pt-3 pb-5 " >
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.
            </p>
            <div className="flex text-[20px] mt-1 pb-4 font-semibold justify-between" >
                <p>Tingo’s Supermarket location</p>
                <p>Phone Number</p>
            </div>
            <img src='/images/loc.png' />

          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Contact;

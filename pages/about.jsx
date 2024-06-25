import HomeLayout from "@/components/Layout/HomeLayout";
import React from "react";

const About = () => {
  return (
    <HomeLayout>
      <section>
        <div className="bg-[#E7EBF6] px-[100px] flex items-center justify-between ">
          <div>
            <p>{"Product category" < "frozenfoods"} </p>
            <p className="text-[54px] font-bold text-black font-montserrat">
              About Us
            </p>
          </div>
          <div>
            <img src="/images/abb.png" alt='' />
          </div>
        </div>
        <div className="flex justify-between font-montserrat space-x-10 p-[90px]">
          <img src="/images/ab1.png" alt='' />
          <div>
            <p className="text-[30px] mt-10 font-semibold ">Our Vission</p>
            <p className="font-[400] text-[16px] pt-3 pb-2 ">
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.
            </p>
            <p className="text-[30px] mt-6 font-semibold ">Our Mission</p>
            <p className="font-[400] text-[16px] pt-3 pb-5 ">
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.
            </p>{" "}
            <p className="text-[30px] mt-6 font-semibold ">Core Values</p>
            <p className="font-[400] text-[16px] pt-3 pb-5 ">
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.
            </p>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default About;

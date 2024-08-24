import HomeLayout from "@/components/Layout/HomeLayout";
import React from "react";

const About = () => {
  return (
    <HomeLayout>
      <section>
        <div className="bg-[#E7EBF6]  py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px]  md:flex items-center justify-between flex  ">
          <div>
            <p>{"Product category" < "frozenfoods"} </p>
            <p className="md:text-[54px] text-[22px] font-bold text-black font-montserrat">
              About Us
            </p>
          </div>
          <div>
            <img src="/images/abb.png" alt="" />
          </div>
        </div>
        <div className="md:flex justify-between font-montserrat md:space-x-10 py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]  ">
          <img src="/images/ab1.png" alt="" />
          <div>
            <p className="md:text-[30px] text-[18px] mt-10 font-semibold ">Our Vission</p>
            <p className="font-[400] md:text-[16px] text-[13px] pt-3 pb-2 ">
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.
            </p>
            <p className="md:text-[30px] text-[18px] mt-6 font-semibold ">Our Mission</p>
            <p className="font-[400] md:text-[16px] text-[13px] pt-3 pb-5 ">
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.
            </p>{" "}
            <p className="md:text-[30px] text-[18px] mt-6 font-semibold ">Core Values</p>
            <p className="font-[400] md:text-[16px] text-[13px] pt-3 pb-5 ">
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.
            </p>
          </div>
        </div>
        <div className="md:flex justify-between font-montserrat md:space-x-10 py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
          <div className="md:w-1/2" >
            <p className="md:text-[30px] text-[18px] mt-10 font-semibold ">Who We Are</p>
            <p className="font-[400] md:text-[16px] text-[13px] pt-3 pb-5 ">
              Lorem ipsum dolor sit amet consectetur. Sodales velit elementum
              gravida nibh ultrices urna egestas lectus tempus. Eu eu dui tellus
              mattis feugiat et elementum convallis sit. Velit porttitor nam
              auctor a commodo at risus nisl elementum.Lorem ipsum dolor sit
              amet consectetur. Sodales velit elementum gravida nibh ultrices
              urna egestas lectus tempus. Eu eu dui tellus mattis feugiat et
              elementum convallis sit. Velit porttitor nam auctor a commodo at
              risus nisl elementum.Lorem ipsum dolor sit amet consectetur.
              Sodales velit elementum gravida nibh ultrices urna egestas lectus
              tempus. Eu eu dui tellus mattis feugiat et elementum convallis
              sit. Velit porttitor nam auctor a commodo at risus nisl
              elementum.Lorem ipsum dolor sit amet consectetur. Sodales velit
              elementum gravida nibh ultrices urna egestas lectus tempus. Eu eu
              dui telluodales velit elementum gravida nibh ultrices urna egestas
              lectus tempus. Eu eu dui tellus mattis feugiat et elementum
              convallis sit. Velit porttitor nam auctor a commod.
            </p>
          </div>

          <div className="md:w-1/2">
            <img src="/images/about2.png" alt="" />
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default About;

import React, { useState } from "react";
import Link from "next/link";
const Signup = () => {
  const [reg, setReg] = useState(1);
  const onReg = (val) => {
    
      setReg(val);
    
  };
  return (
    <section className="md:p-[40px] p-[10px]">
      <div className="flex md:space-x-14 ">
        <div className="md:w-1/2 hidden">
          <img src="/images/signupimg.png" alt='' />
        </div>
        {reg === 1 && (
          <div className="md:w-1/2 font-montserrat ">
            <div className="flex w-full justify-center">
              <img src="images/navbarlogo.png" alt="" className=" " />
            </div>
            <p className="font-semibold text-[38px] text-center ">
              Welcome to Tingo Express
            </p>
            <p className="text-[16px] font-[400] text-[#8A848F] text-center tracking-wide  ">
              Sign-up to enjoy our seamless service and for nice shopping
              experience
            </p>
            <p className="text-[16px] font-[400] text-[#8A848F] text-center ">
              Already have an account Click{" "}
              <span className="text-[#4FA9AB]">Login</span>
            </p>
            <div className="mt-16">
              <p className="font-semibold">Name</p>
              <input
                placeholder="Enter Your Fullname"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />
            </div>
            <div className="mt-4">
              <p className="font-semibold">Email</p>
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
            </div>{" "}
            <div className="mt-4">
              <p className="font-semibold">Confirm Password</p>
              <input
                placeholder="Re-enter password"
                className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />
            </div>
            <div className="mt-10">
              <button
                                  onClick={() => onReg(2)}

                className="w-[96%] bg-secondary text-white py-6 rounded-lg font-semibold text-[16px] "
              >
                Register
              </button>
            </div>
          </div>
        )}

        {reg === 2 && (
          <div className="md:w-1/2 font-montserrat ">
            <div className="flex w-full justify-center">
              <img src="images/navbarlogo.png" alt="" className=" " />
            </div>
            <p className="font-semibold text-[38px] text-center ">
              Verification
            </p>

            <p className="text-[16px] font-[400] text-[#8A848F] text-center tracking-wide  ">
              Sign-up to enjoy our seamless service and for nice shopping
              experience
            </p>
            <div className="flex justify-center mt-16">
              <div className="flex justify-center w-[80%] space-x- ">
                <div className="">
                  <input className="bg-[#F9F9F9] pl-10 w-[71%] rounded-2xl md:py-10 py-5 border-[#C9C5CC] border" />
                </div>
                <div className="">
                  <input className="bg-[#F9F9F9] pl-10 w-[71%] rounded-2xl md:py-10 py-5 border-[#C9C5CC] border" />
                </div>{" "}
                <div className="">
                  <input className="bg-[#F9F9F9] pl-10 w-[71%] rounded-2xl md:py-10 py-5 border-[#C9C5CC] border" />
                </div>{" "}
                <div className="">
                  <input className="bg-[#F9F9F9] pl-10 w-[71%] rounded-2xl md:py-10 py-5 border-[#C9C5CC] border" />
                </div>
              </div>
            </div>
            <div className="w-[70%] ml-14 mt-4 ">
              <p className="text-[#4FA9AB]">Resend Code</p>
            </div>
            <div className="mt-10 flex justify-center w-full">
              <div className="flex w-[80%] justify-center ">
                <button
                  onClick={() => onReg(3)}
                  className="w-full bg-secondary text-white py-6 rounded-lg font-semibold text-[16px] "
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        )}

             {reg === 3 && (
          <div className="md:w-1/2 w-full font-montserrat ">
            <div className="flex w-full justify-center">
              <img src="images/navbarlogo.png" alt="" className=" " />
            </div>
            <p className="font-semibold text-[38px] text-center ">
              Location
            </p>
            <p className="text-[16px] font-[400] text-[#8A848F] text-center tracking-wide  ">
             fill in your address below
            </p>
           
            <div className="mt-16">
              <p className="font-semibold">Location</p>
              <input
                placeholder="Enter Your Location"
                className=" w-[96%] pl-5 outline-none mt-2 border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
              />
            </div>
     
            <div className="mt-10">
              <Link href='/login' >
              <button
                onClick={onReg}
                className="w-[96%] bg-secondary text-white py-6 rounded-lg font-semibold text-[16px] "
              >
                
                Save
              </button>
              </Link>
            
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Signup;

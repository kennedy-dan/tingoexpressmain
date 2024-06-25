import { useRouter } from 'next/router'
import React from 'react'

const Login = () => {
  const router = useRouter()
  const login = () => {
    localStorage.setItem('user', 'logged')
    router.push('/')
  }
  return (
    <section className="md:p-[40px] p-[10px]">
      <div className="flex md:space-x-14 ">

         <div className="md:w-1/2 md:block hidden">
          <img src="/images/loginimg.png" />
        </div>
        <div className="md:w-1/2 md:mt-0 mt-20 font-montserrat ">
            <div className="flex w-full justify-center">
              <img src="images/navbarlogo.png" alt="" className=" " />
            </div>
            <p className="font-semibold text-[38px] text-center ">
              Welcome Back to Tingo Express
            </p>
            <p className="text-[16px] font-[400] text-[#8A848F] text-center tracking-wide  ">
              Login to enjoy our seamless service and for nice shopping
              experience
            </p>
            <p className="text-[16px] font-[400] text-[#8A848F] text-center ">
              Dont have an account Click{" "}
              <span className="text-[#4FA9AB]">"Sign up"</span>
            </p>
         
            <div className="mt-16">
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
            </div>
            <div className='flex justiy-end ' >
                <p className='text-[#4FA9AB] text-[16px]' >Forget password</p>
            </div>
          
            <div className="mt-10">
              <button
                onClick={login}
                className="w-[96%] bg-secondary text-white py-6 rounded-lg font-semibold text-[16px] "
              >
                Login
              </button>
            </div>
          </div>
          </div>
    </section>

  )
}

export default Login
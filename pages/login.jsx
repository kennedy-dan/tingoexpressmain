import { _loginUser } from "@/store/slice/authSlice";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pWord, setPword] = useState("");

  //reduc useselector
  const { token, loading } = useSelector((state) => state.auth);

  const login = () => {
    if (!email) {
      toast.info("Email is required");
      return;
    }
    if (!pWord) {
      toast.info("Password is required");
      return;
    }
    const data = {
      email: email,
      password: pWord,
    };
    dispatch(_loginUser(data));
  };

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);

  return (
    <section className="md:p-[40px] p-[10px]">
      <div className="flex md:space-x-14 ">
        <div className="md:w-1/2 md:block hidden">
          <img src="/images/loginimg.png" alt="" />
        </div>
        <div className="md:w-1/2 md:mt-0 mt-20 font-montserrat ">
          <div className="flex w-full justify-center">
          <Link href='/' >
            <img src="/images/navbarlogo.png" alt="" className=" " />

            </Link>
          </div>
          <p className="font-semibold text-[38px] text-center ">
            Welcome Back to Tingo Express
          </p>
          <p className="text-[16px] font-[400] text-[#8A848F] text-center tracking-wide  ">
            Login to enjoy our seamless service and for nice shopping experience
          </p>
          <p className="text-[16px] font-[400] text-[#8A848F] text-center ">
            Dont have an account Click{" "}
            <Link href="/signup">
              <span className="text-[#4FA9AB]">Sign up</span>
            </Link>
          </p>
          <div className="mt-16">
            <p className="font-semibold">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Your Email Address"
              className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
            />
          </div>{" "}
          <div className="mt-4">
            <p className="font-semibold">Password</p>
            <input
              onChange={(e) => setPword(e.target.value)}
              value={pWord}
              type="password"
              placeholder="Input password"
              className=" w-[96%] pl-5 outline-none border border-[#C9C5CC] bg-[#F9F9F9] rounded-lg py-5"
            />
          </div>
          <div className="flex justiy-end ">
            <p className="text-[#4FA9AB] text-[16px]">Forget password</p>
          </div>
          <div className="mt-10">
            <button
              onClick={login}
              className="w-[96%] bg-secondary text-white py-6 rounded-lg font-semibold text-[16px] "
            >
              {loading ? <ClipLoader size={12} color="white" /> : <p>Login</p>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

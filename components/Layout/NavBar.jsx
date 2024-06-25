import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import {Drawer, Space} from 'antd'
import { MdOutlineCancel } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

const OrderHistoryCard = ({ isOpen, onClose, profileDropdownRef }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "150%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      ref={profileDropdownRef}
      className="fixed z-50 top-[80px] font-urbanist right-[85px] h-[200px] font-medium  bg-[#DEDCE0] rounded-lg border shadow-lg p-4"
    >
      <div className="flex space-x-3">
        <img src="/images/profile.png" />
        <p>My Profile</p>
      </div>
      <div className="flex my-4 space-x-3">
        <img src="/images/fav.png" />
        <p>Favorite</p>
      </div>
      <div className="flex space-x-3">
        <img src="/images/ord.png" />
        <p>Orders History</p>
      </div>

      <div className="h-[1px] bg-gray-400 w-full mt-4 "></div>

      <div className="flex mt-4 space-x-3">
        <img src="/images/ord.png" className="opacity-0" />
        <p>Logout</p>
      </div>

      {/* <h2 className="text-xl font-bold mb-4">Order History</h2> */}
      {/* Order history content goes here */}
    </motion.div>
  );
};

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [userlog, setUserLog] = useState(false);
  const [advplacement, setadvPlacement] = useState("left");
  const [openadv, setOpenAdv] = useState(false);


  const [isCardOpen, setIsCardOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  const toggleCard = () => {
    setIsCardOpen(true);
  };
  useOnClickOutside(profileDropdownRef, () => setIsCardOpen(false));

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserLog(true);
    }
  }, []);

  const showDrawerAdv = () => {
    setOpenAdv(true);

  };

  
  const onCloseadv = () => {
    setOpenAdv(false);
  };


  return (
    <section>
      <div className="bg-white flex justify-between items-center font-montserrat px-10 lg:px-[20px] xl:px-[100px]">
        <img src="images/navbarlogo.png" alt="" className=" " />
        <div className="lg:flex hidden justify-between items-center ">
          <div className="flex items-center h-[] py-4">
            <div className="relative h-[56px] ">
              <div
                className={` h-full rounded-l-lg border-gray-400 border lg:w-[230px] xl:w-[350px] custom-input ${
                  isFocused || inputValue ? "focused" : ""
                }`}
              >
                {!inputValue && !isFocused && (
                  <div className="placeholder">
                    <img
                      src="images/searchicon.png"
                      alt="Search Icon"
                      className="icon"
                    />
                    <span className="text font-[14px] ">Search</span>
                  </div>
                )}
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="input-element "
                />
              </div>
            </div>
            <button className="bg-searchheader text-white h rounded-r-lg font-semibold h-[56px] text-[px] px-7 text-[16px]">
              Search
            </button>
          </div>
        </div>
        <div className="lg:flex hidden font-semibold items-center space-x-5 text-[14px] ">
          <Link href="/product">
            <div className="text-black">Product</div>
          </Link>
          <Link href="/contact">
            <div className="text-black">Contact us</div>
          </Link>
          <div>
            <Link href="/location">
              <img src="/images/locationicon.png" />
            </Link>
          </div>
          <div>
            <Link href="/cart">
              <img src="/images/carticon.png" />
            </Link>
          </div>

          {!userlog && (
            <Link href="/signup">
              {" "}
              <button className="bg-secondary px-5 rounded-lg py-3 text-white ">
                Login /Sign Up
              </button>{" "}
            </Link>
          )}

          {userlog && (
            <div className="flex space-x-2 cursor-pointer items-center " onClick={toggleCard}>
              {" "}
              <img src="/images/profile.png" /> <p>Hi, kennedy</p>{" "}
              <img src="/images/arrowdown.png" />{" "}
            </div>
          )}
        </div>

        <div className="lg:hidden block" onClick={showDrawerAdv}>
              <IoIosMenu />
            </div>
      </div>
      <OrderHistoryCard
        profileDropdownRef={profileDropdownRef}
        isOpen={isCardOpen}
        onClose={toggleCard}
      />

      
<Drawer
        // title="WeOut"
        placement={advplacement}
        closable={false}
        onClose={onCloseadv}
        open={openadv}
        key={advplacement}
        extra={
          <Space>
            <button onClick={onCloseadv}>
              <MdOutlineCancel className="w-8 h-8" />
            </button>
          </Space>
        }
      >
        <section className="font-poppins">
          <div className="flex justify-end ">
            <button onClick={onCloseadv}>
              <MdOutlineCancel className="w-8 h-8" />
            </button>
          </div>
          <div>
          <img src="images/navbarlogo.png" alt="" className=" " />

          </div>
        </section>
      </Drawer>
    </section>
  );
};

export default NavBar;

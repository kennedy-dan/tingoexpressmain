import React from 'react'
import NavBar from './NavBar'
// import useWindowDimension from '@/hooks/useWindowDimension';
import Footer from './Footer';
// import useWindowDimension from "@hooks/useWindowDimension";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getcartData } from "@/store/slice/productSlice.js";
import SearchInput from './SearchInput';
const HomeLayout = ({children}) => {
  // const { width } = useWindowDimension();
  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)

  useEffect(() => {
    if(token) {
      dispatch(getcartData())
    }
  }, [])
  return (
    <>
        <NavBar />
        <div
        // style={{
        //   height: width > 450 ? "calc(100vh - 11rem)" : "calc(100vh - 8rem)",
        //   overflowY: "auto",
        // }}
      >
        <div className='flex justify-center md:hidden ' >
          <SearchInput />
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default HomeLayout
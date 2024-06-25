import HomeLayout from "@/components/Layout/HomeLayout";
import React,{useState} from "react";
import { Modal } from "antd/lib";

const Orderhistory = () => {
  const [openTrack, setOpenTrack] = useState(false);

  const handleTrackClose = () => {
    setOpenTrack(false);
  };

  const handleTrackOpen = () => {
    setOpenTrack(true);
  };

  return (
    <HomeLayout>
      <section className="py-20 px-4 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px] font-montserrat ">
        <div className="border border-gray-300 rounded-lg md:p-[50px] p-[15px] ">
          <div className="border md:px-9 px-3 md:space-y-0 space-y-4 py-4 md:flex justify-between bg-[#EBF6F6] ">
            <div className="md:flex md:space-y-0 space-y-4">
              <div>
                <p className="text-black  font-bold text-[17px] ">
                  Order number
                </p>
                <p className="text-gray-600 text-[16px] ">WUIIP99221</p>
              </div>
              <div className="md:ml-16">
                <p className="text-black font-bold text-[17px] ">Date</p>
                <p className="text-gray-600 text-[16px] ">Jul 6, 2021</p>
              </div>{" "}
              <div className="md:ml-16">
                <p className="text-black font-bold text-[17px] ">Total aount</p>
                <p className="text-black text-[16px] ">$160.00</p>
              </div>
            </div>
            <div>
              <button onClick={handleTrackOpen}  className=" bg-secondary text-white py-4 px-4 rounded-lg font-semibold text-[16px] ">
                Tracking Order
              </button>
            </div>
          </div>
          <div className="md:flex py-4 md:space-x-3">
            <img src="/images/checkoutrightimg.png" alt='' />
            <div className="md:flex text-[17px] justify-between w-full font-[500] ">
              <div>
                <p>Hollandia Evap Full Cream 190g</p>
                <p className="font-[400] py-1">QTY: 1</p>
                <p>N 4,000</p>
              </div>
              <p className="text-green-400 mt-3 md:mt-0 text-[14px] font-semibold ">
                Buy Again
              </p>
            </div>
          </div>

          <hr />
          <div className="md:flex space-y-4 md:space-y-0 py-4 md:space-x-3">
            <img src="/images/checkoutrightimg.png" alt='' />
            <div className="md:flex items-center text-[17px] justify-between w-full font-[500] ">
              <div>
                <p>Hollandia Evap Full Cream 190g</p>
                <p className="font-[400] py-1">QTY: 1</p>
                <p>N 4,000</p>
              </div>
              <p className="text-green-400  mt-3 md:mt-0 text-[14px] font-bold md:font-semibold ">
                Buy Again
              </p>
            </div>
          </div>
        </div>
        <div className="border mt-20 border-gray-300 rounded-lg md:p-[50px] p-[15px] ">
          <div className="border md:px-9 px-3 md:space-y-0 space-y-4 py-4 md:flex justify-between bg-[#EBF6F6] ">
            <div className="md:flex md:space-y-0 space-y-4">
              <div>
                <p className="text-black  font-bold text-[17px] ">
                  Order number
                </p>
                <p className="text-gray-600 text-[16px] ">WUIIP99221</p>
              </div>
              <div className="md:ml-16">
                <p className="text-black font-bold text-[17px] ">Date</p>
                <p className="text-gray-600 text-[16px] ">Jul 6, 2021</p>
              </div>{" "}
              <div className="md:ml-16">
                <p className="text-black font-bold text-[17px] ">Total aount</p>
                <p className="text-black text-[16px] ">$160.00</p>
              </div>
            </div>
            <div>
              <button onClick={handleTrackOpen}  className=" bg-secondary text-white py-4 px-4 rounded-lg font-semibold text-[16px] ">
                Tracking Order
              </button>
            </div>
          </div>
          <div className="md:flex py-4 md:space-x-3">
            <img src="/images/checkoutrightimg.png" alt='' />
            <div className="md:flex text-[17px] justify-between w-full font-[500] ">
              <div>
                <p>Hollandia Evap Full Cream 190g</p>
                <p className="font-[400] py-1">QTY: 1</p>
                <p>N 4,000</p>
              </div>
              <p className="text-green-400 mt-3 md:mt-0 text-[14px] font-semibold ">
                Buy Again
              </p>
            </div>
          </div>

          <hr />
          <div className="md:flex space-y-4 md:space-y-0 py-4 md:space-x-3">
            <img src="/images/checkoutrightimg.png" alt='' />
            <div className="md:flex items-center text-[17px] justify-between w-full font-[500] ">
              <div>
                <p>Hollandia Evap Full Cream 190g</p>
                <p className="font-[400] py-1">QTY: 1</p>
                <p>N 4,000</p>
              </div>
              <p className="text-green-400  mt-3 md:mt-0 text-[14px] font-bold md:font-semibold ">
                Buy Again
              </p>
            </div>
          </div>
        </div>
      </section>
      <Modal open={openTrack} onCancel={handleTrackClose} footer={false}>
        <img src='/images/tracking.png' alt=''/>
      </Modal>

    </HomeLayout>
  );
};

export default Orderhistory;

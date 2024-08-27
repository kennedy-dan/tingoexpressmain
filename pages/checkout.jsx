import HomeLayout from "@/components/Layout/HomeLayout";
import React, { useState, useEffect } from "react";
import { Button, Radio, Select, ConfigProvider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { PaystackButton } from "react-paystack";
import Image from "next/image";

import {
  addtocart,
  addtocheckout,
  getcartData,
  RemoveFromCart,
  getStores,
} from "@/store/slice/productSlice";
import { payStackConfig } from "@/utils/paystackConfig";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
const Checkout = () => {
  const dispatch = useDispatch();
  const { getcart, checkout, getstore } = useSelector((state) => state.product);
  const { token } = useSelector((state) => state.auth);

  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [phone, setPhone] = useState("");
  const [txRef, setTxRef] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState("pickup");

  const storedata = getstore?.results?.data?.data;

  const [total, setTotal] = useState(0);

  const toggleChecked = () => {
    setChecked(!checked);
  };
  const toggleDisable = () => {
    setDisabled(!disabled);
  };
  const onChange = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };

  useEffect(() => {
    if (token) {
      dispatch(getcartData());
    }
  }, []);

  useEffect(() => {
    dispatch(getStores());
  }, []);

  const data = getcart?.results?.data?.data?.items;

  const calculateTotal = () => {
    return data?.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };

  useEffect(() => {
    setTotal(calculateTotal());
  }, [data]);

  const handleCheckout = async () => {
  
    let data;
    if (deliveryOption === "pickup") {
      if(address === "" || phone ==''){
        toast.error('Input all fields')
        return
      }
      data = {
        name: user?.first_name,
        email: user?.email,
        phone: phone,
        state: "Lagos",
        address: address,
        gateway: "Paystack",
        country: "Nigeria",
        city: "Lagos",
        payment_method: "Card",
      };
    }
    if (deliveryOption === "delivery") {
      if(address === "" || phone ==='' || state ==='' || city ===''){
        toast.error('Input all fields')
        return
      }
      data = {
        name: user?.first_name,
        email: user?.email,
        phone: phone,
        state: state,
        address: address,
        gateway: "Paystack",
        country: 'Nigeria',
        city: city,
        payment_method: "Card",
      };
    }

    try {
      const resultAction = await dispatch(addtocheckout(data));
      console.log(resultAction);

      if (addtocheckout.fulfilled.match(resultAction)) {
        const tx_ref = resultAction?.payload?.data?.data?.reference;

        setTxRef(tx_ref);
        console.log(resultAction);
      } else {
        // console.error('Failed to checkout:', resultAction.payload);
      }
    } catch (err) {}
  };

  let customDetails = {
    title: "Tingo",
    // description: "Puchase a shop print",
    tx_ref: txRef,
    amount: parseFloat(total?.toFixed(2)),
    // remarks: checkoutDetails.canvasResult?.transaction?.remarks,
  };

  const payConfig = payStackConfig(user, customDetails);

  console.log(txRef);

  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };
  const handleSelected = (e) => {
    setAddress(e);
    console.log(e);
  };

  return (
    <HomeLayout>
      <section className="py-20 px-10 lg:px-[20px] font-montserrat lg:py-[20px] xl:px-[100px] xl:py-[100px]">
        <p className="font-bold text-[24px] pb-5">Checkout</p>
        <div className="md:flex justify-between">
          <div className="md:w-1/2">
            <Radio.Group
              onChange={handleDeliveryOptionChange}
              value={deliveryOption}
            >
              <Radio value="pickup">
                <p>Pickup at station</p>
              </Radio>
              <Radio value="delivery">
                <p>Door delivery</p>
              </Radio>
            </Radio.Group>
            <hr className="my-4" />
            {deliveryOption === "pickup" && (
              <>
                <ConfigProvider
                  theme={{
                    components: {
                      Select: {
                        optionSelectedFontWeight: 600,
                      },
                    },
                    token: {
                      borderRadius: 12,
                      controlHeight: 60,
                      colorBgContainer: "#F9F9F9",
                      fontSize: 16,
                    },
                  }}
                >
                  <Select
                    // id="country"
                    showSearch
                    placeholder="Choose nearest store"
                    className={`w-full`}
                    options={storedata?.map((category) => ({
                      value: category?.location,
                      label: category?.location,
                    }))}
                    onChange={(e) => handleSelected(e)}
                    isClearable
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      border: 1,
                    }}
                  />
                </ConfigProvider>
                <div className="mt-10">
                  <p className="font-bold pb-1 mt-9 text-[14px] ">Phone</p>
                  <input
                    className="w-full py-5  px-4 text-[16px] border border-gray-400 outline-none "
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </>
              // <div>
              //   <p className="text-gray-400">Address</p>
              //   <p>
              //     Tingo mall- ikeja 22, adefowora str, off Adefisan. Ikeja, Lagos
              //     Nigeria
              //   </p>
              //   <p className="text-gray-400 font-[500]">
              //     Opening time: 9:00am - 10:00pm
              //   </p>
              // </div>
            )}

            {deliveryOption === "delivery" && (
              <>
                <div>
                  <p className="font-bold pb-1 mt-9 text-[14px] ">First name</p>
                  <input
                    className="w-full py-5  border border-gray-400 px-4 text-[16px] outline-none "
                    placeholder="Enter Name"
                    value={user?.first_name}
                  />
                </div>
                <div className="mt-10">
                  <p className="font-bold pb-1 mt-9 text-[14px] ">
                    Email Address
                  </p>
                  <input
                    className="w-full py-5  px-4 text-[16px] border border-gray-400 outline-none "
                    placeholder="Enter Email Address"
                    value={user?.email}
                  />
                </div>
                <div className="mt-10">
                  <p className="font-bold pb-1 mt-9 text-[14px] ">Country</p>
                  <input
                    className="w-full py-5  px-4 text-[16px] border border-gray-400 outline-none "
                    placeholder="Enter Country"
                    onChange={(e) => setCountry(e.target.value)}
                    value='Nigeria'
                  />
                </div>
                <div className="mt-10">
                  <p className="font-bold pb-1 mt-9 text-[14px] ">State</p>
                  <input
                    className="w-full py-5  px-4 text-[16px] border border-gray-400 outline-none "
                    placeholder="Enter State"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                  />
                </div>
                <div className="mt-10">
                  <p className="font-bold pb-1 mt-9 text-[14px] ">city</p>
                  <input
                    className="w-full py-5  px-4 text-[16px] border border-gray-400 outline-none "
                    placeholder="Enter city"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  />
                </div>
                <div className="mt-10">
                  <p className="font-bold pb-1 mt-9 text-[14px] ">Phone</p>
                  <input
                    className="w-full py-5  px-4 text-[16px] border border-gray-400 outline-none "
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className="mt-10">
                  <p className="font-bold pb-1 mt-9 text-[14px] ">Address</p>
                  <input
                    className="w-full py-5  px-4 text-[16px] border border-gray-400 outline-none "
                    placeholder="Enter Address"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                </div>
              </>
            )}
          </div>

          <div>
            <div className="shadow-lg md:w-[540px] md:mt-0 mt-10 rounded-xl p-[20px] border-2  font-montserrat ">
              <p className="font-bold text-[32px]">Summary</p>
              {data?.map((items, index) => (
                <div key={index} className="w-full">
                  <div className="md:flex w-full justify-between  font-montserrat">
                    <div className="md:flex md:mt-0 mt-7  ">
                      <div className="w-1/">
                        <div>
                          <Image
                            src={
                              items?.product?.image_url
                                ? items?.product?.image_url
                                : "/images/topsell.png"
                            }
                            alt=""
                            className="md:w-[90px] w-full md:h-[90px] h-[130px] mr-3 object-cover rounded-lg"
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                      <div className="w-1/">
                        <p className="font-semibold text-[18px] w-[90%] ">
                          {items?.product?.name}
                        </p>
                      </div>
                    </div>
                    <div className="text-black font-semibold text-[24px] pt-3 space-x-1 font-urbanist h-fit flex items-center ">
                      <div>
                        <img src="/images/Naira.png" alt="" />
                      </div>
                      <p>{Math.floor(items?.price)}</p>
                    </div>
                    {/* <div className="">
                  <div className="flex  items-center">
                    <button onClick={() => decreaseQuant(items)}>
                      <img src={"/images/sub.png"} alt="Decrease" />
                    </button>
                    <p className="text-black font-bold px-2 text-[13px]">
                      {items.quantity}
                    </p>
                    <button onClick={() => increaseQuant(items)}>
                      <img src={"/images/add.png"} alt="Increase" />
                    </button>
                  </div>

                  <div className="flex mt-10 cursor-pointer " onClick={() => removeCart(items)}>
                    <div>
                      <img src="/images/delete.png" alt="" />
                    </div>
                    <div>Remove</div>
                  </div>
                </div> */}
                  </div>

                  {/* <br /> */}
                  <hr className="my-5" />
                </div>
              ))}

              <div className="flex justify-between font-[500] mt-7">
                <p className="text-[16px]">total</p>
                <p className="text-[16px]">N {total?.toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-[500] mt-7">
                <p className="text-[16px]">Subtotal</p>
                <p className="text-[16px]">N {total?.toFixed(2)}</p>
              </div>
              {/* <div className="flex justify-between font-[500] py-6">
                <p className="text-[16px]">Tax</p>
                <p className="text-[16px]">N 4000</p>
              </div> */}

              <div className="flex justify-between font-[500]">
                <p className="text-[16px]">Discount</p>
                <p className="text-[16px]">N 0</p>
              </div>
              <div className="mt-10">
                {!checkout?.success && (
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-secondary text-white py-4 rounded-lg font-semibold text-[16px] "
                  >
                    {checkout?.isLoading ? (
                      <ClipLoader size={12} color="white" />
                    ) : (
                      <p>Proceed To Payment N{total?.toFixed(2)}</p>
                    )}
                  </button>
                )}

                {checkout?.success && txRef && (
                  <button
                    // onClick={addtoCheckout}
                    className="bg-secondary text-[16px] w-full mt-10 py-4 text-white "
                  >
                    <PaystackButton text="Make Payment" {...payConfig} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Checkout;

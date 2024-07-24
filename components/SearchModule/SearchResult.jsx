import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd/lib";
import { addtocart, getSingleProduct } from "@/store/slice/productSlice";
import { ClipLoader } from "react-spinners";

const SearchResult = () => {

  const dispatch = useDispatch();
  const { allproducts, singleproducts, addcart } = useSelector((state) => state.product);
  const [openTrack, setOpenTrack] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const metaData = allproducts?.results?.data?.metadata;
  const data = allproducts?.results?.data?.data;
  const getSingleProductData = singleproducts?.results?.data?.data;

  const itemsPerPage = 10;

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(data?.slice(indexOfFirstItem, indexOfLastItem) || []);
  }, [currentPage, data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTrackClose = () => {
    setOpenTrack(false);
  };

  const handleTrackOpen = (id) => {
    setOpenTrack(true);
    dispatch(getSingleProduct(id));
  };

  const handleSubtract = () => {
    if(quantity < 2){
      setQuantity(1)
    }else {
      setQuantity(quantity - 1)

    }
  }

  const handleAdd = () => {
    setQuantity(quantity + 1)
  }

  useEffect(() => {
    if(addcart.success){
      setOpenTrack(false);
      setQuantity(1)

    }
    
 
  }, [addcart.success])
  

 const addToCart = (id) => {

  const data = {
    product_id : id,
    quantity: quantity
  }
  dispatch(addtocart(data))
 }
  return (
    <section>
       <div className='bg-[#E7EBF6] px-[100px] flex items-center justify-between ' >
            <div>
                <p>{"Product category" < "frozenfoods" }  </p>
            <p className='text-[50px] font-bold text-black font-montserrat' >Search Result:  Prawn</p>

            </div>
            <div>
                <img src='/images/searchcartbanner.png' alt='' />
            </div>
        </div>
        <div className="py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">
      
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
          {currentItems?.map((items, index) => (
            <div
              key={index}
              onClick={() => handleTrackOpen(items?.id)}
              className="mt-6 font-urbanist"
            >
              {" "}
              <div className="flex ">
                <img
                  src={items.image_url ? items.image_url : "/images/topsell.png"}
                  alt=""
                  className=""
                />
              </div>
              <div className=" ">
                <p className="text-black  font-semibold text-[20px] t">
                  {items.name}
                </p>
                <div className="text-black font-semibold text-[20px] flex items-center ">
                  <img src="/images/naira.png" alt="" />
                  <p className="pl-1">{Math.floor(items.unit_price)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex py-20 justify-center">
        <div className="flex justify-center">
          <Pagination
            current={currentPage}
            total={data?.length || 0}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
      <Modal
        width={800}
        style={{ height: "", width: "600px" }}
        open={openTrack}
        onCancel={handleTrackClose}
        footer={false}
      >
        {singleproducts?.isLoading && <div className='w-full h-[300px] items-center justify-center flex' ><ClipLoader className='w-9 h-9' /></div>}
        {!singleproducts?.isLoading &&   <div className="flex space-x-5 font-montserrat">
          <div>
            <img
              src={
                getSingleProductData?.image_url
                  ? getSingleProductData?.image_url
                  : "/images/topsell.png"
              }
            />
          </div>
          <div>
            <p className="text-[20px] font-semibold  ">
              {getSingleProductData?.name}
            </p>

            <p className='pt-4' >SKU: {getSingleProductData?.sku}</p>
            <p className='pt-4'>
              category: {getSingleProductData?.category?.name}{" "}
              <span>
                {" "}
                | similar product from {
                  getSingleProductData?.category?.name
                }{" "}
              </span>{" "}
            </p>

            <div className="text-black font-semibold text-[24px] pt-3 space-x-1 font-urbanist flex items-center ">
              <div>
                <img src="/images/naira.png" alt="" />
              </div>
              <p>{Math.floor(getSingleProductData?.unit_price)}</p>
            </div>
            <p className='pt-2' >Quantity</p>
            <div className="flex  items-center">
              <button onClick={handleSubtract} >
                <img src={"/images/sub.png"} alt="" />
              </button>
              <p className="text-black font-bold px-2 text-[13px]">{quantity}</p>
              <button onClick={handleAdd}>
                <img src={"/images/add.png"} alt="" />
              </button>
            </div>
            <button onClick={() => addToCart(getSingleProductData?.id)}  className='bg-secondary w-full text-white mt-6 font-bold tet-[14px] py-2 rounded-md ' >
             {addcart?.isLoading ? <ClipLoader size={12} color="white" /> : 'Add to cart' } 
            </button>
          </div>
        </div>}
       
      
      </Modal>
    </section>
  )
}

export default SearchResult
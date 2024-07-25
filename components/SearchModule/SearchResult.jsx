import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd/lib";
import { addtocart, getSingleProduct, getcartData,  favAction,
  getFavorites,
  getAllProducts, } from "@/store/slice/productSlice";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import ProductDescription from "../UI/ProductDescription";
import { MdOutlineFavorite, MdFavorite } from "react-icons/md";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const SearchResult = ({name}) => {

  const dispatch = useDispatch();
  const router = useRouter()
  const { allproducts, singleproducts, addcart } = useSelector((state) => state.product);
  const [openTrack, setOpenTrack] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [loadingFavorites, setLoadingFavorites] = useState({});

  const metaData = allproducts?.results?.data?.metadata;
  const data = allproducts?.results?.data?.data;
  const getSingleProductData = singleproducts?.results?.data?.data?.data;
  const { token } = useSelector((state) => state.auth);

  const itemsPerPage = 10;

  const handleFavoriteClick = async (id, isFavorite) => {
    if(!token){
      toast.info('Login to add to favorite')
      router.push('/login')
      return
    }
    setLoadingFavorites((prev) => ({ ...prev, [id]: true }));
    const action = isFavorite ? "remove" : "add";
    try {
      await dispatch(favAction({ id, action })).unwrap();
      toast.success(
        `Product ${action === "add" ? "added to" : "removed from"} favorites`
      );
      dispatch(getFavorites()); // Refresh the favorites list
      const data = {
        name: name
      }
    dispatch(getAllProducts(data))

    } catch (error) {
      toast.error(`Failed to ${action} favorite: ${error.message}`);
    } finally {
      setLoadingFavorites((prev) => ({ ...prev, [id]: false }));
    }
  };

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

 useEffect(() => {
  if(token){
    dispatch(getcartData());

  }
}, [ addcart, token]);
  return (
    <section>
       <div className='bg-[#E7EBF6] px-[100px] flex items-center justify-between ' >
            <div>
                <p>{"Product category" < "frozenfoods" }  </p>
            <p className='text-[50px] font-bold text-black font-montserrat' >Search Result: {name}</p>

            </div>
            <div>
                <img src='/images/searchcartbanner.png' alt='' />
            </div>
        </div>
        <div className="py-20 px-10 lg:px-[20px] lg:py-[20px] xl:px-[100px] xl:py-[100px]">

          {!data?.length && <div className='mt-4' ><p className='font-[500] text-4xl' >No record found</p></div>}
      
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
        {currentItems?.map((items, index) => (
            <div key={index} className="mt-6 font-urbanist">
              <div className="relative">
                <div
                  className="flex"
                  onClick={() => handleTrackOpen(items?.id)}
                >
                  <Image
                    src={
                      items.image_url ? items.image_url : "/images/topsell.png"
                    }
                    alt=""
                    className=" h-[300px] object-contain rounded-lg cursor-pointer"
                    width={500}
                    height={500}
                  />
                </div>
                <div
                  className="absolute top-[10%] z-[100] right-[23%] cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavoriteClick(items?.id, items?.is_favorite);
                  }}
                >
                  {loadingFavorites[items?.id] ? (
                    <ClipLoader size={20} color="#000000" />
                  ) : items?.is_favorite ? (
                    <MdFavorite color="red" />
                  ) : (
                    <MdOutlineFavorite />
                  )}
                </div>
              </div>

              <div className="">
                <p className="text-black font-semibold text-[20px]">
                  {items.name}
                </p>
                <div className="text-black font-semibold text-[20px] flex items-center">
                  <img src="/images/Naira.png" alt="" />
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
           <ProductDescription singleproducts={singleproducts} getSingleProductData={getSingleProductData} handleSubtract={handleSubtract} handleAdd={handleAdd } addToCart={addToCart} quantity={quantity} addcart={addcart} />

       
      
      </Modal>
    </section>
  )
}

export default SearchResult
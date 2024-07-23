import HomeLayout from '@/components/Layout/HomeLayout'
import Products from '@/components/ProductModule/Products'
import { getAllProducts } from '@/store/slice/productSlice'
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
const Product = () => {

  const dispatch = useDispatch()


  //useeffect
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  
  
  return (
    <HomeLayout  >
        <Products />
    </HomeLayout>
  )
}

export default Product
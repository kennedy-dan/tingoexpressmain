import HomeLayout from '@/components/Layout/HomeLayout'
import SingleShopLocationn from '@/components/LocationModule/SingleShopLocationn'
import { getcategories, getAllProducts } from '@/store/slice/productSlice'
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'

const LocatonId = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getcategories())
      dispatch(getAllProducts())
 
  }, [])
  
  return (
    <HomeLayout>
        <SingleShopLocationn />
    </HomeLayout>
  )
}

export default LocatonId
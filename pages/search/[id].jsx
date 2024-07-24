import HomeLayout from '@/components/Layout/HomeLayout'
import SearchResult from '@/components/SearchModule/SearchResult'
import { getAllProducts } from '@/store/slice/productSlice'
import { useRouter } from 'next/router'
import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {id} = router.query
  console.log(id)
  useEffect(() => {
    if(id) {
      const data = {
        name: id
      }
      dispatch(getAllProducts(data))

    }
  }, [id])
  
  return (
    <HomeLayout>
        <SearchResult />
    </HomeLayout>
  )
}

export default Search
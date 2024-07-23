import HomeLayout from '@/components/Layout/HomeLayout'
import { verifyPayment } from '@/store/slice/productSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'

const tranasactionComplete = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { tx_ref, status } = router.query;



  useEffect(() => {
    if (tx_ref != null) {
      const data = {
        reference: tx_ref
      }
      dispatch(verifyPayment( tx_ref ));
    }
  }, [tx_ref]);
  
  return (
    <HomeLayout>
      <div className='h-screen w-screen  flex justify-center items-center' >
        <img src='/images/success.svg' alt='' />
      
      </div>
      <div className='flex justify-center ' >
          <Link href='/' >
            <p>Back to home</p>
          </Link>
        </div>
    </HomeLayout>
  )
}

export default tranasactionComplete
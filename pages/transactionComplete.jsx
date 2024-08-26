import HomeLayout from '@/components/Layout/HomeLayout'
import { verifyPayment } from '@/store/slice/productSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'

const TranasactionComplete = () => {
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
      <div className='h-[50vh] w-screen  flex mt-40 justify-center items-center' >
        <img src='/images/success.svg' alt='' className='w-[50%]' />
      
      </div>
      <div className='flex justify-center my-10 ' >
          <Link href='/' >
          <button
                className=" bg-secondary w-[220px] text-white py-4 rounded-lg font-semibold text-[16px] "
              >
                      <p>Back Home</p>

              </button>
          </Link>
        </div>
    </HomeLayout>
  )
}

export default TranasactionComplete
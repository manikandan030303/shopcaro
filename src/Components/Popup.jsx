import React from 'react'
import {IoCloseOutline} from "react-icons/io5"
const Popup = ({orderPopup,setOrderPopup}) => {
  return (
    <>
      {orderPopup && <div className='popup'>

      <div className='w-screen h-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>

      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 duration-200 rounded-md w-[300px]'>
      <div className='flex items-center justify-between'>
        <div>
          <h1>Order Cancel</h1>
        </div>
        <div>
          <IoCloseOutline className='text-2xl cursor-pointer' onClick={()=>setOrderPopup(false)}/>
        </div>
      </div>
      <div>
       
      <input type="text" placeholder='Name' className='w-full rounded-md border border-gray-300 dark:border-gray-900 px-2 py-1 mt-4' />
      <input type="email" placeholder='Email' className='w-full rounded-md border border-gray-300 dark:border-gray-900 px-2 py-1 mt-4' />
      <input type="text" placeholder='Address' className='w-full rounded-md border border-gray-300 dark:border-gray-900 px-2 py-1 mt-4 mb-4' />
      <div className='flex justify-center'>
        <button className='bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 duration-200 hover:scale-105 rounded-md'>Oreder Now</button>
      </div>
      </div>

      </div>
</div>    
    </div>}
    </>
  )
}

export default Popup
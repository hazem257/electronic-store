import React from 'react'

function ProductInfo({product}) {
  return (
    <div className='text1 '>
      <h2 className='font-mono text-[20px] mt-5 mb-5 text-btn1 font-extrabold'>OverView:</h2>
      <h2 className='font-bold font-mono text-btn2 text-[18px] mb-10 '>
      <center className='pb-10 dir'>{product?.attributes?.description}</center>  
      <center className='pt-12 text-btn1'>{product?.attributes?.description2[0]?.children[0]?.text}</center>
      </h2>
    </div>
  )
}

export default ProductInfo

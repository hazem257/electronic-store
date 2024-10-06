'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_Utils/ProductApis'

function ProductSection() {
  const [productList,setProductList] = useState([])
  useEffect(()=>{
    getLatestProducts_();
  },[])
  const getLatestProducts_=()=>{
    ProductApis.getLatestProducts().then(res=>{
      console.log(res.data.data);
      setProductList(res.data.data)
    })
  }
  return (
    <div className='px-10 md:px-20'>
      <h2 className='my-4 font-mono font-bold text-2xl bg-slate-500 rounded-3xl text-teal-50'><center>😉Our Latest Products😉	</center></h2>
      <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection

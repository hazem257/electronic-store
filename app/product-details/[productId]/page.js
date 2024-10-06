'use client'
import { usePathname } from "next/navigation";
import ProductApis from "../../_Utils/ProductApis";
import ProductList from "../../_components/ProductList";
import BreadCrums from './../../_components/BreadCrums';
import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';
import React, { useEffect,useState } from "react";


function ProductDetails({params}) {
  const path =usePathname();
  const [productDetails,setProductDetails]= useState({})
  const [productList,setProductList]=useState([])
  useEffect(()=>{
    getProductById_ ();
  },[params?.productId])
  const getProductById_=()=>{
    ProductApis.getProductById(params?.productId).then(res=>{
      console.log('product item',res.data.data)
      setProductDetails(res.data.data)
      getProductListByCategory(res.data.data)
    })
  }
  const getProductListByCategory =(product)=>{
    ProductApis.getProductsByCategory(product?.attributes?.category).then(res=>{
      console.log(res.data.data)
      setProductList(res?.data.data)
    })
  }
  return (
    <div className='px-10 mb-10 md:px-28'>
      <BreadCrums path={path}/>
      <div className='grid justify-around grid-cols-1 mt-10 gap-5 sm:gap- sm:grid-cols-2'>
        <ProductBanner product={productDetails}/>
        <ProductInfo product={productDetails}/>
      </div>
      <div>
        <center>
          <h2 className='my-4 mt-[24px] font-mono font-bold text-2xl bg-slate-500 rounded-3xl text-teal-50'>Similar Products</h2>
        </center>
        <center>
          <ProductList productList={productList}/>
        </center>
        
      </div>
    </div>
  )
}

export default ProductDetails

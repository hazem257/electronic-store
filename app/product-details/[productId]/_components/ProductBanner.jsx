'use client'
import React, { useState } from 'react'
import { useContext } from 'react'
import Image from 'next/image'
import { AlertOctagon, BadgeCheck, ShoppingCart } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from '../../../_Utils/CartApis'
import { CartContext } from '../../../_context/CartContext'
function ProductBanner({product}) {
  const {user} = useUser();
  const router =useRouter();
  const {cart,setCart}=useContext(CartContext)
  const handleAddToCart =() => {
if(!user){
 router.push('/sign-in')
}else{
  
  const data ={
    data:{
    userName : user.fullName,
    email : user.primaryEmailAddress.emailAddress,
    products:[product?.id]
    }
  }
  /*logic to add to cart*/
  CartApis.addToCart(data).then(res=>{
    console.log('cart created successfully',res.data.data)
    setCart(oldCart=>[
      ...oldCart,
      {
        id:res?.data?.data?.id,
        product
      }
    ])
  }).catch(error=>{
    console.log('error',error)
  })
}
  }
  return (
    <div className='card'>
  <a href="#" className="group relative block overflow-hidden">

  <img
    src={product?.attributes?.banner?.data?.attributes?.url}
    alt=""
    className="  object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative border border-gray-100 bg-slate-100 p-6">
    <span className="whitespace-nowrap bg-btn2 text-teal-50 font-mono px-3 py-1.5 text-xs font-medium"> {product?.attributes?.category} </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900 line-clamp-1">{product?.attributes?.Title}</h3>

    <p className="mt-1.5 text-[18px]   font-mono font-extrabold text-btn1">${product?.attributes?.Price}</p>
    <h2 className='flex gap-2 items-center'>{product?.attributes?.delevary ?<BadgeCheck className='text-green-600 H-5 W-5'/> :<AlertOctagon/>
      }Delivery</h2>

    
      <button onClick={()=>handleAddToCart()} className=" mt-4 flex gap-3 items-center w-auto rounded-lg bg-teal-500 p-4 text-sm font-bold text-slate-100 font-mono hover:bg-btn1 transition hover:scale-105">
        <ShoppingCart/> Add to Cart
      </button>
  
  </div>
</a>
    </div>
  )
}

export default ProductBanner

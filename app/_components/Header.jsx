'use client'
import React, {useEffect, useState } from 'react'
import Image from 'next/image';
import { useContext } from 'react';
import { UserButton, useUser } from '@clerk/nextjs'
import { ShoppingCart } from 'lucide-react'
import CartApis from '../_Utils/CartApis'
import { CartContext } from '../_context/CartContext'
import Cart from './Cart'
function Header() {
  const {cart,setCart}= useContext(CartContext);
  const [isLoggedIn ,setIsLoggedIn]= useState();
  const [openCart,setOpenCart]= useState(false)
  useEffect(()=>{
    setIsLoggedIn(window.location.href.toString().includes('sign-in'))
  },[])
  const {user}=useUser();
  useEffect(()=>{
    user&&getCartItems();
  },[user])
  const getCartItems =()=>{
CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res=>{
  console.log('response data',res.data.data)
  res?.data?.data?.forEach(citem=>{
    setCart((oldCart)=>[
      ...oldCart,
      {
  id:citem.id,
  product:citem?.attributes?.products?.data[0]

      }
    ])
  })

})
  }
  return !isLoggedIn && (
    <header className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
        <Image src='/logo.svg' alt='logo 'width={50}height={50}/>
        </div>
  
        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition font-bold hover:text-gray-500/75" href="/"> Home </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition font-bold hover:text-gray-500/75" href="#"> Explore </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition font-bold hover:text-gray-500/75" href="#"> Projects </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition font-bold hover:text-gray-500/75" href="#"> About Us </a>
              </li>
  
              <li>
                <a className="text-gray-500 transition font-bold hover:text-gray-500/75" href="#"> Contact US </a>
              </li>
            </ul>
          </nav>
        </div>
  
        <div className="flex items-center gap-4">
        
            {!user ? 
              <div className="sm:flex sm:gap-4">
                 <a
              className="rounded-md bg-btn1 px-5 py-2.5 text-sm  text-white font-bold shadow hover:bg-slate-800"
              href="/sign-in"
            >
              Login
            </a>
            
            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-btn2 px-5 py-2.5 text-sm font-bold text-textbtn hover:bg-slate-900"
                href="/sign-up"
              >
                Register
              </a>
            </div>
          </div>
            :
<div className='flex items-center gap-5'>
<h2 className='flex gap-1 cursor-pointer text-blue-500'>
  <ShoppingCart className='text-blue-500' onClick={()=>setOpenCart(!openCart)}/>({cart.length})</h2>  
  <UserButton afterSignOutUrl='/'/>
{openCart &&  <Cart/>} 
</div>
            
            }
          
  
  
          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header

import React, { useContext } from 'react'
import { CartContext } from '../_context/CartContext'
import Link from 'next/link'
function Cart() {
  const{cart,setCart}=useContext(CartContext)
  return (
    <div className='h-[300px] w-[250px] bg-gray-300 z-10 rounded-md boarder shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto'>
      <div className="mt-4 space-y-6">
    <ul className="space-y-4">
      {cart?.map((item)=>(
        <li key={item?.id} className="flex items-center gap-4">
        <img
          src={item?.product?.attributes?.banner?.data?.attributes?.url}
          alt=""
          className="size-16 rounded object-cover"
        />

        <div>
          <h3 className="text-sm text-gray-900 line-clamp-1">{item?.product?.attributes?.Title}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Category:</dt>
              <dd className="inline">{item?.product?.attributes?.category}</dd>
            </div>

            <div>
              <dt className="inline">Price:</dt>
              <dd className="inline">{item?.product?.attributes?.Price}</dd>
            </div>
          </dl>
        </div>
      </li>
      ))}
      
      </ul>
      </div>
      <div className="space-y-4 text-center mt-5">
      <Link
        href="/cart"
        className="block rounded border bg-btn1 border-gray-600 px-5 py-3 text-sm text-white font-bold font-mono transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart ({cart?.length})
      </Link>
      
      

      <a
        href="/"
        className="inline-block text-sm font-mono text-btn2  underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
    </div>
    
  )
}

export default Cart

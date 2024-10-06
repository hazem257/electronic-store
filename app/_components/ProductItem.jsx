import React from 'react'
import Image from 'next/image'
import { List } from 'lucide-react'
import Link from 'next/link'
function ProductItem({product}) {
  return (
  <div className='p-2 mb-8 hover:border hover:shadow-md rounded-lg border-teal-300 m-2 hover:cursor-pointer  '>
  <Link href={`/product-details/${product?.id}`} >
  <div>
    <center>
<Image src={product?.attributes?.banner?.data?.attributes?.url}
alt='bannar-card'
width={230}
height={100}
className='rounded-t-lg h-[230px] object-cover group-hover:scale-105 '
/>
</center>
<div>
<div className='bg-gray-50 rounded-b-lg  items-center justify-between p-3 w-[300px]'>
  <h2 className='text-[14px] font-bold font-mono line-clamp-1 text-blue-600 '>{product?.attributes.Title}</h2>
  <h3 className='text-[10px] font-mono mt-2 font-bold text-btn1 '>Date: {product?.attributes?.date}</h3>
  <div className='flex items-center justify-between'>
  <h2 className='font-mono font-bold text-[12px] mt-3 mb-3 bg-btn2 rounded-md text-teal-50 w-20 mr-10 '><center>${product?.attributes.Price}</center></h2>

  </div>
  
  <h2 className='text-xs font-mono text-btn1 font-extrabold  flex gap-1 items-center'>
    <List className='w-4 h-4 text-btn2 ' />{product?.attributes?.category}</h2>
    
    
</div>
</div>
</div>
    </Link>
     </div>
  
  )
}

export default ProductItem

import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className='wi2 '>
      {productList.map(item=>(
        <div className='wi ' key={item.id}> <ProductItem product={item} key={item.id} /></div>
  ))}
    </div>
  )
}

export default ProductList

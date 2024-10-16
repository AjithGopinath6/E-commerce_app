import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

function LatestCollections() {

    const {products} =useContext(ShopContext);
    console.log(products)

  return (
    <div>LatestCollections</div>
  )
}

export default LatestCollections
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItems from '../Components/ProductItems';

function Collection() {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(()=>{
    setFilterProducts(products);
  },[])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={()=> setShowFilter(!showFilter)} className='flex my-2 text-xl  items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORUES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'men'}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'women'}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'kids'}/>Kids
            </p>
          </div>
        </div>
        {/* sub category filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Selection sort */}
          <select className='border border-gray-400 px-2'>
            <option value="Relevent">Sort by Relevent</option>
            <option value="Low-to-high">Sort by Low to High</option>
            <option value="High-to-low">Sort by High to low</option>
          </select>
        </div>
        {/* Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            products.map((item,index)=>{
              return(
                <ProductItems key={index} id= {item.id} name={item.name} image={item.image} price={item.price} />
              )
            })
          }

        </div>

      </div>
    </div>
  )
}

export default Collection
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItems from '../Components/ProductItems';

function Collection() {

  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item!==e.target.value));
    }
    else{
      setCategory(prev=>[...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e)=>{
    if(subcategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = (e) => {

    let productCopy = products.slice();

    if (showSearch && search){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item=> category.includes(item.category));
    }

    if (subcategory.length > 0) {
      productCopy = productCopy.filter(item=> subcategory.includes(item.subCategory));
    }

    setFilterProducts(productCopy);
  }

  const sortFilter = () => {

    let fpCopy = filterProducts.slice();
    
    switch(sortType.toLowerCase()){
      case 'low-to-high':
        setFilterProducts(fpCopy.sort((a, b)=>(a.price - b.price)));
        break;

      case 'high-to-low':
        setFilterProducts(fpCopy.sort((a, b)=> (b.price - a.price)));
        break;

      case 'relevant':
        applyFilter();
        break;

      default:
        applyFilter();
    }
    // setFilterProducts(fpCopy);
  } 


  // useEffect(()=>{
  //   setFilterProducts(products);
  // },[]) its not needed. because it is already applied in applyFilter

  useEffect(() => {
    applyFilter();
  },[category,subcategory, search, showSearch]);

  useEffect(()=>{
    sortFilter();
  },[sortType, products, category, subcategory])

  // useEffect(()=>{
  //   console.log(subcategory);
  // },[subcategory])

  

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
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
        {/* sub category filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Selection sort */}
          <select  onChange={(e)=>setSortType(e.target.value)} className='border border-gray-400 px-2'>
            <option value="relevant">Sort by Relevent</option>
            <option value="low-to-high">Sort by Low to High</option>
            <option value="high-to-low">Sort by High to low</option>
          </select>
        </div>
        {/* Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>{
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
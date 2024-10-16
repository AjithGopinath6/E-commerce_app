import React, { useContext, useEffect , useState } from 'react'
import Title from './Title';
import { ShopContext } from '../Context/ShopContext';
import ProductItems from './ProductItems';

function BestSeller() {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    // console.log(bestSeller);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.
            bestseller)); 
        setBestSeller(bestProduct.slice(0,5));
    },[])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'Best'} text2={' Seller'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis eaque ex natus omnis id debitis rerum quisquam, sapiente quod. Labore cumque totam blanditiis repellat eum odit consectetur eos? Ea!</p>
        </div>
        {/* Rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index)=>(
                    <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller
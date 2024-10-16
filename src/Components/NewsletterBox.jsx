import React from 'react'

function NewsletterBox() {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium consequuntur nemo deserunt harum, itaque similique debitis ea neque inventore repudiandae minima sapiente, ex nesciunt facere molestiae enim sed vero.</p>
        <form onSubmit={onSubmitHandler} className='ww-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder="Enter your email" required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>

    </div>
  )
}

export default NewsletterBox
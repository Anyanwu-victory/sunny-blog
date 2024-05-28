import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
       <section className='flex flex-col items-center bg-[#eed311] justify-center text-center h-screen'>
        <h1 className='uppercase font-bold text-4xl
        tracking-wide mb-6 md:text-6xl lg:text-8xl  text-[#3e1943]'> 
        Sunny's Blog
        </h1>

        <button>
          <Link to="/blog" className='py-2 px-6 rounded
           shadow-lg  bg-white  hover:bg-[#3e1943] hover:text-white border-2
           border-[#3e1943] transition-all duration-500
             font-bold text-[#3e1943]'>
             Read my blog posts
          </Link>
        </button>
       </section>
      
       {/* Content */}
      

    </div>
    </>
  )
}

export default Home
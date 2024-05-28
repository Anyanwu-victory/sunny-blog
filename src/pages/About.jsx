import React from 'react'
import Person from '../assets/images/bannerImgOne.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className=' bg-[#f0d829] mt-0 w-full flex
       justify-center md:h-[43.4rem] h-[54rem] items-center mx-auto md:flex  md:justify-normal '>
       <div className=' md:mx-14  md:flex mx-5 md:my-[7rem] '>
        <img src={Person} 
        className=' object-cover bg-no-repeat h-[25rem]  md:h-[37rem] 
        md:ml-[3.3rem] md:pr-[3rem] md:w-1/2'/>

        
       <div className='md:ml-[3rem] mx-5 justify-center md:w-1/2 items-center 
       mt-10 space-y-3 md:space-y-4 '>
           <h1 className='uppercase font-bold  text-[#3e1943] md:text-6xl text-3xl text-center'> Victory Smithe</h1>
           <h4 className='uppercase text-center text-black'>Programmer, Tech Entiuist , Blogger, Student</h4>
           <p className='bio leading-loose md:pt-10 md:mx-[2rem] md:pb-[2rem] pb-[1rem]  text-[#3e1943] text-center '>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Harum repellat sequi, modi culpa inventore fugit quia, 
        perspiciatis hic earum temporibus sunt atque repudiandae doloremqu
        e! Iusto nostrum non possimus veniam eveniet .
           </p>
           
       

        <button className="py-2 px-6 rounded shadow flex justify-center   text-[#3e1943] text-center
         bg-white hover:bg-[#3e1943] border-2 mx-[8rem] lg:mx-[12rem] border-[#3e1943]
          transition-all duration-500
       hover:text-white font-bold">
        <Link to="/blog"> Read my Blogs</Link>
      </button>
  


       </div>
       </div>
       
      </section>
        
    </>
  )
}

export default About
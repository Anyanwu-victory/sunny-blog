import React from 'react'
import Person from '../assets/images/bannerImgOne.jpg';
import Email from '../assets/images/email.svg';

const About = () => {
  return (
    <>
      <section className=' bg-slate-950 mt-0 w-full flex
       justify-center md:h-[43.4rem] h-[45rem] items-center mx-auto md:flex  md:justify-normal '>
       <div className=' md:mx-14 md:mt-[4rem] md:flex mx-5 '>
        <img src={Person} 
        className=' object-cover bg-no-repeat h-[25rem]  md:h-[37rem] 
        md:ml-[3.3rem] md:pr-[3rem] md:w-1/2'/>

        
       <div className='md:ml-[3rem] mx-5 text-white justify-center md:w-1/2 items-center 
       mt-10 space-y-3 md:space-y-4 '>
           <h1 className='uppercase bold text-emerald-600 md:text-6xl text-3xl text-center'> Victory Smithe</h1>
           <h4 className='uppercase text-center'>Programmer, Tech Entiuist , Blogger, Student</h4>
           <p className='bio leading-loose md:pt-10 '>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Harum repellat sequi, modi culpa inventore fugit quia, 
        perspiciatis hic earum temporibus sunt atque repudiandae doloremqu
        e! Iusto nostrum non possimus veniam eveniet .
           </p>
           
        <div className='flex flex-col'>
          <span>
            <img src={Email} className='fill-emerald-500 text-white'/>
            Email address</span>
           <span>Social media </span>           
        </div>



       </div>

       <div className='bio'>
        

       </div>
       </div>
       
      </section>
        
    </>
  )
}

export default About
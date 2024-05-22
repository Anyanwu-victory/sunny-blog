import React,{useState, useEffect} from 'react';
import logoFlower from "../assets/images/flower.png";
import logoSunny from "../assets/images/logoSunny.png";
import { fetchUser } from '../utils/fetchUser';
import CategoryList from './CategoryList';


const Comment = () => {

  const handleSubmit = () => {
// i want that the text written is pushed to the comment schemma and saved.
//  i want that pushed text to be displayed on the comment section .
//  i want the comment displayed to have the user image ,name,comment to be displayed respectively on the image section, name section, text secton divs.
// I want only signed in users to be able to make comment . 
//  i want the users to be able to read comments on each categories they will clicked 
//  They will be a button that displays categories .
// and make comment under that category

  }

  return (
    <>

    <div className='mx-5 md:mx-8'> 
    {/* I want a category section */}
       <CategoryList/>
       
        <span>
            <h1 className='font-bold text-3xl mb-6'>  SunKisses(94)</h1> 
        </span>

         <div  className='comment-content border border-emerald-700 max-h-full h-full p-[2rem] space-y-7'>
         {[...Array(6).keys()].map((index) => (

           <span className='flex space-x-4 flex-col border border-zinc-300 p-[1rem] bg-slate-500 text-white'>
           <span className='flex space-x-3'>
           <img src={logoFlower} className='w-8 h-8 border rounded-full border-zinc-500' />
            <h4>Anyanwu Victory</h4>
           </span>
            <p className='text-start pt-4'> I really did enjoy the blog that talked about Big techs ruining us.
            what do you guys think?</p>
            </span>

         ))}
         </div>
           {/*Sticky commet section  */}
        <span className='flex bottom-0 top-0 mt-[34rem] sticky bg-white'>
            <img src={logoSunny} className='w-20 h-20'/>
            <input type='text' placeholder='Add to the discussion '
            className='md:w-full w-[24rem] h-[4rem] border border-emerald-500 text-start
             focus:border-yellow-400 sticky '/>
             <button 
             onSubmit={handleSubmit} className='text-[18px] font-semibold left-[86rem] pt-5 text-yellow-300 absolute  '>submit</button>
        </span>
    </div>

    </>
  )
}

export default Comment
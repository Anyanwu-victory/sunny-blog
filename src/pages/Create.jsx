import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import client from '../client';
import { category } from '../utils/data';


const Create = ({ user }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [slug, setSlug] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(false);
  const [categories, setCategories] = useState([]);
  const [imageAsset, setImageAsset ] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(false);

  const navigate = useNavigate();
 
  const uploadImage = (e) => {
    const { type, name } = e.target.files[0];

    console.log('Image type:', type);
    console.log('Image name:', name);

    if(type === 'image/png' || type === 'image/PNG' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/tiff'){
      setWrongImageType(false);
      setLoading(true);

      client.assets 
        .upload('image', e.target.files[0], { contentType: type, filename: name })
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Image upload error', error);
        })
      
    } else {
      setWrongImageType(true);
    }
  }

  const savePost = () => {
    if(title && slug && body && imageAsset?.id && category){
      const doc = {
        _type: 'post',
        title,
        date,
        slug,
        body,
        mainImage: {
          _type : 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset?._id,
          }
        },
        userId: user._id,
        postedBy: {
          _type: 'postedBy',
          _ref: user._id
        },
        category,
      }

      async function createAndNavigate() {
        try {
            await client.create(doc); // Wait for post creation
            await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 llllseconds
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
      }

      createAndNavigate();

    } else {
      setFields(true);

      setTimeout(() => setFields(false), 2000)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
      {fields && (
        <p className='text-red-500 mb-5 text-xl transition-all duration-150 ease-in'>
          Please fill in all the fields.
        </p>
      )}
      <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-[60%] w-full' >
        <div className='bg-secondaryColor p-3 flex flex-0.7 w-full'>
          <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
            {loading }
            {wrongImageType && <p>Wrong image type</p>}
            {!imageAsset ? (
              <label>
                <div className='flex flex-col items-center justify-center h-full'>
                  <div className='flex flex-col justify-center items-center'>
                    <p className='font-bold text-2xl'>
                      <AiOutlineCloudUpload />
                    </p>
                    <p className='text-lg'>Click to upload</p>
                  </div>
                  <p className='mt-32 text-gray-400'>
                    Add Cover Image
                  </p>
                </div>
                <input 
                  type='file'
                  name='upload-image'
                  onChange={uploadImage}
                  className='w-0 h-0'
                />
              </label>
            ) : (
              <div className='relative h-full'>
                <img src={imageAsset?.url} alt='uploaded-pic' className='h-full w-full' />
                <button
                  type='button'
                  className='absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
                  onClick={() => setImageAsset(null)}
                >
                  <MdDelete />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className='flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full'>
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Add your title here'
            className='outline-none text-2xl sm:text-3xl font-bold border-b-2
             border-gray-200 p-2 '
          />
          {user && (
            <div className='flex gap-2 my-2 items-center bg-white rounded-lg'>
              <img 
                src={user.image}
                className='w-10 h-10 rounded-full'
                alt='user-profile'
              />
              <p className='font-bold'>{user.username}</p>
            </div>
          )}
          <input 
            type='text'
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder='What is your post about'
            className='outline-none text-base sm:text-lg border-b-2 border-gray-200 
            p-2'
          />

          <input 
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2'
          />
          <textarea 
            type='text'
            max-length= '5000'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Start here'
            className='outline-none pb-[15rem] text-base text-start sm:text-lg border-b-2
             border-gray-200 '
          />
          <div className='flex flex-col'>
            <div>
              <p className='mb-2 font-semibold text-lg sm:text-xl'>Choose Post category</p>
              <select
                onChange={(e) => setCategories(e.target.value)}
                className='outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
              >
                <option value="other" className='bg-white'>Select category</option>
              
                {categories.map((category, index) => (
                  <option key={index} value={category.title} className='text-base border-0 outline-none capitalize bg-white text-black'>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex justify-end items-end mt-5'>
                <button
                  type='button'
                  onClick={savePost}
                  className='bg-yellow-300 text-white font-bold p-3 rounded-full w-30 outline-none'
                >
                  Publish Post
                </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Create;
import React, {useState, useEffect} from 'react';
import { category } from '../utils/data';
import client from '../client';
import Error from './Error';

const CategoryList = ({ setSelectedCategory }) => {
    const[categories, setCategories] = useState([]);
    const [error, setError] = useState('');
  
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const query = category;
          const data = await client.fetch(query);
          setCategories(data);
        } catch (err) {
          setError(<Error/>);
          console.error('Error fetching data:', <Error/>);
        }
      };
  
      fetchCategories();
    }, []);
  
    if (error) {
      return <div>Error fetching data: {error.message}</div>;
    }

  return (
    <>

    <div className='flex space-x-4 justify-center'>
        <h1 className='text-1xl'>categories:</h1>
        {categories.map((category) => (
          <button key={category._id}  onClick={() => setSelectedCategory(category)}
          className='border max-w-full rounded-full px-4 py-1'>
            {category.title}</button>
        ))}

       </div>

    </>
  )
}

export default CategoryList;
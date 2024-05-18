import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { blog } from '../utils/data';
import client from '../client';
import BlockContent from "@sanity/block-content-to-react";


const Blog = ({}) => {
const [posts, setPosts] = useState([]);

useEffect(() => {
  // Define your GROQ query
  const query = blog

  // Fetch data using the client
  client.fetch(query)
    .then((data) => setPosts(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);


  return (
    <section className="bg-slate-900 min-h-screen px-4 md:px-14 py-6">
      <h1 className="uppercase text-white text-4xl md:text-6xl tracking-widest mt-5 mb-10 text-center">
        Blogs Page
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 
      lg:grid-cols-4"> 
       {posts.map((post) => (
        <article
        key={post.slug.current}
        className="max-w-md mx-auto bg-white border
         border-gray-200 rounded-lg shadow"
      >
        <a href="#">
          <img
            className="rounded-t-lg w-[30rem] h-[15rem] object-cover"
            src={post.mainImage.asset.url}
            alt={post.title}
          />
        </a>
        <div className="p-5">
       
        <span className='tracking-loose text-[13px]'>   {new Date(post.date).toLocaleDateString()}</span>  

          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h5>
          </a>
          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           <BlockContent
         blocks={post.summary}
         projectId = "m4oqruh7"
         dataset= "production"
        />  
          </p>

          <Link to={`/blog/${post.slug.current}`}>
           <button
            className="inline-block  px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
           >
            Read about Blog
          </button>
          </Link>
        </div>
      </article>

      ))}
      </div>
    </section>
  );
};

export default Blog;

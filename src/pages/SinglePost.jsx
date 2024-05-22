import React,{useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import client from "../client"
import BlockContent from "@sanity/block-content-to-react";
import Comment from './Comment';
import Loader from './Loader';

// Import statements...

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
          title,
          author -> {
            name,
            image {
              asset -> {
                url
              }
            }
          },
          date,
          body, 
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => {
        setSinglePost(data[0]);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching single post:', error);
        setIsLoading(false); // Set loading to false if there's an error
      });
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <Loader/>
      ) : (
        <section className='px-5 xl:max-w-6xl xl:mx-auto '>
          <div>
          <h1 className='uppercase font-bold text-4xl text-center lg:text-6xl'>
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className='md:h-1/3 rounded-t my-6'
            />
          )}
          <span className='my-3 inline-flex space-x-4'>
            {singlePost.author && singlePost.author.image &&
             singlePost.author.image.asset && (
              <img
                src={singlePost.author.image.asset.url}
                alt={singlePost.author.name}
                className='w-[50px] h-[50px] rounded-full'
              />
            )}
              
              <span>
              <h3 className='font-bold text-2xl '>
                {singlePost.author ? singlePost.author.name : 'Unknown author'}</h3>
              <h6 className='text-1xl'>Posted on {singlePost.date}</h6>
              </span>
          </span>
          <div className='md:leading-2 my-6'>
            <BlockContent
              blocks={singlePost.body}
              projectId='m4oqruh7'
              dataset='production'
            />
          </div>
          <button className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold'>
            <Link to='/blog'>Read more articles</Link>
          </button>
          </div>
           
          <hr className='w-full h-2 mt-[2rem] fill-black'/>

          {/* Render comment component */}
          <div>
            {/* 
            I want for the differnet sigle post displayed each should show comments 
            related to this category
             */}
           <Comment/>
          </div>
          
        </section>

       
      )}
    </>
  );
};

export default SinglePost;

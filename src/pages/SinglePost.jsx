import React,{useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import client from "../client"
// import BlockContent from "@sanity/block-content-to-react";



const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams()

  useEffect(() => {
    client.fetch(
      `*[slug.current == "${slug}"] {
        title,
        body, 
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
        
      }`
    ).then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])


  return (
    <>
    {isLoading ? <h1>Loading...</h1>:
    <section className='px-5 xl:max-w-6xl xl:mx-auto'>
      <h1 className='uppercase font-bold text-4xl text-center lg:text-6xl'>
        {singlePost.title }
        </h1>
      {
        singlePost.mainImage && singlePost.mainImage.asset && (

          <img src={singlePost.mainImage.asset.url} alt={singlePost.title}
           title={singlePost.title}
           className='md:h-1/3 rounded-t'
           />
        )
      }
      
      <p>By Thomas Sankara</p>
      {/* <div className='md:leading-1'>
        <BlockContent
         blocks={singlePost.body}
         projectId = ""
         dataset= "production"
        />
      </div> */}

      <button>
        <Link to="/blog"> Read more articles</Link>
      </button>
    </section>
    }
    </>
  )
}

export default SinglePost
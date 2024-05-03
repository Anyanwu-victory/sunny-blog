import React , {useState, useEffect} from 'react'
import client from "../client";

const Blog = () => {
  const [posts,setPosts] = useState([])
  return (
    <>
    <section>
      <h1>Blog page</h1>
    </section>
    </>
  )
}

export default Blog
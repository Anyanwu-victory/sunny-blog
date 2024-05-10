import React, { useState, useEffect } from "react";
import { createClient } from "../client";
import { post } from "../utils/data";
import { Blog } from "../pages"; 


const BlogFeed = () => {
    const [blog,setBlog] = useState(null);

    useEffect(() => {
        const query = post;
  
        createClient
          .fetch(query)
          .then((data) => {
            setBlog(data);
          })
          .catch((error) => {
              //console.log('Error fetching Content data:', error);
          })
      }, [])

  return (
    <div>
        <Blog post={blog} />
    </div>
  )
}

export default BlogFeed

export const post = `*[__type == "post" ] {
   title,
   slug,
   category,
   author,
   body,
   mainImage {
    asset -> {
        _id,
        url
    },
    alt
   }
  }`
  
  
export const author = `*[_type == "author" ] {
    image {
      asset -> {
        url
      }
    },
    name,
    bio,
    about,
    info
  }`

export const blog = `*[_type == 'post' ] {
    _id,
   title,
   slug,
   category,
   author -> {
    name,
   },
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

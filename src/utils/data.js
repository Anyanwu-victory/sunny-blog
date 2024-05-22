
export const blog = `*[_type == 'post' ] {
    _id,
   title,
   date,
   slug,
   category,
   summary,
   author -> {
    name,
   },
   body,
   mainImage {
    asset -> {
        _id,
        url
    },
    alt,
    
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

  export const category = `*[_type == "category"] {
    _id,
   title,
   description,
  }`

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

  export const user = `*[_type == "user"] {
    _id,
    username,
    email,
    image
  }`

  export const comment = `*[_type == "comment"]{
    _id,
    comment,
    postedBy->{
      _id,
      username,
      image
    }
  }`

  export const postDetails = (postId) => {
    const query = `*[_type == "comment" && post._ref == "${postId}"]{
      _id,
      text,
      user->{
        _id,
        username,
        image
      }
    }`

    return query;
  };

  
  export const mail = `*[_type == "mail"]{
    _id,
    name,
    email,
    message
  }`
  
  
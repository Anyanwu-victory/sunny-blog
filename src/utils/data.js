
export const post = `*[_type == "post" ] {
   title,
   slug,
   body,
   mainImage {
    asset -> {
        _id,
        url
    },
    alt
   }
  }`
  
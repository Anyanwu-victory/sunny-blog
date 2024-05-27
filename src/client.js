import  { createClient } from "@sanity/client"

const client = createClient ({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: "production",
    userCdn: false, 
    token: process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
    apiVersion: "2024-05-07"
})


export default client;

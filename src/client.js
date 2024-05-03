import client from "@sanity/client"

export default client({
    projectId: "appo4pjk",
    dataset: "production",
    userCdn: true, 
    apiVersion: "2024-05-03"
})
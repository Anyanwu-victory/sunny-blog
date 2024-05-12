import client, { createClient } from "@sanity/client"

export default client({
    projectId: "m4oqruh7",
    dataset: "production",
    userCdn: true, 
    apiVersion: "2024-05-07"
})
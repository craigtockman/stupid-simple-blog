require("dotenv").config()
const NetlifyAPI = require("netlify")
const client = new NetlifyAPI(process.env.NETLIFY_TOKEN)

module.exports = {
  env: {
    NETLIFY_TOKEN: process.env.NETLIFY_TOKEN,
  },
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/add-blog-post": { page: "/add-blog-post" },
      "/contact": { page: "/contact" },
      "/message-sent": { page: "/message-sent" },
    }
    const result = await client.listFormSubmissions({
      // Enter YOUR netlify form id here. This one is mine.
      form_id: "5e06ad5c43277b00085c6a8a",
    })
    const makePaths = () => {
      result.map((post) => {
        const { id } = post
        paths[`/blog-post/${id}`] = {
          page: "/blog-post/[id]",
          query: { id: `${id}` },
        }
      })
    }
    makePaths()
    return paths
  },
}

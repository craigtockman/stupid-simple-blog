const fs = require('fs')
require('dotenv').config()

// Awaken the Netlify API
const NetlifyAPI = require('netlify')
// Tell them who you are. This is my key m-efers!
const client = new NetlifyAPI(process.env.NETLIFY_TOKEN)

// Ok, if your thorough the looking glass, find your form submissions.
async function getSomeData() {
  const formSubmissions = await client.listFormSubmissions({
    // Enter YOUR netlify form id here. This one is mine. You don't want my dog pics.
    form_id: '5e06ad5c43277b00085c6a8a',
  })
  // Let's create a sitemap for the love of jesus.
  const homeTime = new Date().toISOString()
  const sitePages = {
    '/': {
      page: '/',
      publishedSitemap: homeTime,
      publishedRSS: 'Fri, 03 Mar 2006 03:36:28 GMT',
      title: 'Stupid Simple Blog | Homepage',
      description:
        'A stupid simple free Next.js photo blog with a Netlify form database, infinite scroll, metatags and more.',
    },
    '/about': {
      page: '/about',
      publishedSitemap: '2019-12-27T03:36:27.377Z',
      publishedRSS: 'Fri, 27 Dec 2019 03:36:28 GMT',
      title: 'Stupid Simple Blog | About',
      description: 'Stupid Simple Blog about page',
    },
    '/add-blog-post': {
      page: '/add-blog-post',
      publishedSitemap: '2019-12-27T03:36:27.377Z',
      publishedRSS: 'Fri, 27 Dec 2019 03:36:28 GMT',
      title: 'Stupid Simple Blog | Add a blog post',
      description: 'Stupid Simple Blog add a blog post page',
    },
    '/contact': {
      page: '/contact',
      publishedSitemap: '2019-12-27T03:36:27.377Z',
      publishedRSS: 'Fri, 27 Dec 2019 03:36:28 GMT',
      title: 'Stupid Simple Blog | Contact',
      description: 'Stupid Simple Blog contact page',
    },
    '/message-sent': {
      page: '/message-sent',
      publishedSitemap: '2019-12-27T03:36:27.377Z',
      publishedRSS: 'Fri, 27 Dec 2019 03:36:28 GMT',
      title: 'Stupid Simple Blog | Message sent',
      description: 'Stupid Simple Blog',
    },
  }
  // Let's map a map of our map and slap the face off of my face.
  formSubmissions.map((post) => {
    const { id, created_at, name, data } = post
    const time = created_at.toString()
    const timeSitemap = new Date(time).toISOString()
    const timeRSS = new Date(time).toUTCString()
    sitePages[`/blog-post/${id}`] = {
      page: `/blog-post/${id}`,
      publishedSitemap: timeSitemap,
      publishedRSS: timeRSS,
      title: `${name} just made a test post at the super simple blog.`,
      description: `${data.location.replace(/&/g, 'and')}`,
    }
    // Let's write it to a file to use it all over the place.
    let siteData = JSON.stringify(sitePages)
    fs.writeFileSync(`db/sitemap.json`, siteData)
  })
}
getSomeData()

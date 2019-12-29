import React, { useState, useEffect } from 'react'
import FaceIcon from '@material-ui/icons/Face'

export default function Index() {
  // Connect to Netlify API
  const NetlifyAPI = require('netlify')
  const client = new NetlifyAPI(process.env.NETLIFY_TOKEN)
  const [data, setData] = useState([])

  useEffect(() => {
    let isSubscribed = true
    const fetchData = async () => {
      const result = await client.listFormSubmissions({
        // Enter YOUR netlify form id here. This one is mine.
        form_id: '5e06ad5c43277b00085c6a8a'
      })
      // Make the netlify timestamp pretty and readable.
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      const newBlogs = result
        .map((blog, index) => ({
          name: blog.data.name,
          timestamp: new Date(blog.created_at).toLocaleDateString(
            'en-US',
            options
          ),
          location: blog.data.location,
          ...(blog.data.photo ? { photo: blog.data.photo.url } : {}),
          id: blog.id
        }))
        .reverse()
      setData(newBlogs)
    }
    fetchData()
    return () => (isSubscribed = false)
  }, [])

  const allBlogs = data
  const totalBlogs = allBlogs.length
  //The number of blogs to load on page load. 5
  const startTotalBlogs = totalBlogs - 5
  const [start, setStart] = useState(startTotalBlogs)
  const sliceOfBlogs = allBlogs.slice(start, totalBlogs)

  // react infinite scroll stuff with hooks
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) return
    fetchMoreListItems()
  }, [isFetching])

  function handleScroll() {
    const scrollSpot = window.innerHeight + document.documentElement.scrollTop
    const scrollMax = document.documentElement.offsetHeight - 500

    if (scrollSpot < scrollMax || isFetching) return
    setIsFetching(true)
  }

  function fetchMoreListItems() {
    setTimeout(() => {
      setStart(start - 10)
      setIsFetching(false)
    }, 100)
  }

  return (
    <>
      <h4 className='center'>Check out these {totalBlogs} blog posts below.</h4>
      <ul>
        {sliceOfBlogs
          .map(blog => (
            <li key={blog.id}>
              <span className='blogTop'>
                <span>
                  <FaceIcon style={{ fontSize: 50, marginLeft: '-4px' }} />
                </span>
                <div>
                  <a href={`blog-post/${blog.id}`} className='name'>
                    {blog.name}
                  </a>
                  <br />
                  <span>Posted on {blog.timestamp}</span>
                </div>
              </span>
              <p>
                <span
                  dangerouslySetInnerHTML={{
                    __html: blog.location
                      .substring(0, 500)
                      .replace(/\n/g, '<br />')
                  }}
                />
                <span>
                  ... <a href={`blog-post/${blog.id}`}>Read more</a>
                </span>
              </p>
              {blog.photo && <img src={blog.photo} />}
            </li>
          ))
          // Show newest posts first
          .reverse()}
      </ul>
      <style jsx>
        {`
          .blogTop {
            color: #000;
            display: flex;
            margin-bottom: 10px;
          }
          h4 {
            margin: 20px 0 0;
          }
          img {
            margin: 20px 0 0;
            height: auto;
            max-width: 100%;
          }
          ul {
            padding: 0;
            list-style: none;
          }
          li {
            border-top: 1px solid #f2f2f2;
            margin: 44px 0;
            padding: 40px 0 0;
          }
          li p {
            color: #666
            margin: 0 0 4px;
          }
          .name {
            font-weight: bold;
            font-size: 1.2em;
          }
        `}
      </style>
    </>
  )
}

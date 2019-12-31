import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import MetaTags from '../components/MetaTags'
import InfiniteList from '../components/InfiniteList'
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Title from '../components/Title'
import { Button } from '@material-ui/core'

export default function Index() {
  return (
    <>
      <MetaTags
        title='Stupid Simple Blog'
        desc='A simple next.js, netlify form database blog with material ui, metatags, infinite scroll and more.'
        image='https://stupid-simple-blog.com/blog_01.jpeg'
      />
      <Layout>
        <Title />
        <div className='center'>
          <img
            src='/blog_01.jpeg'
            alt='Bubba Sparks Jr'
            className='imgShadow'
          />
          <p className='courtesty'>
            <a href='https://craigtockman.com/'>Courtesy of Craig Tockman</a>
          </p>
          <p className='btn'>
            <Link href='/add-blog-post' as='/add-blog-post'>
              <Button
                variant='contained'
                color='primary'
                startIcon={<CloudUploadIcon height='24' width='24' />}
              >
                Add a blog post
              </Button>
            </Link>
          </p>
        </div>
        <InfiniteList />
        <style jsx>
          {`
            img {
              height: auto;
              max-width: 100%;
            }
            .btn {
              margin: 20px 0 0;
            }
          `}
        </style>
      </Layout>
    </>
  )
}

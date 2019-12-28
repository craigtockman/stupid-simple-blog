import Layout from '../components/MyLayout'
import MetaTags from '../components/MetaTags'

export default function About() {
  return (
    <>
      <MetaTags
        title='Stupid Simple Blog | About'
        desc='A simple next.js, netlify form database blog with material ui, metatags, infinite scroll and more.'
        image='https://stupid-simple-blog.com/blog_01.jpeg'
        url='about'
      />
      <Layout>
        <h1>About Stupid Simple Blog</h1>
        <h2>Tell your mom about this website and thanks for visiting.</h2>
        <p>
          Learn how to build this site here:{' '}
          <a href='https://medium.com/@craigory/build-a-stupid-simple-serverless-next-js-blog-f2bb84f1e7e'>
            Click here
          </a>
        </p>
        <style jsx>
          {`
            li {
              margin: 40px 0;
            }
            ol {
              margin-left: 20px;
            }
            img {
              margin-top: 10px;
            }
          `}
        </style>
      </Layout>
    </>
  )
}

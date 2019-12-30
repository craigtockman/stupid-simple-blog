import Layout from '../components/MyLayout'
import MetaTags from '../components/MetaTags'
import Title from '../components/Title'

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
        <Title
          h1={'About this stupid Blog'}
          h2={'Tell your mom about this blog and thanks for visiting.'}
        />
        <p>
          Learn how to build this blog here:
          <br />
          <a href='https://medium.com/@craigory/build-a-stupid-simple-serverless-next-js-blog-f2bb84f1e7e'>
            https://medium.com/@craigory/build-a-stupid-simple-serverless-next-js-blog-f2bb84f1e7e
          </a>
        </p>
        <p>
          Get the code here:
          <br />
          <a href='https://github.com/craigtockman/stupid-simple-blog'>
            https://github.com/craigtockman/stupid-simple-blog
          </a>
        </p>
        <h2>What's included</h2>
        <ul>
          <li>Continuous deployment with Netlify, React.js and Next.js</li>
          <li>A Netlify blog post form.</li>
          <li>Seo friendly dynamic meta-tag component.</li>
          <li>RSS and Sitemap xml generator.</li>
          <li>
            Infinite scroll homepage that queries the content posted to Netlify
            from the form.
          </li>
          <li>Material UI styles.</li>
          <li>Responsive styles and media queries.</li>
          <li>A simple pagination pager.</li>
          <li>Email notifications of new blog posts.</li>
          <li>React hooks only up in here.</li>
          <li>A sweet header that follow you down the screen.</li>
        </ul>
        <style jsx>
          {`
            li {
              margin: 4px 0;
            }
            ul {
              margin-left: 16px;
            }
          `}
        </style>
      </Layout>
    </>
  )
}

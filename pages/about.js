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
          Learn how to build this site here:
          <br />
          <a href='https://medium.com/@craigory/build-a-stupid-simple-serverless-next-js-blog-f2bb84f1e7e'>
            https://medium.com/@craigory/build-a-stupid-simple-serverless-next-js-blog-f2bb84f1e7e
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

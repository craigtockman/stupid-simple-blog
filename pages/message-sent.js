import Layout from '../components/MyLayout'
import MetaTags from '../components/MetaTags'
import Title from '../components/Title'

export default function MessageSent() {
  return (
    <>
      <MetaTags
        title='Stupid Simple Blog | Message Sent'
        desc='Your message was sent'
        image='https://stupid-simple-blog.com/blog_01.jpeg'
        url='mesaage-sent'
      />
      <Layout>
        <Title h2={'Your messages was sent'} />
        <p>I'll respond when I get back from Palm Springs. Jeez!!!</p>
        <img
          alt='Bubba Sparks'
          src='https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/2f62ec78-d104-481b-a85c-21134bc0e001/790389BC-0890-48D6-B774-B5C6661B9BFB_1_105_c.jpeg'
        />
        <style jsx>
          {`
            img {
              margin-top: 10px;
            }
          `}
        </style>
      </Layout>
    </>
  )
}

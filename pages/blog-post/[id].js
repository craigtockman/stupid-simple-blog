import MetaTags from '../../components/MetaTags'
import Link from 'next/link'
import Layout from '../../components/MyLayout'
import Title from '../../components/Title'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

export default function Post(props) {
  const { name, location, data, id, prevPage, nextPage } = props.result
  return (
    <>
      <MetaTags
        title={name}
        desc={data.location.replace(/&/g, 'and')}
        image={
          data.photo
            ? data.photo.url
            : 'https://stupid-simple-blog.com/blog_01.jpeg'
        }
        url={id}
      />
      <Layout>
        <Title h2={name} />
        <div className="center">
          {data.photo ? (
            <img alt={name} className="imgShadow" src={data.photo.url} />
          ) : (
            <img alt="A chihuahua" className="imgShadow" src="/blog_01.jpeg" />
          )}
        </div>
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: data.location.replace(/\n/g, '<br />'),
            }}
          />
          <p className="btn">
            <span className="arrowBtns">
              {prevPage && (
                <Link href="/blog-post/[id]" as={`/blog-post/${prevPage}`}>
                  <a className="arrowBtn">
                    <ArrowBackIcon
                      fontSize="small"
                      height="16px"
                      width="16px"
                      titleAccess="Previous post"
                    />
                  </a>
                </Link>
              )}
              <Link href="/" as="/">
                <a className="arrowBtn arrowHome">All Blogs</a>
              </Link>
              {nextPage && (
                <Link href="/blog-post/[id]" as={`/blog-post/${nextPage}`}>
                  <a className="arrowBtn">
                    <ArrowForwardIcon
                      fontSize="small"
                      height="16px"
                      width="16px"
                      titleAccess="Next post"
                    />
                  </a>
                </Link>
              )}
            </span>
          </p>
        </div>
        <style jsx>
          {`
            h1 {
              line-height: 1;
              margin: 40px 0;
            }
            .btn {
              margin-top: 28px;
            }
            img {
              height: auto;
              margin-bottom: 28px;
              max-width: 100%;
            }
            .arrowBtns {
              align-items: center;
              display: flex;
              margin: 28px 0;
            }
            a + a {
              margin-left: 8px;
            }
            .arrowBtn {
              display: flex;
              color: #333333;
              border: 1px solid #333;
              border-radius: 4px;
              padding: 2px;
              min-height: 20px;
            }
            .arrowBtn:hover {
              background-color: #eee;
            }
            .arrowHome {
              font-size: 0.875em;
              text-decoration: none;
              padding: 1px 4px;
            }
          `}
        </style>
      </Layout>
    </>
  )
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const NetlifyAPI = require('netlify')
  const client = new NetlifyAPI(process.env.NETLIFY_TOKEN)

  // Get each form submissions id
  const result = await client.listFormSubmission({
    submission_id: id,
  })
  const subs = await client.listFormSubmissions({
    // Enter YOUR netlify form id here. This one is mine.
    form_id: '5e06ad5c43277b00085c6a8a',
  })

  const getAllKeyID = subs.map((entry, index) => {
    const ids = ([index] = entry.id)
    return ids
  })

  // function to get the correct index number based on it's value
  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value)
  }
  // Pagination stuff
  const indexNumber = getKeyByValue(getAllKeyID, id)
  const addNumber = parseInt(indexNumber) - 1
  const subtractNumber = parseInt(indexNumber) + 1

  const prevPage =
    addNumber < subs.length && addNumber > -1 ? subs[addNumber].id : null
  const nextPage = subtractNumber < subs.length ? subs[subtractNumber].id : null

  // Add to our result array
  result['prevPage'] = prevPage
  result['nextPage'] = nextPage
  return {
    result,
  }
}

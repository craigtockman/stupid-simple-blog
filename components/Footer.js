import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import WebIcon from '@material-ui/icons/Web'

function Footer(props) {
  const {
    blogName,
    facebook,
    instagram,
    linkedin,
    trademark,
    twitter,
    website
  } = props
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer>
      <div className='copyright'>
        <span className='copytext'>
          Copyright &copy; {year} {blogName}
          {trademark && <span className='reg'>&reg;</span>}
        </span>
        {website && (
          <a href={website}>
            <WebIcon height='24px' width='24px' titleAccess={website} />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target='_blank'>
            <TwitterIcon height='24px' width='24px' titleAccess='Twitter' />
          </a>
        )}
        {facebook && (
          <a href={`https://www.facebook.com/${facebook}`} target='_blank'>
            <FacebookIcon height='24px' width='24px' titleAccess='Facebook' />
          </a>
        )}
        {linkedin && (
          <a href={`https://www.linkedin.com/${linkedin}`} target='_blank'>
            <LinkedInIcon height='24px' width='24px' titleAccess='LinkedIn' />
          </a>
        )}
        {instagram && (
          <a href={`https://www.instagram.com/${instagram}`} target='_blank'>
            <InstagramIcon height='24px' width='24px' titleAccess='Instagram' />
          </a>
        )}
      </div>
      <style jsx>
        {`
          a {
            color: #333;
          }
          a:hover {
            color: #666;
          }
          footer {
            margin-top: 32px;
          }
          .copyright {
            align-items: center;
            justify-content: flex-start;
            text-align: right;
            display: flex;
            padding: 20px 0 0;
          }
          .copytext {
            position: relative;
            padding-right: 10px;
          }
          .reg {
            position: absolute;
            top: -5px;
            font-size: 10px;
          }
          @media (min-width: 680px) {
            .copyright {
              justify-content: flex-end;
              padding: 20px 10px 0;
            }
          }
        `}
      </style>
    </footer>
  )
}
export default Footer

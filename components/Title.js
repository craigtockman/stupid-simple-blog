function Title(props) {
  const { h1, h2 } = props
  return (
    <div className='center'>
      <a href='/'>
        <h1 className='title'>{h1 ? h1 : 'Stupid Simple Blog'}</h1>
      </a>
      <h2>
        {h2
          ? h2
          : 'A stupid simple free Next.js photo blog with a Netlify form database, infinite scroll, metatags and more.'}
      </h2>
      <style jsx>
        {`
          a {
            color: inherit;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  )
}
export default Title

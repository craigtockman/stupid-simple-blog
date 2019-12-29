import Nav from './Nav'
import HamburgerMenu from './HamburgerMenu'

const layoutStyle = {
  padding: '0 40px',
  maxWidth: 960,
  margin: '10px auto'
}

export default function Layout(props) {
  return (
    <>
      <div className='hamburgerMenu'>
        <HamburgerMenu />
      </div>
      <Nav />
      <div style={layoutStyle}>
        {props.children}
        <style jsx global>{`
          // Oh you don't like my global style? Fine change it here.
          @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
          a,
          abbr,
          acronym,
          address,
          applet,
          article,
          aside,
          big,
          blockquote,
          body,
          caption,
          cite,
          code,
          dd,
          del,
          details,
          dfn,
          div,
          dl,
          dt,
          em,
          fieldset,
          figcaption,
          figure,
          font,
          footer,
          form,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          nav,
          hgroup,
          html,
          iframe,
          ins,
          kbd,
          label,
          legend,
          li,
          menu,
          nav,
          object,
          ol,
          p,
          pre,
          q,
          s,
          samp,
          section,
          small,
          span,
          strike,
          strong,
          sub,
          sup,
          table,
          tbody,
          td,
          tfoot,
          th,
          thead,
          tr,
          tt,
          ul,
          var {
            border: 0;
            margin: 0;
            padding: 0;
            font-family: inherit;
            font-size: 100%;
            font-style: inherit;
            font-weight: inherit;
            vertical-align: baseline;
          }

          html {
            font-size: 16px;
          }

          body {
            background-color: white;
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            line-height: 1.45;
            color: #333;
          }
          a {
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          p {
            font-size: 1.125em;
            margin-bottom: 1em;
          }

          .courtesty {
            margin: 0;
            text-align: left;
            font-size: 10px;
          }

          h1,
          h2,
          h3,
          h4,
          h5 {
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            line-height: 1.5;
          }

          h1 {
            font-size: 3.052em;
          }

          h2 {
            font-size: 1.563em;
            margin-bottom: 28px;
          }

          h3 {
            font-size: 1.25em;
          }
          a {
            color: #3f51b5;
          }
          img {
            height: auto;
            max-width: 100%;
          }
          h1 {
            margin: 20px 0 0;
          }
          .hamburgerMenu {
            left: 20px;
            position: absolute;
            top: 10px;
          }
          .center {
            text-align: center;
          }
          @media (max-width: 628px) {
            h1 {
              font-size: 1.3em;
              margin: 20px 0 0;
            }
            h2 {
              font-size: 0.95em;
            }
            .hamburgerMenu {
              left: 10px;
            }
          }
        `}</style>
      </div>
    </>
  )
}

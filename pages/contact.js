import Layout from '../components/MyLayout'
import MetaTags from '../components/MetaTags'
import Title from '../components/Title'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%'
  }
}))

export default function Contact() {
  const classes = useStyles()
  return (
    <>
      <MetaTags
        title='Stupid Simple Blog | Contact'
        desc='Contact me about this blog.'
        image='https://stupid-simple-blog.com/blog_01.jpeg'
        url='about'
      />
      <Layout>
        <Title
          h1={'Contact us'}
          h2={'Got an inquiry about this stupid blog?'}
        />
        <p>Fill out this form and we will respond as soon as possible.</p>
        <form
          name='contact'
          method='post'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          action='/message-sent'
          encType='application/x-www-form-urlencoded'
          autoComplete='off'
        >
          <input type='hidden' name='form-name' value='contact' />
          <div>
            <FormControl>
              <TextField
                id='form-name'
                name='name'
                label='Your Name'
                required
                variant='outlined'
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <TextField
                id='form-email'
                name='email'
                label='Email'
                required
                type='email'
                variant='outlined'
              />
            </FormControl>
          </div>
          <div>
            <TextField
              name='form-questions'
              id='questions'
              label='How can we help you?'
              multiline
              rows='4'
              defaultValue=''
              required
              className={classes.textField}
              margin='normal'
              variant='outlined'
            />
          </div>
          <div>
            <Button
              type='submit'
              variant='contained'
              size='large'
              color='primary'
            >
              Submit
            </Button>
          </div>
        </form>
        <style jsx>{`
          div {
            margin: 16px 0;
          }
        `}</style>
      </Layout>
    </>
  )
}

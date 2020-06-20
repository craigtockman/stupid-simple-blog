import Layout from '../components/MyLayout'
import MetaTags from '../components/MetaTags'
import Title from '../components/Title'
import { makeStyles } from '@material-ui/core/styles'
import { FormControl, Button, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
  },
}))

export default function Form() {
  const classes = useStyles()
  return (
    <>
      <MetaTags
        title="Stupid Simple Blog | Add a blog post"
        desc="Ok. Calm down. Add a blog post and upload a photo if you got one."
        image="https://stupid-simple-blog.com/blog_01.jpeg"
        url="add-blog-post"
      />
      <Layout>
        <Title
          h1={'Add a blog post to this stupid blog!!!'}
          h2={
            'Ok. Calm down. Add a blog post and upload a photo if you got one.'
          }
        />
        <form
          name="blog"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/"
          encType="multipart/form-data"
          autoComplete="off"
        >
          <input type="hidden" name="form-name" value="blog" />
          <div>
            <FormControl>
              <TextField
                id="form-name"
                name="name"
                label="Blog title"
                required
                variant="outlined"
              />
            </FormControl>
          </div>
          <div>
            <TextField
              name="location"
              id="outlined-multiline-static"
              label="Say somthing here"
              multiline
              rows="4"
              defaultValue=""
              required
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <label className="fileLabel" htmlFor="photo">
              Upload an image here
            </label>
            <input
              className="fileBtn"
              name="photo"
              accept="image/*"
              id="photo"
              multiple
              type="file"
            />
          </div>
          <div>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </form>
        <style jsx>{`
          .fileLabel {
            margin-top: 12px;
            font-size: 14px;
            display: block;
          }
          .fileBtn {
            font-size: 14px;
            margin: 10px 0 40px;
          }
        `}</style>
      </Layout>
    </>
  )
}

import { Hono } from 'hono'
import { html, raw } from 'hono/html'
import { jsx} from 'hono/jsx'
import { Layout } from './layout.tsx'
import { serveStatic } from 'hono/deno'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.html(
    <Layout title='tannerr.dev'>
      <h1>Welcome to tannerr.dev</h1>
      <form action="/entry" method="POST">
        <fieldset>
          <legend>This is a web form</legend>
          <label for="name">Enter your name: </label>
          <input type="text" name="name" id="name" required autofocus/>
          <button>Submit</button>
        </fieldset>
      </form>
    </Layout>
  )
})


app.post('/entry', async (c) => {
  const body = await c.req.parseBody()
  console.log(body)
  return c.redirect('/')
})

Deno.serve(app.fetch)



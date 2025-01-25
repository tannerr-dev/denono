import { Hono } from 'hono'
import { html, raw } from 'hono/html'
import { jsx } from 'hono/jsx'
import { Layout } from './layout.tsx'

const app = new Hono()


// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })
app.get('/', (c) => {
  return c.html(
    <Layout title='tannerr.dev'>
      <h1>Welcome to tannerr.dev</h1>
    </Layout>
  )
})
app.get('/:username', (c) => {
  const { username } = c.req.param()
  return c.html(
    html`<!doctype html>
      <h1>Hello! ${username}!</h1>`
  )
})

Deno.serve(app.fetch)



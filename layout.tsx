import { html, raw } from 'hono/html'
export const Layout = (props: { children: any, title?: string }) => (
  html`<!DOCTYPE html>
  <html>
    <head>
      <title>${props.title || 'My App'}</title>
      <link href="./static/public/styles.css" rel="stylesheet"/>
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/users">Users</a>
      </nav>
      ${props.children}
    </body>
  </html>`
)

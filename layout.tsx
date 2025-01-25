import { jsx } from 'hono/jsx'

export const Layout = (props: { children: any, title?: string }) => (
  <html>
    <head>
      <title>{props.title || 'My App'}</title>
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/users">Users</a>
      </nav>
      {props.children}
    </body>
  </html>
)

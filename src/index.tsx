import * as React from 'react'

import * as ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

import App from './App'
// used for code syntax highlighting (optional)
// import 'prismjs/themes/prism-tomorrow.css'
// used for rendering equations (optional)
// import 'katex/dist/katex.min.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:git_path/:id",
    element: <App />,
  },
]);


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from './app.jsx'

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <div data-theme="light">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
)
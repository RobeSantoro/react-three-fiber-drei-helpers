import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './main.css'

const container = document.getElementById('root');
const app = createRoot(container)

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Reset } from './styles/reset.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
)
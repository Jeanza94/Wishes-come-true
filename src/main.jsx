import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HomeWorkList } from './HomeWorkList'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomeWorkList />
    </BrowserRouter>
  </React.StrictMode>
)

if (import.meta.env.MODE === 'production' && 'serviceWorker' in navigator) {
  console.log('Production, ServiceWorker on');
  navigator.serviceWorker.register('sw.js');
}

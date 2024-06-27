import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className='footer'>
      <div className='credit'>Photo by <a href="https://unsplash.com/@tjdragotta?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">TJ Dragotta</a> on <a href="https://unsplash.com/photos/spalding-basketball-in-court-Gl0jBJJTDWs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
      </div>
      <div className='link'>Made By 
      <a href="https://github.com/amardeeep" target="_blank"> Deetsy454</a> </div>
      <div className='apiUsed'>Powered by
      <a href="https://developers.giphy.com/" target="_blank"> giphy</a>
      </div>
    </div>
  </React.StrictMode>,
)

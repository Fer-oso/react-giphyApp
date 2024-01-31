import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/styles.css';
import GiphyApp from './components/GiphyApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiphyApp />
  </React.StrictMode>,
)

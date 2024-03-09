import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './components/FirstApp'
import { CounterApp } from './components/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title='hola richard' subtitle={123}/>
    <CounterApp value={20} total={20}/>
  </React.StrictMode>

)

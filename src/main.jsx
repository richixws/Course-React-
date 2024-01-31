import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from  '. /HelloWorld'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp user={{name:'richard',edad:12}} id={1}/>
  </React.StrictMode>

)

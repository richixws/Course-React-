 import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//const h1= React.createElement('div',null,React.createElement('ul',null,React.createElement('li',null,'item1')));

//const h1= <div><ul><li>Hola Mundo h1</li></ul></div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>
)

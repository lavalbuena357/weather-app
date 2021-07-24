import React from 'react'
import { Route } from 'react-router-dom';
import './App.css'
import Main from './components/Main/Main'

function App() {

  return (
    <div className="App">
      {/* <Route  path='/' component={Header} /> */}
      {/* <Route exact path='/' component={Search} /> */}
      <Route exact path='/' component={Main} />
      {/* <Route exact path='/detail/:name' component={Detail} /> */}
    </div>
  )
}

export default App

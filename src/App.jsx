import React from 'react'
import { Route } from 'react-router-dom';
import './App.css'
import Main from './components/Main/Main'
import Detail from './components/Detail/Detail'

function App() {

  return (
    <div className="App">
      <Route exact path='/' component={Main} />
      <Route exact path='/detail/:id' component={Detail} />
    </div>
  )
}

export default App

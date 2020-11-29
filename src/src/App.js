import React from 'react'
import Login from './Components/Login'
import Signup from './Components/SignUp'
import Homepage from './Components/Homepage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/NavBar'

function App(className="app") {
  return (
    <Router>
         <NavBar/>
      <Switch>
      
         <Route path='/' component={Login} exact/>
         <Route  path='/signup' component={Signup}/>
         <Route path='/home' component={Homepage}/>
         <Route path='/login' component={Login} />
        
      </Switch>
    </Router>
  )
}

export default App

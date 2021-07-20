import React from 'react'
import './App.css'
import Header from './components/Header'
import Aboutme from './pages/Aboutme'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contactme from './pages/Contactme'





const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
      
       
          <Switch>

            <Route exact path="/Aboutme" component={Aboutme} />
            <Route exact path="/Projects" component={Projects} />
            {/* <Route exact path="/resume" component={Resume} /> */}
            <Route exact path="/Contactme" component={Contactme} />
            <Route component={Aboutme} />
          </Switch>
        
        
        <Footer/>
      </div>
    </Router>
  )
}

export default App


import React from 'react'
import './App.css'
import Header from './components/Header'
import Aboutme from './pages/Aboutme'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Aboutme />
        <main>
          <Switch>
            {/* <Route exact path="/" component={Terminal} /> */}
            <Route exact path="/Aboutme" page={Aboutme} />
            <Route exact path="/Projects" page={Projects} />
            {/* <Route exact path="/resume" component={Resume} /> */}
            {/* <Route exact path="/contact" component={Contact} /> */}
            {/* <Route path="/*" component={NoMatch} /> */}
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App


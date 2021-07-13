import React from 'react'
import './App.css'
import Header from './components/Header'
import Aboutme from './pages/Aboutme'
import Footer from './components/Footer'
// import BucketList from './pages/Bucket-List.js';
// import{ Nav } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'



const App = () => {
  return (
    <div>
      <Header />
      <Aboutme />
      <Footer />
      {/* <img src="/images/Randy.jpg"alt="" /> */}
    </div>
  )
}

export default App


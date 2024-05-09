import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Portfolio/>
      <Resume/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  )
}

export default App

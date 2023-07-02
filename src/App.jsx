import { useState } from 'react'
import { Brand, Cta, Navbar } from './components'
import { Header, Features, WhatGPT3, Possibility, Blog, Footer } from './containers'
import './App.css'


function App() {

  return (
    <div className='App'>
      <div className='gradient_bg'>
      <Navbar />
      <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

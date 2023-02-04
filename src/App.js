import React from 'react'

import { Blog, Footer, Features, Header, Possibility } from './containers';
import { CTA, Brand, Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar />
      <Header />
      </div>
      <Brand />
      <Features />
      <Possibility />
      <CTA />
        
    </div>
  )
}

export default App
import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main1 from './components/Main1'

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Main1 />
      </main>
      <Footer />
    </>
  )
}

export default App

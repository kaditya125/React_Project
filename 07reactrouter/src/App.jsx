import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Home />
     <Footer />
    </>
  )
}

export default App

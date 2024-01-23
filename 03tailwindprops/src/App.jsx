import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = 'bg-green-400  text-black p-4  rounded-xl mb-4'>TailWind Test</h1>
     <Card  name ="Aditya Kumar"  img="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
     <Card  name ="Ashutosh Soni" img="https://images.pexels.com/photos/775357/pexels-photo-775357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Time from './Components/Time'
import Connect from './Components/Connect'
import Header from './Components/Header'
import Customized from './Components/Customized'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <Router>
      <Header/>
      <Routes>
        <Route path='/' exact element= {<Home/>}/>
        <Route path='/menu' exact element = {<Menu/>}/>
        <Route path='/customized' exact element = {<Customized/>}/>
        <Route path='/connect' exact element = {<Connect/>}/>
        <Route path='/time' exact element = {<Time/>}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App


import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Particles from './Pages/Particles'
import Card from './Pages/Card'
import Liquid from './Pages/Liquid'
import Anti from './Pages/Anti'

function App() {

  const handleClick1 = () => {
    
  }


  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/particles" element={<Particles />} />
        <Route path = "/liquid" element = {<Liquid />} />
        <Route path = "/anti" element = {<Anti />} />
      </Routes>
    </Router>


      {/* <Particles />
      <div className='absolute top-1/2 left-1/2 z-10 border border-cyan-500 rounded-lg p-10 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 flex justify-center items-center backdrop-blur-sm bg-white/10'>

        <button onClick={handleClick1()} claskahajsName="text-3xl cursor-pointer bg-amber-400 text-white px-5 py-3">Hello</button>
      </div> */}
    </>
  )
}

export default App

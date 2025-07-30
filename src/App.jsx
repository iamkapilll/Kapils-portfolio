import React, { useState } from 'react'
import "./App.css"
import "./index.css"
import { LoadingScreen } from './components/LoadingScreen'
import {Navbar} from './components/Navbar'


const App = () => {

  const [isLoaded, setIsLoaded] = useState(false)


  
  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} 
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "ppacity-100" : "opacity-0"}
       bg-black text-gray-100`}>

        <Navbar />

      </div>
    </>
  )
}

export default App


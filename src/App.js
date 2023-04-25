import React from 'react'
import Navbar from './components/Navbar'
import styles from './style'
import { Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Videos from './pages/Videos'
import Audios from './pages/Audios'
import Home from './pages/Home'

const App = () => {
  return (
    <div className={` w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} m-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      {/* <div className={`bg-bunting ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
        </div>
      </div> */}
      <div className={`bg-bunting ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
      <Routes>
        <Route path="/posts" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Videos />} />
        <Route path='/audios' element= {<Audios/>} />
        <Route exact path='/' element= {<Home/>} />
      </Routes>
        </div>
      </div>
    </div>
  )
}

export default App

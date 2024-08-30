
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import Landingpages from './Pages/Landingpage'

function App() {

  return (
    <>
      <Header/>

      <Routes>
      <Route path='/' element={<Landingpages/>} />
      <Route path='/home'element={<Home/>} />
      <Route path='/watch-history' element={<WatchHistory/>} />



    </Routes>

      <Footer/>
    </>
  )
}

export default App

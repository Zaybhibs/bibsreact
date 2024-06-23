import React from 'react'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import he from 'he'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Cards from './components/Cards'
import Banner from './components/Banner'
import Messages from './components/Messages'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'



const App = () => {
  return (
    <Router>
      <Routes>
      <Route index element={
    <>
    <Navbar/>
    <Header/>
    <div className='md:flex space-y-2 md:space-y-0 md:space-x-2 py-4 justify-center w-[100%]'>
    <Cards/>
    <Cards/>
    <Cards/>
     </div>
     <Banner/>
     <div className=' bg-red-300 md:flex space-y-10 md:space-y-0 py-10'>
     <Messages/>
     <Messages/>
     <Messages/>
     </div>
     <Footer/>
    
    </>
      }/>
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  )
}

export default App
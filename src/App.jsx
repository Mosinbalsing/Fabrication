import './App.css'
import Hero from './sections/Hero'
import { Navbar } from './Components/Navbar'
import Work from './sections/Work'
import { Contact } from './sections/Contact'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from './sections/AboutUs'
function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={5000}/>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Work/>
      <Contact/>
    </>
  )
}

export default App

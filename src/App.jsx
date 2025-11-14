import './assets/sass/main.scss';
import About from './Components/About'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import Nav from './Components/Nav'
import Projects from './Components/Projects'

const App = () => {
  return (
    <>
    <Nav/>
    <About/>
    <Gallery/>
    <Projects/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App

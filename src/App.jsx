import Header from "./components/Header/Header"
import Hero from './components/Hero/Hero'
import Grades from "./components/grades/Grades"
import Courses from "./components/Courses/Courses"
import FeaturesSection from './components/advanced/FeaturesSection'
import Cellefect from './components/effect/BioScene'
import Footer from "./components/Footer/Footer"
function App() {


  return (


    <>
      <Cellefect />

      <Header />
      <Hero />
      <FeaturesSection/>
      <Grades/>
      <Courses/>
      <Footer/>

    </>


  )
}

export default App

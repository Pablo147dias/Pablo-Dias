import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"

import About from "./pages/Home/sections/About/About"
import Hero from "./pages/Home/sections/Hero/Hero"
import ProjectsSection from "./pages/Home/sections/Projects/Projects"


const App = () => {


  return (
    <div className="bg-slate-900 text-white">
    <NavBar />
     <Hero/>
     <About />
     <ProjectsSection />
     <Footer />
    </div>
  )
}

export default App


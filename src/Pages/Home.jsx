import { useEffect, useState } from "react"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import Projects from "../Components/Projects"
import Services from "../Components/Services"
import Skills from "../Components/Skills"
import About from "./About"
import ContactMe from "./ContactMe"

function Home() {
  let [target , setTarget] = useState("")

  useEffect(()=>{
    let targetSection = document.querySelector(`.${target}-container`)
    targetSection?.scrollIntoView({behavior : "smooth"})
 },[target])
  

  return (
    <>
    <div className="home-container wrapper"> 
      <Navbar setTarget={setTarget} />
      <HeroSection setTarget={setTarget} />
      <About />
      <Skills />
      <Projects />
      <Services />
      <ContactMe setTarget={setTarget} />
    </div>
    </>
  )
}

export default Home
import { useEffect, useRef } from "react"
import style from "../Components Style/Navbar.module.css"

function Navbar({setTarget}) {

  return (
    <div className={style["navbar-container"]}>
        <div className={style.navbar}>
      
        <div className={style.logo} 
        onClick={()=> {
          setTarget("")
          setTimeout(()=>{setTarget("home" , 0)})
        }}>
         <span>H</span><h1>AMMAD</h1>
        </div>
        <div className={style["nav-links"]}>
            <ul onClick={(e)=> {
                if(e.target.tagName === "LI"){
                  let targetElement = e.target.textContent.trim().toLowerCase()
                  setTarget("")
                  setTimeout(()=>{setTarget(targetElement) , 0})
                }}}>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SKILLS</li>
                <li>PROJECTS</li>
                <li>SERVICES</li>
            </ul>
        </div>
        <button className={style["contact-btn"]}
         onClick={()=>{
          setTarget("")
          setTimeout(()=> setTarget("contact" , 0))
         }} 
        >CONTACT ME</button>

    </div>
    </div>
  )
}

export default Navbar
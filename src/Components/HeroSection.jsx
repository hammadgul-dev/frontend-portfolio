import { useEffect, useRef } from "react";
import style from "../Components Style/HeroSection.module.css"
import img from "../assets/My Images/My Img 1.webp"
import Typed from "typed.js";

function HeroSection({setTarget}) {
  let textRef = useRef(null);

  useEffect(() =>{
    let typed = new Typed(textRef.current,{
    strings: ["Frontend Developer", "React Developer", "Responsive Designer"],
    typeSpeed: 120,
    backSpeed: 50,
    backDelay: 900,
    loop: true,
    startDelay : 140,
    });
    return () => typed.destroy(); 
  }, []);


  return (
    <div className={style["hero-section"]}>
        <div className={style["hero-content"]}>

            <div className={style["info-box"]}>
              <div className={style["name-box"]}>
                  <h2>HELLO! <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35" /></h2>
                  <h1>I' m Hammad Gul</h1>
                  <span ref={textRef}></span>
              </div>
                <p>Hi, I m Hammad Gul - a Frontend Developer. I create responsive and interactive web applications. I love building web apps that are smooth, simple, and user-friendly for everyone.</p>
            <div className={style["project-btn"]}>
              <button
              onClick={() => {
                setTarget("");
                setTimeout(() => setTarget("projects"), 0);
              }}>See Projects</button>
            </div>
            </div>
            <div className={style["img-wrapper"]}>
                <img src={img} alt="My Img" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection
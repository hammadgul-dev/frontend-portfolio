import style from "../Components Style/Skills.module.css"
import html from "../assets/Logo/HTML Logo.webp"
import css from "../assets/Logo/CSS Logo.webp"
import js from "../assets/Logo/JS Logo.webp"
import tailwind from "../assets/Logo/Tailwind Logo.webp"
import react from "../assets/Logo/React Logo.webp"
import github from "../assets/Logo/GitHub Logo.png"
import { useEffect } from "react"

function Skills() {

    let skill =  [
        { img : html , name : "HTML" , skillPercent : "95%" , description: "I use HTML to build clean, well-structured web pages with clear layouts that are easy to understand and maintain." },
        { img : css , name : "CSS" , skillPercent : "90%" , description: "I use CSS to style websites, create responsive layouts, and design clean, user-friendly interfaces that look good on all screen sizes." },
        { img : js , name : "JAVASCRIPT" , skillPercent : "86%" , description: "I use JavaScript to add interactivity, handle user actions, manage data, and control the overall logic of web applications." },
        { img : tailwind, name : "TAILWIND" , skillPercent : "90%" , description: "I use Tailwind CSS to write clean and efficient styles directly in HTML, making web pages responsive and visually consistent." },
        { img : react , name : "REACT + REDUX" , skillPercent : "92%" , description: "I use React to build single-page applications with reusable components, and Redux to manage state efficiently across different components." },
        { img : github , name : "GIT & GitHUB" , skillPercent : "85%" , description: "I use Git to track and manage code changes, and GitHub to store, organize, and share projects for smooth collaboration." },
    ]


    useEffect(()=>{
        let targetCard = document.querySelectorAll(`.${style.card}`)
        if(!targetCard) return 
        let observer = new IntersectionObserver((entries)=>{
            entries.forEach((card)=>{
                if(card.isIntersecting){
                   let rangeInput = card.target.querySelector(`.${style["range-input"]}`)
                   let showPercent = card.target.querySelector(`.${style.header} span `)

                   if(!rangeInput || !showPercent) return
                   let realProgressValue = rangeInput.dataset.progress
                   rangeInput.style.setProperty("--progress" , realProgressValue)
                    let dataSetValue = parseInt(rangeInput.dataset.progress)
                    
                   let initialValue = 0
                   let timer = setInterval(()=>{
                    initialValue++
                    showPercent.textContent = initialValue + "%"
                    if(initialValue >= dataSetValue){
                        clearInterval(timer)
                    }
                   },15)
                   observer.unobserve(card.target)
                }
            })
        },{ threshold : 0.3 })

        targetCard.forEach(card => observer.observe(card))
    },[])


  return (
    <div className={`skills-container ${style["skills-container"]}`}>
        <div className={style.wrapper}>


           { skill.map(info => (

                <div key={info.name} className={`${style.card} ${style["skill-card"]}`}>
                <div className={style["img-box"]}>
                    <img src={info.img} alt={info.name} />
                </div>
                <div className={style["skill-info"]}>
                    <div className={style.header}>
                        <h2>{info.name}</h2>
                        <span>{info.skillPercent}</span>
                    </div>
                    <div className={style["range-input"]}
                    data-progress={info.skillPercent}
                    ></div>
                    <div className={style.description}>
                        <p>{info.description}</p>
                    </div>
                </div>
            </div>

           )) }
            
        </div>
    </div>
  )
}

export default Skills
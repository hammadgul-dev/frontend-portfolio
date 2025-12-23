import style from "../Components Style/Services.module.css"
import { LuMonitorSmartphone } from "react-icons/lu";
import { BsDiagram3 } from "react-icons/bs";
import { FaRocket } from "react-icons/fa";
import { LuMonitor } from "react-icons/lu";
import { FaBug } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { useEffect } from "react";


function Services() {

    let servicesArr = [
        { img: <LuMonitor /> , name: "UI Development" , description: "I design and develop user interfaces that are clean, responsive, and easy to navigate, creating smooth and engaging experiences for users across all devices."  },
        { img: <FaCode /> , name: "React Component Building" , description: "I build reusable React components and use Redux to manage state across different components, keeping data organized and easy to manage."  },
        { img: <FaBug /> , name: "Bug Fixing / Optimization" , description: "I identify and fix bugs in web applications, optimize code, and improve performance to ensure smooth, fast, and reliable user experiences."  },
        { img: <LuMonitorSmartphone /> , name: "Responsive Design" , description: "I design web pages that look and work great on any device desktop, tablet, or mobile ensuring a smooth experience for users."  },
        { img: <BsDiagram3 /> , name: "State Management" , description: "I manage application state efficiently using Redux, keeping data consistent across components and making it easier to update and maintain."  },
        { img: <FaRocket /> , name: "Performance Optimization" , description: "I optimize web applications to load faster, run smoothly, and provide a better experience for users across all devices."  },
    ]

    
    useEffect(()=>{
        let targetCard = document.querySelectorAll(`.${style.card}`)
        if(!targetCard) return
        let observer = new IntersectionObserver((entries)=>{
            entries.forEach((card , index)=>{
                if(card.isIntersecting){
                    card.target.classList.add(style.show)
                }
            })
        },{threshold : 0.1})
        targetCard.forEach(card=> observer.observe(card))
        return()=> observer.disconnect
    },[])


  return (
    <div className={ `services-container ${style["services-container"]}` }>
        <div className={style.wrapper}>

            { servicesArr.map((service)=>(
            <div key={service.name} className={style.card}>
                <span>{service.img}</span>
                <h2>{service.name}</h2>
                <div className={style["service-info"]}>
                    <p>{service.description}</p>
                </div>
            </div>
            )) }
            
        </div>
    </div>
  )
}

export default Services
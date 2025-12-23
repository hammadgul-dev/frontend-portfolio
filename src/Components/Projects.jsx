import { useEffect, useRef, useState } from "react";
import style from "../Components Style/Projects.module.css"
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import codeEditor from "../assets/Project Images/Code Editor.webp"
import musicPlayer from "../assets/Project Images/Music Player.webp"
import calculator from "../assets/Project Images/calculator.webp"
import AproductPage from "../assets/Project Images/Advance Product Page.webp"
import taskManager from "../assets/Project Images/Task Manager.webp"
import drumKit from "../assets/Project Images/Drum Kit.webp"
import quizApp from "../assets/Project Images/Quiz App.webp"
import todo from "../assets/Project Images/Todo List.webp"
import productPage from "../assets/Project Images/Product Page.webp"


function Projects() {
    let wrapperRef = useRef()

    function handleScrollRight(){
        wrapperRef.current.scrollBy(
            { left : wrapperRef.current.clientWidth }
        )
    }

    function handleScrollLeft(){
        wrapperRef.current.scrollBy(
            { left : -wrapperRef.current.clientWidth }
        )
    }
    
    let project = [
        { 
            name : "Music Player" , 
            thumbnail : musicPlayer,
            liveUrl : "https://hammadgul-dev.github.io/music-player/" , 
            projectDescription : "A responsive music player built using HTML, CSS, and JavaScript. It features play/pause, next/previous track, volume control, keyboard controls, and a responsive layout." 
        },
        { 
            name : "Advance Product Page" , 
            thumbnail : AproductPage,
            liveUrl : "https://hammadgul-dev.github.io/advance-product-page/#/form" , 
            projectDescription : "A responsive React product page with user authentication, Redux state management, React Router navigation, product filtering, image uploads, and detailed product views." 
        },
        { 
            name : "Calculator" , 
            thumbnail : calculator,
            liveUrl : "https://hammadgul-dev.github.io/calculator-project/" , 
            projectDescription : "A responsive calculator built with HTML, CSS, and JavaScript, featuring full keyboard support and a clean, user-friendly interface." 
        },
        { 
            name : "Drum Kit" , 
            thumbnail : drumKit,
            liveUrl : "https://hammadgul-dev.github.io/drum-kit/" , 
            projectDescription : "A simple interactive drum kit that lets users play sounds using mouse clicks or keyboard keys, with a responsive design and clean interface." 
        },
        { 
            name : "Task Manager" , 
            thumbnail : taskManager,
            liveUrl : "https://hammadgul-dev.github.io/task-manager/" , 
            projectDescription : "A simple task manager to add, edit, and delete tasks, with search, filter, sorting, CSV export, and localStorage support in a responsive layout." 
        },
        { 
            name : "Code Editor",
            thumbnail : codeEditor,
            liveUrl : "https://hammadgul-dev.github.io/code-editor/" , 
            projectDescription : "A simple online code editor where you can write and preview code live, copy with one click, switch between light and dark themes, and enjoy a responsive layout." 
        },
        { 
            name : "Quiz App" , 
            thumbnail : quizApp,
            liveUrl : "https://hammadgul-dev.github.io/quiz-app/" , 
            projectDescription : "A responsive quiz app with multiple-choice questions, score calculation, light/dark theme toggle, and a responsive design." 
        },
        { 
            name : "Todo List" , 
            thumbnail : todo,
            liveUrl : "https://hammadgul-dev.github.io/todo-list-app/" , 
            projectDescription : "A simple ToDo List app to add, edit, and manage tasks, with data saved in localStorage and a responsive layout." 
        },
        { 
            name : "Product Page" , 
            thumbnail : productPage,
            liveUrl : "https://hammadgul-dev.github.io/product-page/" , 
            projectDescription : "A responsive product page with cart management, discount codes, product search, theme toggle, and local cart storage." 
        },
    ]
    
  return (
    <div className={` projects-container ${style["projects-container"]}`}>
        <div className={style.content}>

            <span onClick={handleScrollLeft} className={style["left-scoll"]}><FaCaretLeft /></span>
            <div ref={wrapperRef} className={style.wrapper}>
            { project.map(project => (
                <div key={project.name} className={style.card}>
                    <div className={style["img-box"]}>
                        <img src={project.thumbnail}/>
                    </div>
                    <div className={style["project-detail"]}>
                    <h2>{project.name}</h2>
                    <div className={style.detail}>
                        <p>{project.projectDescription}</p>
                    </div>
                    </div>
                    <button 
                    className={style["demo-btn"]}
                    onClick={()=>{window.open(project.liveUrl , "_blank")}}
                    >Live Demo</button>
                </div>
            )) }
            </div>
            <span onClick={handleScrollRight} className={style["right-scoll"]}><FaCaretRight /></span>
            
        </div>
    </div>
  )
}

export default Projects
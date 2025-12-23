import { useEffect } from "react";
import style from "../Pages Style/About.module.css";
import img from "../assets/My Images/My Img 2.png";

function About() {
  
    useEffect(() => {
        let projectBox = document.querySelector(`.${style["project-done"]}`);
        if (!projectBox) return;

             let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            let span = projectBox.querySelector("span");
            if (!span) return;

            let dataSetValue = parseInt(projectBox.dataset.project);
            let count = 0;

            let timer = setInterval(() => {
                span.textContent = ++count + "+";
                if (count >= dataSetValue) clearInterval(timer);
            }, 130);

            observer.unobserve(projectBox);

            });
        }, { threshold: 1.0 });

        observer.observe(projectBox);
}, []);


  return (
    <div className={` about-container ${style["about-container"]}`}>
      <div className={style["img-wrapper"]}>
        <img src={img} alt="" />
      </div>

      <div className={style["my-info"]}>
        <div className={style.intro}>
          <h2>Introduction</h2>
          <p>
            <span>
                 Hi, I’m Hammad Gul from Pakistan. I’m an undergraduate student at UET Peshawar with 2+ years of experience in frontend development. 
            </span>
            <span>
                My current focus is on backend development, and my goal is to become a full-stack developer. I enjoy building responsive and interactive web applications using technologies like HTML, CSS, JavaScript, Tailwind, React + Redux, and I actively use Git & GitHub.
            </span>
            <span>
              I love creating web apps that work smoothly, are simple to use, and I’m always learning to improve.
              </span> 
          </p>
        </div>
        <div className={style.education}>
          <h2>Education</h2>
          <p>
            B.Sc. Computer Engineering – University of Engineering & Technology, Peshawar
            I’m currently in the 3rd semester.
          </p>
        </div>
        <div className={style.stats}>
          <div className={style.experience}>
            <h2>Experience</h2>
            <span>2+ year</span>
          </div>
          <div className={style["project-done"]} data-project="10">
            <h2>Project Completed</h2>
            <span>10+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import style from "../Pages Style/ContactMe.module.css"
import Footer from "../Components/Footer"
import { MdEmail } from "react-icons/md"
import { BiPhoneCall } from "react-icons/bi"
import { MdLocationOn } from "react-icons/md";
import ContactForm from "./ContactForm"
import { useEffect, useRef } from "react";

function ContactMe({setTarget}) {

    useEffect(()=>{
        let targetContainer = document.querySelectorAll(`.${style["contact-container"]} > div`)
        if(!targetContainer) return;
       let observer = new IntersectionObserver((entries)=>{
        entries.forEach((child)=>{
            if(child.isIntersecting){
               if(child.target.dataset.form === "form"){
                    child.target.classList.add(`${style["show-form"]}`)
               }
               if(child.target.dataset.details === "details"){
                    child.target.classList.add(`${style["show-details"]}`)
               }
            }
        })
       },{ threshold : 0.1 })
       targetContainer.forEach(child => observer.observe(child))
       return ()=> observer.disconnect()
    },[])

    return(
      <div className={`contact-container ${style["contact-container"]}`}>
          
          <div className={style["my-details"]}
            data-details="details"
          >
              <p className={style.intro}>"Thanks for checking out my work! If you have any project ideas, let's connect and create something great together!"</p>
              <div className={style["contact-item"]}>
                  <span className={style.icon}><MdEmail /></span>
                  <div className={style["contact-info"]}>
                      <h3>EMAIL</h3>
                      <span>hammadgul140413@gmail.com</span>
                  </div>
              </div>
              <div className={style["contact-item"]}>
                  <span className={style.icon}><BiPhoneCall /></span>
                  <div className={style["contact-info"]}>
                      <h3>PHONE NUMBER</h3>
                      <span>0313-3178585</span>
                  </div>
              </div>
              <div className={style["contact-item"]}>
                  <span className={style.icon}><MdLocationOn /></span>
                  <div className={style["contact-info"]}>
                      <h3>LOCATION</h3>
                      <span>Pakistan</span>
                  </div>
              </div>
          </div>
          
          <div className={style["contact-form"]}
            data-form="form" 
          >
              <ContactForm /> 
            </div>
          
          <div className={style.footer}>
              <Footer />
          </div>
      </div>
    )
}

export default ContactMe
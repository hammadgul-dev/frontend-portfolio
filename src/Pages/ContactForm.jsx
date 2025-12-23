import { useEffect, useRef, useState } from "react";
import style from "../Pages Style/ContactForm.module.css";
import emailjs from "emailjs-com"

function ContactForm() {
  let [error , displayError] = useState('')
  let [loading, setLoading] = useState(false);
  let [displayMsg , setMsg] = useState('')
  let [userInfo , setInfo] = useState({
    userName : "",
    userEmail : "",
    userMsg : ""
  })

  function handleError(txt){
    displayError(txt)
    setTimeout(()=>{
      displayError('')
    },2500)
  }

  let handleSubmit = async(e) =>{
    e.preventDefault()
     if(userInfo.userName.trim() === "" || 
      userInfo.userEmail.trim() === "" || 
      userInfo.userMsg.trim() === ""){
      handleError("All Field Are REQUIRED!")
      return
    }
    else if(!/^[A-Za-z ]+$/.test(userInfo.userName.trim())){
      handleError("Name Must Be STRING!")
      return
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.userEmail.trim())){ 
      handleError("Gmail Is INCORRECT!")
      return
    }
    else{
      setLoading(true);
      try{
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setMsg("Message Sent Successfully!");
      setTimeout(() => setMsg(""), 2500);
      displayError("");
      setInfo({ userName: "", userEmail: "", userMsg: "" });
    } 
    catch(err){
      console.log(err)
      handleError("Message Not Sent! Try Again.");
    } 
    finally{
      setLoading(false);
    }
    }
  }


  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style["form-group"]}>
        <h2>Your Name</h2>
        <input type="text"
        name="user_name"
         placeholder="Enter your full name" 
         value={userInfo.userName}
         spellCheck = "false"
         onChange={(e)=> setInfo({...userInfo , userName : e.target.value})}
         required
         />
      </div>

      <div className={style["form-group"]}>
        <h2>Your Email</h2>
        <input type="email" 
        name="user_email"
        value={userInfo.userEmail}
        placeholder="Enter your email address" 
        spellCheck = "false"
        onChange={(e)=> setInfo({...userInfo , userEmail : e.target.value})}
        required
        />
      </div>


      <div className={style["form-group"]}>
        <h2>Your Message</h2>
        <textarea
        name="user_msg"
        value={userInfo.userMsg}
          placeholder="Tell me about your project..."
          rows="5"
          required
          spellCheck = "false"
          onChange={(e)=> setInfo({...userInfo , userMsg : e.target.value})}
        ></textarea>
      </div>
      { error && <span style={{color : "red"}}>{error}</span> }
      { displayMsg && <span style={{color : "green"}}>{displayMsg}</span> }
      <button type="submit" disabled={loading} className={style["submit-btn"]}>
        {loading ? "Message Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;

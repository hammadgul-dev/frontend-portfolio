import style from "../Components Style/Footer.module.css"
import { FaRegCopyright } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub, IoMdMail} from "react-icons/io";

function Footer() {
  return (
    <footer className={style.footer}>

        <div className={style["copyright-area"]}>
            <p>Copyright <span><FaRegCopyright /></span> <b>HAMMAD</b> All Right Reserved!</p>
        </div>

        <div className={style["social-links"]}>
            <span onClick={() => window.open("https://www.linkedin.com/in/hammadgul-dev/", "_blank")}><FaLinkedinIn /></span>
            <span onClick={() => window.open("https://github.com/hammadgul-dev", "_blank")}><IoLogoGithub /></span>
            <span onClick={() => window.open("mailto:hammadgul140413@gmail.com")}><IoMdMail /></span>
        </div>

    </footer>
  )
}

export default Footer

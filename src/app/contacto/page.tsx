import './contacto.scss'
import { SiLinkedin , SiGithub, SiFacebook } from "react-icons/si";
function contacto() {
  return (
    <div className="contacto">
        <a href='https://pe.linkedin.com/in/guillermo-alberco-capistrano-43909b156' target="_blank">
            <p>Linkedin</p>
            <SiLinkedin />
        </a>
        <a href='https://github.com/Alberco' target="_blank">
            <p>GitHub</p>
            <SiGithub />
        </a>
        <a href='https://www.facebook.com/guillermo.alberco'>
            <p>Facebook</p>
            <SiFacebook />
        </a>
    </div>
  )
}

export default contacto
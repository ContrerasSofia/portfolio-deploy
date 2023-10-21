// We use JSX curly braces to evaluate the style object
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styke/main.css';
function Footer() {
    return (
        <footer className='bg-dark text-white text-center pt-3 col-12' id="footer">
            <div className="container  ">
            <div className="row justify-content-around">
              <a href="https://github.com/ContrerasSofia" target="_blank" rel="noopener noreferrer" className="text-white mr-3 col-3">
                <FaGithub  size={40}/> 
              </a>
              <a href="htthttps://www.linkedin.com/in/sofia-contreras-3814ba208" target="_blank" rel="noopener noreferrer" className="text-white mr-3 col-3">
                <FaLinkedin size={40} /> 
              </a>
              <a href="mailto:cgsofiaelizabeth15@gmail.com" className="text-white col-3">
                <FaEnvelope size={40}/> 
              </a>
            </div>
        </div>
        </footer>
    );
  }
  
  export default Footer;
      

  
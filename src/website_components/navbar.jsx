import '../styles/Navbar.css';
import {useNavigate, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function NavBar(){
    const navigate = useNavigate();
    const page = useLocation();

    const isHome = page.pathname === '/';
    const isAbout = page.pathname === '/about';
    const isProjects = page.pathname === '/projects';


    return(
    <div>
    <div className= 'header'>

      <div className = 'display-name'>
        <a href='https://www.linkedin.com/in/owen-berkholtz-997578296' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className='linkdin-icon'/>
        </a>
        OWEN BERKHOLTZ
      </div>
        <nav className = 'navbar'>
            <div className={isHome ? 'nav-page-current': 'nav-page'} onClick={() => navigate("/")}>HOME</div>
            <div className={isAbout ? 'nav-page-current': 'nav-page'} onClick={() => navigate("/about")}>ABOUT ME</div>
            <div className={isProjects? 'nav-page-current': 'nav-page'} onClick={() => navigate("/projects")}>PROJECTS</div>    
        </nav>
    </div>
    <div className='spacer'></div>
    </div>
    )
}

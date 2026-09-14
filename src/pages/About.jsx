
import NavBar from "../website_components/navbar"
import castlePic from "../assets/1000006014.jpg"
import "../styles/About.css"

function About() {
    return(
    <div>
    <NavBar/>
             <div className='about-body'>
            <div className='picture-and-about'>
              <div className='text-section'>
                <h1 className='title-about'>About</h1>
                <p className='desc'>Right now I'm in the final year of getting my undergradute degree in Computer Science at the Univerity of Kansas.</p>
                <p className='desc'>I manage the technology and cybersecurity for a nonprofit organization associated with Rotary International called the<span className="about-link"><a href='https://earthtalksfoundation.org/' target="_blank" rel="noopener noreferrer"> Earth Talks Foundation</a></span>, 
                  including Google Workspace administration and NIST-based security audits.</p>
                <p className="desc">I've also Contributed to a full-stack <span className="about-link"><a href='https://github.com/cjanderson1016/passerby' target="_blank" rel="noopener noreferrer">web application</a></span> by developing REST APIs with Django REST Framework and implementing authentication, authorization, protected routes, and password recovery.</p>
                <p className="desc">Come and check out some of my projects I work on for fun.</p>
              </div>
              <div className="pic-with-caption">
              <img src={castlePic} className='owen-castle'></img>
              <div className="caption">Me in Wales</div>
              </div>
              <div></div>
            </div>
    </div>
    </div>
    )
} export default About
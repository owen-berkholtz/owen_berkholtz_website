
import '../styles/App.css'
import headshot from "../assets/1708823636279.jpg"
import NavBar from "../website_components/navbar"

function App() {
  

  return (
 
  <div>
    <NavBar/>
          <div className='home-body'>
        <div className='picture-and-intro'>
          <img src={headshot} className='owen-picture'></img>
          <div className='text-section'>
            <h1 className='title'>HELLO ──</h1>

            <div className='introduction'>My name is  <span className='name'> Owen </span>
            <p className='pitch'>
            I'm a Computer Science student specializing in cybersecurity, eager to bring my hands-on experience in security, IT, and networking to an entry-level cybersecurity role.
            </p>
            </div>
          </div>
        </div>
      </div>
  </div>

  )
}

export default App

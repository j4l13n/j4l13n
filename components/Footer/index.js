// import './footer.css'

const Footer = () => {
  return (
    <>
       <footer id="footer" className="footer mt-5">
        <div className="footer-elements">
          <div className="footer-text">
            <h6>CONTACT ME</h6>
            <li><a href="#" className="text-decoration-none text-dark">+25 078 061 714</a></li> 
            <li><a href="#" className="text-decoration-none text-dark">juliushirwa@gmail.com</a></li>
          </div>
          <div className="footer-text">
            <h6>CUSTOMER SERVICE</h6>
            <li><a href="#" className="text-decoration-none text-dark">Web development</a></li>
            <li><a href="#" className="text-decoration-none text-dark">Mobile applications</a></li>
            <li><a href="#" className="text-decoration-none text-dark">Software Analysis</a></li>
            <li><a href="#" className="text-decoration-none text-dark">Software Architecture</a></li>
            <li><a href="#" className="text-decoration-none text-dark">Database Design</a></li>
           
          </div>
          <div className="footer-text">
            <h6>INFORMATION</h6>
            {/* <ul>   */}
              <li><a href="/#" className="text-decoration-none text-dark">About Me</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Work With Me</a></li>
            {/* </ul> */}
          </div>
          <div className="footer-text">
            <h6>Talk to me via my personal email!</h6>
            <p className="text-dark">I am more of a welcoming person, ping me anytime for any question you have about me. Thank you 🤗</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

import './Footer.css'

function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-main">
      <div className="icons">
        <a href="https://linkedin.com/in/nath248/ " target="_blank" rel="noreferrer"><img src="https://res.cloudinary.com/dojhf40bp/image/upload/v1643394622/linkedin-icon_b0zg03.png" alt="LinkedIn Icon" /></a>
        <a href="https://github.com/nath248" target="_blank" rel="noreferrer"><img src="https://res.cloudinary.com/dojhf40bp/image/upload/v1643394586/github-icon_zifws7.png" alt="GitHub Icon" /></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Copyright {currentYear}, Nathaly Herrera</small>
      </div>
    </div>
  )
}

export default Footer;

import { useEffect, useState } from "react";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const hideMenuMobile = () => {
    setShowMenuMobile(false)
  }
  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    scrollTop > 50 ? setHasScrolled(true) : setHasScrolled(false);
  }

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll())
    window?.addEventListener("hashchange", hideMenuMobile());
  }, [])

  return (
    <div className="header-section" id="home">
        <div className={`header ${hasScrolled ? 'hascrolled ' : ''}`} onScroll={() => handleScroll()}>
          <div className="header-group">
            <div className="logo">Julien</div>
            <div className={`nav-group ${showMenuMobile ? " display-important" : ""}`}>
              <ul className="nav">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About me</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>
            <button className="contact-us">
              <span className="d-block hide-mobile">
                <a href="#footer">Contact Me</a>
              </span>
              <span
                className="d-block show-mobile"
                onClick={() =>
                  setShowMenuMobile(!showMenuMobile)
                }
              >
                <img src="/icons/menu.svg" alt='humbugger icon' />
              </span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Header;
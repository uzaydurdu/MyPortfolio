import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import Footer from '../../containers/footer/Footer.jsx'

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#skills'>Skills</a></p>
  <p><a href='#resume'>Résumé</a></p>
  <p><a href='#about'>About Me</a></p>
  </>
)


const ContactMe = () => (
  <>
  <button type='button'><a href='#contact'>Contact Me</a></button>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
/*<p className={isHovering ? 'tracking-in-expand' : 'text-focus-in'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHovering ? 'Uzay Durdu' : 'UD'}
    </p>*/
  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  return (
    <div className='myPortfolio__navbar'>
        <div className='myPortfolio__navbar-links-logo'>
          <div className='myPortfolio__navbar-logo-slanted__rectangle'>
          <p className={isHovering ? 'tracking-in-expand' : ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
             {isHovering ? 'Uzay Durdu' : 'UD'}
          </p>
          </div>
        </div>
        <div className='myPortfolio__navbar-links'>
            
            <div className='myPortfolio__navbar-links_container scale-up-center'>
                <Menu />
            </div>
        </div>
        <div className='myPortfolio__navbar-sign'>
          <div className='myPortfolio__navbar-logo-slanted__rectangle-button'>
            <ContactMe />
          </div>
        </div>

        <div className='myPortfolio__navbar-menu'>
          {
          toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
          }
          {
            toggleMenu && (
              <div className='myPortfolio__navbar-menu_container scale-up-center '>
                <div className='myPortfolio__navbar-menu_container-links'>
                  <Menu />
                  <div className='myPortfolio__navbar-menu_container-links-sign'>
                    <ContactMe />
                  </div>
                </div>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Navbar;
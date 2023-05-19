import React from 'react';
import './footer.css';
import { dc,
  ln,
  tw,
  yt,
  github } from './imports.js';

  const contactsData= [
    {
      logo:   ln,
      href: 'https://www.linkedin.com/in/uzay-durdu-6b88911a2'
    },
    {
      logo: github,
      href:'https://github.com/uzaydurdu'
    },
    {
      logo: dc,
      href: 'https://discord.gg/THdD558K'
    },
    {
      logo: tw,
      href:'https://twitter.com/Uzay43648835'
    },
    {
      logo: yt,
      href:'https://www.youtube.com/@uzaydurdu8688/featured'
    }
]

const currentYear = new Date().getFullYear();

const Footer = () => {

  return (
    <div className='myPortfolio-footer section-padding' id='contact'>
      <div className='myPortfolio-footer-copyright'>
          <p>Copyright © {currentYear} Uzay.Durdu</p>
      </div>
      
      <div className='myPortfolio-footer_socialContacs' >
        {contactsData.map((item, index) => (
          <div key={index} className='myPortfolio-footer_socialContact-logo heartbeat' >
            <a href={item.href}>
            <img src={item.logo} alt='logo'/>
            </a>
          </div>
          ))}
      </div>
      
    </div>
    
  )
}

export default Footer;

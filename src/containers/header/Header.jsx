import React from 'react';
import './header.css';
import profileImg from '../../assets/profile.png'
import visitors from '../../assets/YosLogo.png'

/*<div className='myPortfolio-content__input'>
              <input type="email" placeholder='emailini yaz...'></input>
              <button type='button'>Gönder</button>
            </div>

          <div className='myPortfolio-content__visitors'>
            <img src={visitors}/>
            <p className='tracking-in-expand'>250 kişi bugün bizimle iletişime geçti</p>
          </div>*/

const Header = () => {
  return (
    <div className='myPortfolio section__padding' id='home'>
        <div className='myPortfolio-content'>
            <h1 className='text-focus-in'>I'm <span className='uzay'>Uzay Durdu</span></h1>
            <div/>
            <p className='tracking-in-expand'>A master student of computer and information science at Universität Konstanz</p>
            <p>Currently open for part-time works</p>
        </div>

        <div className='myPortfolio-image wobble-hor-bottom'>
            <img src={profileImg} alt='profileImg'/>
        </div>

    </div>
  )
}

export default Header;
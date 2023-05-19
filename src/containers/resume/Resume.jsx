import React from 'react';
//import { Feature } from '../../components';
import resume from '../../assets/resume.png';
import './resume.css';

/*<div className='myPortfolio-works-heading'>
          <h1 className='gradient__text text-focus-in'>İstediğin üniversiteyi çok iyi hazırlanarak ve dersleri gerçekten öğrenerek kazanacaksın</h1>
          <p className='text-focus-in'><a href='#works'>Kursları İncele</a></p>
        </div>
        <div className='myPortfolio-works-container tracking-in-expand'>
          <Feature title='Kaynaklar' text='Bir şeyler yaz...' />
          <Feature title='Eğitim Kadrosu' text='Bir şeyler yaz...' />
          <Feature title='Eş Zamanlı İmkanlar' text='Bir şeyler yaz...' />
        </div>*/

const Resume = () => {
  return (
    <div className='myPortfolio-resume' id='resume'>      
        <div className='myPortfolio-resume-container__resume' data-aos="fade-right">
          <img src={resume} alt="Résumé" />
          <button>Check</button>
        </div>
        <div className='myPortfolio-resume-content' data-aos="flip-left" >
            <h1>My Résumé</h1>
            <p>If you want to learn more about my skills and experiences, please check my résumé.</p>
            <p className='myPortfolio-resume-content__middleText'>I'm a creative problem solver, a strategic thinker, and a results-driven go-getter. My superpower is taking complex ideas and turning them into simple, elegant solutions. When I'm not working on challenging projects, you can find me hiking in the mountains, experimenting with new recipes in the kitchen, or planning my next travel adventure.</p>
            <span>Let's work together to create something futuristic!</span>
        </div>
    </div>
  )
}

export default Resume;
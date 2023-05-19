import React from 'react';
import './about.css';
import vrImage from '../../assets/vrImage.png';


const About = () => {
  return (
    <div className='myPortfolio-about' id='about'>      
        <div className='myPortfolio-about-vrImage' data-aos="zoom-out-left">
          
          <img src={vrImage} alt="vrImage" />
          
        </div>
        <div className='myPortfolio-about-content' data-aos="flip-right">
            <h1>About Me</h1>
            
            <p><span>"</span>Hi there! My name is <span className='myPortfolio-about-content__myName'>Uzay Durdu</span>, and I am a master's student in Computer and Information Science at Universität Konstanz. I am a curious and enthusiastic individual, always eager to learn more and enhance my knowledge through state-of-the-art research and empirical studies.

            Throughout my education, I have gained extensive experience in various projects, including virtual and mixed reality, data visualization, data mining, big data management and analysis, agile UX design, UI design, computer graphics, 3D modeling, cryptology, software and systems. These projects have allowed me to develop a well-rounded skill set that I can apply to a variety of contexts.

            When I'm not immersed in my studies or working on projects, I enjoy playing chess, basketball, and hiking. I am also passionate about expanding my knowledge base, and so I enjoy watching vocational Udemy courses as a hobby.

            Overall, I am a dedicated and passionate individual who is always looking for new opportunities to learn and grow. I am excited about the future and can't wait to see where my education and experiences take me.</p>
            <div className='myPortfolio-about-content__lastQuotation'>
            <span>"</span>
            </div>
        </div>
    </div>
  )
}

export default About;
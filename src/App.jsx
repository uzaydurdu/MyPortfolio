import React from "react";
import './app.css'

import { Skills, Navbar } from './components';
import { Resume, Footer, Header, About, } from './containers';

function App(){
    return (
    <div className="App">
        <div className="gradient__bg-header">
            <Navbar />
            <Header/>
        
            <div className="gradient__bg-logo">
                <Skills />
            </div>
            <div>
                <Resume/>
            </div>
            <div>
            <About/>    
            </div>
        
        </div>
        <Footer/>
    </div> 
    )
}

export default App;
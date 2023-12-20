import React from 'react';
import Intro from '../components/Intro';
import Scene from '../layouts/Scene'

function Home() {
    const disciplines = ['Front End Developer', 'M E A R N stack Developer', 'Web Designer', 'Software Developer'];
    return (
        <>
        <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Scene/>
                <div className="content-overlay" style={{ position: 'absolute', textAlign: 'center', color: 'white',fontFamily:'Spectral SC, serif',width:'100%' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Hello <span style={{fontSize:'2rem',color:'#E8BEAC'}}> &#60;World&#62;</span> </h2>
                    <h1 style={{ marginBottom: '1rem' }}>I am <span style={{ fontSize:'3rem',color:'yellow' }}>Prajwal VK</span></h1>
                    <Intro disciplines={disciplines} />
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;

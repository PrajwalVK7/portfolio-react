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
                <div className="content-overlay" style={{ position: 'absolute', textAlign: 'center', color: 'white' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Hi there ... </h2>
                    <h1 style={{ marginBottom: '1rem' }}>I am <span style={{  }}>Prajwal VK</span></h1>
                    <Intro disciplines={disciplines} />
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;

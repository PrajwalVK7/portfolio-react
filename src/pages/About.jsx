import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react';
import animationData from "../assets/Animation - 1702307895087.json"
import Scroll from "../assets/scrollDown.json"
import Skill from '../components/About/Skill';

function About() {
  // const profileRef = useRef <LottieRefCurrentProps> (null)
  const skillsRef = useRef(null);

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <div style={{ height: '10rem' }}></div>
      <section>
        <Container>
          <Row>
            <Col lg={8} md={8}>
              <div className="main mt-5">
                <ul className='mb-3' style={{ textDecoration: 'none', listStyle: 'none' }}>
                  <li className='mb-3'><h2>Hi,
                    I'm Prajwal
                    Web Developer</h2></li>
                  <li className='mb-3'>I am Prajwal VK</li>
                  <li className='mb-3' >Revamp your business with a touch of innovation! .</li>
                  <li className='mb-3' >I specialize in creating captivating digital experiences.</li>
                  <li className='mb-3' >From crafting immersive websites to optimizing user interaction, <br /> I turn visions into vibrant realities that resonate and engage</li>
                  <li><div>
                    <h5>Based In : Kerala, India</h5>
                  </div></li>
                </ul>


              </div>
            </Col>
            <Col lg={4} md={4} className='d-flex justify-content-center align-items-center ' style={{ flexDirection: 'column' }}>
              <Lottie style={{ width: '22rem' }}
                 animationData={animationData} />
              <div>
                <h3>Resume</h3>
              </div>
            </Col>

          </Row>
          <div className='d-flex justify-content-center align-items-center'>
            <Lottie
              style={{ width: '2rem', cursor: 'pointer', backgroundColor: 'white', borderRadius: '100%', }}
              animationData={Scroll}
              onClick={scrollToSkills}
              color='white'

            />
          </div>
        </Container>
      </section>
      <section style={{ height: '10rem' }}>

      </section>
      <section id="skills" ref={skillsRef}>
        <div className="mt-5">
          <Container>
            <Row>
              <Col lg={2}></Col>
              <Col lg={8}>
                <div className='text-center'>
                  <h5>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</h5>
                  <h1 className='mt-3 mb-3 fw-5'>WHAT I DO</h1>
                  <p className='mt-3'><h5>My primary expertise lies in front-end development</h5> <br />
                    <h6> Proficient in HTML, CSS, and JavaScript,
                      I specialize in crafting small to medium web applications using React, Angular, Node.js, Express, and MongoDB for comprehensive development solutions.
                      I excel in implementing dynamic features, creating immersive animations,
                      and coding interactive layouts, ensuring seamless and engaging user experiences.</h6></p>
                </div>
                <Skill/>
              </Col>
              <Col lg={2}></Col>


            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default About;

import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react';
import animationData from "../assets/Animation - 1702307895087.json"
import Scroll from "../assets/scrollDown.json"
import Skill from '../components/About/Skill';
import './About.css'

function About() {
  // const profileRef = useRef <LottieRefCurrentProps> (null)
  const skillsRef = useRef(null);

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='main'>
      <div style={{ height: '10rem' }}></div>
      <section className='mt-2 mb-5'>
        <Container>
          <Row className='p-2'>
            <Col lg={5} md={5} className='d-flex justify-content-center align-items-center ' style={{ flexDirection: 'column' }}>
              <div className='mt-5'>
                <h2 id='name' className='text-center'>Hi,
                  I'm Prajwal <br />
                  Web Developer</h2>
                <div className='text-center'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Lottie style={{ width: '18rem' }}
                      animationData={animationData} />
                  </div>
                  <div className='d-flex justify-content-evenly align-items-center'>
                    <button>Resume</button>
                    <button>Hire Me</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7} md={7}>
              <div className="main mt-5 intro">
                <ul className='mb-3' style={{ textDecoration: 'none', listStyle: 'none' }}>
                  <li className='mb-3' >-Revamp your business with a touch of innovation! .</li>
                  <li className='mb-3' >-I specialize in creating captivating digital experiences.</li>
                  <li className='mb-3' >-From crafting immersive websites to optimizing user interaction, <br /> I turn visions into vibrant realities that resonate and engage</li>
                  <li><div>
                    <h5 className='text-end'>Based In : Kerala, India</h5>
                  </div></li>
                </ul>


              </div>
            </Col>

          </Row>
          {/* <div className='d-flex justify-content-center align-items-center'>
            <Lottie
              style={{ width: '2rem', cursor: 'pointer', backgroundColor: 'white', borderRadius: '100%', }}
              animationData={Scroll}
              onClick={scrollToSkills}
              color='white'

            />
          </div> */}
        </Container>
      </section>
      <section style={{ height: '2rem' }}>

      </section>
      <section id="skills" className='mt-5' ref={skillsRef}>
        <div className="">
          <Container>
            <Row>
              <Col lg={3}></Col>
              <Col lg={6}>
                <div className='text-center skills'>
                  <h5>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</h5>
                  <h1 className='mt-3 mb-3 fw-5'>WHAT I DO</h1>
                  <p className='mt-4 mb-3'><h5>My primary expertise lies in front-end development</h5> <br />
                    <h6 className='p-1'> Proficient in HTML, CSS, and JavaScript,
                      I specialize in crafting small to medium web applications using React, Angular, Node.js, Express, and MongoDB for comprehensive development solutions.
                      I excel in implementing dynamic features, creating immersive animations,
                      and coding interactive layouts, ensuring seamless and engaging user experiences.</h6></p>
                </div>
              </Col>
              <Col lg={3}></Col>
            </Row>
            <Row>
              <Col><Skill />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default About;

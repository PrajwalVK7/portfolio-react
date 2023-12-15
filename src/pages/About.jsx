import React from 'react';
import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react';
import animationData from "../assets/Animation - 1702307895087.json"
import Scroll from "../assets/scrollDown.json"
import Skill from '../components/About/Skill';
import './About.css'
import Button from '@mui/material-next/Button';
import Specials from '../components/About/Specials';

function About() {
  // const profileRef = useRef <LottieRefCurrentProps> (null)


  return (

    <Fragment>
      <div style={{ height: '5rem' }}></div>
      <section className='mt-3 mb-5'>
        <Container>
          <Row className='mt-5'>
            <Col lg={5} md={5} className='d-flex justify-content-center align-items-center ' style={{ flexDirection: 'column' }}>
              <div className='mt-2'>
                <h2 id='name' className='text-center'>Hi,
                  I'm Prajwal <br />
                  Web Developer</h2>
                <div className='text-center'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Lottie style={{ width: '21rem' }}
                      animationData={animationData} />
                  </div>
                  <div className='d-flex justify-content-evenly align-items-center mb-2 mb-3 p-2'>
                    <Button color="secondary" variant="filled" size="large">Resume</Button>
                    <Button color="secondary" variant="filled" size="large">Hire Me</Button>
                  </div>
                  <div className='d-md-none d-flex justify-content-center flex-column align-items-center mb-5 mt-2 p-2'>
                    <Row className='justify-content-center'>
                      <Col xs={8} className='text-center mt-3'>
                        <Lottie
                          style={{
                            width: '2rem',
                            cursor: 'pointer',
                            backgroundColor: 'white',
                            borderRadius: '100%',
                          }}
                          animationData={Scroll}

                          color='white'
                        />
                       
                      </Col>
                    </Row>
                    <p>Scroll Down</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7} md={7}>
              <div className="main mt-5 pt-5 mb-5 intro ">
                <ul className='mb-3 mt-5' style={{ textDecoration: 'none', listStyle: 'none' }}>
                  <li className='mb-3' >Revamp your business with a touch of innovation! .</li> <hr />
                  <li className='mb-3' >From crafting immersive websites to optimizing user interaction, <br /> I turn visions into vibrant realities that resonate and engage</li> <hr />
                  <li><div>
                    <h5 className='text-center'>Based In : Kerala, India</h5>
                  </div></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        {/* </section>
      <section style={{ height: '2rem' }}> */}

      </section>
      <section id="skills" className='mt-3 mb-5'>
        <div className="mb-5 mt-3">
          <Container>
            <Row>
              <Col lg={2}></Col>
              <Col lg={8}>
                <div className='text-center skills'>
                  <h5>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</h5>
                </div>
              </Col>
              <Col lg={2}></Col>
            </Row>
            <div className='text-center  d-flex justify-content-center'>
              <Specials />
            </div>
          </Container>
        </div>
      </section>

      <div className='container mt-5 mb-5'>
        <h2 className='text-center'>Technologies and Tools</h2>
        <Skill />
      </div>
    </Fragment>
  );
}

export default About;

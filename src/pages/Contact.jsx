import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react';
import animationData from '../assets/contactus.json';
import { motion } from "framer-motion"

function Contact() {

  return (
    <>
      <div style={{ height: '8rem' }}></div>
      <section>
        <Container>
          <Row>
            <Col lg={6} className='m-auto'>
              <div style={{ border: '1px solid #000', padding: '20px', maxHeight: '32rem' }}>
                <p style={{ fontSize: '2rem', textAlign: 'center' }}>
                  What would you do if you had a software expert available at your fingertips? Want to start a new project?
                </p>
                <div className='contact-list d-flex justify-content-evenly align-items-center p-4 ' style={{ fontSize: '2rem' }}>
                  <a href="mailto:prajwalvk98@gmail.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}><motion.div drag='x' dragConstraints={{ left: 0, right: 5 }} whileHover={{ backgroundColor: 'green', scale: 1.1, transition: { duration: 2 } }}
                    onHoverStart={e => { }} className='ms-2' style={{ backgroundColor: 'red', borderRadius: '50%', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fa-solid fa-envelope"></i>
                  </motion.div></a>
                  <a href="callto:+919846096699" style={{ textDecoration: 'none', color: 'white' }}><motion.div className='ms-2' drag='x' dragConstraints={{ left: 0, right: 5 }} whileHover={{ backgroundColor: 'green', scale: 1.1, transition: { duration: 2 } }}
                    onHoverStart={e => { }}
                    onHoverEnd={e => { }} style={{ backgroundColor: 'red', borderRadius: '100%', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fa-solid fa-phone"></i></motion.div></a>
                  <a href="https://www.linkedin.com/in/prajwalvk023/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}><motion.div drag='x' dragConstraints={{ left: 0, right: 5 }} whileHover={{ backgroundColor: 'green', scale: 1.1, transition: { duration: 2 } }}
                    onHoverStart={e => { }} className='ms-2' style={{ backgroundColor: 'red', borderRadius: '50%', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fa-brands fa-linkedin"></i></motion.div></a>
                  <a href="https://github.com/PrajwalVK7" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}><motion.div drag='x' dragConstraints={{ left: 0, right: 5 }} whileHover={{ backgroundColor: 'green', scale: 1.1, transition: { duration: 2 } }}
                    onHoverStart={e => { }} className='ms-2'  style={{ backgroundColor: 'red', borderRadius: '50%', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fa-brands fa-github"></i></motion.div></a>
                  <a href="https://www.instagram.com/prjwlvk/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}> <motion.div drag='x' dragConstraints={{ left: 0, right: 5 }} whileHover={{ backgroundColor: 'green', scale: 1.1, transition: { duration: 2 } }}
                    onHoverStart={e => { }} className='ms-2' style={{ backgroundColor: 'red', borderRadius: '50%', width: '4rem', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i class="fa-brands fa-instagram"></i></motion.div></a>
                </div>
              </div>

            </Col>
            <Col lg={6} className='d-flex justify-content-center align-items-center'>
              <Lottie animationData={animationData} style={{ width: '33rem' }} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;

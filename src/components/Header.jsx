import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiMenuFries } from "react-icons/ci";
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className=' header-container'>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth='sm' style={{ width: "50%" }}>
                        <Box id='nav-box' className='p-2' style={{ borderRadius: '10px', overflow: 'visible' }} sx={{ height: '5.4rem' }} >
                            <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary bg-warning  navbar">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: "none" }}>
                                        <CiMenuFries id='toggle-icon' style={{ border: "none" }} />
                                    </Navbar.Toggle>
                                    <Navbar.Collapse id="basic-navbar-nav" >
                                        <Nav className="mx-auto" style={{ justifyContent: "center" }}>
                                            <Nav.Link className='me-3 menu_link' ><Link className='nav-link' to={'/'}>Home</Link></Nav.Link>
                                            <Nav.Link className='me-3 menu_link'><Link className='nav-link' to={'/about'}>About Me</Link></Nav.Link>
                                            <Nav.Link className='me-3 menu_link' ><Link className='nav-link' to='/projects'>Projects</Link></Nav.Link>
                                            <Nav.Link className='me-3 menu_link' ><Link className='nav-link' to='contact'>Contact Me</Link></Nav.Link>
                                            {/* <Nav.Link className='me-3' href="#link">Link</Nav.Link> */}
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Box>
                    </Container>
                </React.Fragment>

            </div>
        </>
    )
}
export default Header;

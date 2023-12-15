import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Special.css"
import front from '../../assets/About/front.png';
import back from '../../assets/About/backend.png'
import style from '../../assets/About/style-sheet.png'
import coding from '../../assets/About/coding.png'
import self from '../../assets/About/self-service.png'
import team from '../../assets/About/team.png'
function Specials() {
    return (
        <>
            <Row className="p-3 special-row g-3">
                <Col lg={4} md={2} className='' >
                    <Card className='special-card '>
                        <Card.Img variant="top" className='img-fluid w-25' src={front} />
                        <Card.Body>
                            <Card.Title>Front-end</Card.Title>

                            <Card.Text>
                                <p>My main focus.I love Front end Development.Responsive & animated layouts with performance optimization
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={2}>
                    <Card className='special-card'>
                        <Card.Img variant="top" className='img-fluid w-25' src={back} />
                        <Card.Body>

                            <Card.Title>Back-end</Card.Title>


                            <Card.Text>
                                Algorithm & software design. RESTful & secure back-end with authorizations and database validations
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={2}>
                    <Card className='special-card'>
                        <Card.Img variant="top" className='img-fluid w-25' src={style} />
                        <Card.Title>Best Practice
                        </Card.Title>

                        <Card.Body>
                            <Card.Text>
                                Clean code, following style guides, naming conventions & pattern principles
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={2}>
                    <Card className='special-card'>
                        <Card.Img variant="top" className='img-fluid w-25' src={self} />
                        <Card.Title>Self-Taught Survivor
                        </Card.Title>

                        <Card.Body>
                            <Card.Text>
                                I've learnt to google, read error messages & understand documentations
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={2}>
                    <Card className='special-card'>
                        <Card.Img variant="top" className='img-fluid w-25' src={team} />
                        <Card.Title>Team Buddy
                        </Card.Title>

                        <Card.Body>
                            <Card.Text>
                                Github team workflow using feature branches & pull requests/code reviews.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={2}>
                    <Card className='special-card'>
                        <Card.Img variant="top" className='img-fluid w-25' src={coding} />
                        <Card.Title>Learning & Sharing
                        </Card.Title>

                        <Card.Body>
                            <Card.Text>
                                My purposes at heart. My best coding experiences are the ones I have with other people. I strongly believe in team synergie
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default Specials

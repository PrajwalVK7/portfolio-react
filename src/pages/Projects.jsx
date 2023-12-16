import React from 'react'
import "./Project.css"
import 'react-awesome-slider/dist/styles.css';
import { Row, Col } from 'react-bootstrap';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import travel from '../../src/assets/project/test.png'
import "./Project.css"
function Projects() {

  const projects = [
    {
      id: 1,
      img: travel,
      title: 'travel blog',
      git: 'htps',
      link: 'ss',
      descr: 'lorem'
    }
  ]


  return (
    <>
      <Container>
        <div style={{ height: '8rem' }}></div>
        <div className='mt-2'>
          <Row>
            <Col lg={12} className='text-center'><h1>Crafting Vision, Defying Limits : Where Imagination Outshines Knowledge </h1></Col>
          </Row>
          <Row>
            {projects.map((item) => (
              <Col lg={6}>
                <div className=' card-outer pe-3 pb-3 ps-1 pt-1' style={{backgroundColor:'green'}}>
                  <Card id='card' className='card p-2' style={{ backgroundColor: 'yellow' }}>
                    <CardActionArea >
                      <CardMedia
                        component="img"
                        height="300"
                        image={item.img}
                        alt="green iguana"
                      />
                      <CardContent className='mt-2 mb-2'>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.descr}
                        </Typography>
                        <div className='d-flex justify-content-between align-item-center'>
                          <h5>{item.git}</h5>
                          <h5>{item.link}</h5>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </Col>
            ))

            }

          </Row>
        </div>
      </Container>
    </>
  )
}

export default Projects

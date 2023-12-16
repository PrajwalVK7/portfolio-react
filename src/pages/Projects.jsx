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
// Modify your import statements to import defaults
import netflix from '../../src/assets/project/netflix.png';
import restaurent from '../../src/assets/project/restaurent.png';
import travel from '../../src/assets/project/travel-vlog.png';
import travelTemp from '../../src/assets/project/travel-template.png';
import mediaplayer from '../../src/assets/project/mediaplayer.png';
import "./Project.css"
function Projects() {

  const projects = [
    {
      id: 1,
      img: netflix,
      title: 'Netflix UI Clone',
      git: 'htps',
      link: 'ss',
      descr: 'lorem'
    },
    {
      id: 2,
      img: mediaplayer,
      title: 'Media Player',
      git: 'htps',
      link: 'ss',
      descr: 'lorem'
    },
    {
      id: 3,
      img: restaurent,
      title: 'Restaurent Website Template',
      git: 'htps',
      link: 'ss',
      descr: 'lorem'
    },
    {
      id: 4,
      img: travel,
      title: 'Travel Blog Template',
      git: 'htps',
      link: 'ss',
      descr: 'lorem'
    },
    {
      id: 5,
      img: travelTemp,
      title: 'Travel Blog Template',
      git: 'htps',
      link: 'ss',
      descr: 'lorem'
    },
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
              <Col lg={6} className='p-3 mb-2'>
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
                        {/* <Typography variant="body2" color="text.secondary">
                          {item.descr}
                        </Typography> */}
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

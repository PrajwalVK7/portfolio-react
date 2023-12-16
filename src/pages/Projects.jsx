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
      git: 'https://github.com/PrajwalVK7/Netflix-clone',
      link: 'https://netflixclonerjs.netlify.app/',
      descr: 'lorem'
    },
    {
      id: 2,
      img: mediaplayer,
      title: 'Media Player',
      git: 'https://github.com/PrajwalVK7/mediaplayer-full',
      link: '',
      descr: 'lorem'
    },
    {
      id: 3,
      img: restaurent,
      title: 'Restaurent Website Template',
      git: 'https://github.com/PrajwalVK7/Restaurant_website_landing-Page',
      link: 'https://prajwalvk7.github.io/Restaurant_website_landing-Page/',
      descr: 'lorem'
    },
    {
      id: 4,
      img: travel,
      title: 'Travel Blog Template',
      git: 'https://github.com/PrajwalVK7/travel-blog-webpage',
      link: 'https://prajwalvk7.github.io/travel-blog-webpage/',
      descr: 'lorem'
    },
    {
      id: 5,
      img: travelTemp,
      title: 'Travel Blog Template',
      git: 'https://github.com/PrajwalVK7/kerala',
      link: '',
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
                <div className=' card-outer pe-3 pb-3 ps-1 pt-1' style={{ backgroundColor: 'white' }}>
                  <Card id='card' className='card p-2' style={{ backgroundColor: 'black' }}>
                    <CardActionArea >
                      <CardMedia className='first'
                        component="img"
                        height="300"
                        image={item.img}
                        alt="green iguana"
                      />

                      <CardContent className='mt-2 mb-2 text-center'>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                          {item.descr}
                        </Typography> */}
                        <div className='d-flex justify-content-between align-item-center'>
                          {item.git && (
                            <button onClick={()=>window.open(item.git)} className='btn-icon me-2'><i class="fa-brands fa-github"></i></button>
                          )
                          }
                          {item.link && (
                            <button onClick={()=>window.open(item.link)} className='btn-icon'><i class="fa-solid fa-globe"></i></button>
                          )
                          }
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

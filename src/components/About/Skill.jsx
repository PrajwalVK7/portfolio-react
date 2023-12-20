import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { IoLogoJavascript } from "react-icons/io5";
import { Card } from 'react-bootstrap';
import Angular from "./angular.svg"
import { FaGitAlt } from "react-icons/fa";
import { PiFramerLogoFill } from "react-icons/pi";
import { FaPython } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import "./Skill.css" 
function Skill() {
    return (
        <>
            <Grid className='mt-5 mb-5' container spacing={2}>
                <Grid xs={4} lg={2}>
                    <div className='skill-card' >
                        <IoLogoJavascript color='#f7df1e' style={{ fontSize: '5rem' }} />
                    </div>
                </Grid>
                <Grid xs={4} lg={2}>
                    <Card className='skill-card'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 256" fill="none" id="my-svg">
                            <defs>
                                <linearGradient id="gradient1">
                                    <stop class="stop1" offset="0%" stop-color="#8f66ff"></stop>
                                    <stop class="stop2" offset="100%" stop-color="#3d12ff"></stop>
                                </linearGradient>
                            </defs>
                            <rect id="backgr" width="256" height="256" fill="#000000" rx="140"></rect>
                            <g id="group" transform="translate(0,0) scale(1)">
                                <path d="M127.946 127.893V128.000M128.000 85.354C181.020 85.354 224.000 104.457 224.000 128.021C224.000 151.585 181.020 170.688 128.000 170.688C74.981 170.688 32.000 151.585 32.000 128.021C32.000 104.457 74.981 85.354 128.000 85.354ZM164.949 106.688C191.459 152.604 196.406 199.377 175.999 211.159C155.591 222.942 117.558 195.270 91.049 149.355C64.539 103.438 59.592 56.665 79.999 44.882C100.406 33.100 138.439 60.771 164.949 106.688ZM164.950 149.354C138.441 195.270 100.407 222.941 80.000 211.159C59.593 199.377 64.540 152.604 91.049 106.687C117.558 60.771 155.593 33.100 176.000 44.882C196.406 56.664 191.459 103.438 164.950 149.354Z" stroke="url(#gradient1)" stroke-width="14" stroke-linecap="round" id="stroketone" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                    </Card>
                </Grid>
                <Grid xs={4} lg={2}>
                    <div className='skill-card' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 256" fill="none" id="my-svg">
                            <defs>
                                <linearGradient id="gradient1">
                                    <stop class="stop1" offset="0%" stop-color="#8f66ff"></stop>
                                    <stop class="stop2" offset="100%" stop-color="#3d12ff"></stop>
                                </linearGradient>
                            </defs>
                            <rect id="backgr" width="256" height="256" fill="#000000" rx="140"></rect>
                            <g id="group" transform="translate(0,0) scale(1)">
                                <path d="M85.333 96.000L42.667 128.000L85.333 160.000M170.667 96.000L213.333 128.000L170.667 160.000M106.667 192.000L149.333 64.000" stroke="url(#gradient1)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" id="stroketone"></path>
                            </g>
                        </svg>
                    </div>
                </Grid>
                <Grid xs={4} lg={2}>
                    <Card  className='skill-card'>
                        <img className='img-fluid h-100' src={Angular} alt="" />
                    </Card>
                </Grid>
                <Grid xs={4} lg={2}>
                    <Card className='skill-card' >
                        <img src="https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png" className='img-fluid h-100' alt="" />                   </Card>
                </Grid>
                <Grid xs={4} lg={2}>
                    <Card className='skill-card' >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                            <linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLa_2ZOaTclOqD4q_gr1" x1="30.982" x2="30.982" y1="21.203" y2="43.514" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLa_2ZOaTclOqD4q_gr1)" d="M45.758,32.346L56.964,47h-0.85c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684	C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.654L32.271,18h0.85c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377	C53.838,18.49,54.829,18,55.879,18h0.85L45.758,32.346z M28.527,40h0.638c0,0,0,0,0,0c-2.348,6.085-9.292,9.631-15.896,7.256	C8.215,45.437,5,40.444,5,35.073L5,29.5c0-7.29,6.273-13.143,13.705-12.443C25.182,17.667,30,23.361,30,29.866L30,34H19v0H7l0,1.109	c0,4.501,2.671,8.705,6.9,10.248c4.807,1.754,9.835-0.235,12.389-4.116C26.789,40.481,27.616,40,28.527,40z M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32z"></path><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLb_2ZOaTclOqD4q_gr2" x1="44.5" x2="44.5" y1="16" y2="49" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLb_2ZOaTclOqD4q_gr2)" d="M56.729,18L45.758,32.347L56.964,47h-0.85	c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.653L32.271,18h0.85	c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377C53.838,18.49,54.829,18,55.879,18H56.729 M60.776,16h-4.047h-0.85	c-1.663,0-3.258,0.788-4.268,2.109L44.5,27.408l-7.111-9.299C36.379,16.788,34.783,16,33.121,16h-0.85h-4.047l2.458,3.215	l10.042,13.132L30.447,45.785L27.989,49h4.047h0.85c1.663,0,3.258-0.789,4.268-2.109l7.346-9.606l7.346,9.606	C52.856,48.211,54.451,49,56.114,49h0.85h4.047l-2.458-3.215L48.276,32.346l10.042-13.132L60.776,16L60.776,16z"></path><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLc_2ZOaTclOqD4q_gr3" x1="17.54" x2="17.54" y1="15" y2="50" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLc_2ZOaTclOqD4q_gr3)" d="M17.5,17c0.397,0,0.8,0.019,1.205,0.057	C25.182,17.667,30,23.361,30,29.866V34H19v0H7v1.109c0,4.501,2.671,8.705,6.9,10.248C15.1,45.796,16.314,46,17.5,46	c3.563,0,6.872-1.847,8.789-4.758C26.789,40.481,27.616,40,28.527,40h0.638c0,0,0,0,0,0c-1.847,4.785-6.535,8-11.665,8	c-1.394,0-2.82-0.237-4.231-0.745C8.215,45.437,5,40.444,5,35.073V29.5C5,22.607,10.607,17,17.5,17 M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32 M17.5,15L17.5,15c-3.868,0-7.508,1.509-10.249,4.251C4.51,21.992,3,25.632,3,29.5	v5.573c0,6.348,3.855,12,9.592,14.065C14.184,49.71,15.835,50,17.5,50c5.951,0,11.389-3.729,13.531-9.28l1.05-2.72l-2.915,0	l-0.638,0c-1.565,0-3.026,0.801-3.91,2.142C23.052,42.522,20.324,44,17.5,44c-0.986,0-1.967-0.175-2.915-0.521	C11.509,42.356,9.362,39.416,9.042,36H19l11,0l2,0v-2v-4.134c0-7.607-5.758-14.109-13.108-14.8C18.43,15.022,17.962,15,17.5,15	L17.5,15z M9,30v-0.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5V30H9L9,30z"></path>
                        </svg>
                    </Card>
                </Grid>
                <Grid xs={4} lg={2}>
                    <Card className='skill-card'>
                        <FaPython style={{ fontSize: '5rem' ,color:'skyblue'}} />
                    </Card>
                </Grid>
                <Grid xs={4} lg={2}>
                    <Card className='skill-card'>
                        <img className='img-fluid' src="https://branditechture.agency/brand-logos/wp-content/uploads/2022/09/MongoDB-1024x784.png" alt="" />
                    </Card>
                </Grid>
                <Grid xs={4} lg={2}>
                    <Card className='skill-card' >
                        <AiOutlineConsoleSql style={{ fontSize: '5rem',color:'yellow' }} />
                    </Card>
                </Grid>
                <Grid xs={4} lg={2}>
                    <Card className='skill-card' >
                        <img className='img-fluid h-100' src="https://discoverthreejs.com/images/app-logos/forum.png" alt="" />                    </Card>
                </Grid>
                <Grid xs={4} lg={2}>
                    <Card className='skill-card' >
                        <FaGitAlt style={{ fontSize: '5rem',color:'red' }}/>
                    </Card>
                </Grid>
                <Grid xs={4} lg={2}>
                    <Card className='skill-card'>
                        <PiFramerLogoFill style={{ fontSize: '5rem',color:'blueviolet' }} />
                    </Card>
                </Grid>

            </Grid>

        </>

    )
}

export default Skill

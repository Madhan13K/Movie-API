import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@mui/material';
const Hero = ({movies}) => {
  return (
    <div>
      <Carousel>
      {
        movies.map((movie)=>{
            return  (
                <Paper>
                
                </Paper>
            )
        })
      }
      </Carousel>
    </div>
  )
}

export default Hero

import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@mui/material';
const Hero = ({movies}) => {
  return (
    <div className='movie-carousel-container'>
      <Carousel>
      {
        movies.map((movie)=>{
            return  (
                <Paper>
                    <div className='movire-'>

                    </div>
                </Paper>
            )
        })
      }
      </Carousel>
    </div>
  )
}

export default Hero

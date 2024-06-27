import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@mui/material';
const Hero = ({movies}) => {
  return (
    <div className='movie-carousel-contianer'>
      <Carousel>
      {
        movies.map((movie)=>{
            return  (
                <Paper>
                    <div>

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

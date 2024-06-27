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
                    <div className='movie-card-container'>
                        div.movie-const cardholder = await stripe.issuing.cardholders.update(
                          'ich_xxxxxxxxxxxxx',
                          {metadata: {order_id: '6735'}}
                        )
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

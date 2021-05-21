import React from 'react'
import {CardsWrapper, Card} from './Cards.elements'
import {ReactComponent as SedanSVG } from './sedan.svg'
import {ReactComponent as SuvSVG } from './suv.svg'
import {ReactComponent as LuxurySVG } from './luxury.svg'

const ACCENT_COLORS = ['#E28625', '#006971', '#004140']

const Cards = () => {
  return( 
    <CardsWrapper>
      <Card color={ACCENT_COLORS[0]}>
        <SedanSVG />
        <h2>Sedans</h2>
        <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip.</p>
        <button type="button">Learn More</button>
      </Card>
      <Card color={ACCENT_COLORS[1]}>
        <SuvSVG />
        <h2>SUVs</h2>
        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures.</p>
        <button type="button">Learn More</button>
      </Card>
      <Card color={ACCENT_COLORS[2]}>
        <LuxurySVG />
        <h2>Luxury</h2>
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style.</p>
        <button type="button">Learn More</button>
      </Card>
      
  </CardsWrapper>)
}

export default Cards

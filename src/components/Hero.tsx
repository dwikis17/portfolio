import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

function Hero() {
    const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    justify-content: center;
    `

  return (
    <Section >
        <Navbar/>
    </Section>
  )
}

export default Hero
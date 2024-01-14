import { Button, Container, FlexNavDiv, HeroContent, HeroDescription, HeroSection, HeroTitle } from '@/app/styled-components'
import Image from 'next/image'
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <HeroSection>
        <Container>
        <HeroContent>
            <HeroTitle>Are things feeling different… down there?</HeroTitle>
            <HeroDescription>Joylux is your guide to effective and hormone-free ways to deal with the frustrating symptoms of menopause.</HeroDescription>
            <FlexNavDiv>
              <Button $mainGold >Shop Now</Button>
              <Button $tomato>Find Your Perfect Product Quiz</Button>
            </FlexNavDiv>
        </HeroContent>
          </Container>
        <Image
        className='hero-image'
        src='/heroimage.png'
        width={1530}
        height={710}
        />
    </HeroSection>
  )
}

export default Hero
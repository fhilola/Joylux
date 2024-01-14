import { Button, Container, Description, FlexNavDiv, Heading, HeroContent, HeroSection} from '@/app/styled-components'
import Image from 'next/image'
import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <HeroSection>
        <Container>
        <HeroContent>
            <Heading>Are things feeling different… down there?</Heading>
            <Description>Joylux is your guide to effective and hormone-free ways to deal with the frustrating symptoms of menopause.</Description>
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
        <p className='ortadagi-soz'>as seen in</p>
    </>
  )
}

export default Hero
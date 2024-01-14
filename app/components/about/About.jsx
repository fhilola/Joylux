import { Button, ColorfulDiv, Container, Description, DisplayDiv, Heading, HeroContent, Li, Navbar, Ul } from '@/app/styled-components'
import Image from 'next/image'
import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
            <ColorfulDiv>
                <Container>
                    <Navbar>
                        <DisplayDiv>
                            <Heading $smaller>Thousands of women are finding help.</Heading>
                            <Description>We’re creating real, life-changing results for women who are navigating the challenges of menopause. </Description>
                            <Button $chilly>Learn more about the vFit Gold®</Button>
                        </DisplayDiv>
                        <Image
                            src='/video.png'
                            width={600}
                            height={400}
                        />
                    </Navbar>
                </Container>
            </ColorfulDiv>
            <Container>
                <Ul className='menu'>
                    <Li $about>All</Li>
                    <Li $about>devices & accessories</Li>
                    <Li $about>her INTIMATE CARE</Li>
                    <Li $about>COOLING CARE</Li>
                </Ul>
                <div className="swiper__wrapper">
                    <HeroContent className='about-content'>
                        <Heading $smaller>All</Heading>
                        <Description $smaller>Thoughtfully-made products Trusted by over 1,000 medical professionals, you can feel good knowing pleasure and confidence are possible again.</Description>
                        <Button $mainGold>Shop all</Button>
                    </HeroContent>
                    <div className="swiper">
                        
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About